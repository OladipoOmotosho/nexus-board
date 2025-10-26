import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Add your seed data here
  const user = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
    },
  });

  console.log('Seeding completed!');
  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
