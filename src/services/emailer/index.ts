import nodemailer, { SendMailOptions } from "nodemailer";

export const getMailTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      // user: process.env.NODEMAILER_AUTH_USER,
      // pass: process.env.NODEMAILER_AUTH_PASS,
      user: process.env.NODEMAILER_MARKETING_AUTH_USER,
      pass: process.env.NODEMAILER_MARKETING_AUTH_PASS,
    },
  });
};

/**
 * Sends an email using the provided mail options and HTML template.
 *
 * @param {SendMailOptions} mailOptions - Nodemailer mail options (e.g., subject, recipients, etc.).
 * @param {string} template - The HTML content of the email.
 * @returns {Promise<void>} - Resolves when the email is successfully sent.
 */
export const sendEmail = async (
  mailOptions: Omit<SendMailOptions, "html">,
  template: string
): Promise<void> => {
  const transporter = getMailTransporter();

  const mail = await transporter.sendMail({
    ...mailOptions,
    html: template,
  });

  console.log(mail, "mail response");
};
