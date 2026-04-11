import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Stay Updated</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">Join Our Newsletter</h2>
        <p className="text-muted-foreground text-sm mb-8">Get early access to new arrivals, exclusive deals, and curated collections.</p>
        <form className="flex gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3 bg-secondary border border-border rounded-l-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground" />
          <button type="submit" className="px-6 py-3 bg-foreground text-primary-foreground rounded-r-md hover:bg-foreground/90 transition-colors flex items-center gap-2 text-sm tracking-wide">
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
