import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// Check if required environment variables are present
if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  throw new Error('AWS credentials are missing in environment variables');
}

// Configure the DynamoDB Client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-west-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Create the DynamoDB Document Client
const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    // Handle empty strings, arrays, and objects
    removeUndefinedValues: true,
    convertEmptyValues: true,
  },
});

// Helper functions for common DynamoDB operations
export const dynamoDB = {
  tableName: 'AH_search_result',

  // Get a single item by ID
  async getItem(id) {
    try {
      const result = await docClient.send({
        TableName: this.tableName,
        Key: { id },
      });
      return result.Item;
    } catch (error) {
      console.error('Error fetching item from DynamoDB:', error);
      throw error;
    }
  },

  // Put a new item
  async putItem(item) {
    try {
      await docClient.send({
        TableName: this.tableName,
        Item: item,
      });
      return item;
    } catch (error) {
      console.error('Error putting item to DynamoDB:', error);
      throw error;
    }
  },

  // Query items
  async query(params) {
    try {
      const result = await docClient.send({
        TableName: this.tableName,
        ...params,
      });
      return result.Items;
    } catch (error) {
      console.error('Error querying DynamoDB:', error);
      throw error;
    }
  },

  // Scan all items
  async scanAll() {
    try {
      const result = await docClient.send({
        TableName: this.tableName,
      });
      return result.Items;
    } catch (error) {
      console.error('Error scanning DynamoDB:', error);
      throw error;
    }
  }
};

export default dynamoDB; 