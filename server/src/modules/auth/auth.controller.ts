import * as service from "./auth.service.js";

export const register = async (req, res) => {
    const user = await service.registerUser(req.body);
    res.json(user);
}


export const login = async (req, res) => {
    const data = await service.registerUser(req.body);
    res.json(data);
}