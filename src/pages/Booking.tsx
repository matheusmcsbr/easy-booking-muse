
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Service } from '@/lib/types';
import BookingForm from '@/components/BookingForm';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const [activeTab, setActiveTab] = useState<string>('form');
  
  const [services, setServices] = useState<Service[]>([
    {
      id: 'consultation',
      title: 'Initial Consultation',
      description: 'A comprehensive evaluation to understand your needs and goals. We\'ll discuss your requirements and create a personalized plan.',
      duration: '30 min',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 'strategy-session',
      title: 'Strategy Session',
      description: 'Dive deep into planning and strategy. We\'ll map out actionable steps and create a roadmap for success based on your objectives.',
      duration: '60 min',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 'coaching',
      title: 'Coaching Session',
      description: 'One-on-one guidance to help you overcome obstacles and achieve your goals with personalized advice and support.',
      duration: '45 min',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 'review',
      title: 'Progress Review',
      description: 'Evaluate your progress, adjust strategies, and celebrate wins. We\'ll analyze results and refine our approach for optimal outcomes.',
      duration: '30 min',
      price: '$80',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop'
    },
  ]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground">
              Select your preferred booking method and schedule a time that works for you.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200} className="max-w-3xl mx-auto">
            <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="form" className="text-sm">Custom Form</TabsTrigger>
                <TabsTrigger value="calendly" className="text-sm">Calendly</TabsTrigger>
              </TabsList>
              
              <TabsContent value="form" className="animate-fade-in">
                <BookingForm services={services} />
              </TabsContent>
              
              <TabsContent value="calendly" className="animate-fade-in">
                <div className="bg-white rounded-xl border border-border overflow-hidden subtle-shadow">
                  <CalendlyEmbed 
                    url="https://calendly.com/your-calendly-username" 
                    prefill={{
                      name: searchParams.get('name') || '',
                      email: searchParams.get('email') || '',
                      customAnswers: {
                        a1: searchParams.get('service') || 'No service selected'
                      }
                    }}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
