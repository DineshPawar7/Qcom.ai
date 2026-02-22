import jwt from "jsonwebtoken";

export const signAccess = (payload: object) =>
    jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "15m"})

export const signRefresh = (payload: object) =>
    jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: "7d" });

export const verifyAccess = (token: string, secret: string) =>
    jwt.verify(token, secret);