// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {



  for (let index = 0; index < 20; index++) {

    await prisma.admin.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),

      },


    });
    await prisma.teatcher.create({
      data: {
        authorId: 2,
      },
    });
    console.log('Users seeded successfully!');
  }
}

  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

