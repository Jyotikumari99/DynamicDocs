import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_APP_RESEND_API_KEY);

export async function POST(req: Request) {
    const dataReceived = await req.json();

    try {
        const { emailToSend, userName, fileName, shortUrl, fileSize, fileType } = dataReceived;

        const data = await resend.emails.send({
            from: "Dynamic Docs <dynamicdocs@shivendra.me>",
            to: [emailToSend],
            subject: `${userName} sent you a file using Dynamic Docs`,
            react: EmailTemplate({
                dataReceived: {
                    emailToSend,
                    userName,
                    fileName,
                    fileSize,
                    fileType,
                    shortUrl,
                },
            }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
