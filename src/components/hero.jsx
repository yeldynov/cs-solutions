import MainPicture from '../assets/main.jpg';

function Hero() {
  return (
    <div className='mx-auto bg-gray-500 relative'>
      <img
        src={MainPicture}
        alt='Main Image'
        className='w-full h-auto sm:h-[80vh] object-contain sm:object-cover'
      />
      <div className='absolute scale-50 sm:scale-100 top-[5%] sm:top-1/4 sm:left-[50px] xl:left-[250px] sm:w-[550px] bg-white bg-opacity-75 p-8 sm:p-12 border-t-2 border-yellow-500'>
        <div className='flex flex-col gap-5 items-start'>
          <h1 className='text-4xl font-bold'>
            Commercial <span className='text-yellow-500'>Construction</span>
          </h1>
          <p className='text-sm'>
            We transform commercial interior space into creative, flexible, and
            dynamic work environments. Our impeccable standards guarantee that
            your project goals will be met in a seamless manner.
          </p>
          <button className='bg-yellow-500 w-auto hover:bg-yellow-600 text-black py-4 px-6'>
            GET IN TOUCH WITH US
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
