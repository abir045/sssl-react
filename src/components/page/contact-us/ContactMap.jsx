const ContactMap = ({data}) => {
    return (
        <div className="w-full rounded-2xl max-w-[1365px] mx-auto overflow-hidden">
            <iframe
                src={data.data.map_link}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default ContactMap
