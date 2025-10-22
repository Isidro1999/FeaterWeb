import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@penh.com",
      link: "mailto:contact@penh.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Let's discuss how we can help transform your business. Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-black/40 border-2 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-bordeaux-hover"
                      placeholder="Your name"
                      data-testid="input-contact-name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-bordeaux-hover"
                      placeholder="your@email.com"
                      data-testid="input-contact-email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-bordeaux-hover"
                      placeholder="Your company"
                      data-testid="input-contact-company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-bordeaux-hover resize-none"
                      placeholder="Tell us about your project..."
                      data-testid="input-contact-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-bordeaux hover:bg-bordeaux-hover text-white transition-all duration-300"
                    data-testid="button-contact-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Have questions? We're here to help. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div
                      className="flex items-start gap-4 p-6 rounded-md border border-gray-700 hover:border-bordeaux-hover transition-all duration-500 bg-black/40"
                      data-testid={`item-contact-info-${index}`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-md bg-bordeaux/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-bordeaux-hover" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          {info.title}
                        </h3>
                        <p className="text-white text-lg">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={info.title} href={info.link}>
                      {content}
                    </a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
