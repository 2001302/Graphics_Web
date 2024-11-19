import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

interface Model3D {
  id: string
  title: string
  price: number
  category: string
  format: string
  thumbnail: string
}

export default function SearchPage() {
  return (
    <div className="container mx-auto py-8">
      {/* 검색 필터 섹션 */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Input 
              placeholder="3D 모델 검색..." 
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="카테고리" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="character">캐릭터</SelectItem>
              <SelectItem value="environment">환경</SelectItem>
              <SelectItem value="props">소품</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="파일 형식" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="fbx">.fbx</SelectItem>
              <SelectItem value="obj">.obj</SelectItem>
              <SelectItem value="gltf">.gltf</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 검색 결과 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* 임시 데이터로 카드 표시 */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-square bg-muted" />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">3D 모델 {item}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">카테고리: 캐릭터</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <p className="font-bold">₩50,000</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 