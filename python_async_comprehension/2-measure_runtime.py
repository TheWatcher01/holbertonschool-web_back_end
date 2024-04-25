#!/usr/bin/env python3

"""
Module: 2-measure_runtime.py
Author: TheWatcher01
Date: 2024-04-24
Description: Module contains function that measures the runtime of the
async_comprehension function from the 1-async_comprehension module.
"""

import asyncio
import time

# Importing async_comprehension function from 1-async_comprehension module
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """
    Asynchronous function that measure runtime of async_comprehension function

    Function initiates start time, runs async_comprehension function four times
    concurrently, records the end time, and returns the elapsed time.
    """
    start_time = time.time()  # Record the start time
    tasks = [async_comprehension()
             for _ in range(4)]  # Create a list of four tasks
    await asyncio.gather(*tasks)  # Run the tasks concurrently
    end_time = time.time()  # Record the end time
    return end_time - start_time  # Return the elapsed time
