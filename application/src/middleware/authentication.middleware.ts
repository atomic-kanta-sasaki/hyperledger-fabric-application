import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { RequestService } from "src/usecase/request/request.service";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    constructor(private readonly requestService: RequestService) {}
    use(req: Request, res: Response, next: NextFunction) {
        // TODO ログイン中のユーザー情報をRequestから取得してセットする
        this.requestService.setUserId('f172ef6e-eff8-495a-9d44-ba7210a04cc7');
        next();
    }
}