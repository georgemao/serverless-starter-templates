# microservice-api-lambda

This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI). It includes the following files and folders:

- `src` - Code for the application's Lambda function.
- `template.yml` - A template that defines the application's AWS resources.

## Test the application
Use the provided sample API Gateway payload in `event.json` or generate a sample payload:
* sam local generate-event apigateway aws-proxy

You can Invoke the function locally, passing it the sample payload:
* sam local invoke apiFunction -e event.json
* sam local invoke secondFunction -e event.json

Or to deploy the API and host it locally for integration testing:
* sam local start-api

There are 3 paths defined: */hello* ,  */post* , and /hello2.  /hello expects a HTTP GET ,  /post expects a HTTP POST with body, and /hello2

- To hit the predefined /hello path, submit a GET request to: http://127.0.0.1/hello
- To hit the predefined /post path, submit a POST request to: http://127.0.0.1/post
- To hit the predefined /secure/hello path, submit a POST request to: http://127.0.0.1/secure/hello

You may need to use a development port such as 3000. ie http://127.0.0.1:3000/

## Deploy the application
* sam local deploy -g

This uses the guided feature to deploy your application.