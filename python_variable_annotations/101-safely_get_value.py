#!/usr/bin/env python3

"""
File: 101-safely_get_value.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for getting values from mapping with advanced type
annotations.
"""

from typing import Mapping, TypeVar, Any, Optional

T = TypeVar('T')  # Declare type variable


def safely_get_value(dct: Mapping[Any, T], key: Any,
                     default: Optional[T] = None) -> Optional[T]:
    """
    Get value from dictionary by key with a default if the key does not exist.

    Args:
    dct (Mapping[Any, T]): Dictionary to get the value from.
    key (Any): Key to look for in the dictionary.
    default (Optional[T]): Optional default value to return if key does not
    exist. Defaults to None.
    """
    return dct.get(key, default)
