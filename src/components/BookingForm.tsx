
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BookingFormData, Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

interface BookingFormProps {
  services: Service[];
}

const BookingForm = ({ services }: BookingFormProps) => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    serviceId: serviceId || '',
    message: '',
  });

  const [formStep, setFormStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking request submitted",
        description: "We'll confirm your appointment soon!",
      });
      
      // Navigate to success page
      navigate(`/success?name=${encodeURIComponent(formData.name)}`);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 0:
        return !!formData.serviceId;
      case 1:
        return !!formData.name && !!formData.email && !!formData.phone;
      default:
        return true;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative mb-8">
        <div className="flex justify-between items-center w-full">
          {[0, 1, 2].map((step) => (
            <div 
              key={step} 
              className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                formStep >= step 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {formStep > step ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <span>{step + 1}</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-secondary -z-0">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: `${formStep * 50}%` }}
          />
        </div>
      </div>

      <div className="space-y-6 animate-fade-in">
        {formStep === 0 && (
          <Card className="border-border subtle-shadow animate-scale-in">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceId">Select a Service</Label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md border border-input bg-transparent text-sm focus:outline-none focus:ring-2 ring-offset-2 ring-offset-background transition-all duration-200"
                    required
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title} - {service.duration} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.serviceId && (
                  <div className="pt-4 pb-2 animate-fade-in">
                    <h3 className="text-lg font-medium mb-2">
                      {services.find(s => s.id === formData.serviceId)?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {services.find(s => s.id === formData.serviceId)?.description}
                    </p>
                    <div className="flex space-x-3">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        {services.find(s => s.id === formData.serviceId)?.duration}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        {services.find(s => s.id === formData.serviceId)?.price}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {formStep === 1 && (
          <Card className="border-border subtle-shadow animate-scale-in">
            <CardContent className="pt-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {formStep === 2 && (
          <Card className="border-border subtle-shadow animate-scale-in">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any special requests or information you'd like us to know..."
                  />
                </div>
                
                <div className="pt-2">
                  <h3 className="text-base font-medium">Booking Summary</h3>
                  <div className="mt-3 space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-border">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{services.find(s => s.id === formData.serviceId)?.title}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-border">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{services.find(s => s.id === formData.serviceId)?.duration}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-border">
                      <span className="text-muted-foreground">Price:</span>
                      <span>{services.find(s => s.id === formData.serviceId)?.price}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-border">
                      <span className="text-muted-foreground">Name:</span>
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-border">
                      <span className="text-muted-foreground">Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-border">
                      <span className="text-muted-foreground">Phone:</span>
                      <span>{formData.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between mt-8">
          {formStep > 0 && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
              className="btn-animate"
              disabled={isLoading}
            >
              Previous
            </Button>
          )}
          
          {formStep < 2 ? (
            <Button 
              type="button" 
              onClick={nextStep} 
              disabled={!validateStep(formStep)}
              className="ml-auto btn-animate"
            >
              Next
            </Button>
          ) : (
            <Button 
              type="submit" 
              className="ml-auto btn-animate"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Complete Booking'}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
