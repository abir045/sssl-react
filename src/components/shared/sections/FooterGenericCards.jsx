// // import Heading from "@/components/typography/Heading";
// import { getAchievementData } from "../../../graphql/components/getAchievementData";
// import Heading from "../../typography/Heading";
// import PlainGridRenderer from "../PlainGridRenderer";
// import AchievementCard from "../cards/AchievementCard";
// // import { getAchievementData } from "@/graphql/Components/getAchievementData";

// const CARD_COMPONENTS = {
//   Achievement: AchievementCard,
// };

// const FooterGenericCards = async ({ data }) => {
//   const achievementIds = data.data.card_data.map(
//     (achievement) => achievement.id
//   );
//   const achievementsData = await getAchievementData(achievementIds);

//   const CardComponent = CARD_COMPONENTS[data?.data?.card_item] || (() => null);

//   return (
//     <section className="mx-auto max-w-[1680px]">
//       {data.data.section_title && (
//         <Heading
//           tag="h2"
//           variant="h2"
//           className="text-app-dark mb-[30px] lg:mb-[60px]"
//         >
//           {data?.data?.section_title}
//         </Heading>
//       )}
//       <PlainGridRenderer
//         itemsData={achievementsData}
//         renderItem={(item) => <CardComponent data={item.node} />}
//         itemsPerRow={data?.data?.items_per_row}
//         footerCTA={data?.data?.footer_cta[0]}
//         className={data?.data?.classnames}
//       />
//     </section>
//   );
// };

// export default FooterGenericCards;

import { useEffect, useState } from "react";
import { getAchievementData } from "../../../graphql/components/getAchievementData";
import Heading from "../../typography/Heading";
import PlainGridRenderer from "../PlainGridRenderer";
import AchievementCard from "../cards/AchievementCard";

const CARD_COMPONENTS = {
  Achievement: AchievementCard,
};

const FooterGenericCards = ({ data }) => {
  const [achievementsData, setAchievementsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const achievementIds = data.data.card_data.map(
          (achievement) => achievement.id
        );
        const achievements = await getAchievementData(achievementIds);
        setAchievementsData(achievements);
      } catch (err) {
        console.error("Failed to load achievements:", err);
      } finally {
        setLoading(false);
      }
    }

    if (data?.data?.card_data) {
      fetchAchievements();
    } else {
      setLoading(false);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (!achievementsData) return null;

  const CardComponent = CARD_COMPONENTS[data?.data?.card_item] || (() => null);

  return (
    <section className="mx-auto max-w-[1680px]">
      {data.data.section_title && (
        <Heading
          tag="h2"
          variant="h2"
          className="text-app-dark mb-[30px] lg:mb-[60px]"
        >
          {data?.data?.section_title}
        </Heading>
      )}
      <PlainGridRenderer
        itemsData={achievementsData}
        renderItem={(item) => <CardComponent data={item.node} />}
        itemsPerRow={data?.data?.items_per_row}
        footerCTA={data?.data?.footer_cta[0]}
        className={data?.data?.classnames}
      />
    </section>
  );
};

export default FooterGenericCards;
