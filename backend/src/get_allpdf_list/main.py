import os, json
import boto3
from botocore.config import Config
from aws_lambda_powertools import Logger


BUCKET = os.environ["BUCKET"]
# REGION = os.environ["REGION"]
REGION = "us-east-1"


s3 = boto3.client(
    "s3",
    endpoint_url=f"https://s3.{REGION}.amazonaws.com",
    config=Config(
        s3={"addressing_style": "virtual"}, region_name=REGION, signature_version="s3v4"
    ),
)
logger = Logger()


# @logger.inject_lambda_context(log_event=True)
def lambda_handler(event, context):
    
    listOfitems = []
    print(BUCKET)
    response = s3.list_objects_v2(Bucket=BUCKET, MaxKeys=100)
    print(response)
    for obj in s3.list_objects(Bucket = BUCKET):
        if obj.key.endswith('pdf'):
            # print(obj.key)
            presigned_url = s3.generate_presigned_url(
                ClientMethod="put_object",
                Params={
                    "Bucket": BUCKET,
                    "Key": obj.key,
                    "ContentType": "application/pdf",
                },
                ExpiresIn=300,
                HttpMethod="PUT",
            )
            listOfitems.append(presigned_url)
    print(listOfitems)
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        },
        "body": json.dumps({"message": "Get succesfully List of pdf in bucket", "list" : listOfitems}),
    }

if __name__ == "__main__":
    lambda_handler("test", "test")