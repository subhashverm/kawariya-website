import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import image1 from "../assets/images-1.webp";
 import image2 from "../assets/image-2.webp"
 import image3 from "../assets/image-3.webp";
 import image4 from "../assets/image-4.webp"
const images = [
  "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
  "https://images.unsplash.com/photo-1473625247510-8ceb1760943f",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
];

export default function Splash() {
   const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="">

      {/* HERO SECTION */}
      <div className="relative h-[90vh] w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to Kanwariya Sewa
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Smart Support System for Pilgrims
                  </p>
                  <button className="bg-orange-600 px-6 py-3 rounded-full hover:bg-orange-700 transition "   onClick={() => navigate("/Register")} >
                
                    Explore Services 
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ABOUT */}
      <section className="py-20 bg-orange-50 text-center px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          About Kanwariya Sewa
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Kanwariya Sewa is a smart logistics and wellness platform designed
          to support pilgrims during their spiritual journey with safety,
          guidance and emergency support.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12" data-aos="fade-up">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Route Map", path:"/",icon: "🗺️" },
            { title: "Rest Points",  path:"/",icon: "🛏️" },
            { title: "Medical Help", path:"/",icon: "🏥" },
            { title: "SOS Emergency", path:"/",  icon: "🚨" },
          ].map((service, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="bg-orange-50 p-8 rounded-2xl shadow-md text-center hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => navigate("/Register")}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-orange-50 px-6">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12" data-aos="fade-up">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            "⚡ Real-Time Updates",
            "🔒 Secure Platform",
            "🌍 Easy Navigation",
          ].map((item, i) => (
            <div key={i} data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-600">
                Reliable and smart support throughout your pilgrimage journey.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-12" data-aos="fade-up">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {[
            { number: "500+", label: "Pilgrims Helped" },
            { number: "50+", label: "Rest Points" },
            { number: "30+", label: "Medical Camps" },
            { number: "100+", label: "SOS Resolved" },
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-12" data-aos="fade-up">
          Images of pilgrims
        </h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">


  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <img 
      src={image2} 
      alt="Kanwar Yatra"
      class="w-full h-64 object-cover"
    />

    <div class="p-4">
      <h2 class="text-2xl font-bold text-orange-600">
        Kanwar Yatra Journey
      </h2>

      <p class="text-gray-600 mt-2">
        Devotees carrying beautifully decorated Kanwars during the sacred
        pilgrimage with full devotion and energy.
      </p>
    </div>
  </div>


  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <img 
      src={image3} 
      alt="Har Har Mahadev"
      class="w-full h-64 object-cover"
    />

    <div class="p-4">
      <h2 class="text-2xl font-bold text-orange-600">
        Har Har Mahadev
      </h2>

      <p class="text-gray-600 mt-2">
        Kanwariyas walking together with the Indian flag while showing faith,
        unity, and dedication towards Lord Shiva.
      </p>
    </div>
  </div>

  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <img 
      src={image1}
      alt="Shiv Bhakti"
      class="w-full h-64 object-cover"
    />

    <div class="p-4">
      <h2 class="text-2xl font-bold text-orange-600">
        Shiv Bhakti Crowd
      </h2>

      <p class="text-gray-600 mt-2">
        A massive gathering of Shiva devotees during the holy Kanwar Yatra,
        creating a spiritually energetic atmosphere.
      </p>
    </div>
  </div>

</div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-orange-50 px-6">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12" data-aos="fade-up">
          What Pilgrims Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Very helpful during my yatra.",
            "Route map is very accurate.",
            "Best support platform for pilgrims!",
          ].map((review, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700">“{review}”</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
