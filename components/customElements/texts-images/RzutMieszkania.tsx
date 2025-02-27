import { Locales } from "@/app/dictionaries";
import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";

type RzutImages = {
  mobile: string;
  desktop: string;
};

interface RzutMieszkaniaProps {
  className?: string;
  img: RzutImages;
  powierzchnia: string;
  cena: string;
  header?: React.ReactNode;
  locale?: Locales;
  customAccent?: string;
  floor: string;
}

const RzutMieszkania = ({
  className,
  img,
  powierzchnia,
  cena,
  header,
  locale = "pl",
  customAccent = "text-accent1",
  floor,
}: RzutMieszkaniaProps) => {
  return (
    <div
      className={cn(
        "flex flex-col section-header-gap limited-width w-full",
        className
      )}
    >
      {header}
      <div className="relative w-full flex flex-col gap-10">
        <Image
          placeholder="blur"
          blurDataURL="/images/blur.png"
          src={img.mobile}
          alt="Rzut mieszkania na urządzeniu mobilnym"
          width={768}
          height={768}
          sizes="(max-width: 768px) 100vw, 10vw"
          className="block md:hidden max-h-[600px] h-fit w-full object-contain px-10"
        />
        <Image
          placeholder="blur"
          blurDataURL="/images/blur.png"
          src={img.desktop}
          alt="Rzut mieszkania na urządzeniu desktopowym"
          width={1080}
          height={1080}
          sizes="(min-width: 768px) 100vw, 10vw"
          className="hidden md:block min-h-[450px] h-fit w-full object-contain pl-[100px]"
        />
        <div className="md:absolute md:left-0 md:bottom-0 relative text-2xl text-light flex flex-col gap-6 md:gap-5">
          <div className="flex flex-col md:gap-2">
            <span className={cn("text-xl font-bold", customAccent)}>
              {locale === "pl" && "POWIERZCHNIA / PIĘTRO"}
              {locale === "en" && "AREA / FLOOR"}
            </span>
            <span className="text-light font-light text-3xl md:text-3xl">
              {powierzchnia} m<sup>2</sup> / {floor}p.
            </span>
          </div>
          <div className="flex flex-col md:gap-2">
            <span className={cn(" text-xl font-bold", customAccent)}>
              {locale === "pl" && "CENA"}
              {locale === "en" && "PRICE"}
            </span>
            <span
              className="text-light font-light text-3xl md:text-3xl"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(cena),
              }}
            />
          </div>
          {/* <Button
            className={cn(
              "md:hidden bg-accent1 font-bold !py-6 rounded-none p-4 w-full text-dark hover:bg-accent1/60"
            )}
            asChild
          >
            <a href="/documents/Katalog.pdf" download="Katalog.pdf">
              POBIERZ KATALOG
            </a>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default RzutMieszkania;
