#!/usr/bin/env python3

"""
File: 3-tasks.py
Author: TheWatcher01
Date: 2024-04-22
Description: This module creates a task that waits for a random delay.
"""

import asyncio

# Import the wait_random coroutine.
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create a task that waits for a random delay.

    This function creates a task that waits for a random delay between 0 and
    max_delay seconds, then returns the task.

    Args:
        max_delay (int): The maximum delay in seconds.

    Returns:
        asyncio.Task: The task that will wait for the random delay.
    """
    # Create a task that waits for a random delay and return it.
    return asyncio.create_task(wait_random(max_delay))
