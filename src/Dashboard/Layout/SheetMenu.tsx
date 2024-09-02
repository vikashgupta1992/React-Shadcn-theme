import AnimatedLinkButton from '@/Animations/LinkButton'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { routeObject } from '@/Utils/constant'
import {  Menu, Package2 } from 'lucide-react'
import { Link } from 'react-router-dom'

function SheetMenu() {
  return (
    <>
        <Sheet>
            <SheetTrigger asChild>
                <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-lg font-semibold"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>

                    {routeObject.map((item: {label: string, icon: string, to: string}) => 
                        <AnimatedLinkButton icon={item.icon} text={item.label} to={item.to} className="h-5 w-5" />
                    )} 
                </nav>
            </SheetContent>
        </Sheet>
       
    </>
  )
}

export default SheetMenu