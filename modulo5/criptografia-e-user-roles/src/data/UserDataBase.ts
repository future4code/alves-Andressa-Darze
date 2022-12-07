import { BaseDataBase } from "./BaseDataBase";
import User from "../model/User";
import { IUserDB } from "../types";

export class UserDataBase extends BaseDataBase {
    
    public async createUser(user: User) {

        const userDB: IUserDB = {
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await this.getConnection()
        .insert(userDB)
        .into("to_do_list_users")
    }

    public async getUserByEmail(email: string) {
        const result = await this.getConnection()
        .select("*")
        .from("to_do_list_users")
        .where({email})

        return result[0]
    }

    public async getPasswordByEmail(email: string) {
        const result = await this.getConnection()
        .select("password")
        .from("to_do_list_users")
        .where({ email })

        return result[0].password
    }

    public async getUserById(id: string) {
        const result = await this.getConnection().select("*").from("to_do_list_users").where({id})

        return result[0]
    }
}