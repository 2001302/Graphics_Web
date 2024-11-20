'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube, Share2, Users } from 'lucide-react'
import ModelViewer from "@/components/3d/model-viewer"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-white animate-fade-in-up">Atlas Graphic</h1>
            <p className="text-xl mb-8 text-gray-100 animate-fade-in-up delay-100">Share your 3D creations with the world</p>
            <div className="space-x-4 animate-fade-in-up delay-200">
              <Button 
                className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 font-bold shadow-lg hover:shadow-blue-500/50"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="text-blue-400 border-blue-400 hover:bg-blue-400/10 transition-colors duration-300 font-bold border-2 hover:border-blue-300 hover:text-blue-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 animate-fade-in-up delay-300">
            <ModelViewer />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Cube className="w-10 h-10 mb-4 text-blue-400" />
                <CardTitle className="text-xl font-semibold text-white">High Quality 3D Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Share optimized, high-quality 3D models for free.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Share2 className="w-10 h-10 mb-4 text-blue-400" />
                <CardTitle className="text-xl font-semibold text-white">Free Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Easily share and download 3D models.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="w-10 h-10 mb-4 text-blue-400" />
                <CardTitle className="text-xl font-semibold text-white">Creator Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Connect with creators and get inspired.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Atlas Graphic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}