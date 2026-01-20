import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoEmbed from "@/components/ui/VideoEmbed";
import ContentImage from "@/components/ui/ContentImage";
import InfoList from "@/components/ui/InfoList";
import TipButton from "@/components/ui/TipButton";
import { ShieldCheck } from "lucide-react";

const Internet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Navegue com segurança</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gradient mb-4">
              Internet e Segurança Digital
            </h1>
            <p className="text-muted-foreground text-lg">
              Aprenda a usar a internet de forma segura e responsável
            </p>
          </div>

          {/* Content Sections */}
          <article className="space-y-8">
            {/* O que é a Internet */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">O que é a Internet?</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
                alt="Rede mundial de internet"
              />
              <p className="text-foreground leading-relaxed text-lg">
                A internet é uma rede mundial de computadores que permite o acesso à informação,
                comunicação entre pessoas e utilização de serviços digitais.
              </p>
            </section>

            {/* Video Tutorial */}
            <VideoEmbed
              videoId="Dxcc6ycZ73M"
              title="Vídeo Educativo: Como Funciona a Internet"
            />

            {/* Principais usos da Internet */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Principais usos da Internet</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop"
                alt="Usos da internet"
              />
              <InfoList
                items={[
                  "Enviar e receber e-mails",
                  "Acessar redes sociais",
                  "Realizar pesquisas e estudos",
                  "Assistir vídeos e ouvir músicas",
                  "Fazer compras online",
                  "Acessar serviços bancários e públicos",
                ]}
              />
            </section>

            {/* O que é um Navegador */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">O que é um Navegador?</h2>
              <ContentImage
                src="https://s2-techtudo.glbimg.com/jHjyfxef_O42o_9JvWsaxcJ93MA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/b/h/pBt0sgRk2Hp9G3HFazIg/denny-muller-jysoenr-eog-unsplash.jpg"
                alt="Navegadores web"
              />
              <p className="text-foreground leading-relaxed text-lg">
                O navegador é o programa utilizado para acessar sites na internet.
                Exemplos comuns são Google Chrome, Mozilla Firefox e Microsoft Edge.
              </p>
            </section>

            {/* Video Tutorial 2 */}
            <VideoEmbed
              videoId="mnj_6tWZf7k"
              title="Vídeo Tutorial: Segurança na Internet"
            />

            {/* Criação de Senhas Seguras */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Criação de Senhas Seguras</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=400&fit=crop"
                alt="Segurança de senha"
              />
              <p className="text-foreground leading-relaxed text-lg mb-4">
                Para criar uma senha segura, siga estas recomendações:
              </p>
              <InfoList
                items={[
                  "Use letras maiúsculas e minúsculas",
                  "Inclua números",
                  "Utilize símbolos especiais",
                  "Evite dados pessoais",
                ]}
              />
              <div className="mt-4 p-4 bg-accent/30 rounded-xl">
                <p className="text-foreground">
                  <strong className="text-primary">Exemplo de senha segura:</strong>{" "}
                  <code className="bg-background px-2 py-1 rounded font-mono">A1@seguranca2026</code>
                </p>
              </div>
            </section>

            {/* Cuidados com Golpes */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Cuidados com Golpes na Internet</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
                alt="Cuidados com segurança digital"
              />
              <InfoList
                items={[
                  "Não clicar em links desconhecidos",
                  "Não informar senhas ou dados bancários",
                  "Desconfiar de promoções muito vantajosas",
                  "Verificar se o site possui o cadeado 🔒",
                ]}
              />
            </section>

            {/* Redes Sociais com Segurança */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Redes Sociais com Segurança</h2>
              <ContentImage
                src="https://invoicexpress.com/wp-content/uploads/2023/11/seguranca-nas-redes-sociais-saiba-como-proteger-o-seu-negocio-social.jpg"
                alt="Redes sociais"
              />
              <InfoList
                items={[
                  "Não aceitar pessoas desconhecidas",
                  "Evitar divulgar informações pessoais",
                  "Ajustar configurações de privacidade",
                  "Evitar compartilhar localização em tempo real",
                ]}
              />
            </section>

            {/* Importância do Antivírus */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Importância do Antivírus</h2>
              <ContentImage
                src="https://www.kotas.com.br/blog/wp-content/uploads/2021/08/Foto-Reproducao-MicroCenter.jpg"
                alt="Proteção antivírus"
              />
              <p className="text-foreground leading-relaxed text-lg">
                O antivírus protege o computador contra vírus e programas maliciosos,
                mantendo seus dados mais seguros.
              </p>
            </section>

            {/* Cidadania Digital */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Cidadania Digital</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
                alt="Cidadania digital"
              />
              <p className="text-foreground leading-relaxed text-lg">
                Utilizar a internet de forma responsável inclui respeitar outras pessoas,
                não compartilhar notícias falsas e agir com ética no ambiente digital.
              </p>

              <TipButton
                message="Nunca informe seus dados pessoais em sites desconhecidos!"
                label="Dica Importante"
              />
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Internet;
