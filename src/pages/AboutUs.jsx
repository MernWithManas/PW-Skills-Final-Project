import aboutMainPage from "../assets/Images/aboutMainImage.png"
import apj from "../assets/Images/apj.png"
import billGates from "../assets/Images/billGates.png"
import nelsonMandela from "../assets/Images/nelsonMandela.png"
import steveJobs from "../assets/Images/steveJobs.png"
import HomeLayout from "../layouts/HomeLayout";


function AboutUs() {
  return (
    <HomeLayout>
      <div className="flex flex-col pt-20 pl-20 text-white ">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-20">
            <h1 className="text-5xl font-semibold text-yellow-500">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality to the world. We
              are providing the platform for the aspiring teachers and students
              to share their skills, creativity and knowledge to each other to
              empower and contribute in the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img src={aboutMainPage} 
            className="drop-shadow-2xl"
            alt="about main page"
            id="test1" />
          </div>
        </div>

    <div className="w-1/2 mx-auto my-10 carousel">
        <div id="slide1" className="relative w-full carousel-item">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img src={apj} className="w-40 border-2 border-gray-400 rounded-full" />
                <p className="text-xl text-gray-200">“We cannot solve problems with the kind of thinking we employed when we came up with them.”</p>
                <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div> 
        <div id="slide2" className="relative w-full carousel-item">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img src={steveJobs} className="w-40 border-2 border-gray-400 rounded-full" />
                <p className="text-xl text-gray-200">“Your time is limited, so don&#39;t waste it living someone else&#39;s life.”</p>
                <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div> 
        <div id="slide3" className="relative w-full carousel-item">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img src={billGates} className="w-40 border-2 border-gray-400 rounded-full" />
                <p className="text-xl text-gray-200">&quot;This is a fantastic time to be entering the business world, because business is going to change more in the next 10 years than it has in the last 50.&quot;</p>
                <h3 className="text-2xl font-semibold">Bill Gates</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div> 
        <div id="slide4" className="relative w-full carousel-item">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img src={nelsonMandela} className="w-40 border-2 border-gray-400 rounded-full" />
                <p className="text-xl text-gray-200">&quot;Education is the most powerful weapon which you can use to change the world.”</p>
                <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
