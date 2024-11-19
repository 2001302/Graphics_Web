'use client'

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { CuboidIcon as Cube, Layers, Package, Play, Users } from 'lucide-react'

function Model() {
  const gltf = useGLTF("/assets/3d/duck.glb", true, true, (error) => {
    console.error('Error loading 3D model:', error);
  });
  
  if (!gltf) return null;
  
  return <primitive object={gltf.scene} scale={2} position={[0, -1, 0]} />
}

// Preload the model
useGLTF.preload("/assets/3d/duck.glb")

export function LandingPage() {
  const [activeTab, setActiveTab] = useState('beginner')

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900 bg-opacity-60">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Model />
            <Environment preset="studio" />
          </Canvas>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Master 3D Modeling</h1>
          <p className="text-xl mb-8 text-gray-200 drop-shadow-md">Learn, Create, and Innovate with Our Comprehensive Tutorials and Model Packages</p>
          <div className="space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 inline-block" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700">
              <CardHeader>
                <Cube className="w-10 h-10 mb-4 text-purple-500" />
                <CardTitle>Expert-Led Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn from industry professionals with years of experience in 3D modeling and game engines.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <Package className="w-10 h-10 mb-4 text-purple-500" />
                <CardTitle>Premium Model Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access high-quality 3D models and assets to jumpstart your projects and enhance your skills.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <Users className="w-10 h-10 mb-4 text-purple-500" />
                <CardTitle>Vibrant Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with fellow learners, share your work, and get feedback from experts in our community forums.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tutorial Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Tutorials for Every Level</h2>
          <div className="flex justify-center mb-8">
            <Button 
              className={`mr-4 ${activeTab === 'beginner' ? 'bg-purple-600' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('beginner')}
            >
              Beginner
            </Button>
            <Button 
              className={`mr-4 ${activeTab === 'intermediate' ? 'bg-purple-600' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('intermediate')}
            >
              Intermediate
            </Button>
            <Button 
              className={activeTab === 'advanced' ? 'bg-purple-600' : 'bg-gray-700'}
              onClick={() => setActiveTab('advanced')}
            >
              Advanced
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTab === 'beginner' && (
              <>
                <Card className="bg-gray-700">
                  <CardHeader>
                    <CardTitle>Introduction to 3D Modeling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn the basics of 3D modeling and get familiar with industry-standard software.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full"><Play className="mr-2 h-4 w-4" /> Start Learning</Button>
                  </CardFooter>
                </Card>
                <Card className="bg-gray-700">
                  <CardHeader>
                    <CardTitle>Fundamentals of Texturing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Discover how to create and apply textures to bring your 3D models to life.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full"><Play className="mr-2 h-4 w-4" /> Start Learning</Button>
                  </CardFooter>
                </Card>
                <Card className="bg-gray-700">
                  <CardHeader>
                    <CardTitle>Basic Lighting Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Master the essentials of lighting to enhance the mood and realism of your 3D scenes.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full"><Play className="mr-2 h-4 w-4" /> Start Learning</Button>
                  </CardFooter>
                </Card>
              </>
            )}
            {/* Add similar structures for intermediate and advanced tabs */}
          </div>
        </div>
      </section>

      {/* Model Packages */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Premium Model Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle>Sci-Fi Props Pack</CardTitle>
                <CardDescription>Perfect for futuristic game environments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>50+ high-quality sci-fi props</li>
                  <li>4K textures included</li>
                  <li>Compatible with major 3D software</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now - $49.99</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle>Fantasy Character Bundle</CardTitle>
                <CardDescription>Bring your RPG to life with detailed characters</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>10 fully rigged fantasy characters</li>
                  <li>Multiple texture variations</li>
                  <li>Animation-ready</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now - $79.99</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle>Architectural Essentials</CardTitle>
                <CardDescription>Create stunning architectural visualizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>100+ architectural elements</li>
                  <li>Photorealistic materials</li>
                  <li>Customizable parametric models</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now - $99.99</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 3D Modeling Mastery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}