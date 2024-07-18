import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import { SliceVariants } from "../../helpers/SliceVariants"
import { components } from "./variants"

/**
 * Props for `BannerItemTest`.
 */
export type BannerItemTestProps =
  SliceComponentProps<Content.BannerItemTestSlice>

/**
 * Component for "BannerItemTest" Slices.
 */
const BannerItemTest = ({
  slice,
  ...config
}: BannerItemTestProps): JSX.Element => {
  return <SliceVariants {...config} components={components} slice={slice} />
}

export default BannerItemTest
