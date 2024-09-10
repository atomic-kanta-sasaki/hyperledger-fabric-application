import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// Organization seed data
const organizationData: Prisma.OrganizationCreateInput[] = [
  {
    id: '1',
    name: 'Org1',
  },
];

// Peer seed data
const peerData: Prisma.PeerCreateInput[] = [
  {
    id: '0b49bccc-10dd-4cbe-8eea-a123eebc1f9d',
    name: 'org1.example.com',
    tlsCertPath:
      '../certificate/peerOrganizations/org1.example.com/msp/tlscacerts/ca.crt',
    peerEndpoint: 'localhost:7051',
    peerHostAlias: 'peer0.org1.example.com',
    organization: {
      connect: {
        id: '1',
      },
    },
  },
  {
    id: 'f66c0aee-ff03-429e-bf95-b2ee55b4f210',
    name: 'org2.example.com',
    tlsCertPath:
      '../certificate/peerOrganizations/org2.example.com/msp/tlscacerts/ca.crt',
    peerEndpoint: 'localhost:9051',
    peerHostAlias: 'peer0.org2.example.com',
    organization: {
      connect: {
        id: '1',
      },
    },
  },
];
// User seed data
const userData: Prisma.UserCreateInput[] = [
  {
    id: 'f172ef6e-eff8-495a-9d44-ba7210a04cc7',
    name: 'User1',
    certPath:
      '../certificate/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/cert.pem',
    privateKeyPath:
      '../certificate/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/key.pem',
    mspId: 'Org1MSP',
    organization: {
      connect: {
        id: '1',
      },
    },
  },
  {
    id: '068ccc8b-d43e-45f3-a9ad-1a99449f3306',
    name: 'User2',
    certPath:
      '../certificate/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp/signcerts/cert.pem',
    privateKeyPath:
      '../certificate/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp/keystore/key.pem',
    mspId: 'Org2MSP',
    organization: {
      connect: {
        id: '1',
      },
    },
  },
];

const transfer = async () => {
  await prisma.peer.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();

  await prisma.organization.createMany({
    data: organizationData,
  });

  for (const peer of peerData) {
    await prisma.peer.create({ data: peer });
  }

  for (const user of userData) {
    await prisma.user.create({ data: user });
  }
};

const main = async () => {
  console.log(`Start seeding ...`);

  await transfer();

  console.log(`Seeding finished.`);
};

// Start seeding process
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
