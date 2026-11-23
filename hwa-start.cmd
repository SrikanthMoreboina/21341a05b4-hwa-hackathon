@echo off
set "PATH=%LOCALAPPDATA%\hwa-hackathon\tools\gh\bin;%LOCALAPPDATA%\hwa-hackathon\tools\npm;%PATH%"
set "OPENCODE_CONFIG_CONTENT="
set "OPENCODE_CONFIG="
set "OPENCODE_CONFIG_DIR="
cd /d "%~dp0"
echo.
echo   ONLY OPEN-SOURCE MODELS ARE ALLOWED: pick one in /models (Qwen, DeepSeek, Kimi, GLM, gpt-oss, Llama, Mistral).
echo   Closed models (Claude, GPT, Gemini, Grok) and paid providers are against the rules.
echo.
start "" /b "C:\Program Files\nodejs\node.EXE" .hwa\hwa-collect.mjs watch - >nul 2>&1
"C:\Program Files\nodejs\node.EXE" .hwa\hwa-collect.mjs pick - --report .hwa\pick.txt
set "S="
if exist .hwa\pick.txt set /p S=<.hwa\pick.txt
if "%S%"=="stop" exit /b 1
if defined S ("%LOCALAPPDATA%\hwa-hackathon\tools\npm\opencode.cmd" -s %S%) else ("%LOCALAPPDATA%\hwa-hackathon\tools\npm\opencode.cmd")
"C:\Program Files\nodejs\node.EXE" -e "if(process.stdout.isTTY)process.stdout.write('\x1b[0m\x1b[?25h\x1b[?1000l\x1b[?1002l\x1b[?1003l\x1b[?1006l\x1b[?2004l')"
"C:\Program Files\nodejs\node.EXE" .hwa\hwa-collect.mjs seal - >nul 2>&1
