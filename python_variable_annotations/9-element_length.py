#!/usr/bin/env python3

"""
File: 9-element_length.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for demonstrating duck typing with iterable
objects and returning a list of tuples with type annotations.
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    List of tuples containing elements from an iterable and their lengths.

    Args:
    lst (Iterable[Sequence]): The iterable of sequences.

    Returns:
    List[Tuple[Sequence, int]]: List of tuples where each tuple contains
    sequence from iterable & its length.
    """
    return [(element, len(element)) for element in lst]
