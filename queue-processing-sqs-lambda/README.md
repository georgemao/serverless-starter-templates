# queue-processing-sqs-lambda

This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI). It includes the following files and folders:

- `src` - Code for the application's Lambda function.
- `template.yml` - A template that defines the application's AWS resources.

## Test the application
Use the provided sample SQS payload in `event.json` or generate a sample payload:
* sam local generate-event sqs receive-message

Invoke the function locally, passing it the sample payload
* sam local invoke -e event.json

## Deploy the application
* sam local deploy -g

This uses the guided feature to deploy your application.