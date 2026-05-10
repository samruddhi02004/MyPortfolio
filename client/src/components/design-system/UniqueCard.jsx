import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { designTokens, componentTokens } from './DesignTokens';

const cardVariants = {
  variant: {
    default: `
      bg-white/80 backdrop-blur-sm 
      border border-gray-200/50 
      shadow-lg
      hover:shadow-xl
      hover:border-gray-300/50
    `,
    glass: `
      bg-white/10 backdrop-blur-md 
      border border-white/20 
      shadow-xl
      hover:bg-white/20
      hover:border-white/30
      hover:shadow-2xl
    `,
    elevated: `
      bg-white 
      border border-gray-200 
      shadow-xl
      hover:shadow-2xl
      hover:-translate-y-1
    `,
    minimal: `
      bg-transparent 
      border border-gray-200/30 
      hover:border-gray-300/50
    `,
    gradient: `
      bg-gradient-to-br from-blue-50 to-purple-50 
      border border-blue-200/50 
      shadow-lg
      hover:shadow-xl
      hover:border-blue-300/50
    `,
  },
  size: {
    sm: 'p-4 rounded-lg',
    md: 'p-6 rounded-xl',
    lg: 'p-8 rounded-2xl',
    xl: 'p-10 rounded-3xl',
  },
};

const UniqueCard = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  hover = true,
  onClick,
  as: Component = 'div',
  ...props
}) => {
  const baseClasses = `
    transition-all duration-300
    ${cardVariants.variant[variant]}
    ${cardVariants.size[size]}
    ${hover ? 'cursor-pointer' : ''}
  `;

  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      className={cn(baseClasses, className)}
      onClick={onClick}
      whileHover={hover ? { 
        y: variant === 'elevated' ? -4 : 0,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      {...props}
    >
      {/* Subtle gradient overlay for glass effect */}
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-inherit pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Decorative corner accent */}
      {(variant === 'default' || variant === 'elevated') && (
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-2xl pointer-events-none" />
      )}
    </MotionComponent>
  );
};

// Card subcomponents for better organization
export const CardHeader = ({ className, children, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }) => (
  <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className, children, ...props }) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className, children, ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export default UniqueCard;
