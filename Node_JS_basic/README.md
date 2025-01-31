# **Node.js Basics Project**

This project is a hands-on introduction to Node.js, designed to familiarize you with the core concepts of backend development using Node.js. Through a series of progressive exercises, you will learn how to handle input/output operations, manage files, create HTTP servers, and work with the Express.js framework.

## **Learning Objectives**

By the end of this project, you will be able to:

- Execute JavaScript using Node.js
- Use Node.js modules for advanced functionalities
- Read files using synchronous and asynchronous methods
- Utilize the Node.js process to access command-line arguments
- Create HTTP servers with both native Node.js and Express.js
- Implement ES6 features in Node.js with Babel
- Speed up development using Nodemon

## **Prerequisites**

- **Ubuntu 20.04 LTS**
- **Node.js v20.x.x**
- **npm** (Node.js package manager)
- **A code editor** (Vi, Vim, Emacs, or Visual Studio Code)

## **Installation**

### **1. Clone the repository**

```bash
git clone [REPO_URL]
cd Node_JS_basic
```

### **2. Run the setup script**

The setup script will install the necessary dependencies and configure the project architecture.
Ensure the script has execution permissions and then execute it:

```bash
chmod +x setup_project.sh
bash setup_project.shell
```

## **Project Structure**

```bash
Node_JS_basic/
│
├── database.csv         # Student data file
├── package.json         # Project configuration
├── babel.config.js      # Babel configuration
├── .eslintrc.js         # ESLint configuration
│
├── 0-console.js         # Task: Basic console output
├── 1-stdin.js           # Task: Using stdin
├── 2-read_file.js       # Task: Synchronous file reading
├── 3-read_file_async.js # Task: Asynchronous file reading
├── 4-http.js            # Task: Simple HTTP server
├── 5-http.js            # Task: Advanced HTTP server
├── 6-http_express.js    # Task: Simple Express server
├── 7-http_express.js    # Task: Advanced Express server
│
└── full_server/         # Complete Express application
    ├── utils.js
    ├── server.js
    ├── routes/
    └── controllers/
```

## **Exercises**

1. **Basic JavaScript Execution with Node.js** (`0-console.js`)
   - Create a simple function to print output to the console.

2. **Using Process stdin** (`1-stdin.js`)
   - Interactive user input handling.

3. **Synchronous File Reading** (`2-read_file.js`)
   - Manipulating CSV files.
   - Parsing student data.

4. **Asynchronous File Reading** (`3-read_file_async.js`)
   - Asynchronous version of the previous task.
   - Working with Promises.

5. **Creating a Simple HTTP Server** (`4-http.js`)
   - Using the native HTTP module.
   - Handling basic requests.

6. **Advanced HTTP Server** (`5-http.js`)
   - Handling multiple routes.
   - Integrating file reading.

7. **Simple Express Server** (`6-http_express.js`)
   - Introduction to Express.js.
   - Basic routing.

8. **Advanced Express Server** (`7-http_express.js`)
   - Complex routing.
   - File reading integration.

9. **Complete Express Application** (`full_server/`)
   - MVC architecture.
   - ES6/Babel integration.
   - Advanced routing and controllers.

## **Testing**

To run tests:

```bash
npm run test
```

To check code style:

```bash
npm run lint
```

To execute all tests:

```bash
npm run full-test
```

## **Development Mode**

To enable automatic reloading during development:

```bash
npm run dev
```

## **Documentation**

The full API documentation and usage examples are available in the source code of each exercise.

## **Important Notes**

- **All files must end with a newline.**
- **Code must follow ESLint style rules.**
- **All functions and classes must be exported using the following format:**  

  ```javascript
  module.exports = myFunction;
  ```

## **Author**

**[Teddy Deberdt]**
