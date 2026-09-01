(function () {
  let filtroAtivo = "todas";
  let termoBusca = "";

  const heroSection = document.getElementById("heroSection");
  const feedGrid = document.getElementById("feedGrid");
  const feedEmpty = document.getElementById("feedEmpty");
  const feedFiltros = document.getElementById("feedFiltros");
  const analisesList = document.getElementById("analisesList");
  const tickerTrack = document.getElementById("tickerTrack");
  const searchInput = document.getElementById("searchInput");
  const newsletterForm = document.getElementById("newsletterForm");
  const toast = document.getElementById("toast");

  function rotuloCategoria(cat) {
    return { noticia: "Notícia", guia: "Guia", lancamento: "Lançamento" }[cat] || cat;
  }

  function renderHero() {
    const destaque = ARTIGOS.find(a => a.destaque) || ARTIGOS[0];
    heroSection.innerHTML = `
      <div class="wrap hero-inner">
        <div class="hero-text">
          <span class="hero-cat">${rotuloCategoria(destaque.categoria)}</span>
          <h1 class="hero-title">${destaque.titulo}</h1>
          <p class="hero-dek">${destaque.excerpt}</p>
          <div class="hero-meta">
            <span>${destaque.autor || "Redação Respawn"}</span>
            <span>${destaque.tempo}</span>
          </div>
        </div>
        <div class="hero-figure">${destaque.capa}</div>
      </div>
    `;
  }

  function renderTicker() {
    const titulos = ARTIGOS.map(a => a.titulo);
    const loopado = [...titulos, ...titulos];
    tickerTrack.innerHTML = loopado.map(t => `<span>${t}</span>`).join("");
  }

  function renderFeed() {
    let lista = filtroAtivo === "todas" ? ARTIGOS : ARTIGOS.filter(a => a.categoria === filtroAtivo);
    if (termoBusca.trim()) {
      const termo = termoBusca.toLowerCase();
      lista = lista.filter(a => a.titulo.toLowerCase().includes(termo) || a.excerpt.toLowerCase().includes(termo));
    }

    if (lista.length === 0) {
      feedGrid.innerHTML = "";
      feedEmpty.hidden = false;
      return;
    }
    feedEmpty.hidden = true;

    feedGrid.innerHTML = lista.map(a => `
      <article class="feed-item">
        <div class="feed-figure">${a.capa}</div>
        <span class="feed-tag ${a.categoria === "lancamento" ? "is-lancamento" : ""}">${rotuloCategoria(a.categoria)}</span>
        <p class="feed-titulo">${a.titulo}</p>
        <p class="feed-excerpt">${a.excerpt}</p>
        <span class="feed-time">${a.tempo}</span>
      </article>
    `).join("");
  }

  function classeScore(nota) {
    if (nota >= 8.5) return "score-alta";
    if (nota >= 7) return "score-media";
    return "score-baixa";
  }

  function renderAnalises() {
    analisesList.innerHTML = ANALISES.map(r => `
      <div class="analise-row">
        <span class="analise-score ${classeScore(r.nota)}">${r.nota.toFixed(1)}</span>
        <div>
          <p class="analise-info-titulo">${r.titulo}</p>
          <p class="analise-info-plataforma">${r.plataforma}</p>
        </div>
        <p class="analise-veredito">${r.veredito}</p>
      </div>
    `).join("");
  }

  let toastTimeout;
  function mostrarToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  // Eventos
  feedFiltros.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro-btn");
    if (!btn) return;
    filtroAtivo = btn.dataset.filtro;
    [...feedFiltros.children].forEach(b => b.classList.toggle("is-active", b === btn));
    renderFeed();
  });

  searchInput.addEventListener("input", (e) => {
    termoBusca = e.target.value;
    renderFeed();
  });

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarToast("Inscrito! Isso ainda é uma simulação — sem backend de e-mail conectado.");
    newsletterForm.reset();
  });

  // Inicialização
  renderHero();
  renderTicker();
  renderFeed();
  renderAnalises();
})();
