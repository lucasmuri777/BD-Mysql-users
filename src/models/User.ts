import { Model, DataTypes } from 'sequelize';
import { sequelizeMy } from '../instances/myqsl'

export interface UserInstance extends Model{
    id: number;
    name: string;
    age: number;
}

export const User = sequelizeMy.define<UserInstance>("User", {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
        type: DataTypes.STRING,
    },
    firstLetterOfName: {
        type: DataTypes.VIRTUAL,
        get(){
            let name: string = this.getDataValue('name');
            return name.charAt(0);
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        set(value: number){
            if(value < 18){
                value = 18;
            }
            this.setDataValue('age', value);
        }
    }
},{
    tableName: "users",
    timestamps: false
});

/*
    Alterar dado na hora de exibir os names na aplicação
    get(){
        const raw = this.getDataValue('name')
        return raw.toUpperCase();
    }   
*/
