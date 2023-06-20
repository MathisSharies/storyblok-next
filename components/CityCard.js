import { storyblokEditable } from "@storyblok/react";

const CityCard = ({ blok }) => {
    console.log(blok)
  return (
    <div {...storyblokEditable(blok)} >
       <a href={blok.link} class="group relative block bg-black">
  <img
    href={blok.image.filename}
    src={blok.image.filename}
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8 text-start">
    <p class="text-sm font-medium uppercase tracking-widest text-orange-500">
        {blok.location}
    </p>
    <p class="text-xl font-bold text-white sm:text-2xl">
        {blok.city}
    </p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
            {blok.description}
        </p>
      </div>
    </div>
  </div>
</a>
    </div>
    );
};

export default CityCard;
