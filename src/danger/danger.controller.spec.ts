import { Test, TestingModule } from '@nestjs/testing';
import { DangerController } from './danger.controller';

describe('DangerController', () => {
  let controller: DangerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DangerController],
    }).compile();

    controller = module.get<DangerController>(DangerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
