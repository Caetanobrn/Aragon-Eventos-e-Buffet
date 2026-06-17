import { useState, useEffect, useRef } from "react";

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E8C97A";
const GOLD_DARK = "#8B6914";
const BLACK = "#0A0A0A";
const CHARCOAL = "#111111";
const DARK_GRAY = "#1A1A1A";
const GRAY = "#2A2A2A";
const TEXT_MUTED = "#888888";
const TEXT_LIGHT = "#D4D4D4";

const galleryProjects = [
  {
    id: 1,
    title: "Balões Suspensos",
    category: "Arranjos de Balões Suspensos",
    description: "Arranjo em tom perolado para decoração aérea",
    aspect: "tall",
    image: "/fotos-baloes/suspensos.jpeg",
  },
  {
    id: 2,
    title: "Festa Infantil Premium",
    category: "Buffet & Decoração",
    description: "Mesa de doces luxuosa com arranjos temáticos",
    aspect: "wide",
    image: "/fotos-baloes/confeitaria.jpeg",
  },
  {
    id: 3,
    title: "Evento Corporativo",
    category: "Buffet",
    description: "Ilha gastronômica sofisticada para recepção e celebrações especiais",
    aspect: "square",
    image: "/fotos-buffet/ilha-gastronomica.jpeg",
  },
  {
    id: 4,
    title: "Buffet Criativo",
    category: "Buffet & Decoração",
    description: "Tela de patê personalizada com apresentação criativa e sofisticada",
    aspect: "tall",
    image: "/fotos-buffet/tela-pate.jpeg",
  },
  {
    id: 5,
    title: "Confraternização Empresarial",
    category: "Buffet",
    description: "Opções de frios e finger foods para eventos corporativos de alto padrão",
    aspect: "wide",
    image: "/fotos-buffet/tabua-frios-finos2.jpeg",
  },
  {
    id: 6,
    title: "Aniversário Adulto Elegante",
    category: "Arranjos de Balões",
    description: "Decoração sofisticada com balões azuis e brancos",
    aspect: "square",
    image: "/fotos-baloes/fundo-do-mar.jpeg",
  },
  {
    id: 7,
    title: "Chá de Bebê Luxo",
    category: "Arranjos de Balões",
    description: "Arranjos delicados para recepção de bebê",
    aspect: "wide",
    image: "/fotos-baloes/infantil.jpeg",
  },
  {
    id: 8,
    title: "Doces Premium",
    category: "Buffet",
    description: "Seleção de doces premium com acabamento refinado e ingredientes de qualidade",
    aspect: "tall",
    image: "/fotos-buffet/doces.jpeg",
  },
];

const portfolioProjects = [
  ...galleryProjects,
  {
    id: 9,
    title: "Festa Surpresa",
    category: "Arranjos de Balões",
    description: "Explosão de balões para surpresa de aniversário",
    aspect: "square",
    image: "/fotos-baloes/cachos-do-mar.jpeg",
  },
  {
    id: 10,
    title: "Variedade Doce",
    category: "Buffet",
    description: "Churros de Nutella com sabor irresistível e apresentação impecável",
    aspect: "tall",
    image: "/fotos-buffet/churros-nutella.jpeg",
  },
  {
    id: 11,
    title: "Arranjo infantil",
    category: "Arranjos de Balões",
    description: "Arrumação de balões e decoração para festa especial",
    aspect: "wide",
    image: "/fotos-baloes/sorvete.jpeg",
  },
  {
    id: 12,
    title: "Gala Beneficente",
    category: "Buffet",
    description: "Buffet sofisticado para jantar de gala com 300 convidados",
    aspect: "wide",
    image: "/fotos-buffet/tortelete-de-frango.jpeg",
  },
  {
    id: 13,
    title: "Mousse na Colher",
    category: "Buffet",
    description: "Mousse de chocolate gourmet servida em colher degustação para eventos especiais.",
    aspect: "square",
    image: "/fotos-buffet/colher-de-mousse.jpeg",
  },
  {
    id: 14,
    title: "Aniversário",
    category: "Buffet & Decoração",
    description: "Mesa principal personalizada com doces finos e decoração temática.",
    aspect: "tall",
    image: "/fotos-baloes/arranjo-aniversario.jpeg",
  },
  {
    id: 15,
    title: "Variedade no buffet",
    category: "Buffet",
    description: "Opção de mini hamburguer para seu evento",
    aspect: "wide",
    image: "/fotos-buffet/mini-hamburguer.jpeg",
  },
  {
    id: 16,
    title: "Buffet Decorativo",
    category: "Buffet",
    description: "Decoração criativa com alimento para seu evento",
    aspect: "square",
    image: "/fotos-buffet/flor-de-batata.jpeg",
  },
];

const services = [
  {
    title: "Arranjos de Balões",
    desc: "Arcos, colunas, painéis e composições personalizadas. Cada projeto é concebido para criar atmosferas únicas e memoráveis.",
    icon: "◇",
  },
  {
    title: "Buffet Completo",
    desc: "Cardápios elaborados para eventos de todos os portes, com ingredientes selecionados e apresentação impecável.",
    icon: "◆",
  },
  {
    title: "Decoração de Ambientes",
    desc: "Transformamos qualquer espaço em um cenário extraordinário, integrando balões, tecidos, iluminação e elementos decorativos.",
    icon: "◈",
  },
  {
    title: "Gestão de Eventos",
    desc: "Coordenação completa do seu evento, desde o planejamento inicial até a execução final, garantindo tranquilidade total.",
    icon: "◉",
  },
];

// Placeholder image component with gradient backgrounds
function PlaceholderImage({ project, className }) {

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }
  const gradients = [
    `linear-gradient(135deg, #1a1a1a 0%, #2d2519 50%, #1a1a1a 100%)`,
    `linear-gradient(135deg, #0f0f0f 0%, #1f1b10 50%, #0f0f0f 100%)`,
    `linear-gradient(135deg, #111 0%, #2a2010 50%, #111 100%)`,
    `linear-gradient(135deg, #0a0a0a 0%, #1c1708 50%, #0a0a0a 100%)`,
  ];
  const grad = gradients[project.id % gradients.length];

  return (
    <div
      className={className}
      style={{
        background: grad,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle at 30% 70%, rgba(201,168,76,0.08) 0%, transparent 60%),
          radial-gradient(circle at 70% 30%, rgba(201,168,76,0.06) 0%, transparent 50%)`,
      }} />
      <div style={{
        fontSize: "2.5rem",
        color: GOLD,
        opacity: 0.4,
        marginBottom: "0.5rem",
        fontFamily: "serif",
      }}>
        {project.icon || "◇"}
      </div>
      <div style={{
        fontSize: "0.65rem",
        color: GOLD,
        opacity: 0.5,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontFamily: "'Cormorant Garamond', serif",
      }}>
        {project.category}
      </div>
    </div>
  );
}

// Floating WhatsApp Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521983875843"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 4px 20px rgba(201,168,76,0.4), 0 2px 8px rgba(0,0,0,0.5)`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = `0 6px 28px rgba(201,168,76,0.6), 0 3px 12px rgba(0,0,0,0.6)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = `0 4px 20px rgba(201,168,76,0.4), 0 2px 8px rgba(0,0,0,0.5)`;
      }}
      title="Fale conosco pelo WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

// Navigation
function Nav({ currentPage, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? "1rem 3rem" : "1.5rem 3rem",
      background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid rgba(201,168,76,0.15)` : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "all 0.4s ease",
    }}>
      <button onClick={() => setPage("home")} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.6rem",
          fontWeight: 300,
          letterSpacing: "0.25em",
          color: "white",
          textTransform: "uppercase",
        }}>
          ARAGÓN
        </div>
        <div style={{
          fontSize: "0.55rem",
          letterSpacing: "0.4em",
          color: GOLD,
          textTransform: "uppercase",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          marginTop: "-2px",
        }}>
          Eventos & Buffet
        </div>
      </button>

      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {[
          { label: "Inicio", page: "home" },
          { label: "Portfolio", page: "portfolio" },
        ].map(item => (
          <button
            key={item.page}
            onClick={() => setPage(item.page)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: currentPage === item.page ? GOLD : TEXT_MUTED,
              transition: "color 0.2s ease",
              padding: "0.5rem 0",
              borderBottom: currentPage === item.page ? `1px solid ${GOLD}` : "1px solid transparent",
            }}
            onMouseEnter={e => { if (currentPage !== item.page) e.currentTarget.style.color = TEXT_LIGHT; }}
            onMouseLeave={e => { if (currentPage !== item.page) e.currentTarget.style.color = TEXT_MUTED; }}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => { window.open("https://wa.me/5521983875843", "_blank"); }}
          style={{
            background: "transparent",
            border: `1px solid ${GOLD}`,
            cursor: "pointer",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: GOLD,
            padding: "0.6rem 1.4rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = GOLD;
            e.currentTarget.style.color = BLACK;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = GOLD;
          }}
        >
          Contato
        </button>
      </div>
    </nav>
  );
}

// Hero Section
function Hero({ setPage }) {
  return (
    <section style={{
      minHeight: "100vh",
      background: `
        radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%),
        linear-gradient(180deg, #050505 0%, #0d0d0d 100%)
      `,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative lines */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "5%",
        width: "1px",
        height: "30%",
        background: `linear-gradient(180deg, transparent, ${GOLD}30, transparent)`,
      }} />
      <div style={{
        position: "absolute",
        top: "55%",
        right: "5%",
        width: "1px",
        height: "25%",
        background: `linear-gradient(180deg, transparent, ${GOLD}30, transparent)`,
      }} />

      {/* Decorative corner ornament */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "8%",
        width: "120px",
        height: "120px",
        borderTop: `1px solid ${GOLD}20`,
        borderRight: `1px solid ${GOLD}20`,
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "8%",
        width: "120px",
        height: "120px",
        borderBottom: `1px solid ${GOLD}20`,
        borderLeft: `1px solid ${GOLD}20`,
      }} />

      <div style={{ textAlign: "center", maxWidth: "800px", padding: "0 2rem" }}>
        <div style={{
          fontSize: "0.65rem",
          letterSpacing: "0.5em",
          color: GOLD,
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          marginBottom: "2rem",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}>
          <span style={{ width: "40px", height: "1px", background: GOLD, display: "inline-block" }} />
          Arranjos de Balões & Buffet
          <span style={{ width: "40px", height: "1px", background: GOLD, display: "inline-block" }} />
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3.5rem, 10vw, 7rem)",
          fontWeight: 300,
          letterSpacing: "0.15em",
          color: "white",
          margin: 0,
          lineHeight: 1,
          textTransform: "uppercase",
        }}>
          ARAGÓN
        </h1>

        <div style={{
          width: "60px",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          margin: "2rem auto",
        }} />

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: TEXT_LIGHT,
          marginBottom: "3rem",
          lineHeight: 1.7,
          letterSpacing: "0.03em",
        }}>
          Transformamos seus momentos especiais em experiencias inesqueciveis,<br />
          com elegancia e sofisticacao em cada detalhe.
        </p>

        <div style={{ display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => { const el = document.getElementById("servicos"); el?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
              border: "none",
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: BLACK,
              padding: "1rem 2.5rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(201,168,76,0.3)`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Nossos Servicos
          </button>
          <button
            onClick={() => setPage("portfolio")}
            style={{
              background: "transparent",
              border: `1px solid rgba(255,255,255,0.2)`,
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: TEXT_LIGHT,
              padding: "1rem 2.5rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = GOLD;
              e.currentTarget.style.color = GOLD;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = TEXT_LIGHT;
            }}
          >
            Ver Portfolio
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "3rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}>
        <div style={{
          fontSize: "0.55rem",
          letterSpacing: "0.3em",
          color: TEXT_MUTED,
          fontFamily: "'Montserrat', sans-serif",
          textTransform: "uppercase",
        }}>
          Rolar
        </div>
        <div style={{
          width: "1px",
          height: "40px",
          background: `linear-gradient(180deg, ${GOLD}60, transparent)`,
          animation: "scrollLine 2s ease infinite",
        }} />
      </div>
    </section>
  );
}

// Services Section
function Services() {
  return (
    <section id="servicos" style={{
      padding: "8rem 3rem",
      background: CHARCOAL,
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${GOLD}40, transparent)`,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            color: GOLD,
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            O Que Oferecemos
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            color: "white",
            margin: 0,
            letterSpacing: "0.1em",
          }}>
            Nossos Servicos
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1px",
          background: `${GOLD}15`,
        }}>
          {services.map((svc, i) => (
            <div
              key={i}
              style={{
                background: DARK_GRAY,
                padding: "3rem 2.5rem",
                transition: "background 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1f1f1f"; }}
              onMouseLeave={e => { e.currentTarget.style.background = DARK_GRAY; }}
            >
              <div style={{
                fontSize: "1.2rem",
                color: GOLD,
                marginBottom: "1.5rem",
                opacity: 0.8,
              }}>
                {svc.icon}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontWeight: 400,
                color: "white",
                marginBottom: "1rem",
                letterSpacing: "0.05em",
              }}>
                {svc.title}
              </h3>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.8rem",
                color: TEXT_MUTED,
                lineHeight: 1.8,
                fontWeight: 300,
                margin: 0,
              }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Lightbox({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        zIndex: 9998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          position: "relative",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
            display: "block",
          }}
        />
        <div style={{
          marginTop: "1rem",
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            color: "white",
          }}>
            {project.title}
          </div>
          <div style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: GOLD,
            textTransform: "uppercase",
            marginTop: "0.3rem",
          }}>
            {project.category}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-1rem",
            right: "-1rem",
            background: GOLD,
            border: "none",
            cursor: "pointer",
            width: "32px",
            height: "32px",
            color: "black",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}
// Gallery Section
function Gallery({ setPage }) {
  const [selected, setSelected] = useState(null);
  const projects = galleryProjects;

  return (
    <section id="galeria" style={{
      padding: "8rem 3rem",
      background: BLACK,
      position: "relative",
    }}>
      <Lightbox project={selected} onClose={() => setSelected(null)} />
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "4rem",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}>
          <div>
            <div style={{
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              color: GOLD,
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Nossos Projetos
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "white",
              margin: 0,
              letterSpacing: "0.1em",
            }}>
              Galeria
            </h2>
          </div>
          <button
            onClick={() => setPage("portfolio")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: GOLD,
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              padding: "0.5rem 0",
              borderBottom: `1px solid ${GOLD}40`,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = `${GOLD}40`; }}
          >
            Ver Portfolio Completo
            <span style={{ fontSize: "1rem" }}>→</span>
          </button>
        </div>

        {/* Masonry-inspired grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
          gap: "1px",
          background: `${GOLD}10`,
        }}>
          {projects.map((project, i) => {
            // Layout logic for visual interest
            const spans = [
              { col: "span 2", row: "span 2" },
              { col: "span 1", row: "span 1" },
              { col: "span 1", row: "span 1" },
              { col: "span 1", row: "span 2" },
              { col: "span 1", row: "span 1" },
              { col: "span 2", row: "span 1" },
              { col: "span 1", row: "span 1" },
              { col: "span 1", row: "span 1" },
            ];
            const span = spans[i] || { col: "span 1", row: "span 1" };
            const height = span.row === "span 2" ? "400px" : "200px";

            return (
              <div
                key={project.id}
                onClick={() => project.image && setSelected(project)}
                style={{
                  gridColumn: span.col,
                  gridRow: span.row,
                  height,
                  position: "relative",
                  overflow: "hidden",
                  cursor: project.image ? "pointer" : "default",
                  background: DARK_GRAY,
                }}
                onMouseEnter={e => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={e => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <PlaceholderImage
                  project={project}
                  className="proj-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(201,168,76,0.1) 100%)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <div style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: GOLD,
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}>
                    {project.category}
                  </div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "white",
                    letterSpacing: "0.05em",
                  }}>
                    {project.title}
                  </div>
                  <div style={{
                    fontSize: "0.7rem",
                    color: TEXT_MUTED,
                    fontFamily: "'Montserrat', sans-serif",
                    marginTop: "0.3rem",
                    fontWeight: 300,
                  }}>
                    {project.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Testimonial / Numbers Section
function Numbers() {
  const stats = [
    { value: "50+", label: "Eventos Realizados" },
    { value: "2", label: "Anos de Experiencia" },
    { value: "98%", label: "Clientes Satisfeitos" },
    { value: "4", label: "Cidades Atendidas" },
  ];

  return (
    <section style={{
      padding: "6rem 3rem",
      background: `linear-gradient(135deg, #0f0d08 0%, #1a1508 50%, #0f0d08 100%)`,
      position: "relative",
      borderTop: `1px solid ${GOLD}20`,
      borderBottom: `1px solid ${GOLD}20`,
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)`,
      }} />

      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px",
        background: `${GOLD}15`,
        position: "relative",
        zIndex: 1,
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            background: `rgba(10,8,2,0.9)`,
            padding: "3rem 2rem",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "3rem",
              fontWeight: 300,
              color: GOLD,
              lineHeight: 1,
              marginBottom: "0.8rem",
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: TEXT_MUTED,
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section style={{
      padding: "10rem 3rem",
      background: CHARCOAL,
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)`,
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
        <div style={{
          fontSize: "0.6rem",
          letterSpacing: "0.4em",
          color: GOLD,
          fontFamily: "'Montserrat', sans-serif",
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}>
          Vamos Criar Juntos
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 300,
          color: "white",
          marginBottom: "1.5rem",
          lineHeight: 1.2,
          letterSpacing: "0.08em",
        }}>
          Seu proximo evento merece ser extraordinario
        </h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.85rem",
          color: TEXT_MUTED,
          lineHeight: 1.8,
          marginBottom: "3rem",
          fontWeight: 300,
        }}>
          Entre em contato e descubra como podemos transformar sua celebracao em uma experiencia unica e inesquecivel.
        </p>
        <a
          href="https://wa.me/5521983875843"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
            color: BLACK,
            textDecoration: "none",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            padding: "1.2rem 3rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 12px 30px rgba(201,168,76,0.35)`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Solicitar Orcamento
        </a>
      </div>
    </section>
  );
}

// Footer
function Footer({ setPage }) {
  return (
    <footer style={{
      padding: "4rem 3rem",
      background: "#050505",
      borderTop: `1px solid ${GOLD}20`,
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
      }}>
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.4rem",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "white",
            textTransform: "uppercase",
          }}>
            ARAGÓN
          </div>
          <div style={{
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: GOLD,
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "uppercase",
            marginTop: "0.2rem",
          }}>
            Eventos & Buffet
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { label: "Inicio", action: () => setPage("home") },
            { label: "Portfolio", action: () => setPage("portfolio") },
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
                transition: "color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.color = TEXT_MUTED; }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.6rem",
          color: TEXT_MUTED,
          letterSpacing: "0.1em",
        }}>
          {new Date().getFullYear()} Aragón. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

// Portfolio Page
function PortfolioPage() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const categories = ["Todos", "Arranjos de Balões", "Buffet", "Buffet & Decoração"];

  const filtered = filter === "Todos"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === filter);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div style={{ background: BLACK, minHeight: "100vh", paddingTop: "8rem" }}>
      <Lightbox project={selected} onClose={() => setSelected(null)} />
      {/* Header */}
      <div style={{
        textAlign: "center",
        padding: "4rem 3rem 5rem",
        position: "relative",
      }}>
        <div style={{
          fontSize: "0.6rem",
          letterSpacing: "0.5em",
          color: GOLD,
          fontFamily: "'Montserrat', sans-serif",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          Todos os Nossos Trabalhos
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 300,
          color: "white",
          margin: 0,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}>
          Portfolio
        </h1>
        <div style={{
          width: "60px",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          margin: "2rem auto",
        }} />
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.1rem",
          fontStyle: "italic",
          fontWeight: 300,
          color: TEXT_MUTED,
          maxWidth: "500px",
          margin: "0 auto",
          lineHeight: 1.7,
        }}>
          Uma seleção dos nossos projetos mais memoráveis
        </p>
      </div>

      {/* Filters */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0 2rem 4rem",
        flexWrap: "wrap",
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              background: filter === cat ? GOLD : "transparent",
              border: `1px solid ${filter === cat ? GOLD : GOLD + "30"}`,
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: filter === cat ? BLACK : TEXT_MUTED,
              padding: "0.6rem 1.5rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              if (filter !== cat) {
                e.currentTarget.style.borderColor = GOLD;
                e.currentTarget.style.color = GOLD;
              }
            }}
            onMouseLeave={e => {
              if (filter !== cat) {
                e.currentTarget.style.borderColor = GOLD + "30";
                e.currentTarget.style.color = TEXT_MUTED;
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        padding: "0 3rem 8rem",
        maxWidth: "1300px",
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1px",
          background: `${GOLD}10`,
        }}>
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => project.image && setSelected(project)}
              style={{
                height: "300px",
                position: "relative",
                overflow: "hidden",
                cursor: project.image ? "pointer" : "default",
                background: DARK_GRAY,
              }}
              onMouseEnter={e => {
                const overlay = e.currentTarget.querySelector(".p-overlay");
                if (overlay) overlay.style.opacity = "1";
                const img = e.currentTarget.querySelector(".p-bg");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                const overlay = e.currentTarget.querySelector(".p-overlay");
                if (overlay) overlay.style.opacity = "0";
                const img = e.currentTarget.querySelector(".p-bg");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <div
                className="p-bg"
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.5s ease",
                }}
              >
                <PlaceholderImage
                  project={project}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div
                className="p-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.85)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  textAlign: "center",
                }}
              >
                <div style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  color: GOLD,
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: "uppercase",
                  marginBottom: "0.8rem",
                }}>
                  {project.category}
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "white",
                  letterSpacing: "0.05em",
                  marginBottom: "0.8rem",
                }}>
                  {project.title}
                </div>
                <div style={{
                  fontSize: "0.72rem",
                  color: TEXT_MUTED,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}>
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [currentPage, setPage] = useState("home");

  useEffect(() => {
    // Load fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    // Global styles
    const style = document.createElement("style");
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: ${BLACK}; color: white; }
      @keyframes scrollLine {
        0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
        50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ background: BLACK, minHeight: "100vh" }}>
      <Nav currentPage={currentPage} setPage={setPage} />

      {currentPage === "home" ? (
        <>
          <Hero setPage={setPage} />
          <Services />
          <Gallery setPage={setPage} />
          <Numbers />
          <CTA />
          <Footer setPage={setPage} />
        </>
      ) : (
        <>
          <PortfolioPage />
          <CTA />
          <Footer setPage={setPage} />
        </>
      )}

      <WhatsAppButton />
    </div>
  );
}
