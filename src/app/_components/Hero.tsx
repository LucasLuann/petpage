import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import dogImg from "../../../public/bg-hero.png";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 pb-10">
      <div className="absolute inset-0 md:hidden opacity-20">
        <Image
          src={dogImg}
          alt="Foto do dog"
          className="object-cover"
          fill
          quality={100}
          priority
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-lg space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Cuidar do seu pet nunca foi tão fácil e cheio de amor!
          </h1>

          <p className="text-lg">
            Transforme a vida do seu melhor amigo com nossos serviços
            exclusivos. Bem-estar, carinho e diversão em um só lugar!
          </p>

          <Button className="bg-white text-blue-600 hover:bg-gray-200 transition duration-300 cursor-pointer hover:scale-105">
            Quero saber mais
            <WhatsappLogo size={32} color="#25D366" weight="duotone"/>
          </Button>
        </div>

        <div className="relative w-[700px] h-[700px] hidden md:block">
          <Image
            src={dogImg}
            alt="Foto do dog"
            className="object-contain"
            fill
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
