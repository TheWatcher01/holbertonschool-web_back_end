#!/usr/bin/env python3

"""
Module: 0-main.py
Author: TheWatcher01
Date: 2024-04-24
Description: This module imports and utilizes the async_generator function
from the 0-async_generator module. It collects the yielded values into a list
and prints the list.
"""

import asyncio

# Importing the async_generator function from the 0-async_generator module
async_generator = __import__('0-async_generator').async_generator


async def print_yielded_values():
    """
    Asynchronous function that collects the yielded values from the
    async_generator function into a list and prints the list.

    This function initializes an empty list, then runs a loop for each value
    yielded by the async_generator function. Each yielded value is appended to
    the list. After all values have been collected, the list is printed.
    """
    result = []  # Initialize an empty list
    async for i in async_generator():  # Loop for each value yielded
        result.append(i)  # Append the yielded value to the list
    print(result)  # Print the list of collected values

# Run the print_yielded_values function using the asyncio.run function
asyncio.run(print_yielded_values())
