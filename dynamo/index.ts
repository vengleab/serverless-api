const DynamoDB = require("aws-sdk/clients/dynamodb");

export const client = new DynamoDB({
  region: "ap-southeast-1",
  accessKeyId: process.env.DYNAMO_KEY,
  secretAccessKey: process.env.DYNAMO_SECRET,
});
