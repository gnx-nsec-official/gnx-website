'use server'

import { PrismaClient } from "@prisma/client"
import MemberInterface from '@/interface/member.interface'

export default async function FetchMembers() {
    const prisma = new PrismaClient();
    const data = prisma.members.findMany({});
    const unknownData =  data as unknown;
    return unknownData as MemberInterface[]
}