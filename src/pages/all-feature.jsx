import React, { useRef, useState } from "react";
import { Footer } from "@/widgets/layout";
import { Button, Card, CardBody, Collapse, Typography } from "@material-tailwind/react";
import { featuresData, ModulesData } from "@/data";
import { useDraggable } from "react-use-draggable-scroll";

export function AllFeature() {

  const [isOpen, setIsOpen] = useState(false); // State to control popup visibility
  const [imgSrc, setImgSrc] = useState(null); // State to control popup visibility
  const [imgAlt, setImgAlt] = useState('booking-img'); // State to control popup visibility
  
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  const [selectedDataModule, setSelectedDataModule] = useState(ModulesData[0])

  // Function to toggle the popup visibility
  const togglePopup = (img) => {
    setImgSrc(img)
    setIsOpen(!isOpen);
  };

  // Initialize the open state for each section as false (all sections closed initially)
  const [openSections, setOpenSections] = useState(
    Array(featuresData.length).fill(false)
  );

  const toggleOpen = (index) => {
    setOpenSections(prevState => {
      // Check if the clicked index is already open
      const isOpen = prevState[index];
      
      // Create a new array with all sections closed except the clicked index
      const newOpenSections = prevState.map((_, i) => (isOpen && i === index ? false : i === index));
      
      console.log(newOpenSections); // Optional: for debugging
      return newOpenSections;
    });
  };

  const selectItemModule = (title) => {
    const filteredData = ModulesData.filter(item => item.title === title);
    setSelectedDataModule(filteredData[0])
  }
  
  
  return (
    <>
      <div className="relative flex h-96 content-center items-center justify-center pt-20 pb-2">
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
                Studio Booking Management Features
              </Typography>
              {/* <Typography variant="lead" color="white" className="opacity-80"></Typography> */}
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-white py-10">
        
        <div className="mt-0 md:mt-32 lg:mt-32 flex flex-wrap items-center">
          <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div>
          <div className="mx-auto mt-0 w-full px-4 md:w-6/12"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
            >
              Fitur Unggulan : 
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
              Platform kami menawarkan sistem booking online yang mudah digunakan, manajemen jadwal studio yang efisien, dukungan multi-lokasi, dan integrasi pembayaran digital. Dengan desain responsif dan mobile-friendly, serta fitur promosi, kode diskon, dan pembuatan invoice otomatis, pemilik studio dapat mengelola bisnis mereka dengan lebih baik. Laporan dan analitik juga tersedia untuk memberikan wawasan mendalam mengenai kinerja studio.
            </Typography>
          </div>
          <div 
            className="mx-auto mt-8 flex w-full justify-center p-4 md:w-4/12 lg:mt-0 border-l-4 border-gray-500 shadow-md"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
            onClick={() => togglePopup('/img/features/booking.png')}
          >
            <img 
              src='/img/features/booking.png'
              alt={imgAlt}
              className="h-full w-full border-3 border-gray-500 cursor-pointer"
            />
          </div>
          <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div>
        </div>

        <div className="mt-0 md:mt-32 lg:mt-32 flex flex-wrap items-center">
          <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div>
          <div className="mx-auto mt-8 flex w-full justify-center p-4 md:w-2/12 lg:mt-0"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
          >
            <img 
              src='/img/features/booking_potrait.png'
              alt={imgAlt}
              className="h-96 border-3"
            />
          </div>

          <div className="mx-auto mt-8 w-full justify-center p-4 md:w-8/12 lg:mt-0 "
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
          >
            {featuresData.map(({ color, title, icon, description }, index) => (
              <div key={index}>
                <div className="font-semibold text-blue-gray-700 py-1 hover:text-blue-900 cursor-pointer"
                  onClick={() => toggleOpen(index)}
                >
                  {/* {index+1}.&nbsp; */}
                  <span className="shadow-md p-2 rounded-md">
                    {React.createElement(icon, { className: 'w-5 h-5 inline-block m-2' })}
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  {title}
                </div>
                <Collapse open={openSections[index]}>
                  <Card className="mb-3 mx-auto w-full">
                    <CardBody className="p-4">
                      <Typography className="p-0">
                        {description}
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div>
        </div>

      </section>

      <section className="relative bg-blue-gray-100/30 py-10">
        <div className="mt-0 md:mt-10 lg:mt-10 flex flex-wrap items-center">
          <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div>
          <div className="w-full justify-center md:w-10/12 lg:w-10/12" 
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
            >
            <div className="flex space-x-3 overflow-x-hidden scrollbar-hide shadow-sm py-3 border-2 border-blue-gray-100 rounded-md"
              {...events}
              ref={ref} 
            >
              {
                ModulesData.map((item, index) => (
                  <div key={index} className="mx-3">
                    <Button variant="filled" color="blue" size="md" className="w-40" onClick={() => selectItemModule(item.title)}>
                      {item.title}
                    </Button>
                  </div>
                ))
              }
            </div>

            <div className="mt-3">
              <img 
                src={selectedDataModule.img} 
                alt={selectedDataModule.title}
                className="w-full h-auto shadow-md rounded-md border-2 border-blue-gray-100"
              />
            </div>

          </div>
          <div className="mx-auto mt-8 w-full justify-center p-4 md:w-1/12 lg:mt-0 hidden md:block lg:block"></div>
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

export default AllFeature;
