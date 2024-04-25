#!/usr/bin/env python3

"""
Module: 2-main.py
Author: TheWatcher01
Date: 2024-04-24
Description: This module imports and utilizes the measure_runtime function
from the 2-measure_runtime module. It prints the result of the function.
"""

import asyncio

# Importing the measure_runtime function from the 2-measure_runtime module
measure_runtime = __import__('2-measure_runtime').measure_runtime


async def main():
    """
    Asynchronous function that returns result of measure_runtime function.

    This function awaits result of measure_runtime function and returns it.
    """
    return await measure_runtime()  # Return result of measure_runtime function

# Run the main function using the asyncio.run function and print the result
print(asyncio.run(main()))
