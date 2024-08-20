import { Module } from "@nestjs/common";
import { UserRepository } from "src/repository/user/userRepository";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [UserRepository],
    exports: [UserRepository]
})

export class UserRepositoryModule {}