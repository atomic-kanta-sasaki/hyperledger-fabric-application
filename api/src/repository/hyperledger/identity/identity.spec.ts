import { Test, TestingModule } from '@nestjs/testing';
import { IdentityProvider } from './identity';

describe('Identity', () => {
  let provider: IdentityProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentityProvider],
    }).compile();

    provider = module.get<IdentityProvider>(IdentityProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
