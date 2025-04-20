# GraphQL Server with DynamoDB

This is a GraphQL server using GraphQL Yoga and AWS DynamoDB.

## Prerequisites

Before running this application, make sure you have:

1. Node.js installed
2. AWS CLI installed
3. AWS credentials configured

## AWS Configuration

This application requires AWS credentials to be configured. You can set this up in two ways:

### Option 1: Using AWS CLI (Recommended)

1. Install AWS CLI if you haven't already:
   - For Windows: Download the official AWS CLI installer
   - For macOS: `brew install awscli`
   - For Linux: `sudo apt-get install awscli`

2. Configure AWS credentials:

   ```bash
   aws configure
   ```

   You will be prompted to enter:
   - AWS Access Key ID
   - AWS Secret Access Key
   - Default region name (e.g., us-west-2)
   - Default output format (optional, press Enter for default)

### Option 2: Environment Variables

Alternatively, create a `.env` file in the root directory with:

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The GraphQL server will start at `http://localhost:4000/graphql`

## Security Note

Never commit your AWS credentials to version control. If using the `.env` file approach, make sure it's included in your `.gitignore`.
