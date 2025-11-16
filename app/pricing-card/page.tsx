import Header from "../components/Header";
import PricingCard from "../components/PricingCard";

export default function PricingCardExample() {
    return <main className="w-full">
        <Header />
        <div className="w-full h-full flex justify-center items-center mt-10">
            <PricingCard
                planTitle="Basic"
                planDescription="Create interactive forms that connect to your workflow"
                price={["24", "242"]}
                isMonthly={true} /*can change dynamically */
                features={[
                    "100 responses/mo included",
                    "1 user",
                    "Unlimited forms",
                    "Unlimited questions",
                ]}
                seeAllFeatureLink="/basic-features"
            />
        </div>
    </main>
}