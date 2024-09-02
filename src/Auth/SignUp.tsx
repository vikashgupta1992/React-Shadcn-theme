import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import AnimationInput from "@/Animations/AnimationInput"
import AnimatedButton from "@/Animations/AnimatedButton"
import { useState } from "react"

const SignUp = () => {
    const [isMovedUp, setIsMovedUp] = useState(false); 
    const navigate = useNavigate();

    const handleSignInClick = () => {
        setIsMovedUp(true);
        setTimeout(() => {
            navigate('/login'); 
        }, 1000);
    }
    return (
        <motion.div 
            initial={{ x: "-200%" }}
            animate={{ x: isMovedUp ? "100%" : "0%" }}
            transition={{ duration: 1, ease: "easeInOut" }} 
            className="flex items-center flex-col justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <p className="text-balance text-muted-foreground">
                    Enter your information to create an account
                    </p>
                </div>
                <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                    <Label htmlFor="first-name" className="text-left">First name</Label>
                    <AnimationInput
                        id="first-name"
                        type="text"
                        placeholder="Max"
                        required 
                />
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="last-name" className="text-left">Last name</Label>
                    <AnimationInput
                        id="last-name"
                        type="text"
                        placeholder="Robinson"
                        required 
                    />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-left">Email</Label>
                    <AnimationInput
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required 
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password" className="text-left">Password</Label>
                    <AnimationInput
                        id="password"
                        type="password"
                        required 
                    />
                </div>
                <AnimatedButton type="submit" className="w-full">
                    Create an account
                </AnimatedButton>
                <AnimatedButton type="submit" className="w-full">
                Sign up with GitHub
                </AnimatedButton>
                </div>
                <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                
                <Link className="underline"
                    onClick={handleSignInClick}
                >
                    Sign in
                </Link>
                </div>
            </div>
        </motion.div >
    )
}

export default SignUp;