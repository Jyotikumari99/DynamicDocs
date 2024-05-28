import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export async function GET() {
    const { getUser, isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        return new Response("Unauthorized", { status: 401 });
    }

    const user: any = await getUser();
    const data = { message: "Hello User", id: user.id };
}
