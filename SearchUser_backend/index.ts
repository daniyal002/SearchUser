import express from 'express';
import router from './routes/route';
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT);
