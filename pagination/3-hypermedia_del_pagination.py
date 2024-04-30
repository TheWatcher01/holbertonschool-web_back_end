#!/usr/bin/env python3
"""
File: 3-hypermedia_del_pagination.py
Author: TheWatcher01
Date: 2024-04-30
Description: This module contains a Server class that paginates a database
of popular baby names. It includes methods to access the dataset, retrieve
a specific page of data, and provide hypermedia pagination.
"""

import csv
from typing import List, Dict


class Server:
    """
    Server class to paginate a database of popular baby names. It includes
    methods to access the dataset, retrieve a specific page of data, and
    provide hypermedia pagination.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        # Initialize the dataset and indexed dataset to None
        self.__dataset = None
        self.__indexed_dataset = None

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
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip header

        # Return the cached dataset
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """
        Returns cached dataset indexed by sorting position, starting at 0.
        If indexed dataset is not loaded, it loads dataset from CSV file,
        truncates it to the first 1000 items, and caches it.

        Returns:
        Dict[int, List]: The indexed dataset.
        """
        # If the indexed dataset is not loaded, load it
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset
            self.__indexed_dataset = {
                i: truncated_dataset[i] for i in range(len(truncated_dataset))
            }
        # Return the cached indexed dataset
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retrieves the requested page of the dataset with hypermedia pagination.

        Args:
        index (int): The index number.
        page_size (int): The number of items per page.

        Returns:
        Dictionary containing index, next index, page size, and data.
        """
        # If index is None, set it to 0
        if index is None:
            index = 0
        # Assert that the index is valid
        assert 0 <= index < len(self.__indexed_dataset)

        data = []
        current_index = index
        dataset_keys = sorted(self.__indexed_dataset.keys())

        # While data size is less than page size and current index is less
        # than length of dataset keys
        while len(data) < page_size and current_index < len(dataset_keys):
            # If the current index is in the indexed dataset, append the data
            if dataset_keys[current_index] in self.__indexed_dataset:
                data.append(
                    self.__indexed_dataset[dataset_keys[current_index]])
            current_index += 1

        # Calculate the next index, if it exists
        next_index = dataset_keys[current_index] if current_index < len(
            dataset_keys) else None

        # Return the hypermedia pagination data
        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index,
        }
