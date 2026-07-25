$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Windows.Forms

$dialog = New-Object System.Windows.Forms.FolderBrowserDialog
$dialog.Description = 'Sélectionne le dossier actuel du wiki ASCENSION (celui qui contient index.html et assets)'
$dialog.ShowNewFolderButton = $false
if ($dialog.ShowDialog() -ne [System.Windows.Forms.DialogResult]::OK) { exit 0 }

$target = $dialog.SelectedPath
if (-not (Test-Path (Join-Path $target 'index.html'))) {
  [System.Windows.Forms.MessageBox]::Show('Le dossier choisi ne contient pas index.html.', 'ASCENSION Atlas', 'OK', 'Error') | Out-Null
  exit 1
}
if (-not (Test-Path (Join-Path $target 'assets'))) {
  [System.Windows.Forms.MessageBox]::Show('Le dossier choisi ne contient pas le dossier assets.', 'ASCENSION Atlas', 'OK', 'Error') | Out-Null
  exit 1
}

$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$stamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$backup = Join-Path $target ('_backup_avant_atlas_' + $stamp)
New-Item -ItemType Directory -Force -Path $backup | Out-Null

Copy-Item (Join-Path $source 'atlas.html') (Join-Path $target 'atlas.html') -Force
Copy-Item (Join-Path $source 'assets\atlas.css') (Join-Path $target 'assets\atlas.css') -Force
Copy-Item (Join-Path $source 'assets\atlas-data.js') (Join-Path $target 'assets\atlas-data.js') -Force
Copy-Item (Join-Path $source 'assets\atlas.js') (Join-Path $target 'assets\atlas.js') -Force

$changed = 0
Get-ChildItem -Path $target -Filter '*.html' -File | Where-Object { $_.Name -ne 'atlas.html' } | ForEach-Object {
  $path = $_.FullName
  $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
  if ($content -match 'href=["'']atlas\.html["'']') { return }

  Copy-Item $path (Join-Path $backup $_.Name) -Force
  $updated = $content
  $dimensionsPattern = '(<a\b[^>]*href=["'']dimensions\.html["''][^>]*>.*?</a>)'
  $bossPattern = '(<a\b[^>]*href=["'']bosses\.html["''][^>]*>.*?</a>)'
  if ($updated -match $dimensionsPattern) {
    $updated = [regex]::Replace($updated, $dimensionsPattern, '$1<a href="atlas.html">Atlas</a>', 1)
  } elseif ($updated -match $bossPattern) {
    $updated = [regex]::Replace($updated, $bossPattern, '<a href="atlas.html">Atlas</a>$1', 1)
  } elseif ($updated -match '</nav>') {
    $updated = [regex]::Replace($updated, '</nav>', '<a href="atlas.html">Atlas</a></nav>', 1)
  }

  if ($updated -ne $content) {
    [System.IO.File]::WriteAllText($path, $updated, (New-Object System.Text.UTF8Encoding($false)))
    $changed++
  }
}

$message = "Atlas V4.9.1 installé.`n`nPages de navigation mises à jour : $changed`nSauvegarde : $backup`n`nTu peux ouvrir atlas.html pour tester."
[System.Windows.Forms.MessageBox]::Show($message, 'ASCENSION — Atlas installé', 'OK', 'Information') | Out-Null
