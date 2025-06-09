---
title: Amazon SNS Connector
sidebar_label: Amazon SNS
description: Manage subscriptions, topics, and messages within Amazon (AWS) SNS
---

![Amazon SNS](./assets/aws-sns.png#connector-icon)
Manage subscriptions, topics, and messages within Amazon (AWS) SNS

## Connections

### AWS Role ARN

Connect to AWS using an assumed role

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN          |         |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

### AWS SNS Access Key and Secret

Authenticates requests to Amazon SNS using an API Key and API Secret

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Triggers

### Subscription Trigger

Confirm subscription and unsubscribe requests and validate SNS messages

| Input         | Comments                                                                                                          | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Parse Message | When enabled the message from SNS will be parsed as JSON and returned. If disabled it will be passed as received. | false   |

## Actions

### Create Topic

Create an Amazon SNS Topic

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string for the name of the topic.                             |         |
| Connection |                                                                         |         |

### Delete Topic

Delete an Amazon SNS Topic

| Input      | Comments                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.             |         |
| Topic Arn  | An Amazon SNS topic is a logical access point that acts as a communication channel. |         |
| Connection |                                                                                     |         |

### Get Topic Attributes

Retrieves the attributes of an Amazon SNS Topic.

| Input      | Comments                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.             |         |
| Topic Arn  | An Amazon SNS topic is a logical access point that acts as a communication channel. |         |
| Connection |                                                                                     |         |

### List Opt Out Numbers

Create an Amazon SNS Topic

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                 |         |
| Next Token | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |
| Connection |                                                                                                         |         |

### List Subscriptions

Retrieve the subscriptions of an Amazon SNS Topic

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                 |         |
| Topic Arn  | An Amazon SNS topic is a logical access point that acts as a communication channel.                     |         |
| Next Token | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |
| Connection |                                                                                                         |         |

### List Topics

List available Amazon SNS Topics

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                 |         |
| Next Token | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |
| Connection |                                                                                                         |         |

### Publish Batch Messages

Publishes up to ten messages to the specified Amazon SNS Topic

| Input           | Comments                                                                                                                                                                                                                          | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Region      | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Topic Arn       | An Amazon SNS topic is a logical access point that acts as a communication channel.                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Message Entries | To add a Binary Message add a Template Field containing a Buffer from a previous field to the BinaryValue attribute. For MessageAttributes data types, see: https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html | <code>[<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "Number",<br /> "StringValue": "123"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "String.Array",<br /> "StringValue": "[\"test\", true, 123]"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "String",<br /> "StringValue": "test"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "Binary",<br /> "BinaryValue": "ADD A BUFFER HERE WITH A TEMPLATE FIELD"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> }<br />]</code> |
| Connection      |                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Publish Message

Publish a message to an Amazon SNS Topic

| Input              | Comments                                                                                                                                                                                                                                                                                                                                       | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region         | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                                                        |         |
| Message            | Provide a string for the message you would like to send.                                                                                                                                                                                                                                                                                       |         |
| Topic Arn          | An Amazon SNS topic is a logical access point that acts as a communication channel.                                                                                                                                                                                                                                                            |         |
| Message Attributes | For each item, provide a key value pair representing a message attribute, to supply a binary you must provide a Buffer to the key value. When determining your message attributes, it is important that you follow the specifications listed in the Amazon SNS docs: https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html |         |
| Connection         |                                                                                                                                                                                                                                                                                                                                                |         |

### Publish SMS

Publish an SMS message to an Amazon SNS Topic

| Input        | Comments                                                                | Default |
| ------------ | ----------------------------------------------------------------------- | ------- |
| AWS Region   | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Message      | Provide a string for the message you would like to send.                |         |
| Phone Number | Provide a phone number that you would like to subscribe to your topic.  |         |
| Connection   |                                                                         |         |

### Subscribe to Topic

Subscribe to an Amazon SNS Topic

| Input      | Comments                                                                                                                                        | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                         |         |
| Topic Arn  | An Amazon SNS topic is a logical access point that acts as a communication channel.                                                             |         |
| protocol   | When you subscribe an endpoint to a topic, you must specify which protocol to use when this topic receives messages.                            | https   |
| Endpoint   | The endpoint that you want to receive notifications. This could be an email address, URL, phone number, or SQS/application/Lambda/Firehose ARN. |         |
| Connection |                                                                                                                                                 |         |

### Unsubscribe from a Topic

Unsubscribe from an Amazon SNS Topic

| Input            | Comments                                                                | Default |
| ---------------- | ----------------------------------------------------------------------- | ------- |
| AWS Region       | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Subscription Arn | The unique identifier for a topic subscription                          |         |
| Connection       |                                                                         |         |
