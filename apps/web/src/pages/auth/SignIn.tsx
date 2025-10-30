import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chrome, Github } from "lucide-react";
import { Button } from "../../components/reusableComponents/button";
import { Input } from "../../components/reusableComponents/input";
import { Label } from "../../components/reusableComponents/label";
import { Separator } from "../../components/reusableComponents/separator";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic here
    navigate("/dashboard");
  };

  const handleSwitchToSignUp = () => {
    navigate("/sign_up");
  };

  return (
    <div className="min-h-screen flex">
      {/* Hero Section with Gradient */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--hero-gradient-from) 0%, var(--hero-gradient-via) 50%, var(--hero-gradient-to) 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <h1 className="text-4xl mb-4">Welcome to Nexus Board</h1>
          <p className="text-xl opacity-90">
            Streamline your projects, collaborate with your team, and achieve
            more together.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                ✓
              </div>
              <div>
                <h4 className="font-medium">Task Management</h4>
                <p className="text-sm opacity-80">
                  Organize work with intuitive boards
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                ✓
              </div>
              <div>
                <h4 className="font-medium">Team Collaboration</h4>
                <p className="text-sm opacity-80">Work together in real-time</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                ✓
              </div>
              <div>
                <h4 className="font-medium">Progress Tracking</h4>
                <p className="text-sm opacity-80">
                  Monitor project status effortlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="size-10 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
                }}
              >
                <span className="text-white font-semibold">N</span>
              </div>
              <span className="text-xl font-semibold">Nexus Board</span>
            </div>
            <h2 className="mb-2">Sign in to your account</h2>
            <p className="text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              onClick={() => navigate("/dashboard")}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <Separator />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                OR CONTINUE WITH
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <Button variant="outline" type="button">
                <Chrome className="size-4 mr-2" />
                Google
              </Button>
              <Button variant="outline" type="button">
                <Github className="size-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleSwitchToSignUp}
              className="text-primary hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
