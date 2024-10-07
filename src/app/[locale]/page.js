import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";

const DoctorDetailSection = dynamic(() => import("./components/DoctorDetailSection"), { ssr: false });
const ProcedureSection = dynamic(() => import("./components/ProcedureSection"), { ssr: false });
const BmiSection = dynamic(() => import("./components/BmiSection"), { ssr: false });
const ChooseUsSection = dynamic(() => import("./components/ChooseUsSection"), { ssr: false });
const SuccessStoriesSection = dynamic(() => import("./components/SuccessStoriesSection"), { ssr: false });
const ExploreSection = dynamic(() => import("./components/ExploreSection"), { ssr: false });
// // Dynamically import non-critical components
// const ChooseUsSection = dynamic(() => import("./components/ChooseUsSection"), { ssr: false });
const BeforeAfter = dynamic(() => import("./components/BeforeAfter"), { ssr: false });
// const ServicesComponent = dynamic(() => import("./components/ServicesComponent"), { ssr: false });
// const ServicesSection = dynamic(() => import("./components/ServicesSection"), { ssr: false });
// const TeamSection = dynamic(() => import("./components/TeamSection"), { ssr: false });
// const ClinicSection = dynamic(() => import("./components/ClinicSection"), { ssr: false });
// const InfluencerSection = dynamic(() => import("./components/InfluencerSection"), { ssr: false });
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
        {/* <ChooseUsSection /> */}
        {/* Dynamically loaded sections */}
        {/* <ChooseUsSection />
       
        <ServicesComponent />
        <ServicesSection />
        <TeamSection />
        <ClinicSection />
        <InfluencerSection />
        <FaqSection /> */}
      </div>

      <Footer />
    </main>
  );
}
