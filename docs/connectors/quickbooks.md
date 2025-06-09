---
title: QuickBooks Connector
sidebar_label: QuickBooks
description: Create and manage customers and invoices within Intuit QuickBooks
---

![QuickBooks](./assets/quickbooks.png#connector-icon)
Create and manage customers and invoices within Intuit QuickBooks

## Connections

### QuickBooks OAuth 2.0

Authenticate requests to QuickBooks using values obtained from the Developer Console.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                   | Default                          |
| ------------- | ------------------------------------------------------------------------------------------ | -------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access.        | com.intuit.quickbooks.accounting |
| Client ID     |                                                                                            |                                  |
| Client Secret |                                                                                            |                                  |
| Use Sandbox   | Choose whether or not to use QuickBooks' sandbox. This is helpful for integration testing. | false                            |

## Actions

### Batch Request

Perform a batch request

| Input               | Comments                                                                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                     |         |
| Batch Request Items | An array of batch request items to be executed; see https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/batch for detailed information. |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                | false   |

### Create a refund receipt

Create a new Refund Receipt in QuickBooks

| Input              | Comments                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         |                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                  |
| Line Items         | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt | <code>[{<br /> "DetailType": "SalesItemLineDetail",<br /> "Amount": 400.0,<br /> "SalesItemLineDetail": {<br /> "ItemRef": {<br /> "value": "21"<br /> }<br /> }<br /> }]</code> |
| Custom Fields      | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     | <code>[<br /> {<br /> "DefinitionId": "1",<br /> "Type": "StringType",<br /> "Name": "Crew #"<br /> }<br />]</code>                                                              |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                        |                                                                                                                                                                                  |
| Account Name       | Provide a value for the name of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                        |                                                                                                                                                                                  |
| Account Id         | Provide a value for the Id of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                          |                                                                                                                                                                                  |
| Billing Line 4     | Provide a value for line 4 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Line 3     | Provide a value for line 3 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Line 2     | Provide a value for line 2 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Line 1     | Provide a value for line 1 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                  |
| Billing Address Id | Provide the unique identifier of the billing address.                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                  |
| Billing Latitude   | Provide a value for the latitude of the billing address.                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                  |
| Billing Longitude  | Provide a value for the longitude of the billing address.                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                  |
| Debug Request      | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                             | false                                                                                                                                                                            |

### Create a sales receipt

Create a new Sales Receipt in QuickBooks

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection               |                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Line Items               | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt | <code>[<br /> {<br /> "Description": "Pest Control Services",<br /> "DetailType": "SalesItemLineDetail",<br /> "SalesItemLineDetail": {<br /> "TaxCodeRef": {<br /> "value": "NON"<br /> },<br /> "Qty": 1,<br /> "UnitPrice": 35,<br /> "ItemRef": {<br /> "name": "Pest Control",<br /> "value": "10"<br /> }<br /> },<br /> "LineNum": 1,<br /> "Amount": 35,<br /> "Id": "1"<br /> },<br /> {<br /> "DetailType": "SubTotalLineDetail",<br /> "Amount": 337.5,<br /> "SubTotalLineDetail": {}<br /> }<br />]</code> |
| Custom Fields            | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     | <code>[<br /> {<br /> "DefinitionId": "1",<br /> "Type": "StringType",<br /> "Name": "Crew #"<br /> }<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                                     |
| Apply Tax After Discount | Specify weather or not to apply tax after discount.                                                                                                                                                                                                                                                                                              | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Create Time              | Provide a date time value for the point in time this record was created                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Customer Id              | Provide a value for the Id of the customer you would like to attach to the receipt.                                                                                                                                                                                                                                                              | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Customer Name            | Provide a value for the name of the customer that will show on the receipt.                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Account Name             | Provide a value for the name of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Account Id               | Provide a value for the Id of the account to which payment money is deposited. If you do not specify this account, payment is applied to the Undeposited Funds account.                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Payment Method Id        | Provide a value for the id of a payment method associated with this transaction.                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Payment Method Name      | Provide a value for the name of a payment method associated with this transaction.                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Debug Request            | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                             | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Create Invoice

Create an Invoice with the specified data

| Input         | Comments                                                            | Default                                                                                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                     |                                                                                                                                                                                                                                                                                                 |
| Data          | This is a string of JSON data that represents a QuickBooks invoice. | <code>{<br /> "Line": [<br /> {<br /> "DetailType": "SalesItemLineDetail",<br /> "Amount": 100,<br /> "SalesItemLineDetail": {<br /> "ItemRef": {<br /> "name": "Services",<br /> "value": "1"<br /> }<br /> }<br /> }<br /> ],<br /> "CustomerRef": {<br /> "value": "1"<br /> }<br />}</code> |
| Debug Request | Enabling this flag will log out the current request.                | false                                                                                                                                                                                                                                                                                           |

### Create Item

Create a new non-inventory item in QuickBooks

| Input                   | Comments                                             | Default |
| ----------------------- | ---------------------------------------------------- | ------- |
| Connection              |                                                      |         |
| Non-Inventory Item Data | The attributes of the non-inventory item to create   |         |
| Debug Request           | Enabling this flag will log out the current request. | false   |

### Create Note Attachment

Use this endpoint to attach a note to an object.

| Input                  | Comments                                                                                                                                                                                                                                                                     | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                                                                              |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the Id of the target object as returned in its response body when queried.                                                                                                                          |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object.                                                                                                                                                             |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                                                                                                                                  |         |
| API Minor Version      | Provide the version of the API you would like to use.                                                                                                                                                                                                                        | 69      |
| Include on Send        | Used when Entity Reference Type references a transaction object. This field indicates whether or not the attachment is sent with the transaction when Save and Send button is clicked in the QuickBooks UI or when the Send endpoint (send email) is invoked for the object. | false   |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                                                                                                         | false   |

### Create Purchase Order

Create a new Purchase Order

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                                                           |         |
| AP Account ID   | The AP account to which the bill is credited                                                                                                                                                                                              |         |
| Vendor ID       | The Vendor referenced in this transaction                                                                                                                                                                                                 |         |
| Lines           | Data representing line items of Purchase Orders; see 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order                                  |         |
| Dynamic Fields  | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Debug Request   | Enabling this flag will log out the current request.                                                                                                                                                                                      | false   |

### Create Resource

Create a new resource in QuickBooks

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                       |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       |                                                                                                                                                                                       |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                  | false   |

### Delete a refund receipt

Delete an existing Refund Receipt in QuickBooks

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Sync Token    | The Sync Token of a resource in QuickBooks           |         |
| Receipt Id    | Provide a value for the Id of the receipt.           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Attachable

This operation deletes an attachable object.

| Input              | Comments                                                                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                               |         |
| Attachable Payload | The full payload of the attachable as returned in a read response. Could be a reference from a previously executed "Read an Attachable" action response data. |         |
| API Minor Version  | Provide the version of the API you would like to use.                                                                                                         | 69      |
| Debug Request      | Enabling this flag will log out the current request.                                                                                                          | false   |

### Delete Purchase Order

Delete an existing Purchase Order

| Input         | Comments                                                              | Default |
| ------------- | --------------------------------------------------------------------- | ------- |
| Connection    |                                                                       |         |
| Id            | This represents a resource's unique ID. It must be an integer number. |         |
| Sync Token    | The Sync Token of a resource in QuickBooks                            |         |
| Debug Request | Enabling this flag will log out the current request.                  | false   |

### Download Attachment

Retrieves a temporary download URL to the specified attachableID.

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Connection        |                                                       |         |
| Attachable Id     | The unique identifier of the attachment               |         |
| API Minor Version | Provide the version of the API you would like to use. | 69      |
| Debug Request     | Enabling this flag will log out the current request.  | false   |

### Find Resource by Id

Returns a full Resource in QuickBooks

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Resource Type |                                                      |         |
| Id            | The Primary ID of a resource in QuickBooks           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get a refund receipt

Get the value of an existing Refund Receipt in QuickBooks

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Receipt Id    | Provide a value for the Id of the receipt.           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get a refund receipt as PDF

Get the value of an existing Refund Receipt in QuickBooks as a PDF

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Receipt Id    | Provide a value for the Id of the receipt.           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Company Info

Retrieve information about the company

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Customer By Display Name

Retrieve information about the Customer which matches the given Display Name

| Input                 | Comments                                             | Default |
| --------------------- | ---------------------------------------------------- | ------- |
| Connection            |                                                      |         |
| Customer Display Name | This represents the customer's display name          |         |
| Debug Request         | Enabling this flag will log out the current request. | false   |

### Get Customer By Id

Retrieve information about the Customer which matches the given id

| Input         | Comments                                                              | Default |
| ------------- | --------------------------------------------------------------------- | ------- |
| Connection    |                                                                       |         |
| Id            | This represents a resource's unique ID. It must be an integer number. |         |
| Debug Request | Enabling this flag will log out the current request.                  | false   |

### Get Invoice By Id

Retrieve information about the Invoice which matches the given id

| Input         | Comments                                                              | Default |
| ------------- | --------------------------------------------------------------------- | ------- |
| Connection    |                                                                       |         |
| Id            | This represents a resource's unique ID. It must be an integer number. |         |
| Debug Request | Enabling this flag will log out the current request.                  | false   |

### Get Resource

Retrieve a QuickBooks resource using their SQL-like data query language

| Input             | Comments                                                                                                       | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                |         |
| Query String      | Must be a valid query string as defined by the QuickBooks API. Single quotes must be escaped with a backslash. |         |
| API Minor Version | Provide the version of the API you would like to use.                                                          |         |
| Debug Request     | Enabling this flag will log out the current request.                                                           | false   |

### Get Sales Receipt

Get the information and metadata of a Sales Receipt by Id

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Receipt Id    | Provide a value for the Id of the receipt.           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Vendor Expenses

Retrieve information about vendor expenses

| Input         | Comments                                                                                                                                                                                                                                                                                      | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                               |         |
| Query Params  | Customize the information returned in the report by specifying query parameters with the query. Listed here are the query parameters available for this report: customer, vendor, end_date, date_macro, class, sort_order, summarize_column_id, department, accounting_method, and start_date |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                          | false   |

### Raw Request

Send raw HTTP request to QuickBooks

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                               |         |
| URL                     | Input the path only (/invoice), The base URL is already included (https://quickbooks.api.intuit.com/v3/company/1234567890 for production or https://sandbox-quickbooks.api.intuit.com/v3/company/1234567890 for sandbox). For example, to connect to https://quickbooks.api.intuit.com/v3/company/1234567890/invoice, only /invoice is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                           |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                                                                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                                                                                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                                                                                                                                              | false   |

### Read an Attachable

Read one attachable

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Connection        |                                                       |         |
| Attachable Id     | The unique identifier of the attachment               |         |
| API Minor Version | Provide the version of the API you would like to use. | 69      |
| Debug Request     | Enabling this flag will log out the current request.  | false   |

### Send a refund receipt

Send an existing Refund Receipt in QuickBooks to any email

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Receipt Id    | Provide a value for the Id of the receipt.           |         |
| Email         | Provide a valid email to send the receipt to.        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Send a refund receipt

send an existing Refund Receipt to the email saved in QuickBooks

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Receipt Id    | Provide a value for the Id of the receipt.           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Attachable

Update any of the writable fields of an existing attachable object.

| Input               | Comments                                                                                                                                                                                                                                 | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Update Request Body | The request body must include all writable fields of the existing object as returned in a read response. Writable fields omitted from the request body are set to NULL. The ID of the object to update is specified in the request body. | <code>{<br /> "SyncToken": "1",<br /> "domain": "QBO",<br /> "AttachableRef": [<br /> {<br /> "IncludeOnSend": false,<br /> "EntityRef": {<br /> "type": "Invoice",<br /> "value": "95"<br /> }<br /> }<br /> ],<br /> "Note": "This is an updated attached note.",<br /> "sparse": false,<br /> "Id": "5000000000000010341",<br /> "MetaData": {<br /> "CreateTime": "2015-11-17T11:05:15-08:00",<br /> "LastUpdatedTime": "2015-11-17T11:05:15-08:00"<br /> }<br />}</code> |
| API Minor Version   | Provide the version of the API you would like to use.                                                                                                                                                                                    | 69                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                                                                     | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Update Purchase Order

Update an existing Purchase Order

| Input           | Comments                                                                                                                                                                                                                                  | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                                                           |         |
| Id              | This represents a resource's unique ID. It must be an integer number.                                                                                                                                                                     |         |
| Sync Token      | The Sync Token of a resource in QuickBooks                                                                                                                                                                                                |         |
| Base Record     | Reference the existing record (from 'Get Resource' or other action) or desired base record; QuickBooks only does 'full' updates and treats unspecified keys as clearing out that field                                                    |         |
| AP Account ID   | The AP account to which the bill is credited                                                                                                                                                                                              |         |
| Vendor ID       | The Vendor referenced in this transaction                                                                                                                                                                                                 |         |
| Lines           | Data representing line items of Purchase Orders; see 'Line' in QuickBooks' docs at https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder#create-a-purchase-order                                  |         |
| Dynamic Fields  | A field for dynamic inputs that can be configured at deploy time with the use of a key/value config variable.                                                                                                                             |         |
| Optional Values | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value. |         |
| Debug Request   | Enabling this flag will log out the current request.                                                                                                                                                                                      | false   |

### Update refund receipt

Update the contents of an existing Refund Receipt in QuickBooks

| Input              | Comments                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection         |                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Sync Token         | The Sync Token of a resource in QuickBooks                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Total Amount       | Provide a value for the total amount on the receipt.                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Receipt Id         | Provide a value for the Id of the receipt.                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Line Items         | For each list item, provide a JavaScript Object that represents an individual line item. Please follow the shape provided in the example. For more information on the line item object refer to the QuickBooks documentation: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt#create-a-salesreceipt | <code>[<br /> {<br /> Description: "Refund - Pest control was ineffective",<br /> DetailType: "SalesItemLineDetail",<br /> SalesItemLineDetail: {<br /> TaxCodeRef: {<br /> value: "NON",<br /> },<br /> Qty: 2.5,<br /> UnitPrice: 35,<br /> ItemRef: {<br /> name: "Pest Control",<br /> value: "10",<br /> },<br /> },<br /> LineNum: 1,<br /> Amount: 87.5,<br /> Id: "1",<br /> },<br /> {<br /> DetailType: "SubTotalLineDetail",<br /> Amount: 87.5,<br /> SubTotalLineDetail: {},<br /> },<br /> ]</code> |
| Billing Line 4     | Provide a value for line 4 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 3     | Provide a value for line 3 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 2     | Provide a value for line 2 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Line 1     | Provide a value for line 1 of the billing address.                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Address Id | Provide the unique identifier of the billing address.                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Latitude   | Provide a value for the latitude of the billing address.                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Billing Longitude  | Provide a value for the longitude of the billing address.                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Optional Values    | The names of optional fields and their values to use when creating/updating a record. For example, if you have a custom configured field that is not represented as an input, here you are able to specify its key and assign it a value.                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Custom Fields      | Specify any optional custom fields to be attached. A custom field is a JavaScript Object that consists of a DefinitionId: String, Type: String, and Name: String. If you don't want to supply any custom fields, simply provide an empty JavaScript Array []                                                                                     | <code>[<br /> {<br /> "DefinitionId": "1",<br /> "Type": "StringType",<br /> "Name": "Crew #"<br /> }<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                               |
| Debug Request      | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                             | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Update Resource

Updates a Resource in QuickBooks

| Input               | Comments                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                       |         |
| Resource Attributes | A list of attributes used to create a resource in QuickBooks. For more information refer to https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer. |         |
| Resource Type       |                                                                                                                                                                                       |         |
| Sync Token          | The Sync Token of a resource in QuickBooks                                                                                                                                            |         |
| Id                  | The Primary ID of a resource in QuickBooks                                                                                                                                            |         |
| Resource Data       | An optional full map of the resource data                                                                                                                                             |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                  | false   |

### Upload Attachment

Upload one attachment

| Input                  | Comments                                                                                                                                                                                                                                                                     | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                                                                              |         |
| File                   | File to attach. This should be a reference to a previous step                                                                                                                                                                                                                |         |
| File Name              | FileName of the attachment                                                                                                                                                                                                                                                   |         |
| Entity Reference Value | Object reference to which this attachment is linked. Set this value with the Id of the target object as returned in its response body when queried.                                                                                                                          |         |
| Entity Reference Type  | Object reference to which this attachment is linked. Set this value with the specific type of the target object.                                                                                                                                                             |         |
| Note                   | The note is either related to the attachment specified with the FileName attribute, or as a standalone note. Required for note attachments.                                                                                                                                  |         |
| API Minor Version      | Provide the version of the API you would like to use.                                                                                                                                                                                                                        | 69      |
| File Type              | The file type of the attachment                                                                                                                                                                                                                                              |         |
| Include on Send        | Used when Entity Reference Type references a transaction object. This field indicates whether or not the attachment is sent with the transaction when Save and Send button is clicked in the QuickBooks UI or when the Send endpoint (send email) is invoked for the object. | false   |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                                                                                                         | false   |

### Void Invoice

Voids an Invoice

| Input         | Comments                                                              | Default |
| ------------- | --------------------------------------------------------------------- | ------- |
| Connection    |                                                                       |         |
| Id            | This represents a resource's unique ID. It must be an integer number. |         |
| Sync Token    | The Sync Token of a resource in QuickBooks                            |         |
| Debug Request | Enabling this flag will log out the current request.                  | false   |
