import React, { useEffect, useState } from 'react';

const DynamicIcon = ({ iconName, size = 16, color = "currentColor" }: any) => {
    const [IconComponent, setIconComponent] = useState<React.FC | null>(null);

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const { [iconName]: Icon } = await import('lucide-react');
                setIconComponent(() => Icon);
            } catch (error) {
                console.error(`Icon "${iconName}" not found`, error);
            }
        };

        loadIcon();
    }, [iconName]);

    if (!IconComponent) {
        return null; // Optionally, return a loading spinner or placeholder
    }

    return <IconComponent size={size} color={color} />;
};

export default DynamicIcon;