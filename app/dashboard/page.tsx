import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if(!user) {
        return redirect("/api/auth/register")
    }
    return (
        <div>
            <h1>Hello from the Dashboard</h1>
        </div>
    )
}