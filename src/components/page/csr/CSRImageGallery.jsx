// import Image from "next/image";

const CSRImageGallery = ({ data }) => {
  const wideSpanIndexes = [1, 3, 8, 9];

  return (
    <div className="grid grid-cols-4 gap-[4px] lg:gap-[20px] 2xl:gap-[30px]">
      {data.data.images.map((img, index) => (
        <div
          key={index}
          className={`col-span-1 max-h-[480px] rounded-sm lg:rounded-xl 2xl:rounded-2xl overflow-hidden ${
            wideSpanIndexes.includes(index) ? "col-span-2" : ""
          }`}
        >
          <img
            alt="CSR Gallery Image"
            src={img.gallery_image}
            className="object-cover w-full h-full rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default CSRImageGallery;
