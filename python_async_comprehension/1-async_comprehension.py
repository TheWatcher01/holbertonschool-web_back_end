#!/usr/bin/env python3

"""
Module: 1-async_comprehension.py
Author: TheWatcher01
Date: 2024-04-24
Description: This module contains an asynchronous function that uses an
asynchronous generator to generate a list of random numbers.
"""

from typing import List

# Import the async_generator function from the 0-async_generator module
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Asynchronously generate a list of random numbers.

    This function uses the async_generator function to asynchronously generate
    a list of random numbers between 0 and 10. It uses an asynchronous list
    comprehension to create the list from the generator.

    Returns:
        List[float]: A list of random numbers between 0 and 10.
    """
    # Use an asynchronous list comprehension to create a list from generator
    return [num async for num in async_generator()]
