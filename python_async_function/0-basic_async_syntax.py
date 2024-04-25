#!/usr/bin/env python3

"""
Module: 0-basic_async_syntax.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module demonstrates use of asynchronous coroutines in Python.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Pause the execution of the coroutine for a random delay.

    This function is a coroutine that will pause its execution for a random
    delay between 0 and max_delay seconds, then return the delay.

    Args:
        max_delay (int): The maximum delay in seconds. Defaults to 10.

    Returns:
        float: The actual delay in seconds that the function paused for.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
