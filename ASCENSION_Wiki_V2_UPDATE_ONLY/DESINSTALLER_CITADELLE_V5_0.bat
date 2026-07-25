@echo off
setlocal
cd /d "%~dp0"
echo.
echo Retrait de la couche visuelle ASCENSION V5.0...
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0uninstall_citadelle_v5_0.ps1"
if errorlevel 1 pause
endlocal
