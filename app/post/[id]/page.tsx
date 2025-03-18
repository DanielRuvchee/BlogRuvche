import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

async function getData(id: string) {
    const data = await prisma.blogPost.findUnique({
        where: {
            id: id,
        }
    })

    if(!data) {
        return notFound()
    }

    return data
}

type Params = Promise<{ id: string }>

export default async function IdPage({params}: {params: Params}) {
    const {id} = await params
    const data = await getData(id)

    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}