// import Image from "next/image"
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import AnimationInput from "@/Animations/AnimationInput";
import AnimatedButton from "@/Animations/AnimatedButton";
import { useState } from "react";

export function ForgotPassword() {
    const [isMovedUp, setIsMovedUp] = useState(false); 
    const navigate = useNavigate();

    const handleSignInClick = () => {
        setIsMovedUp(true);
        setTimeout(() => {
            navigate('/signup'); // Navigate after animation
        }, 1000); // Match the duration of the animation
    }

    return (
        <motion.div 
        initial={{ x: "-200%" }}
        animate={{ x: isMovedUp ? "100%" : "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-left">Email</Label>
              <AnimationInput
                id="email"
                type="email"
                placeholder="m@example.com"
                required 
               />
            </div>
            
            <AnimatedButton type="submit" className="w-full">
              Forgot Password
            </AnimatedButton>
          </div>

          <div className="mt-4 text-center text-sm">
            Login with account{" "}
            <Link className="underline" onClick={handleSignInClick}>
              Sign In
            </Link>
          </div>
        </div>
      </motion.div >
    );
}