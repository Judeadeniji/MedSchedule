import { Image } from "@nextui-org/react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

function Solutions() {
  return (
    <div className="grid md:grid-cols-5 gap-x-6">
      <div className="md:col-span-2 h-auto">
        <figure className="h-full w-auto hidden md:block md:rounded-full overflow-clip">
          <Image
            src="/female-medic.jpg"
            alt="female medic"
            className="w-full h-full object-cover object-center"
          />
        </figure>
      </div>

      <div className="col-span-3 space-y-6 px-6">
        <div>
          <h1 className="text-4xl font-bold leading-snug text-center md:text-start">
            Fastest way to get medical help
          </h1>

          <p className="text-gray-500 font-medium text-center md:text-start text-sm">
            We provide the fastest way to get medical help. Make appointments
            with our doctors and nurses in minutes.
          </p>
        </div>

        <ul className="space-y-3">
          <li className="flex gap-x-2">
            <div className="h-auto w-auto overflow-hidden rounded-full">
              <CheckCircledIcon
                className="bg-blue-600 text-white"
                width={25}
                height={25}
              />
            </div>
            <span>Book appointments in minutes</span>
          </li>
          <li className="flex gap-x-2">
            <div className="h-auto w-auto overflow-hidden rounded-full">
              <CheckCircledIcon
                className="bg-blue-600 text-white"
                width={25}
                height={25}
              />
            </div>
            <span>Get reminders for your appointments</span>
          </li>
          <li className="flex gap-x-2">
            <div className="h-auto w-auto overflow-hidden rounded-full">
              <CheckCircledIcon
                className="bg-blue-600 text-white"
                width={25}
                height={25}
              />
            </div>
            <span>Easy scheduling system</span>
          </li>
          <li className="flex gap-x-2">
            <div className="h-auto w-auto overflow-hidden rounded-full">
              <CheckCircledIcon
                className="bg-blue-600 text-white"
                width={25}
                height={25}
              />
            </div>
            <span>Get medical help from anywhere</span>
          </li>
          <li className="flex gap-x-2">
            <div className="h-auto w-auto overflow-hidden rounded-full">
              <CheckCircledIcon
                className="bg-blue-600 text-white"
                width={25}
                height={25}
              />
            </div>
            <span>Fastest way to get medical help</span>
          </li>
          <li className="flex gap-x-2">
            <div className="h-auto w-auto overflow-hidden rounded-full">
              <CheckCircledIcon
                className="bg-blue-600 text-white"
                width={25}
                height={25}
              />
            </div>
            <span>Secure and private</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="grid md:grid-cols-3 md:gap-x-8 lg:gapx-12 gap-x-3 gap-y-8 px-5">
      <div className="bg-white shadow-lg p-6 rounded-2xl col-span-1">
        <h1 className="font-semibold text-lg">Appointment Reminders</h1>
        <p className="text-sm text-gray-600">
          We send automated appointment reminders to ensure you never miss a
          scheduled appointment.
        </p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-2xl col-span-1">
        <h1 className="font-semibold text-lg">Easy Scheduling</h1>
        <p className="text-sm text-gray-600">
          Our user-friendly scheduling system allows you to easily book and
          manage your appointments at your convenience.
        </p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-2xl col-span-1">
        <h1 className="font-semibold text-lg">Personalized Care</h1>
        <p className="text-sm text-gray-600">
          Our team of healthcare professionals provide personalized care tailored
          to your specific needs, ensuring you receive the best treatment.
        </p>
      </div>
    </div>
  );
}


function ServicesWeProvide() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row text-center md:text-start">
        <h1 className="text-4xl font-semibold leading-snug">Services We Provide</h1>
        <p className="font-medium text-sm text-gray-500">
          We facilitate the fastest way to get medical help by helping you
          schedule appointments with our doctors and nurses in minutes. No more
          waiting in line or missing appointments.
        </p>
      </div>

      <Services />
    </section>
  );
}

export { ServicesWeProvide, Solutions };

