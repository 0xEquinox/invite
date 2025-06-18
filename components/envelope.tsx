"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface EnvelopeProps {
    imageUrl: string
    altText: string
    message?: string
}

export default function Envelope({ imageUrl, altText, message = "You're invited!" }: EnvelopeProps) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleEnvelope = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/3] cursor-pointer mx-auto" onClick={toggleEnvelope}>
            {/* Envelope body */}
            <div className="absolute inset-0 bg-rose-200 rounded-lg shadow-lg overflow-hidden">
                {/* Envelope inner shadow */}
                <div className="absolute inset-0 bg-rose-300/20"></div>
            </div>

            {/* Envelope flap */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-rose-300 origin-top z-20"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 0)",
                }}
                animate={{
                    rotateX: isOpen ? -180 : 0,
                    zIndex: isOpen ? 0 : 20,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
            >
                {/* Flap inner shadow */}
                <div className="absolute inset-0 bg-rose-400/20"></div>
            </motion.div>

            {/* Card with image */}
            <motion.div
                className="absolute inset-[3%] bg-transparent rounded  overflow-hidden flex flex-col items-center justify-center p-0"
                animate={{
                    y: isOpen ? "-70%" : "0%",
                    opacity: isOpen ? 1 : 0.5,
                    scale: isOpen ? 1.5 : 0.9,
                    zIndex: isOpen ? 10 : 5,
                }}
                transition={{
                    duration: 0.8,
                    delay: isOpen ? 0.3 : 0,
                    ease: "easeInOut",
                }}
            >
                <div className="relative w-full h-full overflow-hidden rounded bg-transparent">
                    <Image
                        src={imageUrl || "/placeholder.svg"}
                        alt={altText}
                        fill
                        style={{ objectFit: "contain" }}
                        className="transition-transform duration-500"
                    />
                </div>
                {message && (
                    <div className="p-2 text-center w-full bg-white">
                        <h2 className="text-lg font-bold text-rose-600">{message}</h2>
                    </div>
                )}
            </motion.div>

            {/* Envelope back triangles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Left triangle */}
                <div
                    className="absolute top-0 left-0 w-1/2 h-full bg-rose-300"
                    style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%, 0 0)" }}
                ></div>

                {/* Right triangle */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-full bg-rose-300"
                    style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%, 100% 0)" }}
                ></div>

                {/* Bottom rectangle */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-rose-300"></div>
            </div>
        </div>
    )
}
