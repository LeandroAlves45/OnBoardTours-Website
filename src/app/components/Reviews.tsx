import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useIsMobile } from './ui/use-mobile';

const reviews = [
  {
    text: 'Absolutely magical experience on the Douro. Our captain was incredibly knowledgeable and the sunset was breathtaking.',
    author: 'Sarah M.',
    origin: 'United Kingdom',
    platform: 'GetYourGuide',
    rating: 5,
  },
  {
    text: 'Best activity in Porto, full stop. The private tour was worth every cent — intimate, beautiful, and perfectly organized.',
    author: 'James T.',
    origin: 'Australia',
    platform: 'Google',
    rating: 5,
  },
  {
    text: 'We did the wine tasting tour and it was phenomenal. Learning about Porto wines while sailing the river is pure magic.',
    author: 'Claudia R.',
    origin: 'Brazil',
    platform: 'TripAdvisor',
    rating: 5,
  },
];

const platforms = [
  { name: 'GetYourGuide', rating: 5.0, reviews: '180+' },
  { name: 'Google', rating: 5.0, reviews: '240+' },
  { name: 'TripAdvisor', rating: 5.0, reviews: '95+' },
];

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

export function Reviews() {
  const isMobile = useIsMobile();

  return (
    <section
      id="reviews"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F9FC 50%, #EDF4FA 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(0,212,232,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #00D4E8)' }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px', fontWeight: 700, color: '#00D4E8',
              textTransform: 'uppercase', letterSpacing: '0.16em',
            }}>
              What Guests Say
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #00D4E8, transparent)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 400,
            color: '#0B2D52', lineHeight: 1.1,
          }}>
            Reviewed Across{' '}
            <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #00D4E8, #0098AA)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              All Major Platforms
            </span>
          </h2>
        </Reveal>

        {/* Platform ratings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.name}
              className="relative overflow-hidden rounded p-8 text-center transition-all hover:-translate-y-1 group"
              initial={{ opacity: 0, y: isMobile ? 18 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.12 : 0.2 }}
              transition={{
                duration: isMobile ? 0.32 : 0.55,
                ease: 'easeOut',
                delay: isMobile ? Math.min(idx * 0.03, 0.06) : idx * 0.08,
              }}
              style={{
                background: 'linear-gradient(160deg, #04111E 0%, #071830 100%)',
                border: '1px solid rgba(0,212,232,0.12)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,232,0.3)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,212,232,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,232,0.12)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 100%, rgba(0,212,232,0.08) 0%, transparent 70%)' }}
              />
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,232,0.4), transparent)' }}
              />

              <div className="relative z-10">
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '10px', fontWeight: 700, color: '#7A9BB5',
                  textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px',
                }}>
                  {platform.name}
                </div>

                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="#C9A84C" stroke="#C9A84C" />
                  ))}
                </div>

                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '56px', fontWeight: 600, lineHeight: 1,
                  background: 'linear-gradient(135deg, #00D4E8, #00FFE7)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  {platform.rating.toFixed(1)}
                </div>

                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '11px', color: 'rgba(122,155,181,0.6)', marginTop: '8px',
                }}>
                  {platform.reviews} reviews
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="relative rounded p-7 transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: isMobile ? 18 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.12 : 0.2 }}
              transition={{
                duration: isMobile ? 0.32 : 0.55,
                ease: 'easeOut',
                delay: isMobile ? Math.min(idx * 0.03, 0.06) : idx * 0.08,
              }}
              style={{
                background: 'linear-gradient(160deg, rgba(11,45,82,0.04) 0%, rgba(0,212,232,0.03) 100%)',
                border: '1px solid rgba(0,212,232,0.12)',
                borderRadius: '6px',
              }}
            >
              <Quote size={24} style={{ color: 'rgba(0,212,232,0.25)', marginBottom: '16px' }} />

              <p className="mb-6" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px', color: 'rgba(11,45,82,0.75)', lineHeight: 1.75,
                fontStyle: 'italic',
              }}>
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,212,232,0.1)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0B2D52, #00506A)' }}
                >
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700, color: '#00D4E8' }}>
                    {review.author[0]}
                  </span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 600, color: '#0B2D52' }}>
                    {review.author}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', color: '#7A9BB5' }}>
                    {review.origin} · {review.platform}
                  </div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={10} fill="#C9A84C" stroke="#C9A84C" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
