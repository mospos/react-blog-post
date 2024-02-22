const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

main().catch(err => console.log(err.message));
async function main() {
  await mongoose.connect(uri);
}
mongoose.connection.once('open', () => {
  console.log("Connected!!!!")
});

const postsRouter = require('./routes/posts');

app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log('On Port 8000');
});