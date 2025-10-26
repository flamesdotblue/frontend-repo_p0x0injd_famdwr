import { MapPin, Shield, Bell, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-medium text-rose-700 shadow-sm">
            <Heart className="h-3.5 w-3.5" /> Save lives with a single click
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            Blood Donation BD – Connect Donors & Recipients
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            A secure, user-friendly platform that quickly matches people who need blood with nearby donors across Bangladesh. Verified profiles, urgent alerts, and rewards encourage life-saving contributions.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700"
            >
              Request Blood
            </a>
            <a
              href="#search"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50"
            >
              Find Donors
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Feature icon={<MapPin className="h-4 w-4 text-rose-600" />} title="Location-based" desc="Match by city or distance" />
            <Feature icon={<Shield className="h-4 w-4 text-rose-600" />} title="Verified" desc="Badges and history" />
            <Feature icon={<Bell className="h-4 w-4 text-rose-600" />} title="Alerts" desc="Urgent notifications" />
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl sm:max-w-lg">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                <Heart className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-neutral-800">Quick donor search</span>
            </div>
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-700">Blood Group</label>
                <select className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
                  {[
                    "A+","A-","B+","B-","AB+","AB-","O+","O-",
                  ].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-700">Location</label>
                <input
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="City or area"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-700">Urgency</label>
                <select className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
                  {["Immediate", "Urgent", "Flexible"].map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>
              <button className="mt-1 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">
                Search Now
              </button>
            </form>
          </div>
          <div className="pointer-events-none absolute -left-8 -top-8 hidden h-48 w-48 rounded-full bg-rose-200/40 blur-3xl sm:block" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 hidden h-48 w-48 rounded-full bg-rose-300/30 blur-3xl sm:block" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
      <dt className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
        {icon}
        {title}
      </dt>
      <dd className="mt-1 text-xs text-neutral-600">{desc}</dd>
    </div>
  );
}
