import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
