import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export function AuthLayout() {
  return (
    <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh] overflow-hidden">
       <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
       className="hidden bg-muted lg:block">
        <img
          src="/images/6193479.jpg"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </motion.div>
      <Outlet />
    </div>
  )
}
