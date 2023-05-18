import { cookies } from 'next/headers'

import {
  Blur,
  Copyright,
  EmptyMemories,
  Hero,
  Profile,
  SignIn,
  Stripes,
} from '@/components'

export default function Home() {
  const isAuthenticated = cookies().get('token')?.value

  return (
    <main className="grid min-h-screen grid-cols-2 ">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <Blur />

        <Stripes />

        {isAuthenticated ? <Profile /> : <SignIn />}

        <Hero />

        <Copyright />
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
