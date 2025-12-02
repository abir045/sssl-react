import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const ContactUsPageWrapper = ({data}) => {
    return (
        <div className="flex gap-[30px] lg:gap-[60px] flex-col lg:flex-row justify-between  items-center max-w-[1365px] mx-auto mt-[70px]">
            <ContactDetails data={data.data} />
            <ContactForm />
        </div>
    )
}

export default ContactUsPageWrapper