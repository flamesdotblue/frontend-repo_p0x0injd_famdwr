import { Shield, Users, Award, Search, Activity, Bell } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    desc: "Trust badges, history, and identity checks to keep the community safe.",
  },
  {
    icon: Search,
    title: "Smart Matching",
    desc: "Filter by blood group and location to find the right donor fast.",
  },
  {
    icon: Bell,
    title: "Urgent Alerts",
    desc: "Get instant notifications for time-sensitive requests.",
  },
  {
    icon: Users,
    title: "Role-based Access",
    desc: "Donors, recipients, admins — everyone has the right tools.",
  },
  {
    icon: Award,
    title: "Rewards & Badges",
    desc: "Celebrate milestones and highlight top contributors.",
  },
  {
    icon: Activity,
    title: "Donation Tracking",
    desc: "Keep a secure record of all your life-saving donations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Built for real emergencies — and everyday heroes
          </h2>
          <p className="mt-3 text-neutral-600">
            The platform focuses on speed, trust, and accessibility so help arrives on time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 ring-1 ring-rose-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
