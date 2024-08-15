import { Test, TestingModule } from '@nestjs/testing';
import { Signer } from './signer';

describe('Signer', () => {
  let provider: Signer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Signer],
    }).compile();

    provider = module.get<Signer>(Signer);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
