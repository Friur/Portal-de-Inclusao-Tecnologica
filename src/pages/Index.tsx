import { Monitor, Globe, Heart, Users, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureCard from "@/components/ui/FeatureCard";
import VideoEmbed from "@/components/ui/VideoEmbed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-24">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-accent/30 text-accent-foreground px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Aprendizado acessível para todos
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="text-foreground">Portal de </span>
                <span className="text-gradient">Inclusão Tecnológica</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Este portal foi criado para ajudar pessoas iniciantes a aprender
                informática e uso da internet de forma <strong>simples</strong>,{" "}
                <strong>acessível</strong> e <strong>segura</strong>.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#conteudos" className="btn-hero">
                  <Monitor className="w-5 h-5" />
                  Começar a Aprender
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-slide-up">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Vídeo Introdutório
              </h2>
              <p className="text-muted-foreground">
                Assista ao vídeo abaixo para uma introdução à informática
              </p>
            </div>
            <VideoEmbed
              videoId="WULwZ6v_Ai8"
              title="Introdução à Informática"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="conteudos" className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              O que você vai aprender?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore nossos conteúdos educativos e desenvolva suas habilidades digitais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              title="Informática Básica"
              description="Aprenda os conceitos fundamentais do uso do computador, como funciona e como utilizar no dia a dia."
              imageSrc="https://cfis.com.br/site/wp-content/uploads/2022/06/imagem-informatica-basica-e-avancada.png"
              linkTo="/informatica"
              linkText="Começar"
              icon={Monitor}
              delay={0}
            />
            <FeatureCard
              title="Internet e Segurança"
              description="Navegue com segurança e aprenda as melhores práticas para se proteger online."
              imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
              linkTo="/internet"
              linkText="Explorar"
              icon={Globe}
              delay={100}
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center animate-slide-up" style={{ animationDelay: "0ms" }}>
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Acessibilidade</h3>
                <p className="text-muted-foreground text-sm">
                  Conteúdo desenvolvido pensando em todos os públicos, com linguagem simples e clara.
                </p>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Inclusão</h3>
                <p className="text-muted-foreground text-sm">
                  Promovemos a inclusão digital para que todos possam participar da sociedade conectada.
                </p>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Educação</h3>
                <p className="text-muted-foreground text-sm">
                  Materiais educativos gratuitos para desenvolver autonomia no uso da tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
