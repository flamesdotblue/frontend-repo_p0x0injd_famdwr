import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! We’ll get back to you shortly.");
  }

  return (
    <section id="contact" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Contact us</h2>
          <p className="mt-3 text-neutral-600">Have questions, feedback, or partnership ideas? We’d love to hear from you.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-neutral-900">Reach us</h3>
            <ul className="mt-4 space-y-4 text-sm text-neutral-700">
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-rose-600" /><span>support@bloodconnect.bd</span></li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-rose-600" /><span>+880 1234 567 890</span></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-rose-600" /><span>Dhaka, Bangladesh</span></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-rose-600" /><span>Mon–Fri, 9:00–18:00</span></li>
            </ul>
            <div className="mt-6 rounded-xl bg-rose-50 p-4 text-sm text-rose-800 ring-1 ring-rose-200">
              For urgent blood requests, please create a request from the homepage so we can notify matching donors immediately.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Full name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Rahim Ahmed"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Email address</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Partnership, feedback, or question"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Write your message..."
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-neutral-500">We typically respond within 1 business day.</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700"
                >
                  <Send className="h-4 w-4" /> Send message
                </button>
              </div>
              {status && (
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700 ring-1 ring-green-200">
                  {status}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
