import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

export default function SignIn({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      // Placeholder auth flow (to be replaced with backend integration)
      await new Promise((r) => setTimeout(r, 800));
      console.log("Sign in with:", { email });
      alert("Signed in successfully (demo)");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">Email</label>
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
            <Mail size={18} />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-10 py-3 text-sm outline-none ring-rose-500 placeholder:text-neutral-400 focus:ring-2"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">Password</label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
            <Lock size={18} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-10 py-3 text-sm outline-none ring-rose-500 placeholder:text-neutral-400 focus:ring-2"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute inset-y-0 right-3 inline-flex items-center text-neutral-400 hover:text-neutral-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2 text-neutral-600">
          <input type="checkbox" className="size-4 rounded border-neutral-300 text-rose-600 focus:ring-rose-500" />
          Remember me
        </label>
        <button type="button" className="text-rose-600 hover:text-rose-700" onClick={() => alert("Password reset coming soon")}>Forgot password?</button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-rose-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <LogIn size={18} />
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <p className="text-center text-sm text-neutral-600">
        Don’t have an account?{" "}
        <button className="font-medium text-rose-600 hover:text-rose-700" type="button" onClick={() => onSwitch("signup")}>
          Create one
        </button>
      </p>
    </form>
  );
}
