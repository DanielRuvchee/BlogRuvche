import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function Dashboard() {
    const { getUser } = getKindeServerSession
    const user = await getUser()

    if(!user) {
        
    }
    return (
        <div>
            <h1>Hello from the Dashboard</h1>
        </div>
    )
}