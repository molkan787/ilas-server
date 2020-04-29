import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlansService } from './plans.service';
import { Plan } from './entities/plan.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Plan])],
    exports: [PlansService],
    providers: [PlansService]
})
export class PlansModule{}