import { verifyToken } from "../utils/jwt.js";

export const auth = (req, res, next) => {
    const token = req.headers.authorization?.splite(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const data = verifyToken(token, process.env.JWT_SECRET!);
        req.user = data;
        next();
    } catch {
        res.status(401).json({ message: "invalid token"});
    }
};