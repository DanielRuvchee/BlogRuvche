"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton() {
    const {pending} = useFormStatus()

    return <Button className="w-fitt" type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"}</Button>
}