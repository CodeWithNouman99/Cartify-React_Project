const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold tracking-wider mb-4">Cartify</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">Curated essentials for modern living. Quality you can feel.</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-5">Shop</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Furniture</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Groceries</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Fragrances</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Beauty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-5">Help</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-5">Follow</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-14 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">© 2026 Cartify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
