## Objetivo
Aumentar a visibilidade dos rótulos/labels dourados em seções de fundo claro, mantendo os títulos principais inalterados e preservando o dourado claro em fundos escuros.

## Alterações

### 1. Tokens de cor em `src/index.css`
- `.section-label`: trocar `color: hsl(var(--gold))` por `color: hsl(var(--gold-dark))`.
- `.gold-text`: trocar `color: hsl(var(--gold))` por `color: hsl(var(--gold-dark))`.

Isso afeta automaticamente todos os rótulos de seção ("Clínica de enfermagem especializada", "Sobre a clínica", "Serviços", etc.) e labels de destaque em fundo claro, como o cargo "Fundadora & Diretora Clínica".

### 2. Ícones dourados em fundo claro
Substituir `text-gold` por `text-gold-dark` nos seguintes componentes:
- `src/components/IntroSection.tsx`: span "Cabo Frio" e ícones dos 4 cards de destaque.
- `src/components/AboutSection.tsx`: ícones de Missão, Visão e Valores.
- `src/components/SchedulingSection.tsx`: ícones de WhatsApp, Telefone, Endereço e Horário.
- `src/components/FAQSection.tsx`: estado aberto do accordion (`data-[state=open]:text-gold`).

### 3. Elementos que NÃO serão alterados
Manter `text-gold`/`gold` original nos fundos escuros para não perder contraste:
- Footer, DifferentialsSection, CTASection, CredentialsBar.
- Textos e ícones sobre overlays escuros da GallerySection.
- Hover states da navbar e botões dourados (`variant="gold"`, `goldOutline`, `hero`).

### 4. Validação
Verificar o preview em mobile e desktop para garantir que os rótulos e ícones ficaram legíveis sem quebrar a identidade visual.