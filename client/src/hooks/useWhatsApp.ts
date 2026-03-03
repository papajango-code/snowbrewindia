/**
 * WhatsApp Integration Hook
 * Generates WhatsApp message links and handles WhatsApp interactions
 */

const WHATSAPP_NUMBER = "917503003413"; // Your WhatsApp number without + sign

export const useWhatsApp = () => {
  /**
   * Generate a WhatsApp message link with pre-filled text
   * @param message - The message to send
   * @returns WhatsApp link URL
   */
  const generateWhatsAppLink = (message: string): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  /**
   * Create a message from form data
   * @param formData - Object containing form field values
   * @returns Formatted message string
   */
  const createFormMessage = (formData: Record<string, any>): string => {
    const lines = [
      "🎉 *New Order Inquiry from Snowbrew Website*",
      "",
      `*Name:* ${formData.firstName} ${formData.lastName}`,
      `*Email:* ${formData.email}`,
      `*Contact:* ${formData.contact}`,
      formData.company ? `*Company:* ${formData.company}` : "",
      "",
      "*Services Interested:*",
    ];

    const services = formData.services || [];
    if (services.length > 0) {
      services.forEach((service: string) => {
        lines.push(`• ${service}`);
      });
    } else {
      lines.push("• Not specified");
    }

    lines.push("");
    lines.push(`*Number of Guests:* ${formData.pax || "Not specified"}`);
    lines.push(`*Event Date:* ${formData.eventDate || "Not specified"}`);
    lines.push(`*Event Location:* ${formData.eventLocation || "Not specified"}`);
    lines.push(`*Event Type:* ${formData.eventType || "Not specified"}`);

    if (formData.comments) {
      lines.push("");
      lines.push(`*Additional Comments:*`);
      lines.push(formData.comments);
    }

    lines.push("");
    lines.push("---");
    lines.push("Please confirm availability and send pricing details. Thank you!");

    return lines.filter((line) => line !== "").join("\n");
  };

  /**
   * Open WhatsApp with a message
   * @param message - The message to send
   */
  const openWhatsApp = (message: string): void => {
    const link = generateWhatsAppLink(message);
    window.open(link, "_blank");
  };

  /**
   * Quick inquiry message
   */
  const sendQuickInquiry = (): void => {
    const message =
      "Hi Snowbrew! 👋 I'm interested in your bubble tea catering services for my event in Delhi. Can you provide more information and pricing?";
    openWhatsApp(message);
  };

  return {
    generateWhatsAppLink,
    createFormMessage,
    openWhatsApp,
    sendQuickInquiry,
    whatsappNumber: WHATSAPP_NUMBER,
  };
};
