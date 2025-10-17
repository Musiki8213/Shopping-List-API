import express from 'express';
import morgan from 'morgan';
import itemsRouter from './routes/items';
import { notFoundHandler, errorHandler } from './middleware/errorHandler';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.json({ success: true, data: { message: 'Shopping List API' } }));

app.use('/items', itemsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
