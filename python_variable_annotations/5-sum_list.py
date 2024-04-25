#!/usr/bin/env python3

"""
File: 5-sum_list.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for summing a list of floats with type annotations.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sum a list of floats and return the total.

    Args:
    input_list (List[float]): The list of floats to sum.

    Returns:
    float: The sum of all floats in the list.
    """
    return sum(input_list)
