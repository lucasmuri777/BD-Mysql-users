import { Request, Response } from 'express';

import { Op } from 'sequelize'
import { User } from '../models/User'

export const search = async (req: Request, res: Response) => {
    let searchName: string = req.query.search as string;
    let users = await User.findAll({
        where:{
            name:{
                [Op.like]: `%${searchName}%`
            }
        },
        order: [
            ['id', 'ASC']
        ]
    })
    if(!searchName){
        res.redirect('/')
        return;
    }

    res.render('pages/home',{
        users,
        searchName
    })
}