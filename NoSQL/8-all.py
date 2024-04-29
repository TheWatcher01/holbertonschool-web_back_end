#!/usr/bin/env python3
"""
Module: 8-all.py
Author: TheWatcher01
Date: 2024-04-29
Description: This module contains a function that retrieves all documents
from a MongoDB collection.
"""

from typing import List


def list_all(mongo_collection) -> List:
    """
    Retrieves all documents from a MongoDB collection.

    Parameters:
    - mongo_collection: A pymongo collection object

    Returns:
    - A list of documents from the collection. If the collection is empty,
    an empty list is returned.
    """
    documents = [doc for doc in mongo_collection.find()]
    return documents if documents else []
