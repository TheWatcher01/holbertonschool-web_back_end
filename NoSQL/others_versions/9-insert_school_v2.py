#!/usr/bin/env python3
"""
Module: 9-insert_school.py
Author: TheWatcher01
Date: 2024-04-29
Description: This module contains a function that inserts a new document
into a MongoDB collection based on kwargs.
"""

from typing import Any
from pymongo.collection import Collection


def insert_school(mongo_collection: Collection, **kwargs: Any) -> Any:
    """
    Inserts a new document into a MongoDB collection based on kwargs.

    Parameters:
    - mongo_collection: A pymongo collection object
    - **kwargs: The data for the new document

    Returns:
    - The _id of the new document
    """
    new_doc = mongo_collection.insert_one(kwargs)
    return new_doc.inserted_id
