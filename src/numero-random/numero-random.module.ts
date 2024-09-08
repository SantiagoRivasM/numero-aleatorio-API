import { Module } from '@nestjs/common';
import { NumeroRandomController } from './numero-random.controller';

@Module({
  controllers: [NumeroRandomController],
})
export class NumeroRandomModule {}