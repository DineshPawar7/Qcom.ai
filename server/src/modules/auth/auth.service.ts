import { prisma } from "../../config/db.js";
import { hashPassword, comparePassword } from "../../utils/password.js";
import { signAccess, signRefresh } from "../../utils/jwt.js";

export const registerUser = async (data: any) => {
    const password = await hashPassword(data.password);

    const user = await prisma.user.create({
        data: { email: data.email, password, name: data.name }
    });

    return user;
}



export const loginUser = async (data: any) => {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!valid) throw new Error("Invalid redentials");

    const access = signAccess({ id: user.id });
    const refresh = signRefresh({ id: user.id });

    await prisma.session.create({
        data: {
            userId: user?.id,
            refreshToken: refresh,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        }
    });

    return { user, access, refresh };
}