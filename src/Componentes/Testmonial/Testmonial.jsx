
const Testmonial = () => {
  // const settings = {
  //     dots: true,
  //     arrows: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     cssEase: "linear",
  //     pauseOnHover: true,
  //     pauseOnFocus: true,
  // }
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testmonial header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              vel laborum distinctio.Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Veniam vel laborum distinctio
            </p>
          </div>
          {/* testmonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">

          <div className="carousel w-full rounded-xl">
  <div id="item1" className="carousel-item w-full flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-[100px] h-[100px] rounded-full block mx-auto" />
    <p className="text-gray-500 text-sm dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita aperiam cumque obcaecati illo eum quidem, soluta libero odio a.</p>
    <h1 className="text-xl font-bold dark:text-white">Fuad</h1>

  </div> 
  <div id="item2" className="carousel-item w-full flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-[100px] h-[100px] rounded-full block mx-auto" />
    <p className="text-gray-500 text-sm dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita aperiam cumque obcaecati illo eum quidem, soluta libero odio a.</p>
    <h1 className="text-xl font-bold dark:text-white">Maruf</h1>

  </div> 
  <div id="item3" className="carousel-item w-full flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-[100px] h-[100px] rounded-full block mx-auto" />
    <p className="text-gray-500 text-sm dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita aperiam cumque obcaecati illo eum quidem, soluta libero odio a.</p>
    <h1 className="text-xl font-bold dark:text-white">Arafa</h1>

  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="p-4 font-bold text-2xl">.</a> 
  <a href="#item2" className="p-4 font-bold text-2xl">.</a> 
  <a href="#item3" className="p-4 font-bold text-2xl">.</a> 
</div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Testmonial;
