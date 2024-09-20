import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { useNavigate } from "react-router-dom";

export function Home() {

  const [isOpen, setIsOpen] = useState(false); // State to control popup visibility
  const [imgSrc, setImgSrc] = useState(null); // State to control popup visibility
  const [imgAlt, setImgAlt] = useState('booking-img'); // State to control popup visibility

  // Function to toggle the popup visibility
  const togglePopup = (img) => {
    setImgSrc(img)
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleAllFeature = () => {
    navigate('/all-feature')
  }
  var sequenceDelay = 0;
  var duration = 0;
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-blue-gray-700/70 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-3xl md:text-4xl lg:text-5xl"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
              >
                Smart Solutions for Studio Booking Management.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-sm md:text-xl lg:text-xl"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="top-center"
                  >
                
                <b>"TN Studio"</b> atau <b>"29-Studio"</b> adalah aplikasi booking studio berbasis web yang dirancang khusus untuk mempermudah pemilik studio dalam mengelola pemesanan. Dengan antarmuka yang intuitif dan fitur yang lengkap, aplikasi ini memungkinkan pemilik studio untuk mengatur jadwal, menerima pemesanan dari pelanggan, serta mengelola pembayaran secara digital melalui integrasi dengan berbagai payment gateway
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }, index) => (
              index <= 2 ? (
                  <FeatureCard
                    key={index}
                    sequenceDelay={sequenceDelay+=100}
                    duration={duration+=300}
                    color={color}
                    title={title}
                    icon={React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                    description={description}
                  />
              ) : null
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center" 
                data-aos="fade-zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-back"
                >
            <Button variant="filled" color="blue" onClick={handleAllFeature}>Lihat fitur selengkapnya</Button>
          </div>

          <div className="mt-10 md:mt-20 lg:mt-20 flex flex-wrap items-center">
            <div className="mx-auto mt-0 w-full px-4 md:w-5/12 border-r-4 border-blue-500"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Efficient Studio Management
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
                TN Studio atau 29 Studio adalah solusi lengkap berbasis web yang dirancang untuk mempermudah pemilik studio dalam mengelola pemesanan, jadwal, dan pembayaran, sehingga mereka dapat fokus pada bisnis kreatif tanpa kerumitan operasional.
                <br />
                <br />
              </Typography>
              <a href="/all-feature">
                <Button variant="filled" color="blue">Lihat selengkapnya</Button>
              </a>
            </div>
            <div className="mx-auto mt-8 flex w-full justify-center px-0 md:px-4 lg:px-4 md:w-5/12 lg:mt-0"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
                >
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56" onClick={() => togglePopup('/img/product/dashboard_studio.png')}>
                  <img
                    alt="Card Image"
                    src="/img/product/dashboard_studio.png"
                    className="h-full w-full border-t-8 border-b-8 border-blue-500 cursor-pointer"
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-semibold">Manajemen Studio Disederhanakan</Typography>
                  <Typography className="font-normal text-blue-gray-500 text-justify">
                    Platform kami menyederhanakan manajemen studio dengan alat intuitif untuk penjadwalan, pemesanan, dan pembayaran, semuanya dapat diakses dari perangkat apa pun. Tingkatkan efisiensi bisnis hanya dengan beberapa klik.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          
          <div className="mt-0 md:mt-32 lg:mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-0 md:px-4 lg:px-4 md:w-5/12 lg:mt-0"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-72" onClick={() => togglePopup('/img/product/customize_web.png')}>
                  <img
                    alt="Card Image"
                    src="/img/product/customize_web.png"
                    className="h-full w-full border-t-8 border-b-8 border-blue-500 cursor-pointer"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-semibold">Kustomisasi Tema Web</Typography>
                  <Typography className="font-normal text-blue-gray-500 text-justify">
                    Anda dapat memilih dan mengubah tema serta palet warna untuk mencocokkan tampilan website dengan merek mereka, untuk memastikan bahwa website mencerminkan identitas visual studio.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mx-auto mt-8 w-full px-4 md:w-5/12 border-l-4 border-blue-500"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Customize Website Appearance.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
                <b>"Customize Website Appearance"</b> memungkinkan anda sebagai pemilik studio untuk mengubah tampilan website mereka dengan mudah. Mereka dapat mengatur tema, warna, tata letak, dan font, serta mengunggah logo dan gambar kustom. Fitur ini memastikan website sesuai dengan identitas merek studio dan meningkatkan pengalaman pengunjung.
                <br />
                <br />
              </Typography>
              <a href="/all-feature">
                <Button variant="filled" color="blue">Lihat selengkapnya</Button>
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          {/* <PageTitle section="Rekan Kerja" heading="Bangun Sesuatu"> */}
          <PageTitle heading="Migrasi Dengan Bisnis Digital">
            {/* Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos. */}
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-800 shadow-lg shadow-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Ingin terhubung dengan kami?">
            Lengkapi formulir ini dan kami akan menghubungi Anda kembali dalam 24 jam.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="filled" color="blue" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      

      {/* Popup Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={togglePopup} // Close popup when clicking outside
        >
          <div 
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={togglePopup}
            >
              ✖
            </button>

            {/* Dynamic Content */}
            <div className="text-center p-4">
              {/* <h2 className="text-xl font-bold mb-2">{popupContent.title}</h2>
              <p className="text-gray-600 mb-4">{popupContent.description}</p> */}
              {/* Enlarged Image */}
              <img 
                src={imgSrc} 
                alt={imgAlt}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
