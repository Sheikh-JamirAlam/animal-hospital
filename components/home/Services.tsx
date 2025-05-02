import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Heart, Phone } from "lucide-react";

const services = [
  {
    title: "Wellness Exams",
    description: "Regular check-ups to ensure your pet stays healthy and happy throughout every stage of life.",
    icon: Stethoscope,
  },
  {
    title: "Vaccinations",
    description: "Protect your pet from preventable diseases with our comprehensive vaccination programs.",
    icon: Syringe,
  },
  {
    title: "Dental Care",
    description: "Complete dental services including cleanings, extractions, and oral health assessments.",
    icon: Heart,
  },
  {
    title: "Surgery",
    description: "State-of-the-art surgical facilities with advanced monitoring equipment and pain management.",
    icon: Stethoscope,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency services for when your pet needs immediate medical attention.",
    icon: Syringe,
  },
  {
    title: "Specialty Services",
    description: "Specialized care including dermatology, cardiology, and orthopedics for your pet's specific needs.",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Veterinary Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of veterinary services to keep your pets healthy and happy throughout all stages of their lives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="gap-0 border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/30 rounded-xl p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h3 className="text-2xl font-bold mb-2">Need Specialized Care?</h3>
            <p className="text-gray-700">
              Our team of specialists is ready to provide expert care for your pet&apos;s unique health needs. From complex surgeries to chronic condition management, we&apos;re here to help.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-md">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
