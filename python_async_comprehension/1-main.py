#!/usr/bin/env python3

"""
Module: 1-main.py
Author: TheWatcher01
Date: 2024-04-24
Description: This module imports and utilizes the async_comprehension function
from the 1-async_comprehension module. It prints the result of the function.
"""

import asyncio

# Importing async_comprehension function from 1-async_comprehension module
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def main():
    """
    Asynchronous function that prints result of async_comprehension function.

    This function awaits result of async_comprehension function and prints it.
    """
    # Print result of async_comprehension function
    print(await async_comprehension())

# Run the main function using the asyncio.run function
asyncio.run(main())
