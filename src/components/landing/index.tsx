import Features from "./features";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./hero-section";
import Testimonials from "./testimonials";

const LandingPage = () => {
    return (
        <div className="max-w-[1500px] mx-auto">
            <Header />
            <HeroSection />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    )
};

export default LandingPage;