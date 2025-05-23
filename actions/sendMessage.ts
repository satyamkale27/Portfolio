import axios from "axios";
import { toast } from "@/hooks/use-toast"; // Import the toast function

const sendMessage = async (contactDetails: object) => {
  try {
    const response = await axios.post(
      "http://3.110.117.102:8080/api/contact",
      contactDetails,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Show success toast
    toast({
      title: "Success",
      description: "Message sent successfully!",
    });
  } catch (error: any) {
    // Show error toast
    toast({
      title: "Error",
      description: error?.response?.data?.message || "Failed to send message.",
    });
  }
};
