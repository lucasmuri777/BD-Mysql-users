import { Request, Response } from 'express';

import { Op } from 'sequelize'
import {User} from '../models/User'

export const destroy = async (req: Request, res: Response) => {
    let destroyId: string = req.params.id as string;
    
    await User.destroy( {where:{id: destroyId}} )

    res.redirect('/')
    
}