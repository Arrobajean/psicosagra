import { Helmet } from "react-helmet-async";

const ServicesSEO = () => (
  <Helmet>
    <title>
      Servicios de Psicología en Madrid | Psicosagra | Terapia Individual,
      Familiar y Más
    </title>
    <meta
      name="description"
      content="Psicosagra ofrece servicios completos de psicología en Madrid: terapia individual, familiar, infantil, neurodivergencias, psicología forense y nutrición clínica. 15+ años de experiencia, calidad garantizada."
    />
    <meta
      name="keywords"
      content="servicios psicología Madrid, terapia Madrid, psicólogo Madrid, terapia infantil Madrid, terapia familiar Madrid, neurodivergencias Madrid, TDAH Madrid, TEA Madrid, psicología forense Madrid, nutrición clínica Madrid"
    />
    <meta
      property="og:title"
      content="Servicios de Psicología en Madrid | Psicosagra | Terapia Individual, Familiar y Más"
    />
    <meta
      property="og:description"
      content="Psicosagra ofrece servicios completos de psicología en Madrid: terapia individual, familiar, infantil, neurodivergencias, psicología forense y nutrición clínica. 15+ años de experiencia, calidad garantizada."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://psicosagra.es/servicios" />
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
    <meta property="og:site_name" content="Psicosagra" />
    <meta property="og:locale" content="es_ES" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://psicosagra.es/servicios" />
    <meta
      property="twitter:title"
      content="Servicios de Psicología en Madrid | Psicosagra | Terapia Individual, Familiar y Más"
    />
    <meta
      property="twitter:description"
      content="Psicosagra ofrece servicios completos de psicología en Madrid: terapia individual, familiar, infantil, neurodivergencias, psicología forense y nutrición clínica. 15+ años de experiencia, calidad garantizada."
    />
    <meta
      property="twitter:image"
      content="https://psicosagra.es/images/logo/psicosagra.png"
    />
    <meta
      property="twitter:image:alt"
      content="Logo Psicosagra - Centro de Psicología en Madrid"
    />
    <link rel="canonical" href="https://psicosagra.es/servicios" />
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
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Servicios de Psicología en Madrid | Psicosagra",
        description:
          "Psicosagra ofrece servicios completos de psicología en Madrid: terapia individual, familiar, infantil, neurodivergencias, psicología forense y nutrición clínica.",
        url: "https://psicosagra.es/servicios",
        mainEntity: {
          "@type": "Service",
          name: "Servicios de Psicología en Madrid",
          description:
            "Servicios completos de psicología clínica y terapéutica en Madrid y alrededores",
          provider: {
            "@type": "LocalBusiness",
            name: "Psicosagra",
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
          },
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Servicios",
              item: "https://psicosagra.es/servicios",
            },
          ],
        },
      })}
    </script>
  </Helmet>
);

export default ServicesSEO;
