
import img1 from "../../assets/biryani2.png"
import img2 from "../../assets/biryani2.png"
import img3 from "../../assets/biryani2.png"

const servicesData = [
    {
        id: 1,
        img: img1,
        name: "Biryani",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores deleniti officia accusamus fuga nihil ratione debitis porro architecto enim similique rerum, temporibus tempore unde cumque tenetur libero earum soluta."
    },
    {
        id: 2,
        img: img2,
        name: "Chicken Kari",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores deleniti officia accusamus fuga nihil ratione debitis porro architecto enim similique rerum, temporibus tempore unde cumque tenetur libero earum soluta."
    },
    {
        id: 3,
        img: img3,
        name: "Kacchi",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores deleniti officia accusamus fuga nihil ratione debitis porro architecto enim similique rerum, temporibus tempore unde cumque tenetur libero earum soluta."
    },
]

const Services = () => {
    return (
        <>
        <div className='py-10'>
            <div className='container'>
                {/* servicea header section  */}
                <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                    <h1 className='text-3xl font-bold'>Services</h1>
                    <p className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam vel laborum distinctio</p>
                </div>
                {/* servidces card */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {
                        servicesData.map(({id,img,name,description}) => {
                            return(
                            <div key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary dark:hover:text-white duration-300 p-4 shadow-xl hover:text-white">
                                <div className="h-[100px]">
                                    <img src={img} alt="" className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                                </div>
                                <div className="p-4 text-center">
                                    <h1 className="text-xl font-bold dark:text-white">{name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{description}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Services;