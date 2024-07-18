import Link from "next/link"
import React from "react"

import { notFound } from "next/navigation"

import { SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"

import { components } from "@/app/(prismic)/slices"

type Params = { uid: string }

export default async function BasicOne({ params }: { params: Params }) {
  // const client = createClient()

  // const page = await client
  //   .getByUID("of_the_year_page", params.uid)

  //   .catch(() => notFound())

  // console.log(page)

  return (
    <div className="px-[200px] py-[200px]">
      <p className="py-[30px]">
        This is a nested basic route. Notice url is now basic/basic-1
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link href="/">Take me home pls</Link>
      </button>
      {/* <SliceZone slices={slices} components={components} /> */}
    </div>
  )
}
