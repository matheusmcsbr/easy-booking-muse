
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/types';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
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

  useEffect(() => {
    // Scroll to the section if hash is present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add small delay to ensure smooth scrolling after page load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-up" className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
                Simple Booking Solution
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Book services with elegance and simplicity
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A beautifully designed booking system that integrates with your calendar. No more back-and-forth emails.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 btn-animate">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 btn-animate">
                <a href="#services">View Services</a>
              </Button>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="hidden md:block absolute -z-10 top-0 inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(100,100,100,0.05),rgba(0,0,0,0))]" />
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/40 relative">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Why Choose Our Booking System
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed with simplicity and efficiency in mind, our platform makes scheduling effortless.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-in-left" delay={100} className="glass p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Calendar Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly connects with your Google Calendar to prevent double bookings and manage your schedule.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200} className="glass p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Automated Notifications</h3>
              <p className="text-muted-foreground">
                Automatic reminders and confirmations keep both you and your clients informed about upcoming appointments.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" delay={300} className="glass p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Clients can book appointments anytime, day or night, without requiring your direct involvement.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our range of professional services designed to meet your needs.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} animation="scale-in" delay={index * 100}>
                <ServiceCard service={service} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Ready to streamline your booking process?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get started today and say goodbye to scheduling headaches.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 btn-animate">
                <Link to="/booking">Book Your First Appointment</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
