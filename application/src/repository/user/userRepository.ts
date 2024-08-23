import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getUserById(id: string): Promise<User> {
        console.log('id', id);
        try {
            const user = await this.prisma.user.findUniqueOrThrow({
                where: {
                    id: id,
                },
            });
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('User not found');
        }
    }
    
    async createUser(): Promise<void> {
        return;
    }

    async updateUser(): Promise<void> {
        return;
    }

    async deleteUser(): Promise<void> {
        return;
    }

    async getAllUsers(): Promise<void> {
        return;
    }
}