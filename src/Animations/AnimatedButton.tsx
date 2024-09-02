import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const AnimatedButton = ({ ...props })  =>{
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: isFocused ? 1.05 : 1 }} // Scale up on focus
            transition={{ duration: 0.2 }}
        >
            <Button
                {...props}
                onFocus={() => setIsFocused(true)} // Set focus state
                onBlur={() => setIsFocused(false)} // Reset focus state
            />
        </motion.div>
    )
}

export default AnimatedButton