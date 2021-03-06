# <div align="center"> Employee Dashboard

<div align="center">

This project Is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and using tailwindcss for UI library. Backend is built with node.js on top of NestJS and MongoDB. Development enviornment is 64bit Windows 10.

</div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/a97f81a3-b54b-4933-aa7e-f11805328312/deploy-status)](https://app.netlify.com/sites/employee-management-nest-react/deploys)

</div>
> *project color theme can be changed from `src/data/projectTheme.js`*

## <p>Available Scripts :helicopter:</p>

This project usages Yarn as package manager and in the project directory, you can run:

### to start the mongoDB server Locally on port 27017:

```java
mongod
```

### Root scripts

| Client Script           | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `start:client`          | Starts the development server of client                 |
| `start:server`          | Starts the development server of server                 |
| `start:all`             | Starts the development server of client and server both |
| `install:server`        | Install server's npm packages                           |
| `install:client`        | Install client's npm packages                           |
| `install:server:client` | Install server and client's npm packages                |
| `build:server`          | build client production                                 |
| `build:client`          | build server production                                 |
| `prepare`               | Install husky hooks after package Installs              |

> You can Ignore some of the weird looking commands they are related to heroku or netlify, but If you have experience with these platform and CI/CD pipeline go ahead 👍

start the mongoDB server Locally on port 27017:

```java
mongod
```

yarn start:all

```java
[2:01:16 AM] File change detected. Starting incremental compilation...
[1] 
[1] [Nest] 1152478   - 03/05/2022, 2:01:19 AM   [NestFactory] Starting Nest application...
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] AppModule dependencies initialized +105ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] MongooseModule dependencies initialized +2ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] PassportModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] ScheduleDatabaseResetService dependencies initialized +0ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] JwtModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] DiscoveryModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] ScheduleModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] ConfigModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] GraphQLSchemaBuilderModule dependencies initialized +0ms
[1] [Nest] 1152478   - 03/05/2022, 2:01:20 AM   [InstanceLoader] GraphQLModule dependencies initialized +1ms
[0] Compiled successfully!
[0] 
[0] You can now view employee-dashboard-client in the browser.
[0] 
[0]   http://localhost:3000
[0] 
[0] Note that the development build is not optimized.
[0] To create a production build, use yarn build.
[0] 
[1] [Nest] 1152478   - 03/05/2022, 2:01:50 AM   [MongooseModule] Unable to connect to the database. Retrying (1)... +29993ms
[1] [Nest] 1152478   - 03/05/2022, 2:02:23 AM   [MongooseModule] Unable to connect to the database. Retrying (2)... +33009ms
[1] [Nest] 1152478   - 03/05/2022, 2:02:56 AM   [MongooseModule] Unable to connect to the database. Retrying (3)... +33008ms
[1] [Nest] 1152478   - 03/05/2022, 2:03:29 AM   [MongooseModule] Unable to connect to the database. Retrying (4)... +33005ms
[1] [Nest] 1152478   - 03/05/2022, 2:04:02 AM   [MongooseModule] Unable to connect to the database. Retrying (5)... +33007ms
[1] [Nest] 1152478   - 03/05/2022, 2:04:35 AM   [MongooseModule] Unable to connect to the database. Retrying (6)... +33005ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] MongooseCoreModule dependencies initialized +30628ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] MongooseModule dependencies initialized +15ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] MongooseModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] MongooseModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] MongooseModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] MongooseModule dependencies initialized +0ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] EmployeeSalariesModule dependencies initialized +66ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] AuthModule dependencies initialized +2ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] SalaryModule dependencies initialized +3ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] SalaryStructureModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:05 AM   [InstanceLoader] EmployeeModule dependencies initialized +1ms
[1] [Nest] 1152478   - 03/05/2022, 2:05:06 AM   [NestApplication] Nest application successfully started +483ms
[1] Server started listening at PORT:  4000
```

## Routes

## Development / Local

### App server

http://localhost:3000/graphql
http://localhost:3000/auth/login
http://localhost:3000/auth/signup

### GraphQL server

http://localhost:4000/

### MongoDB

http://localhost:27017/


## Production

### Heroku App Server

https://dashboard.heroku.com/apps/employee-management-dashboard
https://employee-management-dashboard.herokuapp.com/graphql
https://employee-management-dashboard.herokuapp.com
https://devcenter.heroku.com/articles/logging#view-logs
heroku logs

### Netlify GraphQL Server

Note, the above might be incorrect:
Server directory: Heroku should be the Server for GraphQL, but Netlify is the Server for the App.
Client directory: Netlify should be the Client

### MongoDB

https://cloud.mongodb.com/v2/6146f93a165852010c2e7399#clusters

Grant access to the MongoDB cluster
https://cloud.mongodb.com/v2/6146f93a165852010c2e7399#security/network/accessList

Data Lake
https://cloud.mongodb.com/v2/6146f93a165852010c2e7399#dataLakes


<details>
  <summary># <b>Individual scripts</b></summary>

| Client Script | Description                              | Server Script | Description                         |
| ------------- | ---------------------------------------- | ------------- | ----------------------------------- |
| `start:dev`   | Starts the development server            | `start`       | Starts the server                   |
| `build`       | Production build                         | `start:dev`   | Starts the server in watch mode     |
| `test`        | Runs unit tests                          | `start:debug` | Starts the server in debug mode     |
| `eject`       | [React Eject](https://bit.ly/2TOYE0A)    | `start:prod`  | Runs prod server, run `build` first |
| `lint`        | Shows all the linting errors in codebase | `lint`        | Fix all the liting errors           |
| `lint:fix`    | Fix all the liting errors                | `build`       | Production build                    |

</details>

> Husky hooks will lint code in client folder before commiting it.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

<details>
  <summary>Client</summary>

    ├── .vscode
    ├── node_modules
    ├── public
    ├── src
        ├── assets
        ├── components
        ├── container
        ├── context
        ├── pages
        ├── routes
        ├── utils
    ├──_redirects
    ├── netlify.toml
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc
    ├── craco.config.js
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    └── yarn.lock

</details>
<details>
  <summary>server</summary>

    ├── .vscode
    ├── node_modules
    ├── dist
    ├── src
        ├── app
          ├── employee
          ├── salary
          ├── shared
          ├── app.module.ts
        ├── main.ts
    ├── nest-cli.json
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    ├── schema.gql
    ├── tsconfig.build.json
    ├── tsconfig.json
    └── yarn.lock

Text here

</details>

> `.vscode/`: This directory contains all of the workspace setting for vscode.

> `.husky/`: All the husky configuration.

## Install the Heroku CLI

Download and install the Heroku CLI.

```java
sudo snap install --classic heroku
```

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

```java
heroku login
```

If you get the error `IP address mismatch` you can login interactively with userid/password.

```java
heroku login -i
```

### Create a new Git repository

Initialize a git repository in a new or existing directory

```java
cd my-project/
git init
heroku git:remote -a employee-management-dashboard
```

Output:

```java
set git remote heroku to https://git.heroku.com/employee-management-dashboard.git
```

### Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

```java
git add .
git commit -am "make it better"
git push heroku main
```

You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions here.

### Existing Git repository

For existing repositories, simply add the heroku remote

```java
heroku git:remote -a employee-management-dashboard
```

## Deploy on cloud

> <b>Server</b> graphql Server is deployed at heroku.
> <b>Client</b> is deployed on netlify.
> <b>Database</b> is at mongodb atlas.

> <b>How to deploy</b>

- <b>Deploy MongoDB</b>
  - Create a new cluster at [MongoDB Cluster](https://bit.ly/3zrWsfN)
  - Go to cluster click on connect and follow the steps.
  - Create a user of this collection and remember username and pwd.
  - You should allow IP access from everywhere.
  - Choose connect your application and copy URI and use It in server deployment step.
  - Change URI values with your pwd and username.
- <b>Deploy Server.</b>
  - create a new app on [heroku](https://dashboard.heroku.com/new-app).
  - Install heroku CLI locally.
  - Open cmd at root of the project.
  - Init heroku repository with `heroku git:remote -a YOUR_APP_NAME`
  - Open `server/app/app.module.ts` and change mongoDB URI to your mongoDB atlas URI.
  - Run `yarn build:server`
  - Now push to heroku master `git push heroku <branch_name>:master`
  - Your server is running at the `APP_URL/graphql`
  - Copy app url It will be needed in client deployment.
- <b>Deploy Client</b>
  - Upload or Clone this repository to github
  - Open `client/src/index.js`
  - Change ApolloClient to `projectData.graphqlServerLive`
  - Go to `projectData` file and replace the value of `graphqlServerLive` with your live GraphQL server URI which you have copied in server deployment.
  - Git push to repository.
  - Use deploy on netlify button at very bottom of this file.
  - You can deploy any branch I will prefer deploying master as It have production ready code.
  - leave the netlify variables empty don't put anything.
  - This project already have a netlify config file, netlify will use this file.

> Happy deploying 😄

### Notes

- if husky hooks not working it can be because of husky didn't created hooks in `.husky` directory. To fix this run the following commands in root of this project.

```json
yarn add -D husky

npm set-script prepare "husky install" && yarn prepare // don't worry if this not work It just add prepare script to npm Scripts which is already added.

npx husky add .husky/pre-commit "yarn lint-staged"

git commit -m "added husky and lint-stagged" // here you will notice the lint-staged checking the files with help of husky
```

- <b>Client</b> application will run at port 3000 if available otherwise it will pick any available port.
- <b>Server</b> will be running at port 4000. <b>GraphQL</b> playground is available at `URL:4000/graphql`
- Server usages default mongoDB port which is `27017`, check `server/src/app/app.module.ts` for details.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Rajesh-Royal/Employee-Management-Dashboard)
````
