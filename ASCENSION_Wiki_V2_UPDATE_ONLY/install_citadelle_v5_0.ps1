param(
  [string]$TargetPath
)

$ErrorActionPreference = 'Stop'

function Show-Message {
  param([string]$Text, [string]$Title = 'ASCENSION Wiki V5.0', [string]$Icon = 'Information')
  try {
    Add-Type -AssemblyName System.Windows.Forms -ErrorAction SilentlyContinue
    [System.Windows.Forms.MessageBox]::Show($Text, $Title, 'OK', $Icon) | Out-Null
  } catch {
    Write-Host $Text
  }
}

function Select-WikiFolder {
  Add-Type -AssemblyName System.Windows.Forms
  $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
  $dialog.Description = "Selectionne le dossier du wiki ASCENSION qui contient directement index.html et le dossier assets."
  $dialog.ShowNewFolderButton = $false
  if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
    return $dialog.SelectedPath
  }
  return $null
}

try {
  $packageRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
  $sourceAssets = Join-Path $packageRoot 'assets'

  if ([string]::IsNullOrWhiteSpace($TargetPath)) {
    $TargetPath = Select-WikiFolder
  }
  if ([string]::IsNullOrWhiteSpace($TargetPath)) {
    Write-Host 'Installation annulee par utilisateur.'
    exit 2
  }

  $TargetPath = (Resolve-Path $TargetPath).Path
  $indexFile = Join-Path $TargetPath 'index.html'
  $assetsFolder = Join-Path $TargetPath 'assets'

  if (-not (Test-Path $indexFile -PathType Leaf)) {
    throw "Le dossier selectionne ne contient pas index.html. Selectionne le dossier exact du wiki, pas le dossier du modpack ni un dossier parent."
  }
  if (-not (Test-Path $assetsFolder -PathType Container)) {
    throw "Le dossier selectionne ne contient pas le dossier assets. Selectionne le dossier exact du wiki."
  }
  if (-not (Test-Path (Join-Path $sourceAssets 'citadel-v5.css'))) {
    throw "Le fichier assets/citadel-v5.css manque dans le paquet de mise a jour."
  }
  if (-not (Test-Path (Join-Path $sourceAssets 'citadel-v5.js'))) {
    throw "Le fichier assets/citadel-v5.js manque dans le paquet de mise a jour."
  }

  $timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
  $backupFolder = Join-Path $TargetPath "_backup_avant_citadelle_v5_0_$timestamp"
  New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $backupFolder 'assets') -Force | Out-Null

  $cssTarget = Join-Path $assetsFolder 'citadel-v5.css'
  $jsTarget = Join-Path $assetsFolder 'citadel-v5.js'
  if (Test-Path $cssTarget) { Copy-Item $cssTarget (Join-Path $backupFolder 'assets/citadel-v5.css') -Force }
  if (Test-Path $jsTarget) { Copy-Item $jsTarget (Join-Path $backupFolder 'assets/citadel-v5.js') -Force }

  $styleTag = '<link rel="stylesheet" href="assets/citadel-v5.css" data-ascension-v5="style">'
  $scriptTag = '<script src="assets/citadel-v5.js" data-ascension-v5="script"></script>'
  $stylePattern = '(?is)[ \t]*<link\b[^>]*href=["'']assets/citadel-v5\.css["''][^>]*>[ \t]*(?:\r?\n)?'
  $scriptPattern = '(?is)[ \t]*<script\b[^>]*src=["'']assets/citadel-v5\.js["''][^>]*>\s*</script>[ \t]*(?:\r?\n)?'

  $htmlFiles = Get-ChildItem -Path $TargetPath -Filter '*.html' -File | Sort-Object Name
  if ($htmlFiles.Count -eq 0) { throw 'Aucune page HTML trouvee dans le dossier selectionne.' }

  $modified = New-Object System.Collections.Generic.List[string]
  $skipped = New-Object System.Collections.Generic.List[string]

  foreach ($file in $htmlFiles) {
    $content = Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8
    if ($content -notmatch '(?i)</head>' -or $content -notmatch '(?i)</body>') {
      $skipped.Add($file.Name)
      continue
    }

    Copy-Item $file.FullName (Join-Path $backupFolder $file.Name) -Force
    $content = [regex]::Replace($content, $stylePattern, '')
    $content = [regex]::Replace($content, $scriptPattern, '')
    $content = [regex]::Replace($content, '(?i)</head>', "  $styleTag`r`n</head>", 1)
    $content = [regex]::Replace($content, '(?i)</body>', "  $scriptTag`r`n</body>", 1)
    Set-Content -LiteralPath $file.FullName -Value $content -Encoding UTF8
    $modified.Add($file.Name)
  }

  Copy-Item (Join-Path $sourceAssets 'citadel-v5.css') $cssTarget -Force
  Copy-Item (Join-Path $sourceAssets 'citadel-v5.js') $jsTarget -Force

  $manifest = [ordered]@{
    version = '5.0'
    installedAt = (Get-Date).ToString('o')
    target = $TargetPath
    backup = $backupFolder
    modifiedPages = @($modified)
    skippedPages = @($skipped)
    addedAssets = @('assets/citadel-v5.css','assets/citadel-v5.js')
    note = 'Couche visuelle non destructive. Les donnees et cles localStorage existantes ne sont pas modifiees.'
  }
  $manifest | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $TargetPath '.ascension_citadelle_v5_0.json') -Encoding UTF8

  $summary = @"
La Citadelle des Miracles V5.0 est installee.

Pages mises a jour : $($modified.Count)
Pages ignorees : $($skipped.Count)
Sauvegarde creee :
$backupFolder

Ouvre index.html puis teste le menu, la recherche Ctrl + K et une page interactive comme quests.html ou atlas.html.
"@
  Write-Host $summary
  Show-Message -Text $summary -Icon 'Information'
  exit 0
}
catch {
  $message = "Installation impossible :`r`n`r`n$($_.Exception.Message)"
  Write-Error $message
  Show-Message -Text $message -Icon 'Error'
  exit 1
}
