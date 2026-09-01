// Gera uma "capa" abstrata para cada matéria — composição geométrica variando por paleta/ângulo
function svgCapa(corA, corB, corC, angulo) {
  return `
  <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="250" fill="${corA}"/>
    <polygon points="0,250 400,${60 + angulo} 400,250" fill="${corB}" opacity="0.9"/>
    <circle cx="${320 - angulo}" cy="70" r="46" fill="${corC}" opacity="0.85"/>
    <g opacity="0.5">
      <rect x="24" y="24" width="6" height="6" fill="${corC}"/>
      <rect x="38" y="24" width="6" height="6" fill="${corC}"/>
      <rect x="24" y="38" width="6" height="6" fill="${corC}"/>
    </g>
  </svg>`;
}

const ARTIGOS = [
  {
    id: "a1",
    titulo: "Estúdio independente cearense anuncia RPG tático ambientado no sertão",
    excerpt: "Produção nacional mistura mecânicas de turnos com narrativa sobre a seca de 1877.",
    categoria: "noticia",
    tempo: "há 2h",
    capa: svgCapa("#241E33", "#FF3E7F", "#4FD6E8", 10),
    destaque: true,
    autor: "Marina Alcântara"
  },
  {
    id: "a2",
    titulo: "Guia completo: todos os finais secretos do último capítulo",
    excerpt: "Mapeamos as seis rotas alternativas e o que cada escolha desbloqueia depois.",
    categoria: "guia",
    tempo: "há 5h",
    capa: svgCapa("#1B2A2E", "#4FD6E8", "#FFB648", 30)
  },
  {
    id: "a3",
    titulo: "Data de lançamento confirmada para outubro, com edição física limitada",
    excerpt: "Pré-venda abre na próxima semana com bônus exclusivo para quem reservar cedo.",
    categoria: "lancamento",
    tempo: "há 6h",
    capa: svgCapa("#2E1B26", "#FFB648", "#FF3E7F", -15)
  },
  {
    id: "a4",
    titulo: "Patch corrige bug que travava conquistas em 15% das partidas",
    excerpt: "Desenvolvedora confirma que save games afetados poderão ser recuperados.",
    categoria: "noticia",
    tempo: "há 8h",
    capa: svgCapa("#1E2433", "#4FD6E8", "#B82C5C", 45)
  },
  {
    id: "a5",
    titulo: "Como montar a build mais eficiente para o modo difícil",
    excerpt: "Testamos 12 combinações de habilidades — essas quatro se destacaram.",
    categoria: "guia",
    tempo: "há 11h",
    capa: svgCapa("#231F2E", "#FF3E7F", "#FFB648", 0)
  },
  {
    id: "a6",
    titulo: "Expansão gratuita chega em dezembro com novo bioma jogável",
    excerpt: "Conteúdo inclui três chefes inéditos e sistema de clima dinâmico.",
    categoria: "lancamento",
    tempo: "há 14h",
    capa: svgCapa("#1A2B24", "#4FD6E8", "#FF3E7F", 20)
  },
  {
    id: "a7",
    titulo: "Torneio universitário bate recorde de inscrições neste semestre",
    excerpt: "Mais de 300 equipes de 40 instituições vão disputar a fase classificatória.",
    categoria: "noticia",
    tempo: "há 1 dia",
    capa: svgCapa("#241E33", "#FFB648", "#4FD6E8", -25)
  },
  {
    id: "a8",
    titulo: "Localização em português ganha data após pressão da comunidade",
    excerpt: "Legendas chegam em janeiro; dublagem completa fica para fase posterior.",
    categoria: "noticia",
    tempo: "há 1 dia",
    capa: svgCapa("#2A1E2C", "#FF3E7F", "#4FD6E8", 35)
  },
  {
    id: "a9",
    titulo: "Os pontos de coleta que você provavelmente está deixando passar",
    excerpt: "Um roteiro por região com tudo que costuma ficar escondido do radar.",
    categoria: "guia",
    tempo: "há 2 dias",
    capa: svgCapa("#1C2433", "#FFB648", "#B82C5C", 5)
  }
];

const ANALISES = [
  { titulo: "Crônicas de Aurora", plataforma: "PC · PS5 · Switch", nota: 9.2, veredito: "Narrativa densa carrega um combate ainda meio travado." },
  { titulo: "Ferrovia Zero", plataforma: "PC · Xbox", nota: 8.4, veredito: "Gestão viciante, mas a curva de dificuldade é irregular." },
  { titulo: "Marés de Cassandra", plataforma: "PS5", nota: 6.8, veredito: "Visual impecável não segura uma campanha rasa." },
  { titulo: "Oficina 9", plataforma: "PC", nota: 8.9, veredito: "O melhor jogo de crafting do ano, sem exagero." }
];
