---
title: ServiceNow Connector
sidebar_label: ServiceNow
description: Create records and incidents within ServiceNow
---

![ServiceNow](./assets/servicenow.png#connector-icon)
Create records and incidents within ServiceNow

## Connections

### Basic Username/Password

Basic Username and Password connection

| Input    | Comments | Default |
| -------- | -------- | ------- |
| Username | Username |         |
| Password | Password |         |

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code flow

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                   | Default |
| ------------- | ---------------------------------------------------------- | ------- |
| Authorize URL | The OAuth 2.0 Authorization URL for ServiceNow             |         |
| Token URL     | The OAuth 2.0 Token URL for ServiceNow                     |         |
| Scopes        | Space separated OAuth 2.0 permission scopes for ServiceNow |         |
| Client ID     | Client Identifier of your app for ServiceNow               |         |
| Client Secret | Client Secret of your app for ServiceNow                   |         |

## Actions

### Create Incident

Creates an Incident with the specified field names and values

| Input         | Comments                                                               | Default |
| ------------- | ---------------------------------------------------------------------- | ------- |
| Connection    |                                                                        |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests    |         |
| API Version   | The version of the ServiceNow API to use                               |         |
| Values        | The names of the fields and their values to use when creating a record |         |
| Debug Request | Enabling this flag will log out the current request.                   | false   |

### Create Table Record

Creates a record in the specified table with the specified field names and values

| Input         | Comments                                                               | Default |
| ------------- | ---------------------------------------------------------------------- | ------- |
| Connection    |                                                                        |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests    |         |
| API Version   | The version of the ServiceNow API to use                               |         |
| Table         | The name of the ServiceNow table in which to create a record           |         |
| Values        | The names of the fields and their values to use when creating a record |         |
| Debug Request | Enabling this flag will log out the current request.                   | false   |

### Create User

Creates a User with the specified field names and values

| Input         | Comments                                                               | Default |
| ------------- | ---------------------------------------------------------------------- | ------- |
| Connection    |                                                                        |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests    |         |
| API Version   | The version of the ServiceNow API to use                               |         |
| Values        | The names of the fields and their values to use when creating a record |         |
| First Name    | The User's First Name                                                  |         |
| Last Name     | The User's Last Name                                                   |         |
| Email         | The Email of the User                                                  |         |
| User Id       | The Username of the User                                               |         |
| Debug Request | Enabling this flag will log out the current request.                   | false   |

### Delete Attachment

This method deletes the attachment with a specific sys_id value.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Sys ID        | Sys_id value of the attachment to delete.                           |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Delete Incident

Delete an Incident

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Delete Table Record

Delete a record for a given ID in the specified Table

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Table         | The name of the ServiceNow table in which to create a record        |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Delete User

Deletes a User

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Get Attachment

Returns the metadata for the attachment file with a specific sys_id value.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Get Attachment File

Returns the binary file attachment with a specific sys_id value.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Get Incident

Gets an Incident by ID

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Get Knowledge Article

Returns specific knowledge article content and its field values.

| Input         | Comments                                                                                                                                                                                             | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                      |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                  |         |
| API Version   | The version of the ServiceNow API to use                                                                                                                                                             |         |
| Article ID    | Sys_id or knowledge base (KB) number of a knowledge article in the Knowledge [kb_knowledge] table.                                                                                                   |         |
| Fields        | Comma-separated list of fields from the Knowledge [kb_knowledge] table to show details in results.                                                                                                   |         |
| Language      | List of comma-separated languages in two-letter ISO 639-1 language code format to restrict results to. Alternatively type 'all' to search in all valid installed languages on an instance.           |         |
| Search ID     | Optional unless using the 'Search Rank' input. Unique identifier of search that returned this article. You can retrieve this value (articles.id element) using the 'List Knowledge Articles' action. |         |
| Search Rank   | Optional unless using the 'Search ID' input. Article search rank by click-rate (articles.rank) that you can retrieve using the 'List Knowledge Articles' action.                                     |         |
| Update View   | Update view count and record an entry for the article in the Knowledge Use [kb_use] table.                                                                                                           | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                 | false   |

### Get Knowledge Article Attachment

Returns a knowledge article attachment as a file.

| Input             | Comments                                                                                                                         | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                  |         |
| Instance URL      | The URL of the specific ServiceNow instance to use for API requests                                                              |         |
| API Version       | The version of the ServiceNow API to use                                                                                         |         |
| Article Sys ID    | Sys_id of the knowledge article with the attachment you intend to retrieve. Located in the Knowledge Bases [kb_knowledge] table. |         |
| Attachment Sys ID | Sys_id of record to which the attachment belongs.                                                                                |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                             | false   |

### Get Table Record

Get a record for a given ID in the specified Table

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Table         | The name of the ServiceNow table in which to create a record        |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Get User by Id

Gets a User by their Id

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| Sys ID        | The Sys ID of the record being queried                              |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Get User by Username

Get a record for a given ID in the specified Table

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests |         |
| API Version   | The version of the ServiceNow API to use                            |         |
| User Id       | The Username of the User                                            |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### List Attachments

Returns the metadata for multiple attachments.

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Instance URL   | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                                                                                                                             |         |
| API Version    | The version of the ServiceNow API to use                                                                                                                                                                                                                                                                                                                                                                        |         |
| Sysparm Limit  | Limit to be applied on pagination. Default is 1000. Unusually large values can impact system performance.                                                                                                                                                                                                                                                                                                       |         |
| Sysparm Offset | Starting record index for which to begin retrieving records. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time you call this endpoint, sysparm_offset is set to '0'. To simply page through all available records, use sysparm_offset=sysparm_offset+sysparm_limit, until you reach the end of all records. |         |
| Sysparm Query  | Encoded query used to filter the result set. Syntax: sysparm_query=<col_name><operator><value>.                                                                                                                                                                                                                                                                                                                 |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                            | false   |

### List Featured Knowledge Articles

Returns a list of the most-viewed knowledge articles and featured knowledge articles.

| Input                   | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                |         |
| Instance URL            | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                            |         |
| API Version             | The version of the ServiceNow API to use                                                                                                                                                                                                                                                                       |         |
| Fields                  | Comma-separated list of fields from the Knowledge [kb_knowledge] table to show details in results.                                                                                                                                                                                                             |         |
| Knowledge Base Sys ID's | Comma-separated list of knowledge base sys_ids from the Knowledge Bases [kb_knowledge_base] table to restrict results to.                                                                                                                                                                                      |         |
| Language                | List of comma-separated languages in two-letter ISO 639-1 language code format to restrict results to. Alternatively type 'all' to search in all valid installed languages on an instance.                                                                                                                     |         |
| Limit                   | Maximum number of records to return. Unusually large limit values can impact system performance. For requests that exceed this number of records, use the Offset input to paginate record retrieval.                                                                                                           |         |
| Offset                  | Starting record index for which to begin retrieving records. Use this value to paginate record retrieval. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time this endpoint is called, offset is set to '0'. |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                           | false   |

### List Incidents

Gets a list of all Incidents

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Instance URL   | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                                                                                                                             |         |
| API Version    | The version of the ServiceNow API to use                                                                                                                                                                                                                                                                                                                                                                        |         |
| Sysparm Limit  | Max number of records to return. Large values can impact performance. For pagination with large data sets include the Sysparm Offset                                                                                                                                                                                                                                                                            |         |
| Sysparm Offset | Starting record index for which to begin retrieving records. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time you call this endpoint, sysparm_offset is set to '0'. To simply page through all available records, use sysparm_offset=sysparm_offset+sysparm_limit, until you reach the end of all records. |         |
| Sysparm Query  | Encoded query used to filter the result set. Syntax: sysparm_query=<col_name><operator><value>.                                                                                                                                                                                                                                                                                                                 |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                            | false   |

### List Knowledge Articles

Returns a list of knowledge base (KB) articles which can be searched and filtered using various parameters.

| Input                   | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                |         |
| Instance URL            | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                            |         |
| API Version             | The version of the ServiceNow API to use                                                                                                                                                                                                                                                                       |         |
| Filter                  | Encoded query to use to filter the result set.                                                                                                                                                                                                                                                                 |         |
| Fields                  | Comma-separated list of fields from the Knowledge [kb_knowledge] table to show details in results.                                                                                                                                                                                                             |         |
| Knowledge Base Sys ID's | Comma-separated list of knowledge base sys_ids from the Knowledge Bases [kb_knowledge_base] table to restrict results to.                                                                                                                                                                                      |         |
| Language                | List of comma-separated languages in two-letter ISO 639-1 language code format to restrict results to. Alternatively type 'all' to search in all valid installed languages on an instance.                                                                                                                     |         |
| Limit                   | Maximum number of records to return. Unusually large limit values can impact system performance. For requests that exceed this number of records, use the Offset input to paginate record retrieval.                                                                                                           |         |
| Offset                  | Starting record index for which to begin retrieving records. Use this value to paginate record retrieval. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time this endpoint is called, offset is set to '0'. |         |
| Query                   | Text to search for, can be empty.                                                                                                                                                                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                           | false   |

### List Most Viewed Knowledge Articles

Returns a list of knowledge articles prioritized by most-viewed.

| Input                   | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                |         |
| Instance URL            | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                            |         |
| API Version             | The version of the ServiceNow API to use                                                                                                                                                                                                                                                                       |         |
| Fields                  | Comma-separated list of fields from the Knowledge [kb_knowledge] table to show details in results.                                                                                                                                                                                                             |         |
| Knowledge Base Sys ID's | Comma-separated list of knowledge base sys_ids from the Knowledge Bases [kb_knowledge_base] table to restrict results to.                                                                                                                                                                                      |         |
| Language                | List of comma-separated languages in two-letter ISO 639-1 language code format to restrict results to. Alternatively type 'all' to search in all valid installed languages on an instance.                                                                                                                     |         |
| Limit                   | Maximum number of records to return. Unusually large limit values can impact system performance. For requests that exceed this number of records, use the Offset input to paginate record retrieval.                                                                                                           |         |
| Offset                  | Starting record index for which to begin retrieving records. Use this value to paginate record retrieval. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time this endpoint is called, offset is set to '0'. |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                           | false   |

### List Table Records

Lists records in the specified table

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Instance URL   | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                                                                                                                             |         |
| API Version    | The version of the ServiceNow API to use                                                                                                                                                                                                                                                                                                                                                                        |         |
| Table          | The name of the ServiceNow table in which to create a record                                                                                                                                                                                                                                                                                                                                                    |         |
| Sysparm Limit  | Max number of records to return. Large values can impact performance. For pagination with large data sets include the Sysparm Offset                                                                                                                                                                                                                                                                            |         |
| Sysparm Offset | Starting record index for which to begin retrieving records. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time you call this endpoint, sysparm_offset is set to '0'. To simply page through all available records, use sysparm_offset=sysparm_offset+sysparm_limit, until you reach the end of all records. |         |
| Sysparm Query  | Encoded query used to filter the result set. Syntax: sysparm_query=<col_name><operator><value>.                                                                                                                                                                                                                                                                                                                 |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                            | false   |

### List Tables

Retrieve a list of all tables

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Instance URL   | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                                                                                                                             |         |
| Sysparm Fields | Comma-separated list of fields to return. If not specified, all fields are returned.                                                                                                                                                                                                                                                                                                                            |         |
| Sysparm Limit  | Max number of records to return. Large values can impact performance. For pagination with large data sets include the Sysparm Offset                                                                                                                                                                                                                                                                            |         |
| Sysparm Offset | Starting record index for which to begin retrieving records. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time you call this endpoint, sysparm_offset is set to '0'. To simply page through all available records, use sysparm_offset=sysparm_offset+sysparm_limit, until you reach the end of all records. |         |
| Sysparm Query  | Encoded query used to filter the result set. Syntax: sysparm_query=<col_name><operator><value>.                                                                                                                                                                                                                                                                                                                 |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                            | false   |

### List Users

Gets a list of all Users

| Input          | Comments                                                                                                                                                                                                                                                                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Instance URL   | The URL of the specific ServiceNow instance to use for API requests                                                                                                                                                                                                                                                                                                                                             |         |
| API Version    | The version of the ServiceNow API to use                                                                                                                                                                                                                                                                                                                                                                        |         |
| Sysparm Limit  | Max number of records to return. Large values can impact performance. For pagination with large data sets include the Sysparm Offset                                                                                                                                                                                                                                                                            |         |
| Sysparm Offset | Starting record index for which to begin retrieving records. This functionality enables the retrieval of all records, regardless of the number of records, in small manageable chunks. For example, the first time you call this endpoint, sysparm_offset is set to '0'. To simply page through all available records, use sysparm_offset=sysparm_offset+sysparm_limit, until you reach the end of all records. |         |
| Sysparm Query  | Encoded query used to filter the result set. Syntax: sysparm_query=<col_name><operator><value>.                                                                                                                                                                                                                                                                                                                 |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                            | false   |

### Multipart Upload Attachment

Uploads a multipart file attachment.

| Input         | Comments                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                   |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests               |         |
| API Version   | The version of the ServiceNow API to use                                          |         |
| File          | The file to attach to the record.                                                 |         |
| File Name     | Name to give the attachment.                                                      |         |
| Table         | Name of the table to which you want to attach the file.                           |         |
| Sys ID        | Sys_id of the record on the specified table to which you want to attach the file. |         |
| Debug Request | Enabling this flag will log out the current request.                              | false   |

### Raw Request

Send raw HTTP request to ServiceNow

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| Instance URL            | The URL of the specific ServiceNow instance to use for API requests                                                                                                                              |         |
| API Version             | The version of the ServiceNow API to use                                                                                                                                                         |         |
| Table                   | The name of the ServiceNow table in which to create a record                                                                                                                                     |         |
| Sys ID                  | The Sys ID of the record being queried                                                                                                                                                           |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update Incident

Updates an Incident with the specified field names and values

| Input         | Comments                                                               | Default |
| ------------- | ---------------------------------------------------------------------- | ------- |
| Connection    |                                                                        |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests    |         |
| API Version   | The version of the ServiceNow API to use                               |         |
| Sys ID        | The Sys ID of the record being queried                                 |         |
| Values        | The names of the fields and their values to use when creating a record |         |
| Debug Request | Enabling this flag will log out the current request.                   | false   |

### Update Table Record

Updates a record in the specified table with the specified field names and values

| Input         | Comments                                                               | Default |
| ------------- | ---------------------------------------------------------------------- | ------- |
| Connection    |                                                                        |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests    |         |
| API Version   | The version of the ServiceNow API to use                               |         |
| Table         | The name of the ServiceNow table in which to create a record           |         |
| Sys ID        | The Sys ID of the record being queried                                 |         |
| Values        | The names of the fields and their values to use when creating a record |         |
| Debug Request | Enabling this flag will log out the current request.                   | false   |

### Update User

Updates a User with the specified field names and values

| Input         | Comments                                                               | Default |
| ------------- | ---------------------------------------------------------------------- | ------- |
| Connection    |                                                                        |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests    |         |
| API Version   | The version of the ServiceNow API to use                               |         |
| Sys ID        | The Sys ID of the record being queried                                 |         |
| Values        | The names of the fields and their values to use when creating a record |         |
| User Id       | The Username of the User                                               |         |
| Email         | The Email of the User                                                  |         |
| First Name    | The User's First Name                                                  |         |
| Last Name     | The User's Last Name                                                   |         |
| Debug Request | Enabling this flag will log out the current request.                   | false   |

### Upload Attachment

Uploads a specified binary file as an attachment to a specified record.

| Input         | Comments                                                                                       | Default |
| ------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                |         |
| Instance URL  | The URL of the specific ServiceNow instance to use for API requests                            |         |
| API Version   | The version of the ServiceNow API to use                                                       |         |
| File          | The file to attach to the record.                                                              |         |
| File Name     | Name to give the attachment.                                                                   |         |
| Table         | Name of the table to attach the file to.                                                       |         |
| Sys ID        | Sys_id of the record in the table specified in table_name that you want to attach the file to. |         |
| Debug Request | Enabling this flag will log out the current request.                                           | false   |
