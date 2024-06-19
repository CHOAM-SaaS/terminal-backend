import { Router, Request, Response } from 'express';

const router = Router();

router.get('/create', (req: Request, res: Response) => {
  res.send('Create a new trade listing');
});

router.post('/query/all', (req: Request, res: Response) => {
    res.send('List of trade listings');
});

export default router;