import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const res = await request.json()

  try {
    await prisma.client.create({
      data: {
        "name": res.name as string,
        "email": res.email as string,
        "phoneNumber": res.phoneNumber as string
      }
    })
    return NextResponse.json({ response: true })
  }
  catch (err) {
    console.log(err)
    return NextResponse.json({ response: false })
  }
}