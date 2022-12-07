import { USER_ROLES } from "../../src/entities/User";
import { ITokenPayload } from "../../src/services/Authenticator";

export class AuthenticatorMock {
    public generateToken = (payload: ITokenPayload) : string => {
        switch (payload.role){
            case USER_ROLES.ADMIN:
                return "token-mock-admin"
            default:
                return "token-mock-normal"
        }
    }

    public verifyToken = (token: string) : ITokenPayload | null => {
        switch (token) {
            case "token-mck-admin":
                const adminPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.ADMIN
                }
                return adminPayload
            case "token-mock-normal": 
                const normalPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.NORMAL
                }
                return normalPayload
            default:
                return null
        }
    }
}