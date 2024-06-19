import { Router, Request, Response } from 'express';

const router = Router();

router.get('/create', (req: Request, res: Response) => {
  res.send('Create a new guild listing');
});

router.put('/update/:id', (req: Request, res: Response) => {
    res.send('Update guild listing');
});

router.post('/query/all', (req: Request, res: Response) => {
    res.send('List of guild listings');
});

export default router;