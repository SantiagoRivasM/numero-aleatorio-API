import { Test, TestingModule } from '@nestjs/testing';
import { NumeroRandomController } from './numero-random.controller';

describe('NumeroRandomController', () => {
  let controller: NumeroRandomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumeroRandomController],
    }).compile();

    controller = module.get<NumeroRandomController>(NumeroRandomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
