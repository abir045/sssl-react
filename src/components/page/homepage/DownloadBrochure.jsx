// import BodyText from "@/components/typography/BodyText"
import BtnArrow from "../../icons/BtnArrow";
import DownloadIcon from "../../icons/DownloadIcon";
import { AppButton } from "../../shared/Buttons";
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";
// import BtnArrow from "@/components/icons/BtnArrow";

const DownloadBrochure = ({ data }) => {
  // console.log("data download", data.data)

  // return
  return (
    <section
      className="py-[60px] px-[15px] lg:py-[120px] lg:px-[120px] rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 26, 58, 0.9), rgba(10, 26, 58, 0.9)), url(${data?.data?.background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-content max-w-[1068px] mx-auto text-center">
        <Heading
          tag="h2"
          variant="h2"
          className="text-white text-center mb-[20px]"
        >
          {data?.data?.section_title}
        </Heading>
        {data.description && (
          <BodyText tag="p" variant="lead-2" className="opacity-80 text-white">
            {data.data.description}
          </BodyText>
        )}
        <AppButton
          target="_blank"
          download
          href={data.data.button_link || data.data.brochure_file}
          icon={data.data.description ? <BtnArrow /> : <DownloadIcon />}
          variant="primary"
          as="link"
          className="w-full sm:w-fit cursor-pointer mt-[40px] gap-[]"
        >
          {" "}
          {data.data.button_label}
        </AppButton>
      </div>
    </section>
  );
};

export default DownloadBrochure;
