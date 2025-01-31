#!/bin/bash

# Definition of folders and files to create
FULL_SERVER_DIR="full_server"
CONTROLLERS_DIR="$FULL_SERVER_DIR/controllers"
ROUTES_DIR="$FULL_SERVER_DIR/routes"

# Creating folders
mkdir -p "$FULL_SERVER_DIR" "$CONTROLLERS_DIR" "$ROUTES_DIR"

# Creating main project files
touch "0-console.js" "0-main.js"
touch "1-stdin.js" "1-main.js"
touch "2-read_file.js" "2-main_0.js" "2-main_1.js"
touch "3-read_file_async.js" "3-main_0.js" "3-main_1.js"
touch "4-http.js" "4-main.js"
touch "5-http.js" "5-main.js"
touch "6-http_express.js" "6-main.js"
touch "7-http_express.js" "7-main.js"

# Creating files for the structured server
touch "$FULL_SERVER_DIR/utils.js" "$FULL_SERVER_DIR/utils.test.js"
touch "$CONTROLLERS_DIR/AppController.js" "$CONTROLLERS_DIR/AppController.test.js"
touch "$CONTROLLERS_DIR/StudentsController.js" "$CONTROLLERS_DIR/StudentsController.test.js"
touch "$ROUTES_DIR/index.js" "$ROUTES_DIR/index.test.js"
touch "$FULL_SERVER_DIR/server.js" "$FULL_SERVER_DIR/server.test.js"

# Adding configuration files
touch "package.json"
touch "babel.config.js"
touch ".eslintrc.js"
touch "README.md"
touch "database.csv"

# Confirmation message
echo "All project files and folders have been created."

# Running bun install to install dependencies
bun install

# Post-creation instructions
echo "Dependencies have been installed."
echo "You can now start working on your project!"
