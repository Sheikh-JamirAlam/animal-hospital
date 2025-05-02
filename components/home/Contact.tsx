import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We&apos;re here to answer your questions and help your pet receive the care they need.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input id="phone" placeholder="(123) 456-7890" />
              </div>

              <div className="mb-4">
                <label htmlFor="petInfo" className="block text-sm font-medium text-gray-700 mb-1">
                  Pet Information
                </label>
                <Input id="petInfo" placeholder="Type, breed, age, etc." />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you and your pet?" rows={4} />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Send Message</Button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>1234 Pet Care Avenue, Vetsville, VS 56789</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>care@vetsync.com</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold mt-8 mb-4">Business Hours</h4>
              <div className="grid grid-cols-2">
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>Monday - Friday</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>Saturday</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>Sunday</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p>8:00 AM - 6:00 PM</p>
                  <p>9:00 AM - 4:00 PM</p>
                  <p>10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <p className="mt-4 text-primary font-medium">24/7 Emergency Services Available</p>
            </div>

            <div className="bg-primary rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Emergency?</h3>
              <p className="mb-4">For urgent care needs, please call our emergency line immediately.</p>
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
