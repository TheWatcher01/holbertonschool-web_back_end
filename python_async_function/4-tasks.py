#!/usr/bin/env python3

"""
File: 4-tasks.py
Author: TheWatcher01
Date: 2024-04-22
Description: This module creates a task that waits for a random delay.
"""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Pause the execution of the coroutine for a random delay n times.

    This function is a coroutine that will pause its execution for a random
    delay between 0 and max_delay seconds, n times, then return the delays.

    Args:
        n (int): The number of delays to pause for.
        max_delay (int): The maximum delay in seconds.

    Returns:
        List[float]: The actual delays in seconds that the function paused for.
    """
    tasks = [task_wait_random(max_delay)
             for _ in range(n)]  # Create a list of tasks
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
