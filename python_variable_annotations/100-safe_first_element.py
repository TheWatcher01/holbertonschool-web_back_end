#!/usr/bin/env python3

"""
File: 100-safe_first_element.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for safely getting first element of sequence with
type annotations.
"""

from typing import Sequence, Any, Optional


def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """
    Safely returns first element of sequence, or None if sequence is empty.

    Args:
    lst (Sequence[Any]): Sequence of elements from wich to get first element.

    Returns:
    Optional[Any]: First element of sequence, or None if sequence is empty.
    """
    return lst[0] if lst else None
