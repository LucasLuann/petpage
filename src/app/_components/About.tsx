import React from "react";
import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const About = () => {
  return (
    <section className="bg-[#FDF6ec] py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/about-1.png"
              alt="Foto do dog"
              className="object-cover hover:scale-105 transition-transform duration-300"
              fill
              quality={100}
              priority
            />
          </div>

          <div className="absolute right-2 -bottom-4  w-[200px] h-[200px] rounded-lg overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/about-2.png"
              alt="Foto do dog"
              className="object-cover"
              fill
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">SOBRE</h2>
          <p className="text-lg">
            Nossa missão é proporcionar o melhor para o seu pet, com serviços
            personalizados e um ambiente acolhedor. Aqui, cada animal é tratado
            como parte da família e recebe todo o carinho e atenção que merece.
          </p>
          <ul>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" /> Cuidado e bem estar
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" /> Tratamento e
              alimentação
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" />
              Experiência e conforto
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" />
              Carinho e amor
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" />
              Diversão e alegria
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" />
              Segurança e proteção
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" />
              Saúde e bem estar
            </li>
          </ul>

          <div className="flex gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium cursor-pointer">
              <WhatsappLogo className="w-6 h-6" weight="fill" /> Contato via
              Whatsapp
            </Button>

            <Button variant="outline" className="cursor-pointer">
              <MapPin className="w-6 h-6" />
              Endereço da loja
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
