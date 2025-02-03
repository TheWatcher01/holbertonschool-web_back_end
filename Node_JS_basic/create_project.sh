#!/bin/bash

# ANSI color codes for visual feedback
# These colors help distinguish between success and failure messages
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color (resets the color)

# Function to create a file and provide visual feedback
# Parameters:
#   $1: File path to create
create_file() {
    if touch "$1" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} Created: $1"
    else
        echo -e "${RED}✗${NC} Failed to create: $1"
        return 1
    fi
}

# Function to create a directory and provide visual feedback
# Parameters:
#   $1: Directory path to create
create_directory() {
    if mkdir -p "$1" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} Created directory: $1"
    else
        echo -e "${RED}✗${NC} Failed to create directory: $1"
        return 1
    fi
}

# Define main directory structure for the full server implementation
# These paths will be used throughout the script
FULL_SERVER_DIR="full_server"
CONTROLLERS_DIR="$FULL_SERVER_DIR/controllers"
ROUTES_DIR="$FULL_SERVER_DIR/routes"

echo "Creating project structure..."

# Create main directories for the server architecture
create_directory "$FULL_SERVER_DIR"
create_directory "$CONTROLLERS_DIR"
create_directory "$ROUTES_DIR"

echo -e "\nCreating main project files..."

# Create all required JavaScript files for the basic tasks
# Tasks 0-7 implement progressive features from basic Node.js to Express
for file in "0-console.js" "0-main.js" \
    "1-stdin.js" \
    "2-read_file.js" "2-main_0.js" "2-main_1.js" \
    "3-read_file_async.js" "3-main_0.js" "3-main_1.js" \
    "4-http.js" "5-http.js" \
    "6-http_express.js" "7-http_express.js"; do
    create_file "$file"
done

echo -e "\nCreating full server files..."

# Create utility and server files with their corresponding test files
for file in "utils.js" "utils.test.js" "server.js" "server.test.js"; do
    create_file "$FULL_SERVER_DIR/$file"
done

# Create controller files with their corresponding test files
for file in "AppController.js" "AppController.test.js" \
    "StudentsController.js" "StudentsController.test.js"; do
    create_file "$CONTROLLERS_DIR/$file"
done

# Create route files with their corresponding test files
for file in "index.js" "index.test.js"; do
    create_file "$ROUTES_DIR/$file"
done

echo -e "\nCreating configuration files..."

# Create essential project configuration files
# These files are necessary for Babel, ESLint, and project metadata
for file in "package.json" "babel.config.js" ".eslintrc.js" "README.md" "database.csv"; do
    create_file "$file"
done

echo -e "\nInstalling dependencies..."

# Check if Bun is installed and install dependencies
if command -v bun &>/dev/null; then
    bun install
    echo -e "${GREEN}Dependencies have been installed successfully using Bun.${NC}"
else
    echo -e "${RED}Bun is not installed. Please install Bun first: https://bun.sh${NC}"
    exit 1
fi

echo -e "\n${GREEN}Project setup complete!${NC}"
echo "You can now start working on your Node.js project!"
