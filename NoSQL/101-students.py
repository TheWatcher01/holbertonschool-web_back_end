#!/usr/bin/env python3

"""
File: 101-students.py
Author: TheWatcher01
Date: 2024-04-30
Description: This module contains function that returns all students
sorted by average score in descending order.
"""


def top_students(mongo_collection):
    """
    Returns all students sorted by average score.

    Parameters:
    - mongo_collection: A pymongo collection object

    Returns:
    - A list of students sorted by average score in descending order
    """
    # Define the aggregation pipeline
    pipeline = [
        {
            # Unwind the 'topics' array into a stream of documents
            "$unwind": "$topics"
        },
        {
            # Group documents by '_id', preserving 'name' field and
            # calculating average score
            "$group": {
                "_id": "$_id",
                "name": {"$first": "$name"},
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {
            # Sort documents by 'averageScore' in descending order
            "$sort": {"averageScore": -1}
        }
    ]
    # Execute the aggregation pipeline and return the result as a list
    return list(mongo_collection.aggregate(pipeline))
