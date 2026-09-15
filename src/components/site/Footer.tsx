const COLUMNS = [
  {
    title: "Shop",
    links: ["Women", "Men", "Accessories", "Shoes", "Gift Cards", "Last Chance"],
  },
  {
    title: "Help",
    links: ["Contact Us", "Shipping", "Returns & Exchanges", "Size Guide", "Track Order", "FAQ"],
  },
  {
    title: "Company",
    links: ["About Carnage", "Careers", "Stores", "Wholesale", "Privacy Policy", "Terms of Service"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="heading-italic text-3xl tracking-[0.15em]">CARNAGE</p>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Performance wear engineered for every rep, every run and every rest day.
            </p>
            <form className="mt-6 flex max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email"
                aria-label="Email"
                className="w-full border border-white/25 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white"
              />
              <button type="submit" className="border border-white bg-background px-5 text-xs font-bold tracking-[0.1em] text-ink uppercase">
                Join
              </button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold tracking-[0.15em] uppercase">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#collections" className="text-sm text-white/60 transition-colors hover:text-background">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Carnage. All rights reserved.</p>
          <p>Sri Lanka (LKR Rs)</p>
        </div>
      </div>
    </footer>
  );
}
