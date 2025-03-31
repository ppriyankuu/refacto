import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import aiRoutes from './routes/ai.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
