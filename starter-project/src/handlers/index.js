/**
 * A Lambda function that returns a static string
 */
exports.handler = async (event, context) => {
    console.info(JSON.stringify(event));

    //const message = 'Hello from Lambda!';

    // All log statements are written to CloudWatch
    //console.info(`${message}`);
    
    return message;
}
