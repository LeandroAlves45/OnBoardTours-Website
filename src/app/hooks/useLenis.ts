import { useEffect } from 'react';
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    // Inicializa a instância Lenis com configuração de scroll suave
    const lenis = new Lenis({
      duration: 1.2, // Duração do scroll suave em segundos
      // Easing exponencial para uma sensação premium
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', // Scroll vertical
      smoothWheel: true, // Habilita suavização para scroll de roda do mouse
    });

    // Função que corre em cada frame para atualizar a posição do scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Inicia o loop de animação
    const rafId = requestAnimationFrame(raf);

    // Cleanup quando o componente é desmontado
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy(); // Limpa a instância do Lenis
    };
  }, []); // O array vazio garante que o efeito só rode uma vez na montagem
}