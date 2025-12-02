import React from 'react'
import Heading from '../../typography/Heading'
import BodyText from '../../typography/BodyText'
const OurPresence = ({data}) => {
  return (
          <section className="max-w-[1840px] mx-auto relative">
          <div className="flex items-center justify-center h-full mb-[56px]">
           <Heading tag="h2" variant="h2" className="text-app-dark text-center"> {data?.data?.section_title}</Heading>
          </div>
          <div className="flex justify-center items-center gap-[20px] lg:gap-[110px] flex-col-reverse lg:flex-row ">
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-[30px] w-full lg:w-fit">
              <div className='col-span-2'>
                <BodyText tag='p' variant='caption' className='font-semibold uppercase text-app-dark mb-1'>Head Office</BodyText>
                <BodyText tag='p' variant='lead-1' className='text-app-dark px-3 py-5 border border-[#2A2A2C1A] border-b-[5px] border-b-[#D4AF37] rounded-[10px]'>{data.data.head_office_name}</BodyText>
              </div>
  
              {/* Regional Offices */}
              <div>
              <BodyText tag='p' variant='caption' className='font-semibold uppercase text-app-dark mb-1'>Regional Offices</BodyText>
                <ul className="px-5 py-3 grid grid-cols-2 gap-y-[15px] lg:gap-x-[15px] border border-[#2A2A2C1A] border-b-[5px] border-b-[#625BCC] rounded-[10px] h-full">
                  {data.data.regional_offices.map((office, index) => (
                    <li
                      key={index}
                      className="list-inside list-disc text-app-dark text-nowrap"
                    >
                      <BodyText tag='span' variant='body-1' className='text-app-dark'>{office?.location}</BodyText>
                    </li>
                  ))}
                </ul>
              </div>
  


             {/* Branch Offices */}
              <div>
              <BodyText tag='p' variant='caption' className='font-semibold uppercase text-app-dark mb-1'> Branch Offices</BodyText>
                <ul className="px-5 py-3 grid grid-cols-2 gap-y-[15px] lg:gap-x-[15px] border border-[#2A2A2C1A] border-b-[5px] border-b-[#FF002B] rounded-[10px]  h-full">
                  {data.data.branch_offices.map((office, index) => (
                    <li
                      key={index}
                      className="list-inside list-disc text-app-dark text-nowrap"
                    >
                      <BodyText tag='span' variant='body-1' className='text-app-dark'>{office?.location}</BodyText>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
  
            {/* Second part with map image */}
            <div className="relative">
              <img src={data?.data?.map_image} alt="Map of offices" />
            </div>
          </div>

          <div className="absolute flex flex-col justify-center items-center lg:w-[310px] mx-auto p-4 lg:p-10 border border-[#2A2A2C1A] lg:border-b-[4px] lg:border-b-[#625BCC] top-16 lg:top-20 right-0 2xl:right-[15%] rounded-[10px]">
                <Heading tag="h2" variant="h1" className="text-app-dark text-center mb-3">{data?.data?.total_offices}</Heading>
                <BodyText tag="p" variant="body-1" className="text-app-dark">{data?.data?.total_offices} Offices</BodyText>
              </div>
        </section>
  )
}

export default OurPresence