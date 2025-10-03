import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroSection from "@/pages/site/home/sections/sections/HeroSection";
import AboutUsSection from "@/pages/site/home/sections/sections/AboutUsSection";
import ValuesSection from "@/pages/site/home/sections/sections/ValuesSection";
import WhyChooseUsSection from "@/pages/site/home/sections/sections/WhyChooseUsSection";
import ServicesSection from "@/pages/site/home/sections/sections/ServicesSection";
import ProcessSection from "@/pages/site/home/sections/sections/ProcessSection";
import BlogSection from "@/pages/site/home/sections/sections/BlogSection";
import TestimonialsSection from "@/pages/site/home/sections/sections/TestimonialsSection";
import FAQSection from "@/pages/site/home/sections/sections/FAQSection";
import ContactSection from "@/pages/site/home/sections/sections/ContactSection";
import LogoLoop from "@/components/ui/LogoLoop";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Psicosagra - Expertos en suelos de madera, tarima y parquet en Madrid
        </title>
        <meta
          name="description"
          content="Psicosagra: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito."
        />
        <meta
          name="keywords"
          content="reformas integrales Madrid, empresa reformas Madrid, reformas viviendas Madrid, reformas locales Madrid, reformas oficinas Madrid, cocinas Madrid, baños Madrid, albañilería Madrid, electricidad Madrid, fontanería Madrid, alisado Madrid, pintura Madrid, suelos Madrid, carpintería Madrid, presupuesto reformas Madrid, garantía reformas Madrid"
        />
        <meta
          property="og:title"
          content="Psicosagra - Expertos en suelos de madera, tarima y parquet en Madrid"
        />
        <meta
          property="og:description"
          content="Psicosagra: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://psicosagra.es/" />
        <meta
          property="og:image"
          content="https://psicosagra.es/favicon/android-chrome-192x192.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Psicosagra" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://psicosagra.es/" />
        <meta
          property="twitter:title"
          content="Psicosagra - Expertos en suelos de madera, tarima y parquet en Madrid"
        />
        <meta
          property="twitter:description"
          content="Psicosagra: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito."
        />
        <meta
          property="twitter:image"
          content="https://psicosagra.es/favicon/android-chrome-192x192.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://psicosagra.es/" />

        {/* Additional SEO meta tags */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="es" />
        <meta name="geo.region" content="ES-MD" />
        <meta name="geo.placename" content="Madrid, España" />
        <meta name="geo.position" content="40.4168;-3.7038" />
        <meta name="ICBM" content="40.4168, -3.7038" />

        {/* Local Business Schema for this page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Psicosagra - Expertos en suelos de madera, tarima y parquet en Madrid",
            description:
              "Psicosagra: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito.",
            url: "https://psicosagra.es/",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Psicosagra",
              description:
                "Empresa de reformas integrales en Madrid con más de 25 años de experiencia",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle de San Gumersindo 7",
                addressLocality: "Madrid",
                addressRegion: "Madrid",
                postalCode: "28017",
                addressCountry: "ES",
              },
              telephone: "+34 622 00 30 62",
              email: "info@psicosagra.es",
              areaServed: ["Madrid"],
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
              priceRange: "€€",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://psicosagra.es/",
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <HeroSection />
        <AboutUsSection />
        {/* Logos de confianza / afiliaciones */}
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <LogoLoop
              ariaLabel="Logos de organizaciones y entidades relacionadas"
              speed={80}
              logoHeight={40}
              gap={48}
              fadeOut
              fadeOutColor="#ffffff"
              pauseOnHover
              scaleOnHover
              logos={[
                {
                  src: "/logos/ayuntamiento_illescas.png",
                  alt: "Ayuntamiento de Illescas",
                },
                {
                  src: "/logos/academia_psicologia_espana.png",
                  alt: "Academia de Psicología de España",
                },
                {
                  src: "/logos/sociedad_espanola_psicologia.png",
                  alt: "Sociedad Española de Psicología",
                },
                { src: "/logos/AEPCP.png", alt: "AEPCP" },
                {
                  src: "/logos/federacion_autismo_castilla.png",
                  alt: "Federación Autismo Castilla",
                },
                { src: "/logos/autism_europe.png", alt: "Autism Europe" },
              ]}
            />
          </div>
        </div>
        <ValuesSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <ProcessSection />
        <BlogSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>
    </HelmetProvider>
  );
};

export default Home;
