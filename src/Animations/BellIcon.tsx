import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react'; // Assuming you're using lucide-react for the bell icon

const BellIcon = () => {
    return (
        <motion.div
            className="relative cursor-pointer" // Parent div
            whileHover={{ scale: 1.1 }} // Scale the parent on hover
        >
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <motion.div
                    initial={{ rotate: 0, scale: 1 }}
                    whileHover={{ 
                        rotate: [0, 10, -10, 0],
                        transition: { 
                            duration: 0.5,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }
                    }} 
                >
                    <Bell className="h-4 w-4" />
                </motion.div>
                <span className="sr-only">Toggle notifications</span>
            </Button>
        </motion.div>
    );
};

export default BellIcon;