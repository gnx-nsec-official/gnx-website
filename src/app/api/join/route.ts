import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const res = await request.json()

  try {
    const client = {
      name: res.name,
      email: res.email,
      contact: res.contact
    }
    await prisma.client.create({
      data: client
    })
    return NextResponse.json({ response: true })
  }
  catch {
    return NextResponse.json({ response: true })
  }
}