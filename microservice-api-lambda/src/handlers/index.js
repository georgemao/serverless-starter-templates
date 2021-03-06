/**
 * A Lambda function that parses a payload from the SQS ReceieveMessage call
 * All log statements are written to CloudWatch
 */
exports.handler = async (event, context) => {
    // Log the event payload
    console.info(JSON.stringify(event));

    // Get the requestContext. It has a http field with request details
    // requestContext: { http: {} }
    var requestContext =  event.requestContext;
    var userAgent = requestContext.http.userAgent;
    var clientIp = requestContext.http.sourceIp;   

    var httpMethod =  requestContext.http.method;
    if(httpMethod == "GET")
        return (`Hello you are using: ${userAgent} from IP ${clientIp}`);
    else if(httpMethod == "POST"){
        return (`You POSTED this:  ${event.body}`);
    }
    else{
        return "Unsupported request"
    }
}
