import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <Image src={"/VetSync_blue-and-black.png"} alt="Logo" width={100} height={100} className="w-10" />
            <span>VetSync Animal Hospital</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#services" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#team" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Our Team
          </Link>
          <Link href="#contact" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-600">Emergency Line</p>
            <p className="text-primary font-bold">1-800-VET-SYNC</p>
          </div>
          <Link href="https://app.usevetsync.com/book/86d73c9f-20e4-4672-8933-4f32bcbdb18c">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Schedule Appointment
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
