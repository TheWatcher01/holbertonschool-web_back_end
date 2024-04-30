#!/usr/bin/python3

"""
File: 2-hypermedia_pagination.py
Author: TheWatcher01
Date: 2024-04-30
Description: This module contains a Server class that paginates a database
of popular baby names. It includes methods to access the dataset, retrieve
a specific page of data, and provide hypermedia pagination.
"""

from typing import List, Tuple, Dict, Any
import csv


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Determines the start and end indices for a given page with a specific
    page size.

    Args:
    page (int): The current page number, indexed from 1.
    page_size (int): The number of items per page.

    Returns:
    Tuple[int, int]: A tuple containing the start and end indices for the
    items on the page.
    """
    # Calculate the start index
    start_index = (page - 1) * page_size
    # Calculate the end index
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """
    Server class to paginate a database of popular baby names. It includes
    methods to access the dataset, retrieve a specific page of data, and
    provide hypermedia pagination.
    """
    # Define the data file
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        # Initialize the dataset to None
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Returns the cached dataset. If the dataset is not loaded, it loads
        the dataset from the CSV file and caches it.

        Returns:
        List[List]: The dataset.
        """
        # If the dataset is not loaded, load it
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                # Read the dataset from the CSV file
                self.__dataset = [row for row in reader][1:]

        # Return the cached dataset
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
        # Assert that the page and page size are valid
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Get the start and end indices for the page
        start_index, end_index = index_range(page, page_size)

        # Get the dataset
        dataset = self.dataset()

        # Ensure end_index does not exceed dataset length
        end_index = min(end_index, len(dataset))

        # If the start index is within the dataset, return the page
        if start_index < len(dataset):
            return dataset[start_index:end_index]
        else:
            # If start index is not within dataset, return an empty list
            return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Retrieves the requested page of the dataset with hypermedia pagination.

        Args:
        page (int): The page number.
        page_size (int): The number of items per page.

        Returns:
        Dict[str, any]: Dictionary containing page size, page number, data,
        next page number, previous page number, and total number of pages.
        """
        # Assert that the page and page size are valid
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Get the page of the dataset
        page_dataset = self.get_page(page, page_size)
        # Get the total number of items in the dataset
        total_items = len(self.dataset())
        # Calculate the total number of pages
        total_pages = (total_items + page_size - 1) // page_size

        # Calculate the next page number, if it exists
        next_page = page + 1 if page * page_size < total_items else None
        # Calculate the previous page number, if it exists
        prev_page = page - 1 if page > 1 else None

        # Return the hypermedia pagination data
        return {
            "page_size": len(page_dataset),
            "page": page,
            "data": page_dataset,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
