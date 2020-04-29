import { Controller, Post, Body } from '@nestjs/common';
import { KeysService } from './keys.service';
import { GenerateKeyDto } from './dto/generate-key.dto';

@Controller('keys')
export class KeysController{

    constructor(private keysService: KeysService) { }

    @Post('generate')
    async generateKey(@Body() generateKeyDto: GenerateKeyDto){
        const key = await this.keysService.generateKey(generateKeyDto);
        return {
            key
        }
    }

}