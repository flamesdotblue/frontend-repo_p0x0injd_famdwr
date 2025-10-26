import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-3 left-6 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-rose-600 px-2 text-xs font-semibold text-white">
        {number}
      </div>
      <h3 className="mt-2 text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-neutral-600">Create requests, match donors, and save lives — in minutes.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Step number="1" title="Create account" desc="Sign up as donor or recipient and verify your email." />
          <Step number="2" title="Set your profile" desc="Add blood group, location, and availability." />
          <Step number="3" title="Post or search" desc="Request blood or find matching donors nearby." />
          <Step number="4" title="Connect & donate" desc="Coordinate securely and track donation history." />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-600 to-rose-500 p-8 text-white shadow-xl sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Every drop counts</h3>
            <p className="mt-2 text-white/90">Join Bangladesh's trusted blood donation network. Help someone today, and earn rewards for every donation.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#request" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-rose-700 shadow-sm transition hover:bg-rose-50">Request Blood</a>
              <a href="#search" className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-white/10">Become a Donor</a>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export default App;
