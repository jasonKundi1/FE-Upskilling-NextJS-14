import Link from "next/link"
import React from "react"

const BasicOne = () => {
  return (
    <div className="px-[200px] py-[200px]">
      <p className="py-[30px]">
        This is a nested basic route. Notice url is now basic/basic-1
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link href="/">Take me home pls</Link>
      </button>
    </div>
  )
}

export default BasicOne
