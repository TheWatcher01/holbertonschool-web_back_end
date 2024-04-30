#!/usr/bin/env python3

"""
File: 0-simple_helper_function.py
Author: TheWatcher01
Date: 2024-04-30
Description: This module contains a function to assist with pagination.
It returns a tuple of start and end indices for a given page size.
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Determines the start and end indices for a given page with a specific
    page size.

    Args:
    page (int): The current page number, indexed from 1.
    page_size (int): The number of items per page.

    Returns:
    tuple: A tuple containing the start and end indices for the items on
    the page.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
