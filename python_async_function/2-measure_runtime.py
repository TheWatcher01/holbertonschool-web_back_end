#!/usr/bin/env python3

"""
Module: 2-measure_runtime.py
Author: TheWatcher01
Date: 2024-04-22
Description: This module measures the runtime of the wait_n coroutine.
"""

import asyncio
import time


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the runtime of the wait_n coroutine.

    This function measures the total runtime of the wait_n coroutine when
    executed n times with a maximum delay of max_delay. The runtime is then
    divided by n to get the average runtime per execution.

    Args:
        n (int): The number of times to execute the wait_n coroutine.
        max_delay (int): The maximum delay for the wait_n coroutine.

    Returns:
        float: The average runtime per execution of the wait_n coroutine.
    """
    start_time = time.perf_counter()  # Record the start time.
    asyncio.run(wait_n(n, max_delay))  # Run the wait_n coroutine n times.
    end_time = time.perf_counter()  # Record the end time after all executions.
    total_time = end_time - start_time  # Calculate the total runtime.
    return total_time / n  # Return the average runtime per execution.
