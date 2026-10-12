@echo off
rem HK Kart demosunu yerel bilgisayarda baslatir (Windows). Node.js 20+ gerekir.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js bulunamadi. https://nodejs.org adresinden LTS surumunu kurun.
  pause
  exit /b 1
)
cd /d "%~dp0"
if not exist node_modules call npm install
echo.
echo Demo: http://127.0.0.1:5174/
echo Kapatmak icin bu pencerede Ctrl+C.
echo.
call npm run dev
