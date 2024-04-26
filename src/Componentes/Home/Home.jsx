import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="bg-white dark:">
            <Header></Header>
            <Hero></Hero>
            <Services></Services>
            <Banner></Banner>
        </div>
    );
};

export default Home;