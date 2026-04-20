import { Instagram, Facebook, MessageCircle, Anchor} from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-12"
      style={{
        background: 'linear-gradient(180deg, #04111E 0%, #02090F 100%)',
        borderTop: '1px solid rgba(0,212,232,0.1)',
      }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,232,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00D4E8, #0B2D52)' }}
            >
              <Anchor size={12} style={{ color: '#fff' }} />
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '15px', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#FFFFFF' }}>Opo</span>
              <span style={{
                background: 'linear-gradient(90deg, #00D4E8, #00FFE7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}> Boat </span>
              <span style={{ color: '#FFFFFF' }}>Tours</span>
            </span>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-5">
            <a href="#" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px',
              color: 'rgba(122,155,181,0.6)', textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(122,155,181,0.6)')}
            >
              © 2026 Opo Boat Tours
            </a>
            <span style={{ color: 'rgba(0,212,232,0.2)' }}>•</span>
            <a href="#" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px',
              color: 'rgba(122,155,181,0.6)', textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(122,155,181,0.6)')}
            >
              Livro de Reclamações
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Facebook, label: 'Facebook' },
              { Icon: MessageCircle, label: 'WhatsApp' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{
                  border: '1px solid rgba(0,212,232,0.18)',
                  background: 'rgba(0,212,232,0.04)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,232,0.5)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,212,232,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,232,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,232,0.18)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,232,0.04)';
                }}
              >
                <Icon size={15} style={{ color: 'rgba(122,155,181,0.7)' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
