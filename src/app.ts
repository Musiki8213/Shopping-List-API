import express from 'express';
import morgan from 'morgan';
import itemsRouter from './routes/items';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.json({ success: true, data: { message: 'Shopping List API' } }));

app.use('/items', itemsRouter);


export default app;
