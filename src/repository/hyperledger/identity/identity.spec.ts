import { Test, TestingModule } from '@nestjs/testing';
import { Identity } from './identity';

describe('Identity', () => {
  let provider: Identity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Identity],
    }).compile();

    provider = module.get<Identity>(Identity);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
