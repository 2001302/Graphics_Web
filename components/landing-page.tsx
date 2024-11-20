'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube, Share2, Users } from 'lucide-react'
import ModelViewer from "@/components/3d/model-viewer"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-white">Atlas Graphic</h1>
            <p className="text-xl mb-8 text-gray-200">Share your 3D creations with the world</p>
            <div className="space-x-4">
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
              <Button variant="outline">Learn More</Button>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Cube className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>High Quality 3D Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Share optimized, high-quality 3D models for free.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Share2 className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>Free Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Easily share and download 3D models with everyone.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>Creator Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with creators and get inspired.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Atlas Graphic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}