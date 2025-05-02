import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Emma Wilson",
    role: "Chief Veterinarian",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=500&q=80",
    bio: "Dr. Wilson has over 15 years of experience in veterinary medicine with a special interest in feline medicine and surgery.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Surgical Specialist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=500&q=80",
    bio: "Dr. Chen specializes in orthopedic and soft tissue surgeries, ensuring your pets receive the best surgical care possible.",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Emergency Care Veterinarian",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=500&q=80",
    bio: "With expertise in critical care and emergency medicine, Dr. Johnson leads our 24/7 emergency services team.",
  },
  {
    name: "Lisa Martinez",
    role: "Head Veterinary Technician",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=500&q=80",
    bio: "Lisa has been with us for 8 years and is dedicated to ensuring every pet receives compassionate and thorough care.",
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-blue-50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Veterinary Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our experienced and compassionate veterinary professionals are committed to providing the highest quality care for your beloved pets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="py-0 gap-0 overflow-hidden border-none shadow-lg h-full">
              <div className="h-64 overflow-hidden">
                <Image src={member.image} alt={member.name} width={1000} height={1000} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-blue-50 transition-colors">
            Meet Our Full Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
