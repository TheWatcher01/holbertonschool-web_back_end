#!/usr/bin/env python3

"""
File: 102-type_checking.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for demonstrating type checking with MyPy.
"""

from typing import List, Tuple


def zoom_array(lst: Tuple[int, ...], factor: int = 2) -> List[int]:
    """
    Zoom array by a factor of two.

    Args:
    lst (Tuple[int, ...]): Tuple of integers to zoom.
    factor (int): Factor to zoom by. Defaults to 2.
    """
    zoomed_in: List[int] = [
        item for item in lst
        for _ in range(factor)
    ]
    return zoomed_in
