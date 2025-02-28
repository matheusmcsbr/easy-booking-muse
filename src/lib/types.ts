
export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  message: string;
}
