# Divisor decorativo entre "Sobre" e "Especialidades"

## O que vai mudar
Adicionar a imagem da onda (verde + dourado + off-white) como uma faixa decorativa fina e elegante separando a seção **Sobre a Clínica** do bloco **Credenciais → Especialidades**.

A onda já contém as cores da marca, então cria uma transição visual natural do fundo off-white da seção Sobre para a faixa verde da CredentialsBar logo abaixo.

## Posicionamento
Entre `<AboutSection />` e `<CredentialsBar />` no `src/pages/Index.tsx`.

## Detalhes visuais
- Altura: ~120px no mobile, ~160–180px no desktop
- Imagem com `object-cover` e `object-center`, ocupando 100% da largura
- Sem texto, sem sombras pesadas — apenas o grafismo respirando
- Margem vertical sutil acima e abaixo (sem cortar a seção Sobre)
- Loading lazy + alt vazio (`alt=""` + `aria-hidden="true"`) por ser puramente decorativo
- Versão responsiva: em telas muito pequenas, manter proporção sem distorcer

## Passos técnicos
1. Copiar a imagem enviada para `src/assets/divider-wave.png`
2. Criar componente leve `src/components/SectionDivider.tsx` (reutilizável caso queira aplicar em outros pontos depois)
3. Importar e inserir `<SectionDivider />` entre `AboutSection` e `CredentialsBar` em `src/pages/Index.tsx`
4. Atualizar o export estático (HTML) para refletir a mudança, mantendo paridade React/HTML

## Fora de escopo
- Não vou aplicar no Footer agora (opção 3 ficou para depois, se você quiser)
- Não vou mexer em cores nem em nenhuma outra seção