import { useEffect, useMemo, useState } from "react";
import { Heart, MapPin, Calendar, AlertTriangle, Send } from "lucide-react";

const BLOOD_GROUPS = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];
const URGENCY = ["Immediate", "Urgent", "Flexible"];

export default function RequestBlood() {
  const [form, setForm] = useState({
    patientName: "",
    contactNumber: "",
    bloodGroup: "A+",
    unitsNeeded: 1,
    hospital: "",
    location: "",
    dateNeeded: "",
    urgency: "Urgent",
    notes: "",
  });
  const [status, setStatus] = useState("");
  const [requests, setRequests] = useState(() => {
    try {
      const saved = localStorage.getItem("blood_requests");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("blood_requests", JSON.stringify(requests));
    } catch {}
  }, [requests]);

  const recent = useMemo(() => requests.slice(0, 5), [requests]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "unitsNeeded" ? Number(value) : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!/^[0-9+\-\s]{6,}$/.test(form.contactNumber)) {
      setStatus("Please enter a valid contact number.");
      return;
    }
    const payload = {
      id: `${Date.now()}`,
      ...form,
      createdAt: new Date().toISOString(),
    };
    setRequests((prev) => [payload, ...prev]);
    setStatus("Request posted successfully. We will notify nearby donors.");
    setForm({
      patientName: "",
      contactNumber: "",
      bloodGroup: "A+",
      unitsNeeded: 1,
      hospital: "",
      location: "",
      dateNeeded: "",
      urgency: "Urgent",
      notes: "",
    });
  }

  return (
    <section id="request" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Request Blood</h2>
          <p className="mt-3 text-neutral-600">Post an urgent request and we'll surface it to matching donors in your area.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Patient name</label>
                  <input
                    name="patientName"
                    value={form.patientName}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Contact number</label>
                  <input
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Blood group</label>
                  <select
                    name="bloodGroup"
                    value={form.bloodGroup}
                    onChange={onChange}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    {BLOOD_GROUPS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Units needed</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    name="unitsNeeded"
                    value={form.unitsNeeded}
                    onChange={onChange}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Hospital/Clinic</label>
                  <input
                    name="hospital"
                    value={form.hospital}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Hospital name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Location</label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="City or area"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Date needed</label>
                  <input
                    type="date"
                    name="dateNeeded"
                    value={form.dateNeeded}
                    onChange={onChange}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Urgency</label>
                  <select
                    name="urgency"
                    value={form.urgency}
                    onChange={onChange}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    {URGENCY.map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-neutral-700">Notes (optional)</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={onChange}
                    rows={4}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Any additional details, e.g., ward number, transfusion type"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="flex items-center gap-2 text-sm text-neutral-500"><AlertTriangle className="h-4 w-4 text-rose-600" /> Share accurate details to help donors respond quickly.</p>
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700">
                  <Send className="h-4 w-4" /> Post request
                </button>
              </div>
              {status && (
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700 ring-1 ring-green-200">{status}</div>
              )}
            </div>
          </form>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-700"><Heart className="h-4 w-4" /></span>
                <h3 className="text-base font-semibold text-neutral-900">Recent requests</h3>
              </div>
              {recent.length === 0 ? (
                <p className="text-sm text-neutral-600">No requests yet. Be the first to post.</p>
              ) : (
                <ul className="space-y-3">
                  {recent.map((r) => (
                    <li key={r.id} className="rounded-lg border border-neutral-200 p-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutral-900">{r.bloodGroup}</span>
                        <span className="rounded-md bg-rose-50 px-2 py-0.5 text-xs text-rose-700 ring-1 ring-rose-200">{r.urgency}</span>
                      </div>
                      <div className="mt-1 text-neutral-700">{r.patientName}</div>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {r.location}</span>
                        <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {r.dateNeeded}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
