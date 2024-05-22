## Steps needs to perform After clone boilerplate

1. Replace stack-name in project ```genai-app-boilerplate``` to your ```PROJECT_NAME```.

1. Add you new module under ```src\``` as similiar as ```helloWorld``` folder.


## Deploy the application with AWS SAM

1. Run the following command in the `backend` directory to prepare the application for deployment:

   ```bash
   sam build
   ```

1. Next, to edit the AWS SAM deploy configuration, run the following command:

   ```bash
   sam deploy --guided
   ```
   
1. For all the options, keep the defaults by pressing the enter key.

AWS SAM will now provision the AWS resources defined in the `backend/template.yaml` template. Once the deployment is completed successfully, you will see a set of output values similar to the following:

```bash
CloudFormation outputs from deployed stack
-------------------------------------------------------------------------------
Outputs
-------------------------------------------------------------------------------
Key                 CognitoUserPool
Description         -
Value               us-east-1_gxKtRocFs

Key                 CognitoUserPoolClient
Description         -
Value               874ghcej99f8iuo0lgdpbrmi76k

Key                 ApiGatewayBaseUrl
Description         -
Value               https://abcd1234.execute-api.us-east-1.amazonaws.com/dev/
-------------------------------------------------------------------------------
```

## Sync

Command to sync the changes to server

  ```bash
  sam sync --stack-name genai-app-boilerplate
  ```

## Cleanup

- Delete any secrets in AWS Secrets Manager created as part of this walkthrough.
- [Empty the Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/empty-bucket.html) created as part of the AWS SAM template.
- Run the following command in the `backend` directory of the project to delete all associated resources resources:

  ```bash
  sam delete
  ```