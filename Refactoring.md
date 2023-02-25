# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- This code checks if an event object is provided. If it is, the function generates a candidate partition key by hashing the JSON representation of the event object using the SHA3-512 algorithm provided by the crypto module. If event.partitionKey is available, the value of candidate is set to event.partitionKey instead of hashing the event object. The double question marks ?? is a nullish coalescing operator, which means that if event.partitionKey is null or undefined, the expression on the right side of ?? will be evaluated.

- After generating the candidate partition key, the function checks if the candidate value is a string. If it's not, the candidate value is converted to a string by calling JSON.stringify().

- Next, the function checks if the length of the candidate value exceeds MAX_PARTITION_KEY_LENGTH. If it does, the candidate value is hashed again using the SHA3-512 algorithm, and the resulting hash value is used as the partition key.

- Finally, if the candidate value is still falsy (e.g., null or undefined), the TRIVIAL_PARTITION_KEY value is returned as the partition key.