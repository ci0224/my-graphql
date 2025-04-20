import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  ScanCommand
} from '@aws-sdk/lib-dynamodb';

// Configure the DynamoDB Client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-west-2',
  // The credentials will be automatically loaded from ~/.aws/credentials
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
      const command = new GetCommand({
        TableName: this.tableName,
        Key: { id },
      });
      const result = await docClient.send(command);
      return result.Item;
    } catch (error) {
      console.error('Error fetching item from DynamoDB:', error);
      throw error;
    }
  },

  // Put a new item
  async putItem(item) {
    try {
      const command = new PutCommand({
        TableName: this.tableName,
        Item: item,
      });
      await docClient.send(command);
      return item;
    } catch (error) {
      console.error('Error putting item to DynamoDB:', error);
      throw error;
    }
  },

  // Query items
  async query(params) {
    try {
      const command = new QueryCommand({
        TableName: this.tableName,
        ...params,
      });
      const result = await docClient.send(command);
      return result.Items;
    } catch (error) {
      console.error('Error querying DynamoDB:', error);
      throw error;
    }
  },

  // Scan all items
  async scanAll() {
    try {
      const command = new ScanCommand({
        TableName: this.tableName,
      });
      const result = await docClient.send(command);
      return result.Items;
    } catch (error) {
      console.error('Error scanning DynamoDB:', error);
      throw error;
    }
  }
};

export default dynamoDB;