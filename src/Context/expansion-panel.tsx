import { useState, createContext, useEffect, useContext } from "react";

type ExpansionProviderState = {
    isExpanded: string
    setIsExpanded: (expanded: string) => void
}

const initialState: ExpansionProviderState = {
    isExpanded: 'false',
    setIsExpanded: () => null
}

const expansionContext = createContext<ExpansionProviderState>(initialState);

const ExpansionProvider = ({ children }: { children: React.ReactNode }) =>{
    const [isExpanded, setIsExpanded] = useState<string>(
        () => (localStorage.getItem('vite-is-expansion') as string) || 'false'
    );

    useEffect(() => {
        if (window && typeof window !== 'undefined') {
            localStorage.setItem('vite-is-expansion', isExpanded);
        }
    }, [isExpanded])

    return (
        <expansionContext.Provider value={{ isExpanded, setIsExpanded }}>
            {children}
        </expansionContext.Provider>
    )
}

export const useExpansion = () => useContext(expansionContext);

export default ExpansionProvider;