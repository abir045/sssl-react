// import { cn } from "@/lib/utils";
import { cn } from "../../utils/utils";
import { AppButton } from "./Buttons";

const PlainGridRenderer = ({
  itemsData,
  renderItem,
  itemsPerRow,
  footerCTA,
  className,
}) => {
  const gridClass =
    itemsPerRow === 3
      ? "grid sm:grid-cols-2 lg:grid-cols-3"
      : "grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4";
  return (
    <div>
      <div className={cn(`${gridClass}`, className)}>
        {itemsData.map((item, index) => (
          <div key={index} className="block w-full h-full">
            {renderItem(item)}
          </div>
        ))}
      </div>

      {footerCTA?.label && (
        <div className="cta mt-[30px] lg:mt-[100px] flex justify-center">
          <AppButton
            as="link"
            href={footerCTA?.link}
            variant="outline"
            className="w-full sm:w-fit"
          >
            {footerCTA?.label}
          </AppButton>
        </div>
      )}
    </div>
  );
};

export default PlainGridRenderer;
