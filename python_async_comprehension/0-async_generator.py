#!/usr/bin/env python3

"""
Module: 0-async_generator.py
Author: TheWatcher01
Date: 2024-04-24
Description: This module contains an asynchronous generator function that
yields a random number between 0 and 10, ten times.
"""

import asyncio
import random


async def async_generator():
    """
    Asynchronous generator function that yields a random number between
    0 and 10.

    Function runs a loop ten times. In each iteration, it pauses for one
    second and then yields a random number between 0 and 10.
    """
    for _ in range(10):  # Loop runs ten times
        await asyncio.sleep(1)  # Pauses execution for one second
        yield random.uniform(0, 10)  # Yields a random number between 0 and 10
