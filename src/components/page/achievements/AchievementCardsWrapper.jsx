import { useEffect, useState } from "react";
import { getAchievementData } from "../../../graphql/components/getAchievementData";
import AchievementCardsSection from "./AchievementCardsSection";

const AchievementCardsWrapper = ({ data }) => {
  const [achievements, setAchievements] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const achievementIds = data.data.achievements.map(
          (achievement) => achievement.id
        );
        const achievementsData = await getAchievementData(achievementIds);
        setAchievements(achievementsData);
      } catch (err) {
        console.error("Failed to load achievements:", err);
      } finally {
        setLoading(false);
      }
    }

    if (data?.data?.achievements) {
      fetchAchievements();
    } else {
      setLoading(false);
    }
  }, [data]);

  if (loading) return <div>Loading achievements...</div>;
  if (!achievements) return null;

  return <AchievementCardsSection achievements={achievements} />;
};

export default AchievementCardsWrapper;

// // import { getAchievementData } from "@/graphql/Components/getAchievementData";
// import { getAchievementData } from "../../../graphql/components/getAchievementData";
// import AchievementCardsSection from "./AchievementCardsSection";

// const AchievementCardsWrapper = async ({ data }) => {
//   const achievementIds = data.data.achievements.map(
//     (achievement) => achievement.id
//   );
//   const achievements = await getAchievementData(achievementIds);
//   return <AchievementCardsSection achievements={achievements} />;
// };

// export default AchievementCardsWrapper;
