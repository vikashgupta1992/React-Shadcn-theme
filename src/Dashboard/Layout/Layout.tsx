import {  Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useExpansion } from "@/Context/expansion-panel";
import { motion } from "framer-motion";

export function DashboardLayout() {
  const { isExpanded } = useExpansion();

  // Animation variants for the sidebar
  const sidebarVariants = {
    open: {
      width: '280px',
      transition: {
        type: 'easeInOut',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      width: '74px',
      transition: {
        type: 'easeInOut',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    // <div className={`grid h-screen`}>
    <div className={`grid grid-cols-[auto_1fr] min-h-screen h-full`}>
        <motion.div 
          initial={false}
          animate={isExpanded === 'false' ? 'open' : 'closed'}
          variants={sidebarVariants}
          className=" h-full md:block"
          style={{
            flexShrink: 0,
          }}
        >
          <Sidebar />
        </motion.div>

        <div
          className="flex flex-col  transition-all duration-300 ease-in-out w-full h-full"
          style={{
            transition: 'margin-left 0.3s ease-in-out', // Sync with Framer Motion
          }}
        >
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              <Outlet />
          </main>
        
        </div>
    </div>
  )
}

