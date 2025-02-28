
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Success = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || 'there';
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 flex items-center justify-center">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection animation="bounce-in" className="mb-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Booking Confirmed!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Thanks, {name}! Your booking request has been received. 
                We'll send you a confirmation email shortly with all the details.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300} className="space-y-4">
              <div className="p-6 bg-secondary/50 rounded-xl text-left">
                <h3 className="text-lg font-medium mb-3">What happens next?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">1.</span>
                    <span>You'll receive an email confirmation within the next 10 minutes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.</span>
                    <span>A calendar invitation will be sent to add this appointment to your schedule.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">3.</span>
                    <span>You'll get a reminder 24 hours before your appointment.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button asChild size="lg" className="rounded-full px-8 btn-animate">
                  <Link to="/">Return to Home</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 btn-animate">
                  <a href="mailto:support@booksy.com">Contact Support</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Success;
