import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => {
  console.log("Redis Client Error", err);
});

client
  .connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((err) => {
    console.error("Failed to connect to Redis:", err);
  });

export default client;
