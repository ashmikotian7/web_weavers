import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, User, Mail, Lock, Phone, UserCheck } from "lucide-react";
import heroImage from "@/assets/ieee-hero-bg.jpg";
import Footer from "@/components/layout/footer";

const SignupPage = () => {
  const navigate = useNavigate();
  const particlesRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Particle background effect
  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = Math.random() * 4 + 2 + "px";
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";
      particles.appendChild(particle);
    }

    return () => {
      if (particles) particles.innerHTML = "";
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { firstName, lastName, phone, gender, email, password } = formData;

    if (!firstName || !lastName || !phone || !gender || !email || !password) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@sode_edu\.in$/;
    if (!emailRegex.test(email)) {
      setError("Email must be in the format xyz@sode_edu.in");
      return;
    }

    setError("");
    console.log("✅ Signup Success", formData);
    navigate("/login");
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-mesh">
          <img
            src={heroImage}
            alt="IEEE Background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        </div>

        {/* Floating Particles */}
        <div ref={particlesRef} className="particles-bg" />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Button
            className="btn-ieee-primary flex items-center gap-1 px-4 py-2"
            onClick={() => navigate("/")}
          >
            <ArrowRight className="rotate-180 w-4 h-4" /> Back
          </Button>
        </div>

        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-hero rounded-full opacity-20 animate-pulse-3d float-animation" />
          <div className="absolute top-40 right-32 w-12 h-12 bg-accent/30 rounded-lg opacity-30 animate-rotate-3d float-delayed" />
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-ieee-teal/20 rounded-full opacity-25 animate-pulse-3d" />
          <div className="absolute bottom-40 right-20 w-14 h-14 bg-gradient-primary rounded-lg opacity-20 animate-rotate-3d float-animation" />
        </div>

        {/* Signup Form */}
        <div className="relative z-10 flex flex-1 items-center justify-center px-4">
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold gradient-text-ieee">
                IEEE Signup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <User className="w-4 h-4" /> First Name
                </label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <User className="w-4 h-4" /> Last Name
                </label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30"
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <UserCheck className="w-4 h-4" /> Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full bg-white/20 border border-white/30 rounded px-3 py-2 text-sm text-muted-foreground"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="xyz@sode_edu.in"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              {/* Signup Button */}
              <Button
                className="btn-ieee-primary w-full px-6 py-3 mt-2"
                onClick={handleSignup}
              >
                Sign Up
              </Button>

              {/* Already have account */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                Already have an account?{" "}
                <span
                  className="text-primary font-medium cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <Footer />
      </section>
    </>
  );
};

export default SignupPage;
