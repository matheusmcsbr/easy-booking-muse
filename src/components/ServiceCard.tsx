
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 subtle-shadow",
        isHovered ? "transform scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/2] w-full overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className={cn(
            "h-full w-full object-cover transition-all duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
            {service.duration}
          </span>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
            {service.price}
          </span>
        </div>
        
        <h3 className="text-xl font-medium mb-2">{service.title}</h3>
        <p className="text-muted-foreground line-clamp-3 mb-4">{service.description}</p>
        
        <Link
          to={`/booking?service=${service.id}`}
          className={cn(
            "inline-flex items-center text-sm font-medium transition-all duration-300",
            "after:ml-2 after:content-['→'] after:transition-transform after:duration-300",
            isHovered ? "after:translate-x-1" : ""
          )}
        >
          Book Now
        </Link>
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : ""
        )}
      />
    </div>
  );
};

export default ServiceCard;
