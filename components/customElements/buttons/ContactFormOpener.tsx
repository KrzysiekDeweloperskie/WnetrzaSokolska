"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { PiCallBell } from "react-icons/pi";
import ContactForm from "../forms/ContactForm";

interface ContactFormOpenerProps {
  className?: string;
  oferta?: string;
  dict: any;
  fill?: string;
}

const ContactFormOpener = ({
  className,
  oferta,
  dict,
  fill,
}: ContactFormOpenerProps) => {
  const { fireEvent, resetFiring } = useFacebookPixelEvent({
    eventName: `${oferta} Header Contact Clicked`,
    eventParams: { oferta },
    runOnce: true, // Will only fire once unless reset
  });

  return (
    <Drawer>
      <DrawerTrigger className="header-icon-href" onClick={() => fireEvent()}>
        <PiCallBell className={cn("header-icon-graphic", fill)} />
      </DrawerTrigger>
      <DrawerDescription className="hidden">
        Formularz Kontaktowy
      </DrawerDescription>
      <DrawerTitle className="hidden">Formularz Kontaktowy</DrawerTitle>
      <DrawerContent className="flex-center bg-dark rounded-none max-h-svh">
        <div className="max-h-[600px]  md:max-h-svh overflow-auto">
          <ContactForm
            dict={dict}
            sendTo={process.env.OFFERCONTACTDESTINATION}
            oferta={oferta}
            className="pt-6"
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactFormOpener;
