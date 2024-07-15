import Link from "next/link"
import React from "react"

// the parent folder basic is included in the url as it is typed normally

const Basic = () => {
  return (
    <div className="px-[200px] py-[200px]">
      <p className="py-[30px]">You have reached the basic route</p>

      <div className="flex flex-col px-[40px] gap-y-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/basic/basic-1">Click me pls</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/basic/basic-2">Nahhh click me instead pls</Link>
        </button>
      </div>
    </div>
  )
}

export default Basic
