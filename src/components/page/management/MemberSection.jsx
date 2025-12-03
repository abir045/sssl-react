import { useEffect, useState } from "react";
import parse from "html-react-parser";
import AppModal from "../../shared/AppModal";
import { InfoCard } from "../../shared/InfoCard";
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";
import { getMembersData } from "../../../graphql/Components/getMembersData";
import { Skeleton } from "../../ui/skeleton";

const MemberSection = ({ data }) => {
  const [members, setMembers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const memberIds = data.data.members.map((member) => member.id);
        const membersData = await getMembersData(memberIds);
        setMembers(membersData);
      } catch (err) {
        console.error("Failed to load members:", err);
      } finally {
        setLoading(false);
      }
    }

    if (data?.data?.members) {
      fetchMembers();
    } else {
      setLoading(false);
    }
  }, [data]);

  if (loading) return <Skeleton />;
  if (!members) return null;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mx-auto max-w-[1680px]">
        {members?.map((member, i) => (
          <AppModal
            key={i}
            modalTrigger={<MemberCard item={member.node} />}
            modalContent={
              <ModalContentCard
                name={member.node.title}
                image={member.node.image}
                position={member.node.position}
                message={member.node.message}
              />
            }
          />
        ))}
      </div>
    </>
  );
};

export default MemberSection;

const MemberCard = ({ item }) => (
  <InfoCard.Root className="cursor-pointer">
    <InfoCard.Image
      src={item.image}
      alt={item.title}
      width={405}
      height={270}
    />
    <InfoCard.Content>
      <InfoCard.Heading>{item.title}</InfoCard.Heading>
      <InfoCard.Text>{item.position}</InfoCard.Text>
    </InfoCard.Content>
  </InfoCard.Root>
);

const ModalContentCard = ({ name, image, message, position }) => (
  <div className="grid lg:grid-cols-2 h-full w-full rounded-2xl overflow-hidden">
    <div className="flex justify-center max-h-[400px] lg:max-h-[unset] items-center image-content full rounded-2xl overflow-hidden">
      <img
        src={image}
        alt="modal member image"
        height={600}
        width={500}
        className="h-full flex w-full object-cover rounded-2xl overflow-hidden"
      />
    </div>

    <div className="text-content p-4 lg:p-[50px]">
      <div className="card-head pb-4 border-border border-b mb-4">
        <Heading tag="h4" variant="h4" className="mb-2.5">
          {name}
        </Heading>
        <BodyText tag="p" variant="body-1" className="text-app-dark/80">
          {position}
        </BodyText>
      </div>

      <div className="max-h-[300px] overflow-y-auto modal-scrollbar pr-3">
        <BodyText tag="div" variant="body-2" className="text-app-gray prose">
          {parse(message)}
        </BodyText>
      </div>
    </div>
  </div>
);

// // import AppModal from "@/components/shared/AppModal";
// // import { InfoCard } from "@/components/shared/InfoCard";
// // import BodyText from "@/components/typography/BodyText";
// // import Heading from "@/components/typography/Heading";
// // import { getMembersData } from "@/graphql/Components/getMembersData";
// import parse from "html-react-parser";
// import AppModal from "../../shared/AppModal";
// import { InfoCard } from "../../shared/InfoCard";
// import BodyText from "../../typography/BodyText";
// import Heading from "../../typography/Heading";
// import { getMembersData } from "../../../graphql/components/getMembersData";

// const MemberSection = async ({ data }) => {
//   const memberIds = data.data.members.map((member) => member.id);
//   const members = await getMembersData(memberIds);

//   return (
//     <>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mx-auto max-w-[1680px]">
//         {members?.map((member, i) => (
//           <AppModal
//             key={i}
//             modalTrigger={<MemberCard item={member.node} />}
//             modalContent={
//               <ModalContentCard
//                 name={member.node.title}
//                 image={member.node.image}
//                 position={member.node.position}
//                 message={member.node.message}
//               />
//             }
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default MemberSection;

// const MemberCard = ({ item }) => (
//   <InfoCard.Root className="cursor-pointer">
//     <InfoCard.Image
//       src={item.image}
//       alt={item.title}
//       width={405}
//       height={270}
//     />
//     <InfoCard.Content>
//       <InfoCard.Heading>{item.title}</InfoCard.Heading>
//       <InfoCard.Text>{item.position}</InfoCard.Text>
//     </InfoCard.Content>
//   </InfoCard.Root>
// );

// const ModalContentCard = ({ name, image, message, position }) => (
//   <div className="grid lg:grid-cols-2 h-full w-full rounded-2xl overflow-hidden">
//     <div className="flex justify-center max-h-[400px] lg:max-h-[unset] items-center image-content full rounded-2xl overflow-hidden">
//       <img
//         src={image}
//         alt="modal member image"
//         height={600}
//         width={500}
//         className="h-full flex w-full object-cover rounded-2xl overflow-hidden"
//       />
//     </div>

//     <div className="text-content p-4 lg:p-[50px]">
//       <div className="card-head pb-4 border-border border-b mb-4">
//         <Heading tag="h4" variant="h4" className="mb-2.5">
//           {name}
//         </Heading>
//         <BodyText tag="p" variant="body-1" className="text-app-dark/80">
//           {position}
//         </BodyText>
//       </div>

//       <div className="max-h-[300px] overflow-y-auto modal-scrollbar pr-3">
//         <BodyText tag="div" variant="body-2" className="text-app-gray prose">
//           {parse(message)}
//         </BodyText>
//       </div>
//     </div>
//   </div>
// );
