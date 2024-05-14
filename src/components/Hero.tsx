import HeroImage from '../assets/hero.svg';

const Hero = () => {
  return (
    <div className="flex min-h-screen mx-auto items-center bg-base-200">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center max-w-[80%] mx-auto">
        <div className="">
          <h1 className="text-7xl font-bold max-w-3xl">Hampshire Based Electrical Company</h1>
          <p className="py-6 max-w-2xl text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="flex flex-col md:flex-row gap-3 lg:gap-4 mx-auto">
            <button className="btn btn-primary w-full lg:w-36">Get Started</button>
            <button className="btn w-full lg:w-36 btn-outline">Get Started</button>
          </div>
        </div>
        <img src={HeroImage} className="rounded-lg hidden lg:block max-w-xl" alt="Hero" />
      </div>
    </div>
  )
}

export default Hero;
