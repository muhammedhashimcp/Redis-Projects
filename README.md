What is Redis?
Redis is an open-source, in-memory data structure store that can be used as a cache, database, and message broker. It stands for Remote Dictionary Server and is known for its speed, simplicity, and versatility. Redis stores data in key-value pairs and supports various data types, including strings, lists, sets, hashes, and more. It is widely used for caching frequently accessed data, real-time analytics, leaderboard functionality, and session management.

Redis CLI (Command Line Interface):
The Redis CLI is a command-line tool that allows you to interact with Redis directly from the terminal or command prompt. You can use it to perform various operations like setting values, getting values, deleting keys, and more. It's a handy tool for testing and debugging Redis commands.

How to Connect Redis with Node.js:
To connect Redis with Node.js, you'll need to follow these steps:

Step 1: Install Redis
Make sure you have Redis installed on your system. You can download and install it from the official website (https://redis.io/download), or if you're using a package manager like Homebrew (Mac) or apt-get (Linux), you can install it using those tools.

Step 2: Install Redis Client for Node.js
You'll need a Node.js Redis client to interact with Redis from your Node.js application. One of the popular libraries is "ioredis," which is a robust and feature-rich Redis client.

Redis CLI provides several commands that you can use to interact with the Redis server. Here are some of the most commonly used commands:

1. **SET key value**: Set the value of a key.

2. **GET key**: Get the value of a key.

3. **DEL key [key ...]**: Delete one or more keys.

4. **EXISTS key**: Check if a key exists.

5. **TYPE key**: Get the type of a key.

6. **KEYS pattern**: Find all keys matching a given pattern.

7. **TTL key**: Get the time-to-live (expiration time) of a key.

8. **EXPIRE key seconds**: Set a key's time-to-live in seconds.

9. **PERSIST key**: Remove the expiration from a key.

10. **INCR key**: Increment the integer value of a key by 1.

11. **DECR key**: Decrement the integer value of a key by 1.

12. **HSET key field value**: Set the value of a field in a Redis hash.

13. **HGET key field**: Get the value of a field in a Redis hash.

14. **HDEL key field [field ...]**: Delete one or more fields from a Redis hash.

15. **LPUSH key value [value ...]**: Insert one or more values at the head of a list.

16. **RPUSH key value [value ...]**: Insert one or more values at the tail of a list.

17. **LPOP key**: Remove and get the first element of a list.

18. **RPOP key**: Remove and get the last element of a list.

19. **LRANGE key start stop**: Get a range of elements from a list.

20. **SADD key member [member ...]**: Add one or more members to a Redis set.

21. **SMEMBERS key**: Get all the members of a Redis set.

22. **SREM key member [member ...]**: Remove one or more members from a Redis set.

23. **ZADD key score member [score member ...]**: Add one or more members to a sorted set.

24. **ZRANGE key start stop [WITHSCORES]**: Get a range of members from a sorted set.

25. **ZRANK key member**: Get the rank of a member in a sorted set.

26. **PUBLISH channel message**: Publish a message to a channel.

27. **SUBSCRIBE channel [channel ...]**: Subscribe to one or more channels for real-time messaging.

These are just a few examples of the many commands available in Redis CLI. You can find a complete list of commands and their descriptions in the official Redis documentation: https://redis.io/commands

To use these commands, you can simply run the `redis-cli` command in your terminal or command prompt, and then type the desired command along with any necessary arguments. For example:

```
$ redis-cli
> SET myKey "Hello, Redis!"
> GET myKey
```

For more info visit Official docs : https://redis.io/docs
NPM DOCS : https://www.npmjs.com/package/redis