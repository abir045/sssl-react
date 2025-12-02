// import BodyText from "@/components/typography/BodyText"
// import { formatDate } from "@/utils/formatDate"
// import Image from "next/image"
// import Link from "next/link"
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import BodyText from "../../typography/BodyText";

const NewsCard = ({ item }) => {
  return (
    <Link
      href={`/news-and-media/${item?.slug || "#"}`}
      className="news-card flex flex-col bg-white overflow-hidden h-full group"
    >
      <div className="flex h-[200px] md:h-[250px] lg:h-[360px] overflow-hidden rounded-2xl w-full ">
        <img
          src={item?.image || item.blogImage}
          alt={item?.title}
          className="rounded-2xl h-[200px] md:h-[250px] lg:h-[360px] w-full object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="mt-4 space-y-2.5 shrink-0">
        <BodyText tag="p" variant="body-2" className="text-app-gray">
          {formatDate(item?.date)}
        </BodyText>
        <BodyText
          tag="p"
          variant="lead-1"
          className="text-app-dark group-hover:underline transition-all duration-500"
        >
          {item?.title}
        </BodyText>
      </div>
    </Link>
  );
};

export default NewsCard;
