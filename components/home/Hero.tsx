import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 animate-fade-in">
              Exceptional Care for <span className="text-primary">Exceptional Pets</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              At VetSync Animal Hospital, we combine cutting-edge veterinary medicine with compassionate care to keep your furry family members healthy and happy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
              <Link href="https://app.usevetsync.com/book/86d73c9f-20e4-4672-8933-4f32bcbdb18c">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Book Now
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="font-bold text-primary text-2xl">10+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="font-bold text-primary text-2xl">5000+</p>
                <p className="text-sm text-gray-500">Happy Patients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="font-bold text-primary text-2xl">24/7</p>
                <p className="text-sm text-gray-500">Emergency Care</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl relative z-10">
              <Image
                src="/vet.jpg"
                alt="Veterinarian with cat"
                width={1000}
                height={1000}
                className="w-full h-auto aspect-[5/4] object-left object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/50 rounded-full -z-0"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
