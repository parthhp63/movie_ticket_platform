const express = require('express');
// const cors = require('cors');
// const { config } = require('dotenv');
// config({ path: `.env` });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use();


const PORT = 3000; 
app.listen(PORT, () => {
console.log(`server is running at port '${PORT}'`);
});