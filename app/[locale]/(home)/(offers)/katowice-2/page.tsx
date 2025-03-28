import { Locales, getDictionary } from "@/app/dictionaries";
import ImageCarouselCustom from "@/components/customElements/carousels/ImageCarouselCustom";
import FullscreenCarouselContainer from "@/components/customElements/custom-ui/FullscreenCarouselContainer";
import SectionHeading from "@/components/customElements/custom-ui/SectionHeading";

import IconsModule from "@/components/customElements/texts-images/IconsModule";
import InfoBlocks from "@/components/customElements/texts-images/InfoBlocks";
import InterchangeableImages from "@/components/customElements/texts-images/InterchangeableImages";
import RzutMieszkania from "@/components/customElements/texts-images/RzutMieszkania";
import SpiralPhotos4 from "@/components/customElements/texts-images/SpiralPhotos4";
import TextPlusSingleVideoModular from "@/components/customElements/texts-images/TextPlusSingleVideoModular";
import VideoBackground from "@/components/customElements/video/VideoBackground";
import Footer from "@/components/FooterFiles/Footer";

const page = async ({
  params: { locale },
}: {
  params: { locale: Locales };
}) => {
  const dict = await getDictionary(locale);
  return (
    <>
      {/* Header */}
      {/* <OfferStickyHeader
        oferta={dict.Katowice_02.Footer_1.oferta}
        dict={dict}
      /> */}
      <div className="landing-page text-light">
        {/* Video */}
        <VideoBackground
          src="/videos/alternativeVideo.webm"
          type="video/webm"
          className="aspect-[4/3] md:aspect-video max-h-[1024px] h-full md:-mb-10 lg:-mb-20 flex items-end"
        />
        {/* First Section - Icons Module */}
        <IconsModule
          className=""
          header={
            <SectionHeading
              className="w-2/3 md:w-full"
              top={dict.Katowice_02.icons_module_01.header_top}
              topClass="text-2xl md:text-[48px] font-bold"
              bottom={dict.Katowice_02.icons_module_01.header_bottom}
              bottomClass="text-xl md:text-[38px] font-bold md:font-normal leading-7"
            />
          }
          icons={dict.Katowice_02.icons_module_01.icons}
        />
        {/* Second Section - Carousel custom slider */}
        <FullscreenCarouselContainer>
          <SectionHeading
            wideParent
            top={dict.Katowice_02.ImageCarouselCustom_1.header_top}
            bottom={dict.Katowice_02.ImageCarouselCustom_1.header_bottom}
          />
          <ImageCarouselCustom
            className=""
            textClassName="bg-gradient-to-t from-dark via-dark/75 to-dark/0"
            autoplay
            interval={4000}
            images={dict.Katowice_02.ImageCarouselCustom_1.images}
          />
        </FullscreenCarouselContainer>
        {/* Third Section - Rzut Mieszkania */}
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkania
          locale={locale}
          cena={dict.Katowice_02.rzut_mieszkania_01.price}
          powierzchnia={dict.Katowice_02.rzut_mieszkania_01.area}
          img={dict.Katowice_02.rzut_mieszkania_01.images}
          floor={dict.Katowice_02.rzut_mieszkania_01.floor}
          header={
            <SectionHeading
              className=""
              top={dict.Katowice_02.rzut_mieszkania_01.header_top}
              bottom={dict.Katowice_02.rzut_mieszkania_01.header_bottom}
            />
          }
        />
        {/* Fourth Section - Standalone Photos */}
        <SpiralPhotos4
          images={dict.universal_page_01.section_spiral_01.images}
        />
        {/* Fifth Section - Interchangeable images */}
        <InterchangeableImages
          interval={4000}
          mode="carousel"
          elements={dict.universal_page_01.interchangeable_images_01.elements}
          header={
            <SectionHeading
              wideParent
              top={dict.Katowice_02.interchangeable_header.header_top}
              bottom={dict.Katowice_02.interchangeable_header.header_bottom}
            />
          }
        />
        {/* Sixth Section - Info with video */}
        {/* <TextPlusSingleVideo
          src={dict.Katowice_02.text_plus_single_video_01.source}
          content={dict.Katowice_02.text_plus_single_video_01.content}
          header={
            <SectionHeading
              className=""
              top={dict.Katowice_02.text_plus_single_video_01.header_top}
              bottom={dict.Katowice_02.text_plus_single_video_01.header_bottom}
            />
          }
        /> */}
        {/* Sixth Section - Info with video */}
        <TextPlusSingleVideoModular
          src={dict.universal_page_01.section_text_video_01.source}
          content={dict.universal_page_01.section_text_video_01.content}
          header={
            <SectionHeading
              className=""
              topClass="font-bold"
              top={dict.universal_page_01.section_text_video_01.header_top}
              bottom={
                dict.universal_page_01.section_text_video_01.header_bottom
              }
            />
          }
        />
        {/* Seventh Section - Info text */}
        <InfoBlocks
          info={dict.universal_page_01.section_info_01.info}
          header={
            <SectionHeading
              top={dict.universal_page_01.section_info_01.header_top}
              bottom={dict.universal_page_01.section_info_01.header_bottom}
            />
          }
        />
      </div>
    </>
  );
};

export default page;
