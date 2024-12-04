import contact from "../models/contact.js";
import { sendEmail } from "../Nodemailer/mailer.js";
export const contactPage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new contact({
            name, email, message
        });
        await newContact.save();

        const mailOptions = {
            from: email,
            to: "consult.eztech@gmail.com",
            subject: 'New Contact Form Submission',
            html: `
            <div style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
    <table width="100%" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <tr>
            <td style="text-align: center; padding: 20px;">
                <!-- Logo -->
                <div>EZTECH</div>
                <h1 style="color: #4CAF50; font-size: 24px; margin: 10px 0;">New Contact Form Submission</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <p style="font-size: 16px; line-height: 1.6; color: #555;">
                    <strong>Name:</strong> ${name}
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #555;">
                    <strong>Email:</strong> ${email}
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #555;">
                    <strong>Message:</strong>
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #555;">${message}</p>
            </td>
        </tr>
        
    </table>
</div>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>

            `,

        };

        await sendEmail(mailOptions);
        res.status(200).json({ message: "mail send successfully" });


    }
    catch (error) {
        res.status(400).json({
            message: "technical internal error"
        });
    }
}