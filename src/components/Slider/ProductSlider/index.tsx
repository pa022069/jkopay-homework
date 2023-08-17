import { ImageInfo } from "@/types";

interface ProductSliderProps {
  images: ImageInfo[];
}
export default function ProductSlider(props: ProductSliderProps) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
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
    </div>
  );
}
