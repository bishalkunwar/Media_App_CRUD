import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
const app = express();

app.use(bodyparser.json({ limit: '30mb', extended: 'true' }));
app.use(bodyparser.urlencoded({ limit: '30mb', extended: 'true' }));

app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://bishal:bishal@cluster0.hflr0.mongodb.net/MediaApp_CRUD?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));