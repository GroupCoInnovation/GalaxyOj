@echo off & setlocal EnableDelayedExpansion 
set a=1 
for /f "delims=" %%i in ('dir /b *.JPG') do ( 
if not "%%~ni"=="%~n0" ( if !a! LSS 10 (ren "%%i" "G07_00!a!.JPG") else if !a! LSS 100 (ren "%%i" "G07_0!a!.JPG") else ren "%%i" "G07_!a!.JPG" 
set/a a+=1 
    ) 
)