/**
 * A Lambda function that parses a payload from the SQS ReceieveMessage call
 * All log statements are written to CloudWatch
 */
exports.handler = async (event, context) => {
    // Log the event payload
    console.info(JSON.stringify(event));

    // Get the incoming records
    var records = event.Records;

    // Process each record
    records.forEach(e => {
        console.info (JSON.stringify(e))
    })

    return (`Number of Records Processed: ${records.length}`);
}
