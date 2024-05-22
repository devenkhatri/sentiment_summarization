import os, json
from aws_lambda_powertools import Logger

ACCOUNT_ID = os.environ["ACCOUNT_ID"]

logger = Logger()

@logger.inject_lambda_context(log_event=True)
def lambda_handler(event, context):
    messages = "Hello from backend. This is success message."
    logger.info({"messages": messages})

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        },
        "body": json.dumps(
            {
                "accountId" : ACCOUNT_ID,
                "messages": messages,
            },
            default=str,
        ),
    }
