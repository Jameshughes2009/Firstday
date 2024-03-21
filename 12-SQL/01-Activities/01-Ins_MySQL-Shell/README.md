#  Instructor Demo: MySQL Shell

MySQL Shell is an advanced client and code editor for MySQL located right in our terminal. Let's open the MySQL Shell. 

  * To start, we navigate to the root directory of our project and then type the following command into the terminal to confirm that the MySQL server is up and running. If successful, `mysql` and a version number will appear. 

    ```sh
    mysql --version
    ```

  * Next, we open the MySQL Shell that connects the terminal to the MySQL instance. In the terminal, at the root directory of the project, enter the following command:

    ```sh
    mysql -u root -p
    ```

  * This command tells the MySQL Shell that we want to log in with the root user (-u). The -p stands for "password.". Once we enter this command, we are prompted to enter the password we created when we installed `MySQL`.

  * We write our commands after the prompt. Don't forget, all commands must end with a semi-colon! 

    ```sh
    mysql> CREATE DATABASE demo_db;
    ```

  * We can also execute a file that contains a list of commands using `source`

    ```sh
    source schema.sql
    ```

  * To exit the Shell, we type `quit`.

    ```sh
    quit
    ```
    <!--  - password for my SQL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    Beginning configuration step: Writing configuration file

<!-- Saving my.ini configuration file...
Saved my.ini configuration file.
Ended configuration step: Writing configuration file

Beginning configuration step: Updating Windows Firewall rules

Adding a Windows Firewall rule for MySQL83 on port 3306.
Attempting to add a Windows Firewall rule with command: netsh.exe advfirewall firewall add rule name="Port 3306" protocol=TCP localport=3306 dir=in action=allow
Ok.


Successfully added the Windows Firewall rule.
Adding a Windows Firewall rule for MySQL83 on port 33060.
Attempting to add a Windows Firewall rule with command: netsh.exe advfirewall firewall add rule name="Port 33060" protocol=TCP localport=33060 dir=in action=allow
Ok.


Successfully added the Windows Firewall rule.
Ended configuration step: Updating Windows Firewall rules

Beginning configuration step: Adjusting Windows service

Attempting to grant the required filesystem permissions to the 'NT AUTHORITY\NetworkService' account.
Granted permissions to the data directory.
Granted permissions to the install directory.
Adding new service
New service added
Ended configuration step: Adjusting Windows service

Beginning configuration step: Initializing database (may take a long time)

Attempting to run MySQL Server with --initialize-insecure option...
Starting process for MySQL Server 8.3.0...
Starting process with command: C:\Program Files\MySQL\MySQL Server 8.3\bin\mysqld.exe --defaults-file="C:\ProgramData\MySQL\MySQL Server 8.3\my.ini" --console --initialize-insecure=on --lower-case-table-names=1...
MySQL Server Initialization - start.
C:\Program Files\MySQL\MySQL Server 8.3\bin\mysqld.exe (mysqld 8.3.0) initializing of server in progress as process 22604
InnoDB initialization has started.
InnoDB initialization has ended.
root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
MySQL Server Initialization - end.
Process for mysqld, with ID 22604, was run successfully and exited with code 0.
Successfully started process for MySQL Server 8.3.0.
MySQL Server 8.3.0 intialized the database successfully.
Ended configuration step: Initializing database (may take a long time)

Beginning configuration step: Updating permissions for the data folder and related server files

Attempting to update the permissions for the data folder and related server files...
Inherited permissions have been converted to explicit permissions.
Full control permissions granted to: NETWORK SERVICE.
Full control permissions granted to: Administrators.
Full control permissions granted to: CREATOR OWNER.
Full control permissions granted to: SYSTEM.
Access to the data directory is removed for the users group.
Permissions for the data folder and related server files are updated correctly.
Ended configuration step: Updating permissions for the data folder and related server files

Beginning configuration step: Starting the server

Attempting to start service MySQL83...
MySQL Server - start.
C:\Program Files\MySQL\MySQL Server 8.3\bin\mysqld.exe (mysqld 8.3.0) starting as process 28584
InnoDB initialization has started.
InnoDB initialization has ended.
CA certificate ca.pem is self signed.
Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
X Plugin ready for connections. Bind-address: '::' port: 33060
C:\Program Files\MySQL\MySQL Server 8.3\bin\mysqld.exe: ready for connections. Version: '8.3.0'  socket: ''  port: 3306  MySQL Community Server - GPL.
Successfully started service MySQL83.
Waiting until a connection to MySQL Server 8.3.0 can be established (with a maximum of 10 attempts)...
Retry 1: Attempting to connect to Mysql@localhost:3306 with user root with no password...
Successfully connected to MySQL Server 8.3.0.
Ended configuration step: Starting the server

Beginning configuration step: Applying security settings

Attempting to update security settings.
Updated security settings.
Ended configuration step: Applying security settings

Beginning configuration step: Updating the Start menu link

Attempting to verify command-line client shortcut.
Verified command-line client shortcut.
Verified command-line client shortcut.
Ended configuration step: Updating the Start menu link
-->

* If the `mysql --version` command returned an error, refer to the  [MySQL Docs Installing MySQL Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html) for installing MySQL on your Mac, Windows on Linux machine.

source

A relational database organizes data into tables