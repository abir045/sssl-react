import BodyText from "../../typography/BodyText"

const MobileAchievementTimeline = ({ timelineData }) => {
    return (
        <div className="relative ">
            {/* Vertical line */}
            <div className="absolute left-[32px] top-0 bottom-0 w-[2px] bg-white" />

            {/* Timeline items */}
            <div className="space-y-12">
                {timelineData.map((item, index) => (
                    <div key={index} className="relative flex">
                        {/* Year circle */}
                        <div className="absolute left-0 z-10">
                            <div className="min-w-[68px] min-h-[68px] bg-[#D4AF37] rounded-full flex justify-center items-center border-2 border-white">
                               <BodyText tag='span' variant='lead-1' className='text-white'> {item?.node?.year}</BodyText>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="ml-24">
                            <BodyText tag="p" variant='lead-1' className="text-white"> {item?.node?.title}</BodyText>
                            <BodyText tag="p" variant='body-2' className="text-white opacity-80 mt-[10px]">{item?.node?.description}</BodyText>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileAchievementTimeline