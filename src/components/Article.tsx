import React, { useState } from "react";
import { ArticleType } from "../constants/articles";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ArticleItemType {
  article: ArticleType;
}
const Article: React.FC<ArticleItemType> = ({ article }) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <div
      className="md:w-[400px] max-md:w-full max-md:mb-4 flex flex-col gap-4 border border-white"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={article.image} className="w-full" />
      <div className="p-2">
        <p
          className={`font-bold md:text-[28px] max-md:text-lg ${
            isHover ? "text-secondary" : "text-white"
          }`}
        >
          {article.title}
        </p>
      </div>
      <div className="flex gap-8 p-2">
        <p className="text-secondary flex items-center gap-1">
          <Icon icon="lets-icons:date-fill" />
          {article.postedAt}
        </p>
        <p className="text-secondary flex items-center gap-1">
          <Icon icon="dashicons:category" />
          Catégorisé
        </p>
      </div>
      <div className="p-2 flex flex-col gap-2">
        {article.desc.map((desc, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-white font-bold">{desc.title}:</span>
            <span className="text-white p-2">{desc.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
