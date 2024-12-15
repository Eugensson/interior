import { LiaMinusSolid } from "react-icons/lia";
import { RiDoubleQuotesL } from "react-icons/ri";

const AboutUs = () => {
  return (
    <section>
      <div className="relative bg-about bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-10 text-center bg-white/50 rounded-t-2xl">
          <h1 className="h1 text-accent mb-2">About Us</h1>
          <p className="h4 text-secondary">Home / About</p>
        </div>
      </div>

      <div className="container pt-[200px] pb-[175px] flex flex-col items-center">
        <div className="relative w-[800px] py-20 px-16 border-[12px] rounded-[40px] border-accent-secondary">
          <RiDoubleQuotesL size={60} className="mx-auto text-accent mb-4" />
          <p className="max-w-[750px] text-3xl text-center italic mb-6">
            I like an interior that defies labeling. I don&apos;t really want
            someone to walk into a room and know that I did it
          </p>
          <p className="flex items-center justify-center gap-x-2 uppercase">
            <LiaMinusSolid />
            Bunny Williams
          </p>
          <div className="w-[500px] h-3 bg-white absolute -top-3 left-1/2 -translate-x-1/2" />
          <div className="w-[500px] h-3 bg-white absolute -bottom-3 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
