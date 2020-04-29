import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeysService } from './keys.service';
import { KeysController } from './keys.controller';
import { Key } from './entities/key.entity';
import { PlansModule } from '../plans/plans.module';

@Module({
    imports: [TypeOrmModule.forFeature([Key]), PlansModule],
    providers: [KeysService],
    controllers: [KeysController]
})
export class KeysModule{

}