import React from "react";

export interface SlizeZoneProps<T> {
  components: Record<string, React.ComponentType<any>>;
  context?: unknown;
  index?: number;
  slice: T & {
    variation: string;
  };
}

export const resolveFileName = (sliceType: string) =>
  sliceType
    .split("_")
    .map((slice, i) => {
      if (i !== 0) {
        return slice[0].toUpperCase() + slice.slice(1);
      }
      return slice;
    })
    .join("");

export const SliceVariants = <T extends any>({
  slice,
  index,
  context,
  components,
}: SlizeZoneProps<T>): JSX.Element => {
  const { variation } = slice;
  const fileName = resolveFileName(variation);
  const Comp = components[fileName as keyof typeof components];
  const Wrapper = components?.wrapper;

  if (components.hasOwnProperty(fileName) && Comp !== undefined) {
    if (Wrapper) {
      return (
        <Wrapper>
          <Comp context={context} index={index} slice={slice} />
        </Wrapper>
      );
    }
    return <Comp context={context} index={index} slice={slice} />;
  }
  return <>failed</>;
};
