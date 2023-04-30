import app from "./app";

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
