import Home from "@/components/Home/Home";
import Clients from "@/components/Clients/Clients";
import About from "@/components/About/About";
import Featured from "@/components/Featured/Featured";
import Truest from "@/components/Trust/Truest";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import StartBanner from "@/components/StartBanner/StartBanner";

const Page = () => {
    return (
        <>
            <Home />
            <Clients />
            <About />
            <Featured />
            <Truest />
            <Services />
            <Testimonial />
            <StartBanner />
        </>
    );
};

export default Page;