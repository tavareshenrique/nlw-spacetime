import {
  Blur,
  Copyright,
  EmptyMemories,
  Hero,
  SignIn,
  Stripes,
} from '@/components'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 ">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <Blur />

        <Stripes />

        <SignIn />

        <Hero />

        <Copyright />
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
