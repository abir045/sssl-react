import { useEffect, useState } from "react";
import { getAchievementData } from "../../../graphql/Components/getAchievementData";
import AchievementCardsSection from "./AchievementCardsSection";
import { Skeleton } from "../../ui/skeleton";
// import { getAchievementData } from "@/graphql/components/getAchievementData";

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

  if (loading) return <Skeleton />;
  if (!achievements) return null;

  return <AchievementCardsSection achievements={achievements} />;
};

export default AchievementCardsWrapper;
