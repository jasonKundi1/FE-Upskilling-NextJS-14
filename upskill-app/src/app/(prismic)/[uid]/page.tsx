import { createClient } from "@/prismicio"
import { SliceZone } from "@prismicio/react"
import { components } from "../slices"
import { notFound } from "next/navigation"

type Params = { uid: string }

export default async function Page({ params }: { params: Params }) {
  const client = createClient()

  const page = await client

    .getByUID("of_the_year_page", params.uid)

    .catch(() => notFound())

  return <SliceZone slices={page.data.slices} components={components} />
}
