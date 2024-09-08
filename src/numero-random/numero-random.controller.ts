import { Controller, Post } from '@nestjs/common';


@Controller('numero-random')
export class NumeroRandomController {
    @Post()
    generarNumeroRandom(): {value: number} {
        const numeroRandom = Math.floor(Math.random() * 100) + 1;
        return { value: numeroRandom };
    }
}