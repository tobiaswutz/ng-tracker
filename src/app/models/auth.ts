export interface AuthResponseTokenObj {
    access_token: string;
}

export class JWTDecoded {
    email: string | undefined;
    exp: number | undefined;
}