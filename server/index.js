const app = require('./server');

const port = process.env.PORT || 5679;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
