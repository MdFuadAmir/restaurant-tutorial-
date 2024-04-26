import AppStore from "../AppStore/AppStore";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="bg-white dark:dark:bg-gray-900 dark:text-white duration-200">
            <Header></Header>
            <Hero></Hero>
            <Services></Services>
            <Banner></Banner>
            <AppStore></AppStore>
        </div>
    );
};

export default Home;