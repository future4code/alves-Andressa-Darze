import { BaseDatabase } from "./BaseDatabase";
import { User, IUserDB } from "../entities/User"

class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public createUser = async (user: User) => {
        const userDB : IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB)
    }

    public findByEmail = async (email: string) : Promise<IUserDB | undefined>=> {
        const userDB : IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })

        return userDB[0]
    }
}

export default UserDatabase