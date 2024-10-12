import path from 'path';
import express from 'express';
import CategoryRouter from './routes/Category.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/categories', CategoryRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(import.meta.dirname, '../frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(import.meta.dirname, '../', 'frontend', 'dist', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

export default app;
