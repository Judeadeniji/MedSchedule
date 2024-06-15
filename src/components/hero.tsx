import { Button, Image } from "@nextui-org/react";
import { HeartFilledIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <div className="relative aspect-[3/2] md:max-h-[90vh] md:w-full lg:aspect-[2.75/1] grid gap-x-6 md:grid-cols-5">
      <div className="md:col-span-3 px-6 py-8 space-y-4 md:space-y-6 text-center md:text-start">
        <h1 className="text-4xl md:text-5xl font-bold md:font-semibold tracking-wide leading-snug md:leading-[1.4]">
          We help patients live a healthy, longer life.
        </h1>

        <p className="text-sm text-gray-600 font-semibold">
          We value your health and well-being.
          <br />
          Our team of doctors and nurses are here to help you.
        </p>

        <Button color="primary" variant="solid" className=" font-medium">
          Make Appointment
        </Button>
      </div>
      <div className="md:col-span-2 md:py-6 ">
        <div className="h-auto max-w-[300px] rounded-large md:rounded-full overflow-hidden bg-amber-500">
          <Image
            src="/smiley-doctor.png"
            alt="Smiley doctor"
            loading="eager"
            className="h-[300px] md:h-full w-full object-cover object-center hover:scale-110"
          />
        </div>
      </div>

      {/* floating extras */}
      <div className="hidden md:flex -rotate-12 absolute bottom-20 right-72 bg-white z-10 border border-gray-600 rounded-lg py-3 px-4 text-xs gap-x-4">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-yellow-400">
          <HeartFilledIcon />
        </div>
        <div>
          <p className="font-semibold">1000+</p>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="grid grid-cols-3 md:gap-x-8 lg:gapx-12 gap-x-3 gap-y-8">
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

export { Features, Hero };
