import bcrypt from 'bcryptjs';

export const hashPassword = async (p: string) => bcrypt.hash(p, 10);
export const comparePassword = (p: string, h: string) => bcrypt.compare(p, h)