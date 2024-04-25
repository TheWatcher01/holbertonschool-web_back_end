#!/usr/bin/env python3

"""
File: 7-to_kv.py
Author: TheWatcher01
Date: 2024-04-22
Description: Converting string & number (int or float) to tuple with
number squared, using type annotations.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Convert a string and a number to a tuple with the number squared.

    Args:
    k (str): The string part of the tuple.
    v (Union[int, float]): The number to be squared.

    Returns:
    Tuple[str, float]: Tuple where first element is string & second
    is square of the number.
    """
    return (k, v ** 2)
