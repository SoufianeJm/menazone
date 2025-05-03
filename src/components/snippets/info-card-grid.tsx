"use client"
import Image from "next/image"
import Link from "next/link"

interface CardData {
    id: string
    title: string
    image: string
    slug: string
}

export default function InfoCardGrid() {
    // Sample data - replace with your actual data
    const cards: CardData[] = [
        {
            id: "1",
            title: "How to Print and Distribute Flyers Safely",
            image: "/images/stacked-1.png",
            slug: "/guides/print-flyers",
        },
        {
            id: "2",
            title: "How to Use Secure Messaging Apps",
            image: "/images/stacked-1.png",
            slug: "/guides/secure-messaging",
        },
        {
            id: "3",
            title: "Masking Your Identity in Public Actions",
            image: "/images/stacked-1.png",
            slug: "/guides/identity-masking",
        },
        {
            id: "4",
            title: "How to Film Police Without Getting...",
            image: "/images/stacked-1.png",
            slug: "/guides/filming-police",
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">
            {cards.map((card) => (
                <InfoCard key={card.id} card={card} />
            ))}
        </div>
    )
}

function InfoCard({ card }: { card: CardData }) {
    return (
        <Link href={card.slug} className="block">
            <div className="aspect-square bg-[#0c0c0c] rounded-[32px] overflow-hidden shadow-lg relative">
                {/* Card content container */}
                <div className="relative w-full h-full flex flex-col">
                    {/* Image section - top part of card */}
                    <div className="relative flex-grow p-6">
                        {/* Stacked image effect with 3 layers */}
                        <div
                            className="absolute left-1/2 bottom-0 w-[85%] aspect-square rounded-2xl shadow-md bg-[#1a1a1a] overflow-hidden"
                            style={{
                                transform: "translateX(-50%) rotate(-5deg)",
                                zIndex: 1,
                                transformOrigin: "bottom center",
                            }}
                        ></div>

                        <div
                            className="absolute left-1/2 bottom-0 w-[85%] aspect-square rounded-2xl shadow-md bg-[#1a1a1a] overflow-hidden"
                            style={{
                                transform: "translateX(-50%)",
                                zIndex: 2,
                                transformOrigin: "bottom center",
                            }}
                        ></div>

                        <div
                            className="absolute left-1/2 bottom-0 w-[85%] aspect-square rounded-2xl shadow-md overflow-hidden"
                            style={{
                                transform: "translateX(-50%) rotate(5deg)",
                                zIndex: 3,
                                transformOrigin: "bottom center",
                            }}
                        >
                            <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                        </div>
                    </div>

                    {/* Title footer */}
                    <div className="absolute bottom-0 left-0 right-0 h-[80px] z-10">
                        <div className="px-6 py-4 h-full flex items-center">
                            <h3 className="text-white font-bold text-xl line-clamp-2">{card.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
