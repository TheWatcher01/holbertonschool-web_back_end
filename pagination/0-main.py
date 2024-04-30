#!/usr/bin/env python3
"""
Main file
"""

# Import the index_range function from the helper module
index_range = __import__('0-simple_helper_function').index_range

# Get the start and end indices for the first page with 7 items per page
res = index_range(1, 7)
# Print the type of the result and the result itself
print(type(res))
print(res)

# Get the start and end indices for the third page with 15 items per page
res = index_range(page=3, page_size=15)
# Print the type of the result and the result itself
print(type(res))
print(res)
