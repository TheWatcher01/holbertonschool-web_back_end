#!/usr/bin/env python3

"""
File: 8-make_multiplier.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for creating multiplier function with type annotations.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a function that multiplies its input by a fixed number.

    Args:
    multiplier (float): The number to multiply by.

    Returns:
    Callable[[float], float]: Function that multiplies its input by multiplier.
    """
    def multiplier_func(number: float) -> float:
        return number * multiplier
    return multiplier_func
