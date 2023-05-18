import Image from 'next/image'

import { getUsers } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUsers()

  return (
    <div className="flex items-center gap-3 text-left transition-colors hover:text-gray-50">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="Provavelmente a foto de uma pessoa"
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  )
}
