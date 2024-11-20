export interface Model3D {
  id: string
  title: string
  description: string
  creator: string
  category: ModelCategory
  fileFormat: ModelFormat
  thumbnailUrl: string
  modelUrl: string
  createdAt: Date
  updatedAt: Date
  hasAnimation: boolean
}

export type ModelCategory = 
  | 'character'
  | 'environment'
  | 'props'
  | 'vehicles'
  | 'architecture'
  | 'other'

export type ModelFormat = 
  | 'glb'
  | 'gltf'
  | 'fbx'
  | 'obj' 