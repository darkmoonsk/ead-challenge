"use client"
import Room from '@/components/Room'
import { CourseProvider } from '@/contexts/CourseContext'

export default function Home() {
  return (
    <div>
      <CourseProvider>
        <Room />
      </CourseProvider>
    </div>
  )
}
