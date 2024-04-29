#!/usr/bin/env python3
"""
Module: 11-schools_by_topic.py
Author: TheWatcher01
Date: 2024-04-29
Description: This module contains a function that returns the list of school
having a specific topic.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic.

    Parameters:
    - mongo_collection: A pymongo collection object
    - topic: The topic to search for

    Returns:
    - A list of schools having the topic
    """
    schools = mongo_collection.find({"topics": topic})
    return list(schools)
