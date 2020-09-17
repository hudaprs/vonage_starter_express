# Vonage Starter Back End

This is a Vonage Stater Back End using NodeJS & ExpressJS.

# Installing & Set Up

Before you begin using this project, here's the step to reproduce.

### 1. Install dependencies

```
npm install
```

### 2. Change .env.example to .env

Here's you need to register an account if you don't have one to [https://www.vonage.id/log-in/?icmp=utilitynav_login_novalue](Vonage)

Replace these value with your vonage API KEY and Secret KEY from Vonage dashboard in **.env**

```
API_KEY=yourVonageAPIKEY
API_SECRET=yourVonageAPISECRET
```

### 3. Run the server

To run the server you just need to run this command:
This will run nodemon in your project

```
npm run dev
```

# Here's the list of endpoint for This Vonage Starter

| URL                     | Method | Description                              |
| ----------------------- | ------ | ---------------------------------------- |
| /api/register           | POST   | Register a new user phone                |
| /api/cancel             | POST   | Cancel request user, must wait 30 second |
| /api/verify-code        | POST   | Verify user code when registering        |
| /api/verify/:request_id | GET    | Search request ID to verify user         |
