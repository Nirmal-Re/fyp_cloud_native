// import { createClient } from "redis";

// // Initialize the Redis client
// const client = createClient({
//   url: "redis://redis-database:6379", // Adjust the URL as needed
// });

// client.on("error", (err) => console.error("Redis Client Error", err));

// // Connect to Redis
// client.connect();

// export const insert = (key: string, value: string) => {
//   client.set(key, value);
// };

// export const get = async (key: string) => {
//   return await client.get(key);
// };
