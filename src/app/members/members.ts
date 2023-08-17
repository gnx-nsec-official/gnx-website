'use server'

import { PrismaClient } from "@prisma/client"
import MemberInterface from '@/interface/member.interface'

export default async function FetchMembers() {
    const prisma = new PrismaClient();
    const resp = await prisma.members.findMany({});
    const data = (resp as unknown) as MemberInterface[];
    return JSON.parse(JSON.stringify(data));
}