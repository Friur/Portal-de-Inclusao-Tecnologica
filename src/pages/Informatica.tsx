import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoEmbed from "@/components/ui/VideoEmbed";
import ContentImage from "@/components/ui/ContentImage";
import PartCard from "@/components/ui/PartCard";
import InfoList from "@/components/ui/InfoList";

const Informatica = () => {
  const computerParts = [
    {
      imageSrc: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop",
      title: "Monitor",
      description: "Tela onde aparecem as informações",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=200&fit=crop",
      title: "CPU",
      description: "Responsável pelo processamento dos dados",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop",
      title: "Teclado",
      description: "Usado para digitar textos",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
      title: "Mouse",
      description: "Utilizado para movimentar o cursor",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gradient mb-4">
              Informática Básica
            </h1>
            <p className="text-muted-foreground text-lg">
              Aprenda os conceitos fundamentais do uso do computador
            </p>
          </div>

          {/* Content Sections */}
          <article className="space-y-8">
            {/* O que é Informática */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">O que é Informática?</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
                alt="Conceito de informática"
              />
              <p className="text-foreground leading-relaxed text-lg">
                Informática é o conjunto de conhecimentos relacionados ao uso do computador
                para criação, armazenamento e processamento de informações.
              </p>
            </section>

            {/* O que é um Computador */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">O que é um Computador?</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop"
                alt="Computador desktop"
              />
              <p className="text-foreground leading-relaxed text-lg">
                O computador é um equipamento eletrônico utilizado para realizar tarefas como
                estudar, trabalhar, comunicar-se e acessar a internet.
              </p>
            </section>

            {/* Video Tutorial */}
            <VideoEmbed
              videoId="ZSIrMa7JYc8"
              title="Vídeo Tutorial: Partes do Computador"
            />

            {/* Partes do Computador */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Partes do Computador</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {computerParts.map((part, index) => (
                  <PartCard key={index} {...part} />
                ))}
              </div>
            </section>

            {/* Ligando e Desligando */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Ligando e Desligando o Computador</h2>
              <ContentImage
                src="https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/informatica_basica/image/botonportugues1-01_l.png"
                alt="Botão power"
              />
              <p className="text-foreground leading-relaxed text-lg">
                Para ligar o computador, pressione o botão de energia.
                Para desligar corretamente, utilize a opção "Desligar" no sistema operacional.
              </p>
            </section>

            {/* Sistema Operacional */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">O que é um Sistema Operacional?</h2>
              <ContentImage
                src="https://ctrlplay.com.br/wp-content/uploads/2022/12/Banner-Blog-1.png"
                alt="Sistemas operacionais"
              />
              <p className="text-foreground leading-relaxed text-lg mb-4">
                O sistema operacional é o programa principal do computador, responsável
                por permitir a interação entre o usuário e a máquina.
              </p>
              <p className="text-foreground">
                <strong className="text-primary">Exemplos:</strong> Windows, Linux e macOS.
              </p>
            </section>

            {/* Uso do Teclado */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Uso do Teclado</h2>
              <InfoList
                items={[
                  "Teclas de letras e números",
                  "Enter: confirmar ações",
                  "Backspace: apagar caracteres",
                  "Espaço: separar palavras",
                ]}
              />
            </section>

            {/* Uso do Mouse */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Uso do Mouse</h2>
              <InfoList
                items={[
                  "Botão esquerdo: selecionar",
                  "Botão direito: abrir opções",
                  "Roda: rolar a tela",
                ]}
              />
            </section>

            {/* Arquivos e Pastas */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Arquivos e Pastas</h2>
              <ContentImage
                src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&h=400&fit=crop"
                alt="Organização de arquivos"
              />
              <p className="text-foreground leading-relaxed text-lg">
                Arquivos são documentos, imagens ou vídeos.
                Pastas são usadas para organizar esses arquivos no computador.
              </p>
            </section>

            {/* Boas Práticas */}
            <section className="content-section animate-slide-up">
              <h2 className="section-title">Boas Práticas no Uso do Computador</h2>
              <InfoList
                items={[
                  "Não desligar o computador de forma incorreta",
                  "Manter o sistema atualizado",
                  "Organizar arquivos em pastas",
                  "Evitar instalar programas desconhecidos",
                ]}
              />
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Informatica;
