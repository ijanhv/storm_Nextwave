'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const FilterVendors = () => {
  const [category, setCategory] = useState('All')
  const categories = ['All', 'Photography', 'Catering', 'Decoration', 'Music', 'Venue', 'Others']

  return (
    <Select>
      <SelectTrigger className="w-[360px]">
        <SelectValue placeholder="Select Venue" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category, index) => (
          <div key={index}>
            <SelectItem value={category}>{category}</SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  )
}

export default FilterVendors