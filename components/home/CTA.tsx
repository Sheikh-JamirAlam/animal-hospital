import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Pet&apos;s Visit?</h2>
          <p className="text-lg opacity-90 mb-8">
            Whether it&apos;s a routine check-up, vaccination, or addressing a health concern, our team at VetSync Animal Hospital is here to provide the exceptional care your pet deserves.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://app.usevetsync.com/book/86d73c9f-20e4-4672-8933-4f32bcbdb18c">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-200">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
