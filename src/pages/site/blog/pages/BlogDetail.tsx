import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  User,
  Share2,
  Facebook,
  Linkedin,
} from "lucide-react";
import { SiX } from "react-icons/si";
import { getPostBySlug, blogPosts } from "@/data/blogData";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedSection from "@/components/common/AnimatedSection";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = getPostBySlug(slug || "");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Artículo no encontrado
          </h1>
          <Link to="/blog" className="text-[#74bd51] hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  // Related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const pageTitle = `${post.title} | Blog Psicosagra`;
  const shareUrl = `https://psicosagra.es/blog/${post.slug}`;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author.name} />
        <link rel="canonical" href={shareUrl} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": "${post.image}",
            "datePublished": "${post.date}",
            "author": {
              "@type": "Person",
              "name": "${post.author.name}",
              "jobTitle": "${post.author.role}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Psicosagra"
            }
          }
        `}</script>
      </Helmet>

      <div className="min-h-dvh bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div
          className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white"
          style={{ paddingTop: "var(--header-height)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-6 py-16 md:py-24">
            {/* Back Button */}
            <AnimatedSection animation="fade">
              <button
                onClick={() => navigate("/blog")}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8"
                aria-label="Volver al blog"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Volver al blog</span>
              </button>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="slideUp" delay={0.1}>
                {/* Category Badge */}
                <div className="mb-6">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      post.category === "psicologia"
                        ? "bg-blue-500 text-white"
                        : post.category === "nutricion"
                        ? "bg-green-500 text-white"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    {post.category === "psicologia"
                      ? "Psicología"
                      : post.category === "nutricion"
                      ? "Nutrición"
                      : "Bienestar"}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{post.readTime} de lectura</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pb-8 border-b border-white/20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{post.author.name}</p>
                    <p className="text-white/70">{post.author.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade">
              {/* Excerpt */}
              <div className="bg-[#74bd51]/10 border-l-4 border-[#74bd51] p-6 rounded-r-lg mb-12">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed space-y-6"
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {post.content}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className="w-5 h-5 text-gray-500" />
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Compartir artículo:</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-gray-800 transition-all duration-300"
                      aria-label="Compartir en Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(
                        post.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-gray-800 transition-all duration-300"
                      aria-label="Compartir en X (Twitter)"
                    >
                      <SiX className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-gray-800 transition-all duration-300"
                      aria-label="Compartir en LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
              <AnimatedSection animation="fade">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                  Artículos Relacionados
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost, index) => (
                  <AnimatedSection
                    key={relatedPost.id}
                    animation="slideUp"
                    delay={index * 0.1}
                  >
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#74bd51] to-[#629d44] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="fade">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Te ha resultado útil este artículo?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Nuestro equipo de profesionales está disponible para ofrecerte
                  atención personalizada. Agenda tu primera consulta sin
                  compromiso.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 bg-white text-[#74bd51] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Solicitar consulta gratuita</span>
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
                <p className="mt-6 text-white/80 text-sm">
                  ✓ Primera consulta gratuita • ✓ Atención personalizada • ✓
                  Profesionales colegiados
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default BlogDetail;
