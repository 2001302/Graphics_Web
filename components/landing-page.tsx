'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube, Package, Users } from 'lucide-react'
import ModelViewer from "@/components/3d/model-viewer"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-white">3D 모델 마켓플레이스</h1>
            <p className="text-xl mb-8 text-gray-200">고품질 3D 모델을 찾고 거래하세요</p>
            <div className="space-x-4">
              <Button className="bg-primary hover:bg-primary/90">시작하기</Button>
              <Button variant="outline">더 알아보기</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <ModelViewer />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Cube className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>고품질 3D 모델</CardTitle>
              </CardHeader>
              <CardContent>
                <p>검증된 제작자들의 고품질 3D 모델을 만나보세요.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Package className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>쉬운 거래</CardTitle>
              </CardHeader>
              <CardContent>
                <p>안전하고 편리한 거래 시스템을 제공합니다.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>커뮤니티</CardTitle>
              </CardHeader>
              <CardContent>
                <p>다양한 제작자들과 소통하고 정보를 공유하세요.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 3D Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}