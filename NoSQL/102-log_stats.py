#!/usr/bin/env python3

"""
File: 102-log_stats.py
Author: TheWatcher01
Date: 2024-04-29
Description: Module provides some stats about Nginx logs stored in MongoDB.

Security Note:
Never embed credentials (like database passwords) directly in your code.
Instead, use a secure method like environment variables or configuration files
to keep this information separate from your code.
"""

from pymongo import MongoClient

# Establish a connection to the MongoDB database
client = MongoClient('mongodb://127.0.0.1:27017')

# Access the 'nginx' collection in the 'logs' database
logs_collection = client.logs.nginx


def print_stats():
    """
    Prints some stats about Nginx logs stored in MongoDB.
    """
    # Count the total number of documents in the collection
    total = logs_collection.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    # Iterate over each HTTP method
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        # Use count_documents method of collection to count number of documents
        # where the 'method' field matches the current HTTP method
        count = logs_collection.count_documents({"method": method})
        # Print the HTTP method and the count
        print(f"\tmethod {method}: {count}")

    # Count the number of documents with the GET method and /status path
    status_check = logs_collection.count_documents(
        {"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

    print("IPs:")
    # Use aggregate method of collection to group documents by 'ip',
    # count number of documents for each 'ip', sort by count in descending
    # order, and limit result to top 10.
    ip_stats = logs_collection.aggregate([
        {"$group": {"_id": "$ip", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 10}
    ])
    # Print each 'ip' and its count
    for ip in ip_stats:
        print(f"\t{ip['_id']}: {ip['count']}")


if __name__ == "__main__":
    print_stats()
