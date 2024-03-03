import { createClient } from "redis";

const url = process?.env?.REDIS_CONNECTION_URL || "redis://localhost:6380"; // Initialize the Redis client
const password = process?.env?.REDIS_PASSWORD || ""; // Initialize the Redis client
const client = createClient({
  password,
  url,
});

client.on("connect", () => console.log("Connected to Redis"));
client.on("error", (err) => console.error("Redis Client Error", err));

// Connect to Redis
client.connect();

export const insert = (key: string, value: string) => {
  client.set(key, value);
};

export const ifExistGet = async (key: string) => {
  const exist = await client.exists(key);
  if (exist === 1) {
    return JSON.parse((await client.get(key)) || "{}");
  }
  return false;
};
