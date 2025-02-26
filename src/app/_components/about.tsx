import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return(
        <section className="bg-[#fefaf1] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                            src={about1Img}
                            alt="foto do cachorro"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4  overflow-hidden rounded-lg border-white">
                            <Image
                            src={about2Img}
                            alt="foto do cachorro 2"
                            fill
                            quality={100}
                
                            priority
                            />
                        </div>

                    </div>

                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">

                        <h2 className="text-[#ff8300] text-4xl font-bold">SOBRE NÓS</h2>

                            <p className="text-justify mr-6">
                                Nosso pet shop é um espaço dedicado ao bem-estar e cuidado do seu animal de estimação, oferecendo uma variedade de serviços como banho, tosa, hidratação, atendimento veterinário e uma seleção especial de rações, petiscos e acessórios. Com uma equipe qualificada e apaixonada por animais, garantimos um atendimento carinhoso e seguro, proporcionando conforto e felicidade para o seu pet. Aqui, seu companheiro recebe todo o carinho e atenção que merece!
                            </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                    <Check className="text-[#ff8300]"/>
                                    Cuidando dos pets desde 2010.
                            </li>
                            <li className="flex items-center gap-2">
                                    <Check className="text-[#ff8300]"/>
                                    Equipe com mais de 10 veterianários.
                            </li>
                            <li className="flex items-center gap-2">
                                    <Check className="text-[#ff8300]"/>
                                    O bem-estar do seu amigo de 4 patas é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a href="#" className="bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Contato via whatsapp
                            </a>

                            <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <MapPin className="w-5 h-5 text-black"/>
                                Endereço da loja
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}