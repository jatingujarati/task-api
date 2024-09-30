# Tasks API - NestJS Project

This project is a backend API developed using NestJS. It provides an API for managing tasks, including CRUD operations. The project uses TypeORM for database management and integrates Swagger for API documentation.

## Features

- CRUD operations for Task management.
- MySQL database integration using TypeORM.
- Authentication using custom middleware.
- Environment-based configuration with `dotenv`.
- Error handling using custom HTTP Exception filters.
- API documentation using Swagger.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jatingujarati/task-api.git
   cd tasks-api
   ```

2. **Install Dependencies**

   Install the required dependencies using npm or yarn:

   ```bash
   npm install

   ```

3. **Environment Variables**

   Create a `.env` file in the root of the project and add the following environment variables:

   ```env
   PORT=3000
   DB_TYPE=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=root
   DB_NAME=tasks_db
   ```

4. **Run the Application**

   Start the application in development mode:

   ```bash
   npm run start:dev
   ```

   The application will run by default on `http://localhost:3000`.

## API Documentation

The project uses Swagger for API documentation. Once the application is running, you can access the Swagger UI at:

```
http://localhost:3000/api
```

## Project Structure

- **`src/`**: Contains the core code for the application.
  - **`app.module.ts`**: Main module for the application.
  - **`task/`**: Contains modules, services, controllers, and entities for managing tasks.
  - **`auth/`**: Contains modules and services for authentication.
  - **`filters/`**: Custom exception filters for handling errors.

## Built With

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [TypeORM](https://typeorm.io/) - An ORM for TypeScript and JavaScript.
- [MySQL](https://www.mysql.com/) - The database used for this project.

## Contact

- **Author**: Jatin Gujarati
- **LinkedIn**: [linkedin.com/in/jatin-gujarati](https://www.linkedin.com/in/jatin-gujarati)
