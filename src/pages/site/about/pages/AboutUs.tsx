import React, { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import CompanyAboutSection from "@/components/company/CompanyAboutSection";
import TeamAndProcessSection from "@/components/company/TeamSection";
import ContactSection from "@/pages/site/home/sections/sections/ContactSection";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AboutUs = () => {
  useEffect(() => {
    document.title =
      "Psicosagra - Centro de Psicología y Nutrición en Illescas | Conoce nuestro equipo";

    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conoce a Psicosagra, centro especializado en Psicología y Nutrición Clínica en Illescas. Equipo de profesionales cualificados comprometidos con tu bienestar integral."
      );
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Psicosagra",
      description:
        "Centro especializado en Psicología y Nutrición Clínica en Illescas",
      url: "https://psicosagra.es",
      logo: "https://psicosagra.es/images/logo/psicosagra.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle de la Constitución 12",
        addressLocality: "Illescas",
        addressRegion: "Toledo",
        addressCountry: "ES",
      },
      telephone: "+34 622 00 30 62",
      email: "info@psicosagra.es",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Sobre Nosotros | Centro de Psicología y Nutrición en Illescas |
          Psicosagra
        </title>
        <meta
          name="description"
          content="Conoce a Psicosagra, centro de referencia en Psicología y Nutrición Clínica en Illescas. Equipo de profesionales cualificados comprometidos con tu bienestar integral."
        />
        <meta
          name="keywords"
          content="sobre nosotros, psicología Illescas, nutrición Illescas, centro salud mental, equipo psicólogos, profesionales salud, bienestar integral"
        />
        <meta
          property="og:title"
          content="Sobre Nosotros | Centro de Psicología y Nutrición en Illescas | Psicosagra"
        />
        <meta
          property="og:description"
          content="Centro especializado en Psicología y Nutrición Clínica en Illescas. Profesionales cualificados para tu bienestar integral."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://psicosagra.es/nosotros" />
        <meta
          property="og:image"
          content="https://psicosagra.es/images/logo/psicosagra.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Logo Psicosagra - Centro de Psicología en Madrid"
        />
        <link rel="canonical" href="https://psicosagra.es/nosotros" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Psicosagra",
            "description": "Centro especializado en Psicología y Nutrición Clínica en Illescas.",
            "url": "https://psicosagra.es/nosotros",
            "logo": "https://psicosagra.es/images/logo/psicosagra.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle de la Constitución 12",
              "addressLocality": "Illescas",
              "addressRegion": "Toledo",
              "addressCountry": "ES"
            },
            "telephone": "+34 622 00 30 62",
            "email": "info@psicosagra.es"
          }
        `}</script>
      </Helmet>
      <div className="min-h-dvh">
        <CompanyAboutSection />
        <TeamAndProcessSection />
        <ContactSection />
      </div>
    </HelmetProvider>
  );
};

export default AboutUs;
