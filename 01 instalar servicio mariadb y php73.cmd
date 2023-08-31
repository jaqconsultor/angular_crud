C:\angular_crud\recursos\nssm\win32\nssm.exe install angularc_MariaDB "C:\angular_crud\mariadb-10.2.37-win32\bin\mysqld.exe" " --defaults-file=C:\angular_crud\mariadb-10.2.37-win32\my.ini"
C:\angular_crud\recursos\nssm\win32\nssm.exe install angularc_PHP73 "C:\angular_crud\php73\php.exe" "-S localhost:8383 -t C:\angular_crud\htdocs73\"

net start angularc_MariaDB
net start angularc_PHP73
pause