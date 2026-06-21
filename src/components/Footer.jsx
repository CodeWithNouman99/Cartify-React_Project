import { Camera, AtSign, Globe, Play } from "lucide-react";

const sections = [
  { title: "Shop", links: ["New Arrivals", "Bestsellers", "Sale", "Gift Cards"] },
  { title: "Help", links: ["Shipping", "Returns", "Size Guide", "Contact"] },
  { title: "Company", links: ["About", "Sustainability", "Careers", "Press"] },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">
              Cartify<span className="text-gray-400">.</span>
            </h3>
            <p className="mt-4 max-w-sm text-sm text-gray-500">
              Considered essentials for the modern wardrobe. Designed in studio, made to last.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85"
              >
                Subscribe
              </button>
            </form>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-sm font-semibold text-gray-900">{s.title}</h4>
              <ul className="mt-4 space-y-3">
                {s.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-500 transition hover:text-gray-900">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Mono Studio. All rights reserved.
          </p>
          <div className="flex gap-5 text-gray-500">
            {[Camera, AtSign, Globe, Play].map((Icon, i) => (
              <a key={i} href="#" className="transition hover:text-gray-900" aria-label="Social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}