import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const client = new MongoClient(process.env.MONGODB_URI);


await client.connect();

const db = client.db("BookMart");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),


  secret: process.env.AUTH_SECRET,

  baseURL: process.env.AUTH_URL || "http://localhost:3000",

  emailAndPassword: {
    enabled: true,
  },

  providers: [
    {
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  ],
});