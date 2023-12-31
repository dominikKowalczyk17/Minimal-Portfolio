import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <div className="border-2 border-stone-900 rounded-md overflow-hidden">
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-46 md:h-58 object-contain cursor-pointer"
        />
        <div className="w-full py-2 px-2">
          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
            {stack.map((item) => (
              <span className="inline-block px-2 py-2 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
