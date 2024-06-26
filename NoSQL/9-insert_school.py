#!/usr/bin/env python3
"""
Module: 9-insert_school.py
Author: TheWatcher01
Date: 2024-04-29
Description: This module contains a function that inserts a new document
into a MongoDB collection based on kwargs.
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document into a MongoDB collection based on kwargs.

    Parameters:
    - mongo_collection: A pymongo collection object
    - **kwargs: The data for the new document

    Returns:
    - The _id of the new document
    """
    insert_new_doc = kwargs
    _id = mongo_collection.insert_one(insert_new_doc)
    return _id.inserted_id
