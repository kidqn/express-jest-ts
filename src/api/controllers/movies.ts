import { Request, Response } from 'express';

exports.getMovies = (req: Request, res: Response) =>{
    res.status(201).json({
        message: "Get movies successfully",
        users:[
            {id: 1, name: 'How to train your dragon' },
            {id: 2, name: 'Queen of Katwe111'},
        ]
      });
  }