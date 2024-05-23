# sentiment_summarization

- App used as boilerplate & clone the app modify as per your requiremnt.


## Backend

- Backend directory used to implement backend APIs using Python.
- Creating your custom Lambda function you can follow ```hello_world``` template for that create your custom folder inscide ```src```.
- Also add custom function with you your rules as per requirment into ```template.yaml```.

#### Used below versions for creating project ::
- Python : ***3.9***
- AWSTemplateFormatVersion : ***2010-09-09***
- Transform : ***AWS::Serverless-2016-10-31***

#### Debugg steps if any error occur ::
- If ```CORS``` error occur then you can enable cors for particular lambda function. (```APIGateway -> Your-LambdaFN -> APIMethod -> CorsEnable```)
- If any other error occur in particular api then you check in ```CloudWatch```.


## Frontend

- Frontend directory used to implement UI using NextJs.
- MUI library used for design and utilize built in mui components. ([MUI Guide](https://mui.com/material-ui/all-components))
- Create custom components we can create file under `src/components`.

#### Used below versions for creating project ::
- React : **18**
- Next : **14**
- @mui/material : **5.15.18**
