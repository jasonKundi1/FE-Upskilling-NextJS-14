import { asLink } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import Image from "next/image"

import React from "react"

import { BannerItemTestProps } from "../.."
import { log } from "console"

const BannerItem = ({ slice }: BannerItemTestProps): JSX.Element => {
  const {
    primary: { text, image },
  } = slice

  const url = image?.url

  log("BannerItem", slice)

  return (
    <div>
      {url && <Image src={url} alt={image?.alt!} height={300} width={600} />}
      <PrismicRichText field={text} />
    </div>
  )
}

export default BannerItem
