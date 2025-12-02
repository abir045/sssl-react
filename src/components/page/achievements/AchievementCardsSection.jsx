import { useState } from "react";
// import { AppButton } from "@/components/shared/Buttons";
// import AchievementCard from "@/components/shared/cards/AchievementCard";
import { AppButton } from "../../shared/Buttons";
import AchievementCard from "../../shared/cards/AchievementCard";

const AchievementCardsSection = ({ achievements }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const achievementsToShow = achievements.slice(0, visibleCount);
  const hasMore = visibleCount < achievements.length;

  return (
    <div>
      <div className="achievement-section grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-x-5 lg:gap-y-10 max-w-[1680px] mx-auto">
        {achievementsToShow.map((item, index) => (
          <AchievementCard data={item.node} key={index} />
        ))}
      </div>

      {hasMore && (
        <div className="cta flex justify-center items-center mt-10">
          <AppButton
            as="button"
            variant="outline"
            onClick={handleShowMore}
            className="cursor-pointer"
          >
            Show more
          </AppButton>
        </div>
      )}
    </div>
  );
};

export default AchievementCardsSection;
