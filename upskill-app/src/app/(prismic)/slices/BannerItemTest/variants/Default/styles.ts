import { CSSProperties } from "react";

import { media, px2rem, styled } from "@styles";

export type BannerTypeVariant = "right" | "left";

export interface BannerItemWrapperProps {
  variant?: BannerTypeVariant;
}

const getVariantStyles = (variant: BannerTypeVariant = "left") => {
  // eslint-disable-next-line default-case
  switch (variant) {
    case "right":
      return `
        ${media.md.up} {
          flex-direction: row;
        }
      `;
    case "left":
      return `
        position: relative;

        ${media.lg.up} {
          flex-direction: row-reverse;
        }
      `;
  }
};

export const BannerWrapper = styled.section`
  width: 100%;
`;

export const BannerItemWrapper = styled.div<BannerItemWrapperProps>`
  bottom: 0;
  padding-block: 40px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  justify-self: start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  flex-direction: column-reverse;

  ${media.lg.up} {
    gap: 60px;
  }

  ${({ variant }) => getVariantStyles(variant!)}
`;

export const DescriptionWrapper = styled.div<{
  justifyContent?: CSSProperties["justifyContent"];
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }

  a:visited {
    color: ${({ theme }) => theme.colors.dark};
  }

  ${media.lg.up} {
    justify-content: center;
    align-items: start;
    text-align: left;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin: 20px 0;
`;

export const Title = styled.p`
  font-size: ${px2rem(18)};

  ${media.lg.up} {
    font-size: ${px2rem(20)};
    line-height: ${px2rem(24)};
  }
`;

export const SubTitle = styled.p`
  font-size: ${px2rem(18)};
  font-weight: 700;

  ${media.lg.up} {
    font-size: ${px2rem(37)};
    line-height: ${px2rem(37)};
    margin: 15px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 6px;

  strong {
    font-weight: 600;
  }

  * > {
    font-size: ${px2rem(18)};

    ${media.lg.up} {
      font-size: ${px2rem(20)};
      line-height: ${px2rem(24)};
    }
  }
`;

export const ImageWrapper = styled.div<{ imageSize: "600" | "500" | "400" }>`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  max-width: ${({ imageSize }) => `${imageSize}px`};
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  z-index: auto;
  opacity: 1;

  ${media.lg.up} {
    flex: 0 0 ${({ imageSize }) => `${imageSize}px`};
  }
`;
