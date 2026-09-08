import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 · Page not found | Elven Beauty Hub";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-28">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-noir transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
