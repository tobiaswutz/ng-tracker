export interface AuthResponseTokenObj {
    token: string;
}

export class JWTDecoded {
    email: string | undefined;
    exp: number | undefined;
}