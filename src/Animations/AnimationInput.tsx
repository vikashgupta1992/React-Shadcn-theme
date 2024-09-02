
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const AnimationInput = ({ ...props })  =>{
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isFocused ? 1.05 : 1 }} // Scale up on focus
            transition={{ duration: 0.2 }}
        >
            <Input
                {...props}  
                onFocus={() => setIsFocused(true)} // Set focus state
                onBlur={() => setIsFocused(false)} // Reset focus state
            />
        </motion.div>
    )
}

export default AnimationInput