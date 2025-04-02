# Kanban-Board
This is a message board that helps teams visualize work, collaborate on work in progress, and track progress by moving tasks through different stages of a workflow.

  ## Description
  
  This is a full stack application using React, Vite, and Typescript to access a Kanban Board webpage to keep up on tasks and manage work flow in a secure space.
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contributions](#contributions)
  - [Tests](#tests)
  
  ## Installation
  
  In order to install the required dependencies to run the application, type in the following code 
  ~
  npm i
  ~

  In order to build the database, type in the following code
  ~
  psql -U postgres
  ~
  You will be prompted to input the password associated with the postgreSQL account you made, then type in the following command to run the schema
  ~
  \i server/db/schema.sql
  ~

  In order to build out the Vite portion, type in the following code
  ~
  npm run build
  ~

  In order to seed the application, type in the following code
  ~
  npm run seed
  ~

  Then to run the Vite application locally for development, type in the following code
  ~
  npm run start:dev
  `
  
  ## Usage
  
  This application is intended to access a Kanban Board associated with a coding project to stay up to date on tasks and exchange thoughts and ideas in a secure space.

  Login in with the username: JollyGuru and the password: password
      
  Here is a link to the deployed application on Render!
  
  (https://kanban-board-q3qp.onrender.com)
  
  ## Credits
  
  The creator of this README file is Schanze117.
  
  You can reach them at aaronschanzenbach@gmail.com if you have any questions or concerns!
  
  ## License
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ---
  
  ## Features
  
  This project uses the React, Vite, and TypeScript packages.
  
  ## How to Contribute
  
  I welcome any and all constructive criticism!
