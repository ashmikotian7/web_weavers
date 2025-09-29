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
import { Mail, User, IdCard, ArrowRight } from "lucide-react";
import heroImage from "@/assets/ieee-hero-bg.jpg";
import Footer from "@/components/layout/footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const particlesRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    memberId: "",
    name: "",
    email: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { memberId, name, email } = formData;
    if (!memberId || !name || !email) {
      setError("All fields are required.");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@sode_edu\.in$/;
    if (!emailRegex.test(email)) {
      setError("Email must be in the format xyz@sode_edu.in");
      return;
    }
    setError("");
    console.log("✅ Login Success", formData);
    navigate("/");
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

        {/* Login Form */}
        <div className="relative z-10 flex flex-1 items-start justify-center px-4 pt-32">
          <div className="w-full max-w-md">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-3xl font-bold gradient-text-ieee">
                  IEEE Login
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* IEEE Member ID */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <IdCard className="w-4 h-4" /> IEEE Member ID
                  </label>
                  <Input
                    type="text"
                    name="memberId"
                    placeholder="Enter your Member ID"
                    value={formData.memberId}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30"
                  />
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30"
                  />
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

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                {/* Login Button */}
                <Button
                  className="btn-ieee-primary w-full px-6 py-3"
                  onClick={handleLogin}
                >
                  Login
                </Button>

                {/* Signup Link */}
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Don’t have an account?{" "}
                  <span
                    className="text-primary font-medium cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </section>
    </>
  );
};

export default LoginPage;
