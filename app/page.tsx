import Envelope from "@/components/envelope"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-rose-50 to-rose-100">
            <h1 className="text-3xl font-bold text-rose-800 mb-8">Special Invitation For Zoe!</h1>
            <Envelope imageUrl="/invitation.png" altText="Romantic Dinner & Movie Invitation" message="" />
            <p className="mt-8 text-rose-700 text-center max-w-md">
                Click on the envelope to open it and see your special message inside!
            </p>
        </main>
    )
}
