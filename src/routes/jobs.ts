import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.post('/create', (req: Request, res: Response) => {

  console.log('Create a new job');
  console.log(req.body);

  // generate a new uuid
  const jobId: string = uuidv4();




  
  
  res.status(200).send({
    jobId,
    poster: req.body.user.globalName,
    description: req.body.description,
    spots: req.body.spots,
    type: req.body.type,
    message: ` <@${req.body.user.id}> created a new job with id ${jobId}!\nType: ${req.body.type}\nDescription: ${req.body.description}\nSpots: \`${req.body.spots}\``
  });
});

router.post('/query/all', (req: Request, res: Response) => {
    res.send('List of jobs');
});

export default router;