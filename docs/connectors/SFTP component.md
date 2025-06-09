![SFTP](./assets/sftp.png#connector-icon)
Read, write, move and delete files on an SFTP server

## Connections

### Basic Username/Password

Basic Username and Password connection

| Input                                      | Comments                                                                                                                                                  | Default |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Password                                   |                                                                                                                                                           |         |
| Username                                   |                                                                                                                                                           |         |
| Host                                       | The address of the SFTP server. This should be either an IP address or hostname.                                                                          |         |
| Port                                       | The port of the SFTP server.                                                                                                                              | 22      |
| Timeout                                    | How long the client will await a request.                                                                                                                 | 3000    |
| Enable Unsecure Server Host Key Algorithms | If true, unsecure server host key algorithms will be added to the connection.                                                                             | false   |
| Enable Unsecure Ciphers                    | If true, CBC ciphers will be added to the connection.                                                                                                     | false   |
| Custom Server Host Key Algorithms          | A comma-separated list of custom server host key algorithms. Overrides the default server host key algorithms. Algorithm order matters. Advanced setting. |         |
| Custom Ciphers                             | A comma-separated list of custom ciphers. Overrides the default ciphers. Cipher order matters. Advanced setting.                                          |         |

### Private Key

Private Key connection

| Input                                      | Comments                                                                                                                                                  | Default |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Private Key                                | SSH private key                                                                                                                                           |         |
| Key Passphrase                             | Passphrase for the private key. Leave blank if none.                                                                                                      |         |
| Password                                   | Though uncommon, some SFTP servers that use private keys may also require a password. Leave blank if none.                                                |         |
| Username                                   |                                                                                                                                                           |         |
| Host                                       | The address of the SFTP server. This should be either an IP address or hostname.                                                                          |         |
| Port                                       | The port of the SFTP server.                                                                                                                              | 22      |
| Timeout                                    | How long the client will await a request.                                                                                                                 | 3000    |
| Enable Unsecure Server Host Key Algorithms | If true, unsecure server host key algorithms will be added to the connection.                                                                             | false   |
| Enable Unsecure Ciphers                    | If true, CBC ciphers will be added to the connection.                                                                                                     | false   |
| Custom Server Host Key Algorithms          | A comma-separated list of custom server host key algorithms. Overrides the default server host key algorithms. Algorithm order matters. Advanced setting. |         |
| Custom Ciphers                             | A comma-separated list of custom ciphers. Overrides the default ciphers. Cipher order matters. Advanced setting.                                          |         |

## Actions

### Append File

Append data to an existing file on a SFTP server.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Path       | Path on SFTP server to append file. |         |
| Data       | Text to append to the file.         |         |

### Create Directory

Create a new directory. If the recursive flag is set to true, the method will create any directories in the path which do not already exist.

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                         |         |
| Path              | Path of directory on an SFTP server to list files of                                                                    |         |
| Recursive         | If true, create any missing directories in the path as well                                                             | true    |
| Show Debug Output | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled. | false   |

### Delete File

Delete a file from a SFTP server

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                         |         |
| Path              | Path of file to delete                                                                                                  |         |
| Show Debug Output | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled. | false   |

### Fast Get

Read a file from SFTP

| Input                | Comments                                                                                                                                                                                                                | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                         |         |
| Path                 | Path of file on SFTP server to read data from                                                                                                                                                                           |         |
| Always Return Buffer | Always treat the file as a binary file with content type 'application/octet-stream', even if it is a text file. This is helpful if you are processing non-UTF-8 text files, as the runner assumes text files are UTF-8. | false   |
| Show Debug Output    | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled.                                                                                                 | false   |

### List Directory

List files in a directory on an SFTP server

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                         |         |
| Path              | Path of directory on an SFTP server to list files of                                                                    |         |
| Pattern           | Glob-style string for listing specific files                                                                            | \*      |
| Show Debug Output | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled. | false   |

### Move File

Move a file on an SFTP server

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                         |         |
| Source Path       | Path of file to move                                                                                                    |         |
| Destination Path  | Path of file to move                                                                                                    |         |
| Show Debug Output | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled. | false   |

### Read File

Read a file from SFTP

| Input                | Comments                                                                                                                                                                                                                | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                         |         |
| Path                 | Path of file on SFTP server to read data from                                                                                                                                                                           |         |
| Always Return Buffer | Always treat the file as a binary file with content type 'application/octet-stream', even if it is a text file. This is helpful if you are processing non-UTF-8 text files, as the runner assumes text files are UTF-8. | false   |
| Show Debug Output    | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled.                                                                                                 | false   |

### Stat File

Pull statistics about a file

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                         |         |
| Path              | Path of file on SFTP server to read data from                                                                           |         |
| Show Debug Output | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled. | false   |

### Write File

Write a file to SFTP

| Input             | Comments                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                         |         |
| Path              | Path to file on SFTP server.                                                                                            |         |
| Data              | Text to write into the file.                                                                                            |         |
| Show Debug Output | Show additional debug output in logs. Note: SFTP is very verbose - expect hundreds of debug lines when this is enabled. | false   |
