import ContactDetails from "../contact-us/ContactDetails"
import ContactForm from "../contact-us/ContactForm"

const ContactCTA = ({ data }) => {

    return (
        <section
            className="py-[60px] px-[15px] lg:py-[120px] lg:px-[30px] 2xl:px-[120px] rounded-2xl overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(10, 26, 58, 0.9), rgba(10, 26, 58, 0.9)), url(${data.background_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-col lg:flex-row max-w-[1444px] mx-auto justify-between gap-10 2xl:gap-[100px]">
                <ContactDetails data={data} />
                <div className="shrink-0 flex-1">

                <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactCTA