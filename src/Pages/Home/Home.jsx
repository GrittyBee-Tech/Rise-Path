import Health from "../../Components/Home-page-Layout/Health";
import Hero from "../../Components/Home-page-Layout/Hero";
import Upskills from "../../Components/Home-page-Layout/Upskills";
import Appraisal from "../../Components/Home-page-Layout/Appraisal";
import Mentorship from "../../Components/Home-page-Layout/Mentorship";
import Navbar from "../../Components/Generic-Layout/Navbar";
import AboutUs from "../../Components/Home-page-Layout/AboutUs";
import Faq from "../../Components/Home-page-Layout/Faq";



const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Appraisal />
            <Upskills />
            <Mentorship />
            <Health />
            <AboutUs />
            <Faq/>



        </div>
    )
}

export default Home;
