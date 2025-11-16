import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export default function ThemeSwitcherExample() {
    return <div className="w-screen h-screen flex justify-center items-center">
        <ThemeSwitcher defaultValue={"light"} />
    </div>
}