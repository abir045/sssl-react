import { useState } from "react";
import axios from "axios";

const useSendMail = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [error, setError] = useState(null);
  const domain = import.meta.env.NEXT_PUBLIC_BACKEND_URL;

  const sendMail = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${domain}/wp-json/nh/v1/${endpoint}/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSubmitMessage("Mail sent successfully");
      return response.data;
    } catch (err) {
      setError("Error sending mail");
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMail,
    loading,
    submitMessage,
    error,
    setSubmitMessage,
    setError,
  };
};

export default useSendMail;
