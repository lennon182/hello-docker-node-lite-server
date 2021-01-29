const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use('/', (req, resp) => {
  resp.send(`
        <h1>Hellow Docker 😎...</h1>
        <h2>Running on port ${PORT}</h2>
    `);
});

app.listen(PORT, () => console.log([`🔥 Server Up on ${PORT}... 🔥`]));
