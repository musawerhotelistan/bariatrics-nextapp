import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";

const DoctorDetailSection = dynamic(() => import("./components/DoctorDetailSection"), { ssr: false });
const ProcedureSection = dynamic(() => import("./components/ProcedureSection"), { ssr: false });
const BmiSection = dynamic(() => import("./components/BmiSection"), { ssr: false });
const ChooseUsSection = dynamic(() => import("./components/ChooseUsSection"), { ssr: false });
const SuccessStoriesSection = dynamic(() => import("./components/SuccessStoriesSection"), { ssr: false });
const ExploreSection = dynamic(() => import("./components/ExploreSection"), { ssr: false });

const BeforeAfter = dynamic(() => import("./components/BeforeAfter"), { ssr: false });
const FaqSection = dynamic(() => import("./components/FaqSection"), { ssr: false });
const PatientFeedback = dynamic(() => import("./components/PatientFeedback"), { ssr: false });
const IconSliderSection = dynamic(() => import("./components/IconSliderSection"), { ssr: false });
const DifferentiateSection = dynamic(() => import("./components/DifferentiateSection"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div>
        {/* Load critical sections first */}
        <HomeSection />
        <IconSliderSection />
        <DoctorDetailSection />
        <ProcedureSection />
        <BeforeAfter />
        <BmiSection />
        <ChooseUsSection />
        <SuccessStoriesSection />
        <PatientFeedback />
        <ExploreSection />
        <DifferentiateSection />
        <FaqSection />
      </div>
      <Footer />
    </main>
  );
}
