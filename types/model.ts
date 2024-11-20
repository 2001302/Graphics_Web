export interface Model3D {
  id: string
  title: string
  description: string
  creator: string
  fileFormat: ModelFormat
  thumbnailUrl: string
  modelUrl: string
  createdAt: Date
  updatedAt: Date
  hasAnimation: boolean
}

export type ModelFormat = 
  | 'glb'
  | 'gltf'
  | 'fbx'
  | 'obj' 