import express from "express";

const app: express.Express = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Start on port 3000.");
});
