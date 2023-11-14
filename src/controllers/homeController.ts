import { Request, Response } from 'express';
import { Op } from 'sequelize'

import { Product } from '../models/Product';
import { User, UserInstance } from '../models/User';

export const home = async(req: Request, res: Response)=>{
    let users = await User.findAll()

    res.render('pages/home', {
        users
    });
};

export const newUserAction = async(req: Request, res: Response)=>{
    let name: string = req.body.name;
    let age: number = req.body.age;
    if(age && name.trim().length > 3) {
        try{
            await User.create({
                name,
                age 
            })
        }catch(err){
            res.redirect('/')
            return;
        }
    }
    res.redirect('/');

}

    /*Vai procurar o user, se nao existir ele cria
    const [user, created] = await User.findOrCreate({
            where:{
                name:'Tester Master'
            },
            defaults:{
                age: 80
            }
    });
    */


 /*atualizar todos no qual a idade é menor de 18 anos
    await User.update({ age: 18 }, {
        where: {
            age: {
                [Op.lt]: 18
            }
        }
    })*/

/*

    atualizar o nome do usuario de id 5
    let result = await User.findAll({
        where: {id: 5}
    })
    if(result.length > 0) {
        let user: UserInstance = result[0];
        user.name = 'Tester';
        await user.save();
    }

*/