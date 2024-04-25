#!/usr/bin/env python3

"""
File: 102-type_checking.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for demonstrating type checking with MyPy.
"""

from typing import Tuple, List


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """
    Zooms in on a list.

    Function takes tuple and an integer factor. It returns a list that
    contains each item in the tuple repeated factor times.

    Parameters:
    lst (Tuple): The tuple to zoom in on.
    factor (int): The number of times to repeat each item. Defaults to 2.

    Returns:
    List: The zoomed in list.
    """
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)
