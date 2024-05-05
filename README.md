# Project Title: **YumMe**

![Project Image](https://i.ibb.co/kBPxgyh/yumme-Logo2.png)

- [Project Title: **YumMe**](#project-title-yumme)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technology Stack](#technology-stack)
  - [Installation](#installation)
  - [Use Cases - Diagram](#use-cases)
  - [Architecture](#architecture)
    - [Key Concepts](#key-concepts)
  - [Git Workflow](#git-workflow)
  - [Docs and Resources](#docs-and-resources)
  - [Contributing](#contributing)

## Introduction

This web app is a dynamic platform where culinary enthusiasts can upload and discover various recipes. It provides a user-friendly interface for users to share their unique recipes and explore a wide array of culinary creations through a simple search feature.

## Features

- **Browse Recipes** Users can explore a wide range of recipes uploaded by other users.
- **Upload Recipes:** Users can easily upload their recipe details, including ingredients, preparation steps, and images.
- **Store as favorites** Users can save their favorite recipes for easy access.
- **Share opinions** Users can leave comments and ratings on recipes.
- **Responsive Design:** Crafted with React and TailwindCSS, the app showcases a responsive design that adapts seamlessly to different device screens.

## Technology Stack

- **Frontend:** React.js <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="30" height="30" alt="React" /></a>, TailwindCSS <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="30" height="30" alt="TailwindCSS" /></a>
- **Backend:** Spring Boot <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="30" height="30"/></a>
- **Database:** MySQL <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="30" height="30" alt="MySQL" /></a>

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/almarvima/yumme.git

   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name

   ```

3. Install dependencies:

   ```bash
   # For the frontend
   npm install

   # For the backend
   mvn install

   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```

This will serve the frontend on: http://localhost:5173

5. For the backend, ensure you're in the backend directory and then start the Spring Boot application:
   ```sh
   ./mvnw spring-boot:run
   ```

The application should now be running, with the frontend accessible on http://localhost:5173 and the backend on its respective port (commonly http://localhost:8080).

## Use Cases - Diagram
![Use Cases - Diagram](https://i.ibb.co/M99zMFg/useCases.png)


## Architecture

This project uses a **RESTful API** architecture to create a scalable and maintainable application. RESTful APIs are designed around resources, which are any kind of object, data, or service that can be accessed by the client. Each resource is identified by a unique URI (Uniform Resource Identifier). The client interacts with the API by sending requests to these URIs, which correspond to the resources.

### Key Concepts

**Resources**: In a RESTful API, resources are the key abstractions. They represent entities that the API manipulates. Each resource is uniquely identified by a URI (Uniform Resource Identifier).

**HTTP Methods**: RESTful APIs use standard HTTP methods to perform operations on resources. The commonly used HTTP methods are:

- GET: Retrieve a resource.
- POST: Create a new resource.
- PUT: Update an existing resource.
- DELETE: Remove a resource.

**Statelessness**: RESTful APIs are stateless, meaning that each request from a client must contain all the information necessary to understand and fulfill the request. The server does not store any client context between requests.

**Uniform Interface**: RESTful APIs have a uniform interface that simplifies and decouples the architecture. It typically includes:

- Resource identification in requests.
- Use of standard HTTP methods.
- Use of hypermedia as the engine of application state (HATEOAS), allowing the client to navigate the API dynamically.

Representation: Resources in RESTful APIs are represented in a standardized format, such as JSON or XML. Clients can request different representations of a resource using content negotiation.

---

The project structure is as follows:

- **Backend:** Contains the Spring Boot application.
- **Frontend:** Contains the React application.

If you need more info, you should consult official documentation for [Spring Boot](https://spring.io/projects/spring-boot) and [React](https://reactjs.org/).

## Git Workflow

This project uses the **Feature Branch Workflow** for managing branches and pull requests. The Feature Branch Workflow is a Git workflow design that helps streamline the development process. It involves creating a new branch for each new feature or bug fix and merging it back into the main branch once the feature is complete.

![GitWorkflow](https://i.ibb.co/zZhnZyt/workflow-git.png)

## Docs and Resources

Each project has its code well documented, moreover you can find the docs folders in each projects with technical documentation generated with JSDoc and JavaDoc.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch: git swithc -c your-branch-name.
- Make your changes and commit them: git commit -am 'Add some feature'
- Push to the original branch: git push origin your-repo-name/your-branch-name
- Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
