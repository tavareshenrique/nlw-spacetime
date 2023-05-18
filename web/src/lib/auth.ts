import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface IUser {
  sub: string
  name: string
  avatarUrl: string
}

export function getUsers(): IUser {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Missing token')
  }

  const user: IUser = decode(token)

  return user
}
