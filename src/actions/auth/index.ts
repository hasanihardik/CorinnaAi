'use server'

import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: 'owner' | 'student'
) => {
  try {
    const user = await db.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {
            credits: 100,
            plan: 'STANDARD',
          },
        },
      },
    })

    if (user) {
      return { status: 200, user: true }
    }

    return { status: 400, user: false }
  } catch (error) {
    console.error('Registration error:', error)
    return { status: 400, user: false }
  }
}

export const onLoginUser = async () => {
  try {
    const user = await currentUser()
    if (!user) return null

    const authenticatedUser = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        fullname: true,
        type: true,
        domains: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (authenticatedUser) {
      return authenticatedUser
    }
  } catch (error) {
    console.error('Login error:', error)
    return null
  }
}
