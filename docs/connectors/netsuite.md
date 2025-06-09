---
title: NetSuite Connector
sidebar_label: NetSuite
description: Manage NetSuite records
---

![NetSuite](./assets/netsuite.png#connector-icon)
Manage NetSuite records

## Connections

### NetSuite OAuth Auth Code

NetSuite OAuth 2.0 Connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                           | Comments                                                                                                                                                                                           | Default                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Token URL                       | The OAuth 2.0 Token URL for NetSuite. Replace <ACCOUNT_ID> with your account ID, which can be found in your browser's URL bar when you log in to NetSuite - https://<ACCOUNT_ID>.app.netsuite.com/ | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |
| Consumer Key (Client ID)        | Generate a consumer key when you create your OAuth 2.0 app in NetSuite                                                                                                                             |                                                                                    |
| Consumer Secret (Client Secret) | Generate a consumer secret when you create your OAuth 2.0 app in NetSuite                                                                                                                          |                                                                                    |

### Netsuite OAuth Client Credentials

Netsuite OAuth 2.0 Client Credentials Connection

| Input                    | Comments                                                                                                                                                                                           | Default                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Token URL                | The OAuth 2.0 Token URL for NetSuite. Replace <ACCOUNT_ID> with your account ID, which can be found in your browser's URL bar when you log in to NetSuite - https://<ACCOUNT_ID>.app.netsuite.com/ | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |
| Certificate ID (Key ID)  | The key ID used for signing the JWT token.                                                                                                                                                         |                                                                                    |
| Private Key for JWT      | The private key used for signing the JWT token.                                                                                                                                                    |                                                                                    |
| Consumer Key (Client ID) | Generate a consumer key when you create your OAuth 2.0 app in NetSuite                                                                                                                             |                                                                                    |

## Actions

### Create Record

Create record of specified type

| Input       | Comments                                                                                                                                                         | Default                                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  |                                                                                                                                                                  |                                                                                                                                          |
| Record Type | Record type to perform the action against.                                                                                                                       |                                                                                                                                          |
| Payload     | Data payload to send in the action request. See https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2022.1/index.html for details. | <code>{<br /> "entityid": "New Customer",<br /> "companyname": "My Company",<br /> "subsidiary": {<br /> "id": "1"<br /> }<br />}</code> |
| Debug       | Enable for additional logging information.                                                                                                                       | false                                                                                                                                    |

### Delete Record

Delete record of the specified type

| Input       | Comments                                   | Default |
| ----------- | ------------------------------------------ | ------- |
| Connection  |                                            |         |
| Record Type | Record type to perform the action against. |         |
| Record ID   | The ID of the record you want.             |         |
| Debug       | Enable for additional logging information. | false   |

### Get Record

Get record of specified type

| Input                | Comments                                                                                            | Default |
| -------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                     |         |
| Record Type          | Record type to perform the action against.                                                          |         |
| Record ID            | The ID of the record you want.                                                                      |         |
| Expand Sub-Resources | Enable to automatically expand all sublists, sublist lines, and subrecords on this record.          | false   |
| Simple Enum Format   | Enable to return enumeration values in a format that only shows the internal ID value.              | false   |
| Fields to Return     | Specific fields and sublists to return in the request. If unspecified, the full record is returned. |         |
| Debug                | Enable for additional logging information.                                                          | false   |

### List Records

List records of specified type

| Input             | Comments                                                                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                    |         |
| Record Type       | Record type to perform the action against.                                                                                         |         |
| Query             | Query to filter records by. See https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html for details. |         |
| Pagination Limit  | Fetch only this many records at a time.                                                                                            | 1000    |
| Pagination Offset | Fetch records offset by this value.                                                                                                |         |
| Debug             | Enable for additional logging information.                                                                                         | false   |

### Raw Request

Send raw HTTP request to NetSuite

| Input                   | Comments                                                                                                                                                                                                                                                                                        | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                 |         |
| URL                     | Input the path only (/contact), The base URL is already included (https://${accountId}.suitetalk.api.netsuite.com/services/rest/record/v1). For example, to connect to https://${accountId}.suitetalk.api.netsuite.com/services/rest/record/v1/contact, only /contact is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                         |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                       |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                            |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                          |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                             |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                     |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                        | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                             |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                            | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                             | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                             | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                   | false   |
| Service Type            | The type of service to use.                                                                                                                                                                                                                                                                     | record  |

### SuiteQL Query

Execute a SuiteQL Query through Netsuite's REST Web Service

| Input             | Comments                                                                                                                                             | Default                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Connection        |                                                                                                                                                      |                                                                  |
| Pagination Limit  | Fetch only this many records at a time.                                                                                                              | 1000                                                             |
| Pagination Offset | Fetch records offset by this value.                                                                                                                  |                                                                  |
| SuiteQL Payload   | Data payload to send in the action request. See https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157909186990.html for details. | SELECT email, COUNT(\*) as count FROM transaction GROUP BY email |
| Debug             | Enable for additional logging information.                                                                                                           | false                                                            |

### Update Record

Update record of the specified type

| Input                   | Comments                                                                                                                                                         | Default                                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              |                                                                                                                                                                  |                                                                                                                                          |
| Record Type             | Record type to perform the action against.                                                                                                                       |                                                                                                                                          |
| Record ID               | The ID of the record you want.                                                                                                                                   |                                                                                                                                          |
| Payload                 | Data payload to send in the action request. See https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2022.1/index.html for details. | <code>{<br /> "entityid": "New Customer",<br /> "companyname": "My Company",<br /> "subsidiary": {<br /> "id": "1"<br /> }<br />}</code> |
| Replace                 | Names of sublists on this record. All specified sublists will be replaced instead of added to.                                                                   |                                                                                                                                          |
| Replace Selected Fields | If enabled, delete all fields, including body fields, specified in the Replace input.                                                                            | false                                                                                                                                    |
| Debug                   | Enable for additional logging information.                                                                                                                       | false                                                                                                                                    |
