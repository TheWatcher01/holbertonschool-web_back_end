#!/usr/bin/env python3

"""
File: 4-tasks.py
Author: TheWatcher01
Date: 2024-04-22
Description: This module creates a task that waits for a random delay.
"""

import asyncio


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list:
    """
    Create a task that waits for a random delay n times.

    This function creates a task that waits for a random delay between 0 and
    max_delay seconds, n times, then returns the list of delays.

    Args:
        n (int): The number of delays to wait for.
        max_delay (int): The maximum delay in seconds.

    Returns:
        list: The list of delays in seconds that the function waited for.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]  # Create task list
    completed_delays = []
    for task in asyncio.as_completed(tasks):  # Wait for tasks to complete
        completed_delays.append(await task)  # Append the completed delay
    return completed_delays  # Return the list of completed delays
