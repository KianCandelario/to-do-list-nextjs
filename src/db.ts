import { PrismaClient } from "@prisma/client";

// Taking the global client then adding in the Prisma client to it
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

// Creating a variable, then either setting it with the global variable created above, or creating a brand new Prisma client
export const prisma = 
    globalForPrisma.prisma ?? 
    new PrismaClient({
        log: ['query']
    })

// If we're not in production mode, then get Prisma from the global variable
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma