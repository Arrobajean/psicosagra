import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogSection = () => {
  // Obtener los primeros 6 artículos para mostrar en el landing
  const featuredPosts = blogPosts.slice(0, 6);

  return (
    <section id="blog" className="min-h-dvh bg-muted/20 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              Blog
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Artículos sobre psicología y nutrición
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consejos, información y recursos para tu bienestar emocional y
              físico
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg"
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-block px-3 py-1 text-white text-xs font-medium rounded-full ${
                          post.category === "psicologia"
                            ? "bg-blue-600"
                            : post.category === "nutricion"
                            ? "bg-blue-400"
                            : "bg-purple-500"
                        }`}
                      >
                        {post.category === "psicologia"
                          ? "Psicología"
                          : post.category === "nutricion"
                          ? "Nutrición"
                          : "Bienestar"}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.8}>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button
                size="lg"
                className="group flex items-center justify-center mx-auto glass-button-cararra px-6 py-4 md:px-10 md:py-6 text-base md:text-lg font-semibold rounded-lg border-0 w-full md:w-auto"
              >
                <span>Ver todos los artículos</span>
                <ArrowRight
                  size={18}
                  className="ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
