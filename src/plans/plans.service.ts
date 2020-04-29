import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';

@Injectable()
export class PlansService{

    constructor(
        @InjectRepository(Plan)
        private plansRepository: Repository<Plan>
    ) { }

    getPlanById(planId: string): Promise<Plan>{
        return this.plansRepository.findOne(planId);
    }

}