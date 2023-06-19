import { storyblokEditable } from "@storyblok/react";

const Button = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex justify-center items-center">
        <a
            href={blok.Link.cached_url}
            className="bg-white text-black px-4 py-2 rounded-[5px] hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
            {blok.Text}
        </a>
    </div>
    );
};

export default Button;
