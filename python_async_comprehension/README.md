# Python - Async Comprehension Project

## Overview

This project is designed to explore and demonstrate the capabilities of asynchronous programming in Python, focusing particularly on asynchronous generators and comprehensions. It involves creating Python scripts that utilize asynchronous functions to perform tasks concurrently, thereby improving the efficiency of code execution.

## Technologies

- Python 3.7: The project uses Python 3.7, focusing on its asynchronous programming features.
- asyncio: A Python library used to write concurrent code using the async/await syntax.
- random: A Python module that implements pseudo-random number generators for various distributions.

## Features

The project consists of several tasks that incrementally build upon each other:

1. **Async Generator**: Implement an asynchronous generator that yields random numbers
2. **Async Comprehensions**: Use an asynchronous comprehension to collect values from the asynchronous generator.
3. **Measure Runtime**: Measure the execution time when running multiple async comprehensions concurrently.

## Prerequisites

Before running this project, ensure you have Python 3.7 installed on your system. You can verify your Python version by running:

```bash
python3 --version
```

## Setup

Clone the repository to your local machine:

```bash
git clone https://github.com/TheWatcher01/holbertonschool-back-end.git
cd python_async_comprehension
```

## Usage

Each script can be executed from the command line using the following command:

```bash
./script_name.py
```

Ensure that the scripts are executable:

```bash
chmod +x *.py
```

## Project Structure

- `0-async_generator.py`: Contains the asynchronous generator that yields random numbers.
- `1-async_comprehension.py`: Implements an async comprehension to collect values from the generator.
- `2-measure_runtime.py`: Measures and prints the runtime of multiple async comprehensions executed concurrently.

## Testing

To run the tests, execute each script individually. The expected output will be printed on the terminal, demonstrating the asynchronous operations.

## Code Style

This project adheres to PEP 8 standards. To check the coding style, you can use the `pycodestyle` tool:

```bash
pycodestyle .
```

## Contributing

Contributions to this project are welcome. Please ensure you follow the guidelines outlined in CONTRIBUTING.md.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

For any additional questions or comments, you can reach out via email at <teddydeberdt@gmail.com>.

```bash

### Explanation of the Sections:
- **Overview**: Describes the purpose and scope of the project.
- **Technologies**: Lists the technologies and libraries used in the project.
- **Features**: Details the tasks or main features of the project.
- **Prerequisites**: Instructions to check if the necessary software is installed.
- **Setup**: How to clone and set up the project locally.
- **Usage**: Instructions on how to run the scripts.
- **Project Structure**: Describes what each file in the repository is responsible for.
- **Testing**: How to run tests to verify the functionality.
- **Code Style**: Guidance on maintaining code style consistency.
- **Contributing**: How others can contribute to the project.
- **License**: Information about the project's license.
- **Contact**: How to contact the creator or maintainer for more information.

This `README.md` file should be placed in the root directory of your project to be easily accessible to anyone checking out your repository.
