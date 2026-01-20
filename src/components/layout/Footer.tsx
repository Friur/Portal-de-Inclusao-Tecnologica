import { Heart, Users, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-primary-foreground/90">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-primary-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Sobre o Portal
            </h3>
            <p className="text-sm leading-relaxed">
              Este portal foi criado para promover a inclusão digital,
              ajudando pessoas a aprenderem informática de forma simples e acessível.
            </p>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-bold text-lg text-primary-foreground mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Equipe
            </h3>
            <ul className="text-sm space-y-1">
              <li>Clara Marianne</li>
              <li>Pedro Henrique</li>
              <li>Sara Gabrielly</li>
              <li className="text-primary-foreground/70 mt-2">
                Orientador: Clayton Maciel
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-bold text-lg text-primary-foreground mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Nossa Missão
            </h3>
            <p className="text-sm leading-relaxed">
              Democratizar o acesso ao conhecimento tecnológico e promover
              a autonomia digital para todos os cidadãos.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2026 - Portal de Inclusão Tecnológica | Projeto de Inclusão Digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
