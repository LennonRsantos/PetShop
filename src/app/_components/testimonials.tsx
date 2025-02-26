"use client"

import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import tutor3 from '../../../public/Tutor3.png'
import Image from 'next/image'

const testimonials = [
    {
        content: "Desde que passei a trazer minhas gatinhas, Luna e Maya, para banho e tosa aqui, elas ficam sempre radiantes! O atendimento é maravilhoso, a equipe é super atenciosa e deixa minhas pequenas sempre bem cuidadas, cheirosas e encantadoras. Recomendo sem pensar duas vezes!",
        author: "Isadora Lemos",
        role: "Tutora da Luna e Maya (Gatas)",
        image: tutor3,
    },

    {
        content: "Desde que comecei a levar o Scar para cuidar, tenho notado uma diferença enorme! Ele sempre volta impecável, extremamente limpo e muito bem tratado. Dá para ver o carinho e a atenção aos detalhes no serviço. Com certeza continuarei levando, pois a qualidade é indiscutível!",
        author: "Lennon Santos",
        role: "Tutor do Scar (Pitbull)",
        image: tutor2,
    },

    {
        content: "Desde que comecei a levar o Thor para banho e tosa aqui, ele nunca esteve tão bem cuidado! O atendimento é de primeira, os profissionais são atenciosos e sempre deixam meu parceiro limpinho e com um ótimo visual. Recomendo sem dúvida!",
        author: "Rafael Veleda",
        role: "Tutor do Thor (Golden Retriever)",
        image: tutor1,
    },
]


export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
      })

      function scrollPrev(){
        emblaApi?.scrollPrev();
      }

      function scrollNext(){
        emblaApi?.scrollNext();
      }

    return (
        <section className="bg-[#fefaf1] py-16">
            <div className="container mx-auto px-4">
                
                <h2 className="text-[#2e005d] text-4xl font-bold text-center mb-12">Depoimentos</h2>
                
                <div className="relative max-w-4xl mx-auto">
                    
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#5c008b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                src={item.image}
                                                alt={item.author}
                                                fill
                                                sizes='96px'
                                                className='object-cover rounded-full'
                                                />
                                            </div>

                                            <p className="text-gray-200">{item.content}</p>

                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollPrev}
                        >
                        <ChevronLeft className="w-6 h-6 text-gray-600"/>
                    </button>

                    <button
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollNext}
                        >
                        <ChevronRight className="w-6 h-6 text-gray-600"/>
                    </button>

                </div>

            </div>
        </section>
    )
}