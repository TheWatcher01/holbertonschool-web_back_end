#!/usr/bin/env python3

"""
File: 101-safely_get_value.py
Author: TheWatcher01
Date: 2024-04-22
Description: Module for getting values from mapping with advanced type
annotations.
"""

from typing import Mapping, TypeVar, Any, Union, Optional

T = TypeVar('T')  # Declare type variable


def safely_get_value(dct: Mapping, key: Any, default:
                     Optional[T] = None) -> Union[Any, T]:
    """
    Get a value from a dictionary safely.

    If the key is in the dictionary, return the corresponding value.
    If the key is not in the dictionary, return the default value.

    Parameters:
    dct (Mapping): The dictionary to get the value from.
    key (Any): The key to look for in the dictionary.
    default (Optional[T]): Default value to return if key is not in dictionary.

    Returns:
    Union[Any, T]: The value from the dictionary or the default value.
    """
    if key in dct:
        return dct[key]
    else:
        return default
