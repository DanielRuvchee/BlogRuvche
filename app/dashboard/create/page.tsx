import { handleSubmission } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card,  CardContent,  CardDescription,  CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Create() {
    return (
        <div>
            <Card className="max-w-lg m-auto">
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Create a new post to share it.</CardDescription>
                </CardHeader>
                <CardContent>
                
                    <form className="flex flex-col gap-4" action={handleSubmission}>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input name="title" required type="text" placeholder="Title" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea name="content" required placeholder="Content" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input name="url"required type="url" placeholder="Image URL" />
                        </div>

                        <Button>Create Post</Button>
                    </form>
                    
                </CardContent>
            </Card>
        </div>
    )
}