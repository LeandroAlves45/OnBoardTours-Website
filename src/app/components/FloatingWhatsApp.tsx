import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full transition-all hover:-translate-y-1 group"
      style={{
        background: 'linear-gradient(135deg, #25D366, #1DA851)',
        boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(37,211,102,0.45)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(37,211,102,0.25)';
      }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
        style={{
          border: '2px solid rgba(37,211,102,0.4)',
          animation: 'none',
        }}
      />
      <MessageCircle size={20} style={{ color: '#FFFFFF', flexShrink: 0 }} />
      <span
        className="hidden sm:block"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '13px', fontWeight: 700,
          color: '#FFFFFF', letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
