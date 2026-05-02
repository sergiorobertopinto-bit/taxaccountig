@echo off
setlocal
cd /d "%~dp0"
start "" "http://127.0.0.1:8090/"
"C:\Users\User\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 8090 --bind 127.0.0.1
