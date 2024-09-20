import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {

  const handleButtonGithub = () => {
    // Open the specified URL in a new tab
    window.open('https://github.com/yusufarya', '_blank'); 
  }
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/banner.jpg')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/profile.jpg"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Yusuf Aryadila
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">yusufaryadilla29@gmail.com</Typography>
                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Button className="bg-blue-600 w-fit lg:ml-auto" onClick={handleButtonGithub}><i className={`fa-brands fa-github`} /></Button>
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      22
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Friends
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      10
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Photos
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      89
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Comments
                    </Typography>
                  </div>
                </div>

              </div>
            </div>
            <div className="-mt-4 container space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Tangerang - Indonesia
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Solution Manager - Software Engineer
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  University of Informatics Systems
                </Typography>
              </div>
            </div>
            <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  I'm Yusuf, an experienced web Developer with a strong passion for creating business-centric technology solutions.
                  <br/>
                  My expertise is in working with technology especially in software development
                </Typography>
                <Button variant="outlined" color="blue">Show more</Button>
              </div>
            </div>
          </div>


        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
