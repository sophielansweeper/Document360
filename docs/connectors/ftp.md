---
title: FTP Connector
sidebar_label: FTP
description: Manage files and directories on an FTP server
---

![FTP](./assets/ftp.png#connector-icon)
Manage files and directories on an FTP server

## Connections

### Username, password and endpoint

Basic auth username and password and endpoint

| Input             | Comments                                                                                                    | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Username          |                                                                                                             |         |
| Password          |                                                                                                             |         |
| Host              | The address of the FTP server. This should be an IP address or hostname.                                    |         |
| Port              | The port of the FTP server.                                                                                 | 21      |
| Secure            | Specifies whether to use FTPS over TLS. Can be true, false, or implicit, which is for legacy implicit FTPS. | false   |
| Ignore SSL Errors | Ignore SSL errors, like self-signed certificates                                                            | false   |

## Actions

### Delete File

Delete a file from a FTP server

| Input           | Comments                                        | Default |
| --------------- | ----------------------------------------------- | ------- |
| Connection      |                                                 |         |
| Verbose Logging | Enables verbose logging for debugging purposes. | false   |
| Path            | Path of file to delete                          |         |

### List Directory

List the contents of a directory

| Input           | Comments                                        | Default |
| --------------- | ----------------------------------------------- | ------- |
| Connection      |                                                 |         |
| Verbose Logging | Enables verbose logging for debugging purposes. | false   |
| Path            | Path of directory on FTP server to list         |         |

### Move File

Move a file on an FTP server

| Input            | Comments                                        | Default |
| ---------------- | ----------------------------------------------- | ------- |
| Connection       |                                                 |         |
| Verbose Logging  | Enables verbose logging for debugging purposes. | false   |
| Source Path      | Path of file to move                            |         |
| Destination Path | Path of file to move                            |         |

### Read File

Read a file from FTP

| Input           | Comments                                        | Default |
| --------------- | ----------------------------------------------- | ------- |
| Connection      |                                                 |         |
| Verbose Logging | Enables verbose logging for debugging purposes. | false   |
| Path            | Path of file on FTP server to read data from    |         |

### Write File

Write a file to FTP

| Input           | Comments                                        | Default |
| --------------- | ----------------------------------------------- | ------- |
| Connection      |                                                 |         |
| Verbose Logging | Enables verbose logging for debugging purposes. | false   |
| Path            | Path on FTP server to write file                |         |
| Data            | Text to write into the file                     |         |
