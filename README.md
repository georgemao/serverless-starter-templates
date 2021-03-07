# serverless-starter-templates
A collection of starter examples for common serverless use cases

* [Queue Processing](queue-processing-sqs-lambda)
This template deploys a SQS resource and a Lambda function to process the records in SQS. 
It enables the event source for SQS --> Lambda and enables polling on your behalf.

* [Stream Processing](stream-processing-kinesis-lambda)
This template deploys a Kinesis stream and a Lambda function to process the records in Kinesis. 
It enables the event source for Kinesis --> Lambda and enables polling on your behalf.

* [Microservice](microservice-api-lambda)
This template deploys a HTTP API endpoint and 2 Lambda functions to process API requests forwarded from API Gateway.
It uses two functions to demostrate seperation of logic and security.

## Serverless Application Model
All projects include a SAM template you can use to deploy the application.

The AWS SAM CLI is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

To use the AWS SAM CLI, you need the following tools:

* AWS SAM CLI - [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
* Node.js - [Install Node.js 14](https://nodejs.org/en/), including the npm package management tool.
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community).
