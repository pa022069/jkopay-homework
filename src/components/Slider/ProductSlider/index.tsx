import { ImageInfo } from "@/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledCarousel } from "./style";
import { Carousel } from "react-responsive-carousel";
import { memo } from "react";

interface ProductSliderProps {
  images: ImageInfo[];
}
function ProductSlider(props: ProductSliderProps) {
  const carouselSetting = {
    showThumbs: false,
    showIndicators: false,
    showArrows: false,
    statusFormatter: (current: number, total: number) => `${current}/${total}`,
  };
  return (
    <StyledCarousel>
      <Carousel {...carouselSetting}>
        {props.images.map((item: ImageInfo) => (
          <img
            key={item.alt}
            style={{
              width: "100%",
            }}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </Carousel>
    </StyledCarousel>
  );
}

export default memo(ProductSlider);