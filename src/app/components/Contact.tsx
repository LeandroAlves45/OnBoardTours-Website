import { MapPin, Clock, Mail, MessageCircle, Map, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useIsMobile } from './ui/use-mobile';

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const isMobile = useIsMobile();
  const revealDistance = isMobile ? 18 : 36;
  const revealDuration = isMobile ? 0.38 : 0.65;
  const revealDelay = isMobile ? Math.min(delay, 0.04) : delay;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: revealDistance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: isMobile ? 0.12 : 0.22 }}
      transition={{ duration: revealDuration, ease: 'easeOut', delay: revealDelay }}
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  const isMobile = useIsMobile();

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gate C, R. da Praia 554, Vila Nova de Gaia',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Open every day 9am to sunset',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@opoboattours.com',
    },
  ];

  const actionButtons = [
    {
      icon: MessageCircle,
      label: 'Chat on WhatsApp',
      sublabel: 'Instant response',
      accentColor: '#25D366',
      bgColor: 'rgba(37,211,102,0.08)',
      borderColor: 'rgba(37,211,102,0.2)',
    },
    {
      icon: Map,
      label: 'Open in Google Maps',
      sublabel: 'Get directions',
      accentColor: '#00D4E8',
      bgColor: 'rgba(0,212,232,0.08)',
      borderColor: 'rgba(0,212,232,0.2)',
    },
    {
      icon: Calendar,
      label: 'Book Online Now',
      sublabel: 'Instant confirmation',
      accentColor: '#C9A84C',
      bgColor: 'rgba(201,168,76,0.08)',
      borderColor: 'rgba(201,168,76,0.2)',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #04111E 0%, #071830 40%, #0B2D52 80%, #071830 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(0,212,232,0.07) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
        />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,232,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,232,0.4), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — info */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #00D4E8)' }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px', fontWeight: 700, color: '#00D4E8',
                textTransform: 'uppercase', letterSpacing: '0.16em',
              }}>
                Find Us
              </span>
            </div>

              <h2 className="mb-10" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 300,
              color: '#FFFFFF', lineHeight: 1.1,
            }}>
              Ready to{' '}
              <span style={{
                fontStyle: 'italic', fontWeight: 400,
                background: 'linear-gradient(135deg, #00D4E8, #00FFE7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Set Sail?
              </span>
              </h2>
            </Reveal>

            <div className="space-y-7">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <Reveal key={idx} className="flex gap-4 group" delay={0.08 + idx * 0.06}>
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded flex items-center justify-center transition-all duration-300 group-hover:border-[rgba(0,212,232,0.4)]"
                      style={{
                        background: 'rgba(0,212,232,0.07)',
                        border: '1px solid rgba(0,212,232,0.15)',
                      }}
                    >
                      <Icon size={18} style={{ color: '#00D4E8' }} />
                    </div>
                    <div className="pt-1.5">
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '10px', fontWeight: 700, color: '#7A9BB5',
                        textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '5px',
                      }}>
                        {info.label}
                      </div>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5,
                      }}>
                        {info.value}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Decorative separator */}
            <Reveal delay={0.24}>
              <div className="mt-12 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,212,232,0.2), transparent)' }} />
            </Reveal>
          </div>

          {/* Right — action buttons */}
          <div className="space-y-4">
            {actionButtons.map((button, idx) => {
              const Icon = button.icon;
              return (
                <motion.button
                  key={idx}
                  className="w-full p-6 rounded flex items-center justify-between transition-all group hover:-translate-y-1"
                  initial={{ opacity: 0, y: isMobile ? 18 : 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: isMobile ? 0.12 : 0.22 }}
                  transition={{
                    duration: isMobile ? 0.32 : 0.55,
                    ease: 'easeOut',
                    delay: isMobile ? Math.min(idx * 0.03, 0.06) : 0.12 + idx * 0.08,
                  }}
                  style={{
                    background: `linear-gradient(135deg, ${button.bgColor}, transparent)`,
                    border: `1px solid ${button.borderColor}`,
                    backdropFilter: 'blur(8px)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${button.accentColor}22`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${button.accentColor}44`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.borderColor = button.borderColor;
                  }}
                >
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 0% 50%, ${button.accentColor}0F 0%, transparent 60%)` }}
                  />
                  <div className="relative flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${button.accentColor}15`,
                        border: `1px solid ${button.accentColor}30`,
                      }}
                    >
                      <Icon size={20} style={{ color: button.accentColor }} />
                    </div>
                    <div className="text-left">
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '15px', fontWeight: 600,
                        color: '#FFFFFF', marginBottom: '3px',
                      }}>
                        {button.label}
                      </div>
                      <div style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '12px', color: 'rgba(122,155,181,0.7)',
                      }}>
                        {button.sublabel}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    style={{ color: button.accentColor }}
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
