import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect().catch((error: unknown) => {
  console.error('Error al conectar con Prisma:', error);
  process.exit(1);
});

export default prisma;