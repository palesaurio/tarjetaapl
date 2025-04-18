import DigitalCard from "@/components/digital-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alejandro Pale Landero - Tarjeta Digital",
  description: "Músico, Contador y Renta de Audio - Contacto profesional",
  openGraph: {
    title: "Alejandro Pale Landero - Tarjeta Digital",
    description: "Músico, Contador y Renta de Audio - Contacto profesional",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alejandro Pale Landero",
      },
    ],
  },
}

export default function Home() {
  return <DigitalCard />
}
