#!/usr/bin/env python3
"""
Module: 10-update_topics.py
Author: TheWatcher01
Date: 2024-04-29
Description: This module contains a function that changes all topics
of a school document based on the name.
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.

    Parameters:
    - mongo_collection: A pymongo collection object
    - name: The name of the school to update
    - topics: The new list of topics

    Returns:
    - None
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
