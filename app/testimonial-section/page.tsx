"use client";

import Header from "../components/Header";
import TestimonialSection from "../components/TestimonialSection";

export default function TestimonialSectionExample() {
    return (
        <main className="w-full">
            <Header />
            <div className="w-full h-full flex justify-center items-center mt-12">
                <TestimonialSection/>
            </div>
        </main>
    )
}