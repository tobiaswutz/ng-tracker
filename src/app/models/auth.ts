export interface AuthResponseTokenObj {
    access_token: string;
    statusCode: number;
    message: string;
    error: string;
}

export class JWTDecoded {
    email: string | undefined;
    exp: number | undefined;
}