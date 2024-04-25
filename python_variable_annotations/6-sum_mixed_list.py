#!/usr/bin/env python3

"""
File: 6-sum_mixed_list.py
Author: TheWatcher01
Date: 2024-04-22
Description: Summing mixed list of integers & floats with type annotations.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sum a mixed list of integers and floats and return the total.

    Args:
    mxd_lst (List[Union[int, float]]): List of integers and floats to sum.

    Returns:
    float: The sum of all numbers in the list.
    """
    return sum(mxd_lst)
