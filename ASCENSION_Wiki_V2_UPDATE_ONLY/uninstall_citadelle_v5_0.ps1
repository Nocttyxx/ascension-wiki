param([string]$TargetPath)
$ErrorActionPreference = 'Stop'

function Select-WikiFolder {
  Add-Type -AssemblyName System.Windows.Forms
  $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
  $dialog.Description = "Selectionne le dossier du wiki ASCENSION qui contient index.html."
  $dialog.ShowNewFolderButton = $false
  if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { return $dialog.SelectedPath }
  return $null
}
function Show-Message([string]$Text,[string]$Icon='Information'){
  try { Add-Type -AssemblyName System.Windows.Forms -ErrorAction SilentlyContinue; [System.Windows.Forms.MessageBox]::Show($Text,'ASCENSION Wiki V5.0','OK',$Icon) | Out-Null } catch { Write-Host $Text }
}

try {
  if ([string]::IsNullOrWhiteSpace($TargetPath)) { $TargetPath = Select-WikiFolder }
  if ([string]::IsNullOrWhiteSpace($TargetPath)) { exit 2 }
  $TargetPath = (Resolve-Path $TargetPath).Path
  if (-not (Test-Path (Join-Path $TargetPath 'index.html'))) { throw 'index.html est introuvable dans ce dossier.' }

  $stylePattern = '(?is)[ \t]*<link\b[^>]*href=["'']assets/citadel-v5\.css["''][^>]*>[ \t]*(?:\r?\n)?'
  $scriptPattern = '(?is)[ \t]*<script\b[^>]*src=["'']assets/citadel-v5\.js["''][^>]*>\s*</script>[ \t]*(?:\r?\n)?'
  $count = 0
  Get-ChildItem -Path $TargetPath -Filter '*.html' -File | ForEach-Object {
    $content = Get-Content -LiteralPath $_.FullName -Raw -Encoding UTF8
    $newContent = [regex]::Replace([regex]::Replace($content,$stylePattern,''),$scriptPattern,'')
    if ($newContent -ne $content) {
      Set-Content -LiteralPath $_.FullName -Value $newContent -Encoding UTF8
      $count++
    }
  }
  Remove-Item (Join-Path $TargetPath 'assets/citadel-v5.css') -Force -ErrorAction SilentlyContinue
  Remove-Item (Join-Path $TargetPath 'assets/citadel-v5.js') -Force -ErrorAction SilentlyContinue
  Remove-Item (Join-Path $TargetPath '.ascension_citadelle_v5_0.json') -Force -ErrorAction SilentlyContinue
  $message = "La couche visuelle V5.0 a ete retiree de $count page(s). Les contenus, scripts et sauvegardes du wiki sont restes intacts."
  Write-Host $message
  Show-Message $message
  exit 0
} catch {
  $message = "Desinstallation impossible :`r`n`r`n$($_.Exception.Message)"
  Write-Error $message
  Show-Message $message 'Error'
  exit 1
}
