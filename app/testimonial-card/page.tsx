"use client";

import Header from "../components/Header";
import TestimonialCard from "../components/TestimonialCard";
import testimonialAvatar1 from "@/app/assets/avatar-1.png"
import { useI18n } from "../providers/i18nProvider";

export default function TestimonialCardExample() {
    const {t} = useI18n()

    return (
        <main className="w-full h-screen">
            <Header />
            <div className="w-full h-full flex justify-center items-center">
                <TestimonialCard
                    description={t("testimonial-1")}
                    testimonialAvatar={testimonialAvatar1}
                    testimonialAvatarAlt="Avatar 1"
                    testimonialName="Jammie Riveria"
                    testimonialUserHandle="@jammietech123"
                />
            </div>
        </main>
    )
}