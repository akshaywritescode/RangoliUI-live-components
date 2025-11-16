import { Card } from "@/components/ui/card";
import SeparatorWithText from "../components/SeparatorWithText";

export default function SeparatorWithTextExample() {
    return <div className="flex justify-center items-center h-screen w-screen">
        <Card className="p-6">
            <h1>We am separated with separator component</h1>
            <SeparatorWithText text="or login with" className="w-full" />
            <h1>We am separated with separator component</h1>
        </Card>
    </div>
}