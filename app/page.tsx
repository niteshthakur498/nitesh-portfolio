import Hero from '@/components/main/Hero'
import SocialMediaSection from '@/components/main/SocialMediaSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col w-full">
      <Hero />
      <SocialMediaSection />
    </div>
  );
}
