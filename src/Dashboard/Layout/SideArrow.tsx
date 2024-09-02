import { Button } from "@/components/ui/button";
import { useExpansion } from "@/Context/expansion-panel";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const SideArrow = () =>{
    const { isExpanded, setIsExpanded } = useExpansion();

    return (
        
        <Button variant="secondary" size="icon" 
            className={`absolute w-8 h-8 rounded-full
                ${isExpanded === 'false' ? 'left-[264px]' : 'left-[60px]'}
            `}
            onClick={() => setIsExpanded(isExpanded === 'false' ? 'true' : 'false')}
        >
            {isExpanded === 'false' && <ChevronsLeft className="h-5 w-5" />}
            {isExpanded === 'true' && <ChevronsRight className="h-5 w-5" />}
           
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default SideArrow;
