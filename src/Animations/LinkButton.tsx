import DynamicIcon from "@/components/utils/DynamicIcon";
import {  NavLink, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { useExpansion } from "@/Context/expansion-panel";
import { useEffect, useState } from "react";

type AnimatedLinkButtonProps = {
    icon: string;
    text: string;
    to: string;
    className: string;
}

const AnimatedLinkButton =({
    icon,
    text,
    to,
    className
}: AnimatedLinkButtonProps) => {
    const { isExpanded } = useExpansion();
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(location.pathname === to);
    }, [location.pathname, to]);

    console.log('isActive', isActive);

    return (
        <motion.div
            whileHover={{ scale: 1.1     }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click

            className="relative cursor-pointer" // Add any additional styles
        >
            <NavLink
                className={`${isActive ? "active" : ""}
                flex items-center gap-3 rounded-lg 
                px-3 py-2 text-muted-foreground transition-all hover:text-primary `}
                to={to}
            >
                <DynamicIcon iconName={icon} className={className} />
                {isExpanded === 'false' ? text : ""}
            </NavLink>
        </motion.div>
    )
}

export default AnimatedLinkButton;