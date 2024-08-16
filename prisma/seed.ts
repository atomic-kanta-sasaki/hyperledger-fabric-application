import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

// Organization seed data
const organizationData: Prisma.OrganizationCreateInput[] = [
  {
    id: '1',
    name: 'Org1',
  },
  {
    id: '2',
    name: 'Org2',
  },
]

// Peer seed data
const peerData: Prisma.PeerCreateInput[] = [
  {
    name: 'peer0.org1.example.com',
    tlsCertPath: 'user/ca.crt',
    organization: {
      connect: {
        id: '1',
      },
    },
  },
  {
    name: 'peer0.org2.example.com',
    tlsCertPath: 'user/ca.crt',
    organization: {
      connect: {
        id: '2',
      },
    },
  },
]

// User seed data
const userData: Prisma.UserCreateInput[] = [
  {
    name: 'User1',
    certPath: 'user1/cert.pem',
    privateKeyPath: 'user1/private_key.pem',
    organization: {
      connect: {
        id: '1',
      },
    },
  },
  {
    name: 'User2',
    certPath: 'user2/cert.pem',
    privateKeyPath: 'user2/private_key.pem',
    organization: {
      connect: {
        id: '2',
      },
    },
  },
]

const transfer = async () => {
  await prisma.peer.deleteMany() 
  await prisma.user.deleteMany() 
  await prisma.organization.deleteMany()

  await prisma.organization.createMany({
    data: organizationData,
  })

  for (const peer of peerData) {
    await prisma.peer.create({ data: peer })
  }

  for (const user of userData) {
    await prisma.user.create({ data: user })
  }
}

const main = async () => {
  console.log(`Start seeding ...`)

  await transfer()

  console.log(`Seeding finished.`)
}

// Start seeding process
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
