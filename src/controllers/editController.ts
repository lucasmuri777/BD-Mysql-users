import { Request, Response } from 'express';

import { Op } from 'sequelize'
import {User} from '../models/User'

export const editForm = async (req: Request, res: Response) => {
    let idEdit: string = req.params.id as string;

    let users = await User.findAll()
    let userEdit = await User.findByPk(idEdit)
    
    if(!userEdit){
        res.redirect('/')
        return;
    }

    res.render('pages/home', {
        id: userEdit.id,
        name: userEdit.name,
        age: userEdit.age,
        users,
        editOn: true
    });
    
}
export const edit = async (req: Request, res: Response) => {
    let nameEdit: string = req.body.name.trim() as string;
    let ageEdit: number = req.body.age.trim() as number;
    if(nameEdit && ageEdit){
        try{
            await User.update({ name: nameEdit, age: ageEdit }, {
                where: {
                   id: req.body.id
               }
           })
        }catch(err){
            res.redirect('/')
            return
        }
    }
    
    res.redirect('/');

}