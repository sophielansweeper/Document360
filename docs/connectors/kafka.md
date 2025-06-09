---
title: Kafka Connector
sidebar_label: Kafka
description: Publish messages to an Apache Kafka event stream
---

![Kafka](./assets/kafka.png#connector-icon)
Publish messages to an Apache Kafka event stream

## Connections

### Basic Username/Password

Basic Username and Password connection

| Input                    | Comments                                                    | Default |
| ------------------------ | ----------------------------------------------------------- | ------- |
| Username                 | Username                                                    |         |
| Password                 | Password                                                    |         |
| Authentication Mechanism | Desired authorization method for passing username/password. |         |

## Actions

### Publish Messages

Publish a message to an Apache Kafka topic.

| Input      | Comments                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                |         |
| Client ID  | A Client Id is an optional identifier of a Kafka consumer that is passed to a Kafka broker with every request. |         |
| Brokers    | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                              |         |
| Topic      | A Topic is a category/feed name to which records are stored and published.                                     |         |
| Messages   | Provide a string for a message to be sent to the Kafka topic                                                   |         |
