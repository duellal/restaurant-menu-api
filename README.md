# Restaurant Menu API
For this project I used Node.js v19.4.0, GraphQL express, and cors. I am currently getting an error when locally running from GraphQL.

## Local Setup

To set up locally, please follow the steps below:

1. npm ci
2. In terminal, run `npm run start`
3. The terminal should return:
   ![Alt text](<images/Screenshot 2023-09-25 at 3.34.06 PM.png>)
4. You can check that the API is running by going to your web browser and typing in "http://localhost:9000/api". You should see `{
"message": "API is up and running!"
}`.

   ** Currently this will not happen unless you comment out the graphQl/graphql_schema.js file and the server.use('/graphql ...') line in the api/server.js file**