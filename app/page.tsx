import Link from "next/link"
import MainNav from "@/components/navigation/main-nav"
import { LandingPage } from "@/components/landing-page"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">3D Market</div>
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm">
              로그인
            </Link>
            <Link href="/signup" className="text-sm">
              회원가입
            </Link>
          </div>
        </div>
      </header>

      <LandingPage />
    </div>
  )
}