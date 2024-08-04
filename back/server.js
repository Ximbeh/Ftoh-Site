import {  createYoga } from "graphql-yoga";
import express from "express";
import { ruruHTML } from "ruru/server";
import schema from "./src/graphql/index.js"
import { setupDatabase } from "./src/mongo/index.js";

const yoga = createYoga({
    schema,
    context: async ()=>{
      const mongo = await setupDatabase()
      return{
        mongo
      }
    }
})


const app = express();

app.all("/graphql", yoga);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Api running on: http://localhost:${PORT}`);
});
