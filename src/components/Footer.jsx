export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">About</h4>
            <p className="mt-2 text-sm text-neutral-600">
              Blood Connect helps people across Bangladesh find life-saving blood faster with verified donors and real-time alerts.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Resources</h4>
            <ul className="mt-2 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-900" href="#features">Features</a></li>
              <li><a className="hover:text-neutral-900" href="#how">How it works</a></li>
              <li><a className="hover:text-neutral-900" href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Get in touch</h4>
            <form className="mt-2 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <button className="shrink-0 rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700">Notify me</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Blood Connect. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-neutral-800">Privacy</a>
            <a href="#terms" className="hover:text-neutral-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
