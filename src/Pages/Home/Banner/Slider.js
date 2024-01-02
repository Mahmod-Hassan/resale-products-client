import TextModifier from "react-text-modifier";

const Slider = ({slider}) => {
  const { img, brand_name } = slider;

  return (
    <>
      <div className="image-layer flex justify-center items-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
      </div>
      <div className="absolute top-1/3 -translate-y-1/2 text-center w-full main-slider__details">
        <TextModifier
          text={brand_name}
          as="h1"
          renderSeparator={() => <div className="mt-1 md:mt-4" />}
          className="font-bold text-3xl text-white md:text-4xl lg:text-5xl"
          highlight={["i-phone", "Samsung", "Readmi"]}
          highlightClassName="text-4xl md:text-5xl lg:text-6xl text-orange-500"
        />
      </div>
    </>
  );
};

export default Slider;