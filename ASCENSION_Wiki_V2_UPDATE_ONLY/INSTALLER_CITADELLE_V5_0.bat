@echo off
setlocal
cd /d "%~dp0"
echo.
echo =====================================================
echo   ASCENSION Wiki V5.0 - La Citadelle des Miracles
echo =====================================================
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0install_citadelle_v5_0.ps1"
if errorlevel 1 (
  echo.
  echo Une erreur est survenue. Lis le message ci-dessus.
  pause
)
endlocal
