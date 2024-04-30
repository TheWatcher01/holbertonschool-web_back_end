#!/usr/bin/env python3
"""
File: 3-hypermedia_del_pagination.py
Author: TheWatcher01
Date: 2024-04-30
Description: This module contains a Server class that implements
deletion-resilient hypermedia pagination on database of popular baby names.
"""

import csv
from typing import List, Dict


class Server:
    """
    Server class to paginate a database of popular baby names. It includes
    methods to access the dataset, retrieve a specific page of data, and
    provide deletion-resilient hypermedia pagination.
    """
    DATA_FILE = "Popular_Baby_Names.csv"  # CSV file containing the dataset

    def __init__(self):
        # Initialize the dataset and indexed dataset to None
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """
        Returns the cached dataset. If the dataset is not loaded, it loads
        the dataset from the CSV file and caches it.

        Returns:
        List[List]: The dataset, excluding the header row.
        """
        # If the dataset is not loaded, load it
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                # Read the dataset from the CSV file, excluding the header row
                dataset = [row for row in reader][1:]
            self.__dataset = dataset

        # Return the cached dataset
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """
        Returns cached dataset indexed by sorting position, starting at 0.
        If indexed dataset is not loaded, it loads dataset from CSV file,
        truncates it to the first 1000 items, and caches it.

        Returns:
        Dict[int, List]: The indexed dataset, where each key is an index
        starting from 0 and each value is a row from the dataset.
        """
        # If the indexed dataset is not loaded, load it
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset
            # Create indexed dataset where each key is index starting from 0
            self.__indexed_dataset = {
                i: truncated_dataset[i] for i in range(len(truncated_dataset))
            }
        # Return the cached indexed dataset
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retrieves the requested page of the dataset with hypermedia pagination.

        Args:
        index (int): The index number. Defaults to 0 if not provided.
        page_size (int): The number of items per page.

        Returns:
        Dictionary containing index, next index, page size, and data. The
        'data' field contains the rows from dataset for the requested page.
        The 'next_index' field contains index for next page if it exists,
        otherwise it is None.
        """
        # If index is None, set it to 0
        if index is None:
            index = 0
        # Assert that the index is valid
        assert 0 <= index < len(self.__indexed_dataset)

        data = []
        current_index = index

        # While data size is less than page size & current index is in
        # indexed dataset
        while (len(data) < page_size and
                current_index in self.__indexed_dataset):
            # Append the data at the current index to the data list
            data.append(self.__indexed_dataset[current_index])
            # Increment the current index
            current_index += 1

        # Calculate the next index, if it exists
        next_index = current_index if len(data) == page_size else None

        # Return the hypermedia pagination data
        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index
        }
