import { storyblokEditable } from "@storyblok/react";
import Button from "./Button";

const Hero = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={`min-h-[500px]
    relative
    flex
    items-center
    justify-center
    p-9
    bg-black
    overflow-hidden ${blok.layout === 'constrained' ? 'container mx-auto' : ''}`}>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl text-white font-bold mb-3">{blok.headline}</h1>
        <h2 className="text-lg text-white font-light">{blok.subheadline}</h2>
        <div className="flex justify-center items-center mt-6 gap-3">
        {blok.Buttons.map((button) => (
          <Button key={button._uid} blok={button} />
        ))}
        </div>
      </div>
      <img
        src={blok.background_image.filename}
        alt={blok.background_image.alt}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-60"
      />
    </div>
  );
};

export default Hero;