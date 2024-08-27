import Article from "../components/Article";
import { articles } from "../constants/articles";

const ArticleSection = () => {
  return (
    <div className="p-8 pt-8 pb-8 bg-primary w-full flex justify-center">
      <div className="flex flex-col gap-4 w-full max-w-max-container">
        <p className="font-bold text-secondary">Section D'articles</p>
        <div className="md:flex max-md:flex-col md:justify-between max-md:justify-center items-end w-full">
          <p className="text-white font-bold md:text-[64px] max-md:text-[28px] max-md:text-center md:w-1/2 max-md:w-full">
            Tous Nos Meilleurs Articles En Vente
          </p>
          <div className="max-md:w-full max-md:flex max-md:justify-center md:mb-4">
            <a
              href="#services"
              className="font-bold text-primary bg-secondary p-4 underline w-[150px] text-lg scroll-be"
            >
              Nos Service
            </a>
          </div>
        </div>
        <div className="md:flex max-md:flex-col max-md:justify-center max-md:items-center md:justify-evenly w-full">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
