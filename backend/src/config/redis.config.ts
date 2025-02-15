import * as dotenv from "dotenv";
import Redis from "ioredis";

dotenv.config();

export const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});
