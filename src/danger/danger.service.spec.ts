import { Test, TestingModule } from '@nestjs/testing';
import { DangerService } from './danger.service';

describe('DangerService', () => {
  let service: DangerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DangerService],
    }).compile();

    service = module.get<DangerService>(DangerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
