import Health from "../../Components/Home-page-Layout/Health";
import Hero from "../../Components/Home-page-Layout/Hero";
import Upskills from "../../Components/Home-page-Layout/Upskills";
import Appraisal from "../../Components/Home-page-Layout/Appraisal";
import Mentorship from "../../Components/Home-page-Layout/Mentorship";
import Navbar from "../../Components/Generic-Layout/Navbar";
import AboutUs from "../../Components/Home-page-Layout/AboutUs";
import Faq from "../../Components/Home-page-Layout/Faq";
import Footer from "../../Components/Generic-Layout/Footer";
import Totopbtn from "../../Components/Home-page-Layout/Totopbtn";



const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Appraisal />
            <Upskills />
            <Mentorship />
            <Health />
            <AboutUs />
            <Faq />
            <Footer />
            <Totopbtn />
        </>
    )
}

export default Home;
