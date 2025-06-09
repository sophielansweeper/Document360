![AWS Glue](./assets/aws-glue.png#connector-icon)
Manage AWS Glue crawlers, jobs and triggers

## Connections

### AWS Glue Access Key and Secret

Authenticates requests to AWS Glue using an API Key and API Secret.

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

### AWS Role ARN

Connect to AWS using an assumed role

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN          |         |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Actions

### Get Job Run

Retrieves the metadata for a given job run.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Run Id     | Provide a string value for the run Id.                                  |         |
| Connection |                                                                         |         |

### List Crawlers

List Crawlers available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### List Jobs

List job schemas available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Connection |                                                                                                               |         |

### List Triggers

List the names of all triggers in the account.

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### Start Crawler

Starts an existing crawler in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Start Job Run

Starts a job run using a AWS Glue job definition.

| Input                  | Comments                                                                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region             | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                             |         |
| Name                   | Provide a string value for the name (NOT the ARN).                                                                                                                                  |         |
| Allocated Capacity     | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. If this is omitted, Glue will use the default number of DPUs configured for your job. |         |
| Security Configuration | The name of the SecurityConfiguration structure to be used with this job. This can be left blank if you do not have a security configuration.                                       |         |
| args                   | Optional key value parameters to pass into a job.                                                                                                                                   |         |
| Connection             |                                                                                                                                                                                     |         |

### Start Trigger

Starts an existing trigger in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Crawler

If the specified crawler is running, stops the crawl

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Job Run

Stops one or more job runs for a specified job definition

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| AWS Region  | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name        | Provide a string value for the name (NOT the ARN).                      |         |
| Job Run Ids | Provide a list of job run Ids                                           |         |
| Connection  |                                                                         |         |

### Stop trigger

Stops a specified trigger

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |
