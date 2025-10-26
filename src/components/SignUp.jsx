import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

export default function SignUp({ onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      // Placeholder signup flow (to be replaced with backend integration)
      await new Promise((r) => setTimeout(r, 900));
      console.log("Sign up with:", { name, email });
      alert("Account created (demo)");
      onSwitch("signin");
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
        <label className="block text-sm font-medium text-neutral-700">Full name</label>
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
            <User size={18} />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-10 py-3 text-sm outline-none ring-rose-500 placeholder:text-neutral-400 focus:ring-2"
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
      </div>

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
            placeholder="Create a strong password"
            autoComplete="new-password"
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

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">Confirm password</label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
            <Lock size={18} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-10 py-3 text-sm outline-none ring-rose-500 placeholder:text-neutral-400 focus:ring-2"
            placeholder="Re-enter your password"
            autoComplete="new-password"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-rose-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <UserPlus size={18} />
        {loading ? "Creating account..." : "Create account"}
      </button>

      <p className="text-center text-sm text-neutral-600">
        Already have an account?{" "}
        <button className="font-medium text-rose-600 hover:text-rose-700" type="button" onClick={() => onSwitch("signin")}>
          Sign in
        </button>
      </p>
    </form>
  );
}
