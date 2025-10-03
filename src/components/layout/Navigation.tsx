import { memo, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useNavigationLogic from "./Navigation.logic.ts";
import { HamburgerMenu } from "./hamburger-menu";
import { RequestQuoteButton } from "@/components/common";

// Skip link component for accessibility
const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md focus:shadow-lg"
  >
    Saltar al contenido principal
  </a>
);

const navigationItems = [
  { label: "Inicio", pagePath: "/" },
  { label: "Nosotros", pagePath: "/nosotros" },
  { label: "Servicios", pagePath: "/servicios" },
  { label: "Blog", pagePath: "/blog" },
  { label: "Contacto", pagePath: "/contacto" },
];

const Navigation = memo(() => {
  const { isNavVisible, isLegalPage, handleNavigation, logoSrc } =
    useNavigationLogic();

  // Medir altura real del header y exponerla como variable CSS
  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const updateHeaderHeight = () => {
      const h = navRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [isNavVisible]);

  const textColor = isNavVisible
    ? "text-white"
    : isLegalPage
    ? "text-black"
    : "text-white";
  const hoverColor = "hover:text-[#2563eb]";

  return (
    <>
      <SkipLink />
      <nav
        ref={navRef as any}
        role="navigation"
        aria-label="Navegación principal"
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 border-b header-fixed ${
          isNavVisible ? "glass-nav-dark shadow-glass" : "bg-transparent"
        } ${isNavVisible ? "border-black/20" : "border-transparent"} m-0 p-0`}
      >
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex flex-row items-center space-x-2 group justify-center w-full md:justify-start md:w-auto z-[10001] relative"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={logoSrc}
                alt="Logo Psicosagra"
                className="h-12 sm:h-14 md:h-14 lg:h-16 xl:h-18 w-auto max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] object-contain transition-all duration-300 bg-transparent rounded-lg group-hover:animate-logo-bounce brightness-0 invert"
              />
              <span
                className={`uppercase tracking-wide text-base lg:text-lg font-semibold transition-all duration-300 relative group text-white`}
              >
                PSICOSAGRA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className={`uppercase tracking-wide text-base lg:text-lg font-semibold transition-all duration-300 relative group ${textColor} ${hoverColor}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Desktop CTA aligned with links */}
            <div className="hidden md:block">
              <RequestQuoteButton />
            </div>

            {/* Mobile Menu Button - Hamburger Menu */}
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
