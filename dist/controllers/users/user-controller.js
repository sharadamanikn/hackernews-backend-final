import { prismaClient } from "../../extras/prisma.js";
import { GetMeError, usersError, } from "./user-types.js";
export const getMe = async (parameters) => {
    const user = await prismaClient.user.findUnique({
        where: {
            id: parameters.userId,
        },
        select: {
            id: true,
            username: true,
            displayUsername: true,
            name: true,
            createdAt: true,
            updatedAt: true,
            email: true,
            emailVerified: true,
            image: true,
        }
    });
    if (!user) {
        throw GetMeError.BAD_REQUEST;
    }
    return {
        user,
    };
};
export const getAllUsers = async (page = 1, limit = 10) => {
    const users = await prismaClient.user.findMany({
        orderBy: {
            name: "asc",
        },
        skip: (page - 1) * limit,
        take: limit,
    });
    if (!users) {
        throw usersError.BAD_REQUEST;
    }
    const totalUsers = await prismaClient.user.count();
    return {
        users,
        total: totalUsers,
    };
};
export const getUserById = async (userId) => {
    const user = await prismaClient.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            username: true,
            createdAt: true,
        },
    });
    if (!user) {
        throw new Error("USER_NOT_FOUND");
    }
    return user;
};
