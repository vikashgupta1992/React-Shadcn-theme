import { Button } from '@/components/ui/button';
import { Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BellIcon from '@/Animations/BellIcon';
import AnimatedLinkButton from '@/Animations/LinkButton';
import { routeObject } from '@/Utils/constant';
import { useExpansion } from '@/Context/expansion-panel';

const Sidebar = () => {
  const { isExpanded } = useExpansion();

  return (
    <motion.div 
     initial={{ x: 0 }} // Start off-screen to the left
     animate={{ x: isExpanded === 'false' ? 'calc(-100% + 280px)' : 'calc(-100% + 74px)' }} 
     transition={{ duration: 300, ease: 'easeInOut' }}
     exit={{ x: 0 }}
    
    className={`hidden border-r bg-muted/40 md:block h-full`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <motion.div
              whileHover={{ scale: 1.2 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
              transition={{ type: "spring", stiffness: 300 }} // Spring animation
              className="relative cursor-pointer" // Add any additional styles
            >
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              {isExpanded === 'false' && <span className="">Acme Inc</span>}
            </Link>
          </motion.div>
          {isExpanded === 'false' && 
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <BellIcon />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          }
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {routeObject.map((item: {label: string, icon: string, to: string}) => {
              return (
                <AnimatedLinkButton 
                  icon={item.icon} 
                  text={item.label} 
                  to={item.to} 
                  className="h-4 w-4" 
                />
              )
            })} 
          </nav>
        </div>
      </div>
    </motion.div>
   
  )
}

export default Sidebar;