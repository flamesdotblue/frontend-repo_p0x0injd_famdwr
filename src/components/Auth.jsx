import { useState } from "react";
import { ShieldHeart } from "lucide-react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [mode, setMode] = useState("signin");

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
            <ShieldHeart size={14} />
            Blood Connect
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-neutral-600">
            {mode === "signin"
              ? "Access your dashboard, track donations, and respond to requests."
              : "Join our community of donors and get notified about nearby requests."}
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 inline-flex rounded-lg bg-neutral-100 p-1">
              <button
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                  mode === "signin"
                    ? "bg-white text-neutral-900 shadow"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
                onClick={() => setMode("signin")}
                type="button"
              >
                Sign in
              </button>
              <button
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                  mode === "signup"
                    ? "bg-white text-neutral-900 shadow"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
                onClick={() => setMode("signup")}
                type="button"
              >
                Sign up
              </button>
            </div>

            {mode === "signin" ? (
              <SignIn onSwitch={setMode} />
            ) : (
              <SignUp onSwitch={setMode} />
            )}
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            By continuing, you agree to our Terms and acknowledge our Privacy Policy.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-600 via-rose-500 to-rose-400 p-8 text-white shadow-xl">
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold">Every drop can save a life</h2>
              <p className="mt-2 max-w-md text-white/90">
                Join Bangladesh’s trusted blood donation network. Create an account to get matched
                with nearby requests and keep track of your donation impact.
              </p>
              <ul className="mt-6 space-y-3 text-white/95">
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-white" />
                  Get alerts for your blood group within your area
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-white" />
                  Build your donation streak and earn recognition
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-white" />
                  Message requesters securely without sharing your number
                </li>
              </ul>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
