import { Button, Image } from "@nextui-org/react";
import { HeartFilledIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <div className="relative md:max-h-[90vh] md:w-full lg:aspect-[2.75/1] grid gap-x-6 md:grid-cols-5">
      <div className="md:col-span-3 px-6 py-8 space-y-4 md:space-y-6 text-center md:text-start relative">
        <h1 className="text-4xl md:text-5xl font-bold md:font-semibold tracking-wide leading-snug md:leading-[1.4]">
          We help patients live a healthy, longer life.
        </h1>

        <p className="text-sm text-gray-600 font-semibold">
          We value your health and well-being.
          <br />
          Our team of doctors and nurses are here to help you.
        </p>

        <Button color="primary" variant="solid" className="rounded-medium px-8 md:py-4 font-medium">
          Make Appointment
        </Button>

          <div className="md:hidden absolute -top-5 left-5 -z-10 animate-[spin_3s_ease-in_infinite] duration-[10s] bg-gradient-conic from-blue-600 via-cyan-500/90 to-blue-500 h-[300px] opacity-50 filter blur-2xl aspect-square rounded-full"></div>
      </div>
      <div className="md:col-span-2 md:py-6 hidden md:block">
        <div className="h-auto w-full flex justify-center rounded-large md:rounded-full overflow-hidden bg-amber-500">
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

export { Hero };
