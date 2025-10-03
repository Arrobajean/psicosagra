import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";
import { blogPosts, blogCategories, getPostsByCategory } from "@/data/blogData";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedSection from "@/components/common/AnimatedSection";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  useEffect(() => {
    document.title = "Psicosagra - Blog de Psicología y Nutrición";
  }, []);

  const filteredPosts = getPostsByCategory(activeFilter);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Blog de Psicología y Nutrición | Psicosagra</title>
        <meta
          name="description"
          content="Artículos sobre psicología, nutrición y bienestar. Consejos prácticos y evidencia científica para mejorar tu salud mental y física."
        />
        <meta
          name="keywords"
          content="blog psicología, blog nutrición, salud mental, bienestar, consejos psicológicos, alimentación saludable"
        />
        <meta
          property="og:title"
          content="Blog de Psicología y Nutrición | Psicosagra"
        />
        <meta
          property="og:description"
          content="Descubre artículos sobre psicología, nutrición y bienestar en nuestro blog."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://psicosagra.es/blog" />
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
        <link rel="canonical" href="https://psicosagra.es/blog" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog de Psicología y Nutrición | Psicosagra",
            "description": "Artículos sobre psicología, nutrición y bienestar.",
            "url": "https://psicosagra.es/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Psicosagra"
            }
          }
        `}</script>
      </Helmet>
      <div
        className="min-h-dvh bg-gradient-to-b from-white to-gray-50"
        style={{ paddingTop: "var(--header-height)" }}
      >
        <div className="container mx-auto px-6 py-16 md:py-24">
          {/* Header */}
          <AnimatedSection animation="fade">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                Blog
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Recursos para tu Bienestar
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Artículos, consejos prácticos y evidencia científica sobre
                psicología, nutrición y salud integral.
              </p>
            </div>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection animation="slideUp" delay={0.1}>
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
              role="group"
              aria-label="Filtros de categorías"
            >
              {blogCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeFilter === category.key
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm"
                  }`}
                  aria-pressed={activeFilter === category.key}
                  aria-label={`Filtrar por ${category.label}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                animation="slideUp"
                delay={0.2 + index * 0.1}
              >
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                    {/* Image */}
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                            post.category === "psicologia"
                              ? "bg-blue-600/90 text-white"
                              : post.category === "nutricion"
                              ? "bg-blue-500/90 text-white"
                              : "bg-blue-700/90 text-white"
                          }`}
                        >
                          {post.category === "psicologia"
                            ? "Psicología"
                            : post.category === "nutricion"
                            ? "Nutrición"
                            : "Bienestar"}
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {post.author.role}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection animation="fade" delay={0.2}>
            <div className="text-center bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">
                ¿Te gustaría profundizar más?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Nuestros profesionales están disponibles para ofrecerte atención
                personalizada. Agenda tu primera consulta sin compromiso.
              </p>
              <Link to="/contacto">
                <button className="group flex items-center justify-center bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg mx-auto hover:scale-105">
                  <span>Solicitar consulta</span>
                  <ArrowRight
                    size={22}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-out"
                  />
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Blog;
