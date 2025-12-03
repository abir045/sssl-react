import React, { useState, useEffect } from "react";
import { getBlogsAndNewsData } from "../../../graphql/Components/getBlogsAndNewsData";
import { AppButton } from "../../shared/Buttons";
import LatestNewsSliderItem from "./LatestNewsSliderItem";

const LatestNewsSlider = ({ data }) => {
  const [sliderData, setSliderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const newsArticleIds = data.data.items.map((item) => item.id);
        const blogAndNewsData = await getBlogsAndNewsData(newsArticleIds);
        const formattedSliderData = {
          section_title: data.data.section_title,
          items: blogAndNewsData,
        };
        setSliderData(formattedSliderData);
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [data]);

  if (loading) {
    return (
      <section className="max-w-[1680px] mx-auto">
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500">Loading news...</p>
        </div>
      </section>
    );
  }

  if (!sliderData) {
    return null;
  }

  return (
    <section className="max-w-[1680px] mx-auto">
      <LatestNewsSliderItem data={sliderData} />
      {/* BUTTON BELOW SLIDER */}
      <div className="text-center mt-[30px] lg:mt-[60px]">
        <AppButton
          className="w-full md:w-fit"
          href={data?.data?.button_link}
          variant="outline"
        >
          {data?.data?.button_label}
        </AppButton>
      </div>
    </section>
  );
};

export default LatestNewsSlider;
