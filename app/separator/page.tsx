import { Card } from "@/components/ui/card";
import Separator from "@/app/components/Separator";

export default function SeparatorExample() {
    return <div className="flex justify-center items-center h-screen w-screen">
        <Card className="p-6">
            <h1>We am separated with separator component</h1>
            <Separator />
            <h1>We am separated with separator component</h1>
        </Card>
    </div>
}