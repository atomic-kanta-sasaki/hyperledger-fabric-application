import { Test, TestingModule } from '@nestjs/testing';
import { SignerProvider } from './signer';

describe('Signer', () => {
  let provider: SignerProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignerProvider],
    }).compile();

    provider = module.get<SignerProvider>(SignerProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
