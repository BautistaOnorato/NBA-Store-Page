import { Billboard } from "@/models/models";
import { Urbanist } from "next/font/google";

interface BillboardProps {
  billboard: Billboard;
}

const Billboard: React.FC<BillboardProps> = async ({ billboard }) => {
  return (
    <section className="relative w-full mb-6 sm:m-0 sm:w-[95vw] sm:p-6 lg:p-8 sm:rounded-xl overflow-hidden flex items-center justify-center">
      <div
        className="sm:rounded-xl aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover brightness-50 w-full h-[200px] sm:h-auto" 
        style={{ 
          backgroundImage: `url(${billboard.imageUrl})`
        }}
      >
      </div>
      <div className="absolute flex h-full items-center justify-center top-0 w-[80%]">
        <span className="billboard-font font-bold text-xl sm:text-3xl md:text-5xl text-white uppercase text-center tracking-widest">
          {billboard.label}
        </span>
      </div>
    </section>
  );
};

export default Billboard;
