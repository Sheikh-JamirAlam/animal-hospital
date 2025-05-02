import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jennifer L.",
    pet: "Max, Golden Retriever",
    content: "The team at VetSync saved my dog's life after a serious accident. Their emergency response was incredible, and the follow-up care was just as impressive. I cannot thank them enough!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    petImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Robert C.",
    pet: "Luna, Maine Coon",
    content: "Dr. Wilson and her team have been caring for my cat Luna for years. They're always thorough, gentle, and take the time to explain everything. Luna actually looks forward to her visits!",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Sophia T.",
    pet: "Bella, Yorkshire Terrier",
    content: "The dental care provided by VetSync was excellent! They were patient with my anxious little Bella and her teeth have never looked better. The staff truly cares about every pet.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
    petImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Pet Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with VetSync Animal Hospital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="py-0 border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={1000} height={1000} className="w-12 h-12 rounded-full border-2 border-white z-10" />
                    <Image src={testimonial.petImage} alt={testimonial.pet} width={1000} height={1000} className="w-12 h-12 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.pet}</p>
                  </div>
                </div>

                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
