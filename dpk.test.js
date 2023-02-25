const { deterministicPartitionKey } = require("./dpk");
const crypto = require('crypto');

describe('deterministicPartitionKey', () => {
  const mockEvent = {
    foo: 'bar',
    baz: 123,
    partitionKey: 'testPartitionKey',
  };
  const MAX_PARTITION_KEY_LENGTH = 256;
  const TRIVIAL_PARTITION_KEY = '0';

  it('should return the partition key from the event', () => {
    const result = deterministicPartitionKey(mockEvent);
    expect(result).toEqual('testPartitionKey');
  });

  it('should create a hash from the event data if partition key is not present', () => {
    const mockEventWithoutPartitionKey = { foo: 'bar', baz: 123 };
    const mockHashWithoutPartitionKey = crypto
      .createHash('sha3-512')
      .update(JSON.stringify(mockEventWithoutPartitionKey))
      .digest('hex');
    const result = deterministicPartitionKey(mockEventWithoutPartitionKey);
    expect(result).toEqual(mockHashWithoutPartitionKey);
  });

  it('should convert non-string candidate to a string', () => {
    const mockEventWithNumber = { partitionKey: 123 };
    const result = deterministicPartitionKey(mockEventWithNumber);
    expect(result).toEqual('123');
  });

  it('should return a trivial partition key if candidate is falsy', () => {
    const mockEventWithoutData = undefined;
    const result = deterministicPartitionKey(mockEventWithoutData);
    expect(result).toEqual(TRIVIAL_PARTITION_KEY);
  });

  it('should create a hash from candidate if candidate length exceeds max partition key length', () => {
    const longCandidate = 'x'.repeat(MAX_PARTITION_KEY_LENGTH + 1);
    const mockEvent = { partitionKey: longCandidate }
    const mockHash = crypto.createHash('sha3-512').update(longCandidate).digest('hex');
    const result = deterministicPartitionKey(mockEvent);
    expect(result).toEqual(mockHash);
  });
});
