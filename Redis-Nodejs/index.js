import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');
console.log("value of key :", value)

console.log(`\nFor more info visit Official docs : ${"https://redis.io/docs"} `);
console.log(`For more info visit Npm docs : ${"https://www.npmjs.com/package/redis"} `);
await client.disconnect();