#!/usr/bin/env python3

"""
File: 1-simple_pagination.py
Author: TheWatcher01
Date: 2024-04-30
Description: This module contains a Server class that paginates a database
of popular baby names. It also includes a helper function to calculate
the start and end indices for a given page with a specific page size.
"""

from typing import List
import csv


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


class Server:
    """
    Server class to paginate a database of popular baby names. It includes
    methods to access the dataset and retrieve a specific page of data.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Returns the cached dataset. If the dataset is not loaded, it loads
        the dataset from the CSV file and caches it.

        Returns:
        List[List]: The dataset.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieves the requested page of the dataset.

        Args:
        page (int): The page number.
        page_size (int): The number of items per page.

        Returns:
        List[List]: The dataset page.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start_index, end_index = index_range(page, page_size)

        dataset = self.dataset()

        if start_index < len(dataset):
            return dataset[start_index:end_index]
        else:
            return []
