'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormEvent, useState } from "react"

type Props = {
  vendorCategory: string
  setVendorCategory: (category: string) => void
  categories: string[]
}

const FilterVendors = ({ vendorCategory, setVendorCategory, categories }: Props) => {

  const handleCategoryChange = (category: FormEvent<HTMLSelectElement>) => {
    setVendorCategory((category.target as HTMLSelectElement).value)
  }

  return (
    <div className='flex justify-start items-center space-x-10'>
      <select
        value={vendorCategory}
        onChange={(e) => handleCategoryChange(e)}
        name='role' id='role'
        className='bg-white p-3 focus:outline-none font-bold text-gray-700 rounded-lg border border-gray-200 w-1/2'
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <p className='p-1 px-2 text-center w-40 rounded-full bg-orange-200'>{vendorCategory}</p>
    </div>
  )
}

export default FilterVendors