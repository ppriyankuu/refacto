import { Request, RequestHandler, Response } from 'express';
import { generateReview } from '../services/ai.service';

export const getReview: RequestHandler = async (req: Request, res: Response) => {
    const { code } = req.body;

    if (!code) {
        res.status(400).send('Prompt is required');
    }

    try {
        const response = await generateReview(code);
        res.send(response);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};