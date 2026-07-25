@echo off
chcp 65001 >nul
set SCRIPT=%~dp0install_atlas_v4_9_1.ps1
PowerShell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT%"
if errorlevel 1 (
  echo.
  echo Une erreur est survenue. Consulte le message ci-dessus.
  pause
)
