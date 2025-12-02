import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";

const HalfAndHalfCard = ({ data }) => {
  return (
    <div className="max-w-[1670px] mx-auto relative">
      {/* Background Image */}
      {data?.data.has_bg && (
        <img
          src="/global/dot-map.svg"
          alt="Section Background"
          className="absolute w-full top-0 left-0 -z-10"
        />
      )}

      <div className="half-and-half-card grid gap-[30px] 2xl:gap-0 2xl:grid-cols-2 items-center mb-[30px] lg:mb-[120px]">
        {/* TEXT SECTION */}
        <div
          className={`text-content space-y-5 lg:space-y-10 ${
            data?.data?.is_reversed
              ? "pl-[0px] 2xl:pl-20 2xl:order-last"
              : "order-first pr-[0px] 2xl:pr-20"
          }`}
        >
          <Heading tag="p" variant="h2" className="text-app-dark">
            {data?.data?.title}
          </Heading>

          {/* DESCRIPTION PARAGRAPHS */}
          {data?.data?.descriptions.length > 0 &&
            data?.data?.descriptions.map((item, index) => (
              <BodyText
                tag="p"
                key={index}
                variant="lead-2"
                className="text-app-dark/80"
              >
                {item?.paragraph}
              </BodyText>
            ))}

          {/* LIST ITEMS */}
          {data?.data.list_items.length > 1 && (
            <ul className="custom-list">
              {data?.data.list_items.map((item, index) => (
                <li key={index}>
                  <BodyText
                    tag="p"
                    variant="lead-2"
                    className="text-app-dark/80"
                  >
                    {item?.text}
                  </BodyText>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* MAIN IMAGE */}
        <img
          src={data?.data?.card_image}
          alt="Half and Half card image"
          className="w-full h-full object-top 2xl:object-center object-cover max-h-[700px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HalfAndHalfCard;
