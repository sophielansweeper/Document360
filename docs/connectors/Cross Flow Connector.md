---
title: Cross Flow Connector
sidebar_label: Cross Flow
description: The Cross Flow component includes triggers and actions for flow to flow invocations.
---

![Cross Flow](./assets/cross-flow.png#connector-icon)
The Cross Flow component includes triggers and actions for flow to flow invocations.

## Triggers

### Cross Flow Trigger

The cross flow trigger allows you to create flows that are designed to be invoked by other flows.

## Actions

### Invoke Flow

Invokes another flow and passes data to that flow.

| Input     | Comments                                                  | Default |
| --------- | --------------------------------------------------------- | ------- |
| Flow Name | The name of the flow to invoke                            |         |
| Data      | The payload to send to the invoked flow. Must be a string |         |
