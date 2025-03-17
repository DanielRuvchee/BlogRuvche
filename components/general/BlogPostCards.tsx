import Link from "next/link"

interface IaappProps {
    data: {
        id: string
        title: string
        content: string
        imageUrl: string
        authorId: string
        authorName: string
        authorImage: string
        createdAt: Date
        updatedAt: Date
    }
}

export default function BlogPostCards({data}:  IaappProps) {
    return (
        <div className="group relative overflow-hidden rounded-lg bg-gray-200 shadow-md transition-all hover:shadow-lg">
            <Link href={`/post/${data.id}`} className="block h-full w-full">
            </Link>
        </div>
    )
}