# Pagination Project

## Overview

This project focuses on implementing various pagination techniques for a dataset comprising popular baby names. The project includes simple pagination, hypermedia pagination, and deletion-resilient pagination techniques.

## Learning Objectives

By the end of this project, you should be able to:

- Paginate a dataset using basic parameters like `page` and `page_size`.
- Implement hypermedia pagination with metadata.
- Execute deletion-resilient pagination that prevents data loss when navigating pages despite deletions.

## Technical Requirements

- All scripts should run on Ubuntu 18.04 LTS using Python 3.7.
- Every file must end with a newline.
- The first line in all your files must be `#!/usr/bin/env python3`.
- Code should conform to the pycodestyle (version 2.5.*) guidelines.
- Every module and function must include comprehensive documentation.

## Setup

Use the `Popular_Baby_Names.csv` file for all pagination tasks. Ensure you understand the data structure to correctly implement pagination functions.

## Installation

Clone the repository using the following command:

```bash
git clone [Repository_URL]
```

Ensure that Python 3.7 is installed on your system. You can check your Python version with:

```bash
python3 --version
```

## Usage

To execute the scripts, after cloning the repository and navigating to the appropriate directory, use:

```bash
./script_name.py
```

Replace `script_name.py` with the actual script file you wish to run.

## Tasks

### Task 1: Simple Pagination

Implement a function that returns a tuple containing the start and end indices for paginating the dataset.

### Task 2: Hypermedia Pagination

Enhance the simple pagination to include hypermedia metadata such as next page, previous page, and total page count.

### Task 3: Deletion-Resilient Pagination

Develop a method that ensures no data element is missed by the user if deletions occur between two queries.
