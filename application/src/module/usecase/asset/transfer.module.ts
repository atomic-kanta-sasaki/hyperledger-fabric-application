import { Module } from "@nestjs/common";
import { AssetRepositoryModule } from "src/module/repository/asset/asset.module";
import { TransferService } from "src/usecase/asset/transfer.service";

@Module({
    imports: [AssetRepositoryModule],
    providers: [TransferService],
    exports: [TransferService]
})

export class TransferModule {}