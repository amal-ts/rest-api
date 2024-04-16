import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    posts: {
      create: [
        {
          title: 'Ask a question about Prisma on GitHub',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true,
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    try {
      const user = await prisma.user.create({
        data: u,
      });
      console.log(`Created user with id: ${user.id}`);
    } catch (error) {
      console.error(`Failed to create user: ${u.name}`, error);
    }
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((error) => {
    console.error('Error during seeding:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
