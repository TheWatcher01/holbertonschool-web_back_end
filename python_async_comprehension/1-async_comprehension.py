#!/usr/bin/env python3

"""
File: 1-async_comprehension.py
Author: TheWatcher01
Date: 2024-04-24
Description: Description
"""

import asyncio

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """
    Asynchronous function that utilizes async generator to create a list of
    random numbers between 0 and 10.

    Function creates a list of random numbers between 0 and 10 using an
    asynchronous generator. It awaits the generator and returns the list.
    """
    return [i async for i in async_generator()]
