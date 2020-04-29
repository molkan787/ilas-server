import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Key, Status } from './entities/key.entity';
import { GenerateKeyDto } from './dto/generate-key.dto';
import { PlansService } from '../plans/plans.service';


@Injectable()
export class KeysService{

    constructor(
        @InjectRepository(Key)
        private keysRepository: Repository<Key>,
        private plansService: PlansService
    ) { }


    async generateKey(generateKeyDto: GenerateKeyDto): Promise<string>{
        const { plan_id, max_activations } = generateKeyDto;
        const plan = await this.plansService.getPlanById(plan_id);
        let key = new Key();
        key.plan = plan;
        key.max_activations = max_activations;
        await this.keysRepository.save(key);
        return key.key;
    }

}