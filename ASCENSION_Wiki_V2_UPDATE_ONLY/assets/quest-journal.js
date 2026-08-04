(() => {
'use strict';

const root = document.querySelector('[data-quest-journal]');
if (!root) return;

const CHAPTERS = [{"id":"eveil-cendres","number":1,"roman":"I","name":"L'Éveil sous les Cendres","subtitle":"Le monde remarque ceux qu’il n’avait pas prévus.","goal":"company-chapter-1","stage":"early","spoiler":false,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"armes-souveniennent","number":2,"roman":"II","name":"Les Armes qui se souviennent","subtitle":"Les premières Résonances et le prix d’une lame qui possède une mémoire.","goal":"company-chapter-2","stage":"early","spoiler":false,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"royaumes-oublies","number":3,"roman":"III","name":"Les Royaumes oubliés","subtitle":"Bibliothèques revenues, voies perdues et souverains effacés.","goal":"company-chapter-3","stage":"early","spoiler":false,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"monde-fracture","number":4,"roman":"IV","name":"Le Monde fracturé","subtitle":"Les dimensions révèlent les blessures laissées par le Premier Miracle.","goal":"company-chapter-4","stage":"mid","spoiler":false,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"porteurs-dechus","number":5,"roman":"V","name":"Les Porteurs déchus","subtitle":"Les anciens porteurs reviennent sous la forme de rencontres et de dettes.","goal":"company-chapter-5","stage":"mid","spoiler":false,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"prix-pouvoir","number":6,"roman":"VI","name":"Le Prix du pouvoir","subtitle":"Chaque Miracle exige davantage que de la force.","goal":"company-chapter-6","stage":"mid","spoiler":false,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"couronne-oubliee","number":7,"roman":"VII","name":"La Couronne oubliée","subtitle":"La Cour éternelle et les héritiers d’une souveraine effacée.","goal":"company-chapter-7","stage":"mid","spoiler":false,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"eclat-septieme","number":8,"roman":"VIII","name":"L’Éclat du Septième Miracle","subtitle":"Les fragments convergent vers une vérité interdite.","goal":"company-chapter-8","stage":"end","spoiler":true,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"six-epreuves","number":9,"roman":"IX","name":"Les Six Épreuves","subtitle":"La compagnie porte six responsabilités avant le jugement final.","goal":"company-chapter-9","stage":"end","spoiler":true,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]},{"id":"roi-cendres","number":10,"roman":"X","name":"Le Roi de Cendres","subtitle":"Asterhaël, Vaelorn et le choix personnel du Dernier Miracle.","goal":"company-chapter-10","stage":"end","spoiler":true,"links":[{"label":"Campagne","href":"progression.html"},{"label":"Commandes","href":"commands.html"},{"label":"Lore","href":"lore.html"}]}];
const SPECIFIC_LINKS = {};
const JOURNAL_KEY = 'ascension.questJournal.v2';
const ADVENTURE_KEY = 'ascension.adventure.hybrid.v2';
const JOURNAL_SCHEMA = 'ascension-quest-journal';
const JOURNAL_VERSION = 2;

const cards = [...root.querySelectorAll('.quest-card')];
const sections = [...root.querySelectorAll('.quest-chapter')];
const searchInput = document.getElementById('quest-search');
const chapterFilter = document.getElementById('chapter-filter');
const statusFilter = document.getElementById('quest-status-filter');
const scopeFilter = document.getElementById('quest-scope-filter');
const favoritesFilter = document.getElementById('quest-favorites-filter');
const notesFilter = document.getElementById('quest-notes-filter');
const visibleCount = document.getElementById('quest-visible-count');
const filterMessage = document.getElementById('quest-filter-message');
const chapterGrid = document.getElementById('quest-chapter-grid');
const drawer = document.getElementById('quest-journal-drawer');
const drawerBackdrop = document.getElementById('quest-journal-backdrop');
const drawerContent = document.getElementById('quest-journal-content');
const toast = document.getElementById('quest-journal-toast');

let onlyFavorites = false;
let onlyNotes = false;
let nextQuestId = '';
let activeJournalQuestId = '';

function safeParse(key,fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(error);
    return fallback;
  }
}

function journalDefaults() {
  return {
    schema:JOURNAL_SCHEMA,
    version:JOURNAL_VERSION,
    completed:[],
    favorites:[],
    notes:{},
    chapterNotes:{},
    revealedSpoilers:false,
    updatedAt:new Date().toISOString()
  };
}

function journalState() {
  const raw = safeParse(JOURNAL_KEY,journalDefaults());
  return {
    ...journalDefaults(),
    ...raw,
    completed:Array.isArray(raw.completed) ? [...new Set(raw.completed)] : [],
    favorites:Array.isArray(raw.favorites) ? [...new Set(raw.favorites)] : [],
    notes:raw.notes && typeof raw.notes === 'object' ? raw.notes : {},
    chapterNotes:raw.chapterNotes && typeof raw.chapterNotes === 'object' ? raw.chapterNotes : {}
  };
}

function saveJournal(state) {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(JOURNAL_KEY,JSON.stringify(state));
}

function adventureDefaults() {
  return {
    profile:{playerName:'',className:'',spoilers:false},
    personal:{completed:[]},
    company:{name:'',teamId:'',completed:[],ending:''},
    meta:{updatedAt:new Date().toISOString(),source:'quest-journal'}
  };
}

function adventureState() {
  const raw = safeParse(ADVENTURE_KEY,adventureDefaults());
  return {
    ...adventureDefaults(),
    ...raw,
    profile:{...adventureDefaults().profile,...(raw.profile || {})},
    personal:{...adventureDefaults().personal,...(raw.personal || {})},
    company:{...adventureDefaults().company,...(raw.company || {})}
  };
}

function saveAdventure(state) {
  state.meta = {
    ...(state.meta || {}),
    updatedAt:new Date().toISOString(),
    source:'quest-journal'
  };
  localStorage.setItem(ADVENTURE_KEY,JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'),2400);
}

function chapterFor(card) {
  return CHAPTERS.find(chapter => chapter.id === card.dataset.chapter);
}

function cardGoals(card) {
  return String(card.dataset.syncGoals || '')
    .split(',')
    .map(value => value.trim())
    .filter(Boolean);
}

function adventureHasGoal(goal,state = adventureState()) {
  if (goal.startsWith('personal-')) {
    return (state.personal.completed || []).includes(goal);
  }
  return (state.company.completed || []).includes(goal);
}

function chapterValidated(card,state = adventureState()) {
  const chapter = chapterFor(card);
  return Boolean(chapter && (state.company.completed || []).includes(chapter.goal));
}

function specialComplete(card,state = adventureState()) {
  switch (card.dataset.special) {
    case 'class': return Boolean(state.profile.className);
    case 'ending-choice': return Boolean(state.company.ending);
    case 'ending-sealed': return state.company.ending === 'sealed';
    case 'ending-opened': return state.company.ending === 'opened';
    default: return false;
  }
}

function completionInfo(card) {
  const journal = journalState();
  const adventure = adventureState();
  const goals = cardGoals(card);
  const byChapter = chapterValidated(card,adventure);
  const byGoal = goals.some(goal => adventureHasGoal(goal,adventure));
  const bySpecial = specialComplete(card,adventure);
  const manual = journal.completed.includes(card.id);

  return {
    complete:byChapter || byGoal || bySpecial || manual,
    synced:byChapter || byGoal || bySpecial,
    source:byChapter ? 'chapter' : byGoal ? 'goal' : bySpecial ? 'choice' : manual ? 'manual' : 'todo'
  };
}

function spoilersVisible() {
  const journal = journalState();
  const adventure = adventureState();
  return Boolean(journal.revealedSpoilers || adventure.profile.spoilers);
}

function setAdventureGoal(goal,enabled) {
  const adventure = adventureState();
  const target = goal.startsWith('personal-')
    ? adventure.personal
    : adventure.company;
  const values = new Set(target.completed || []);
  enabled ? values.add(goal) : values.delete(goal);
  target.completed = [...values];
  saveAdventure(adventure);
}

function toggleQuest(card) {
  const info = completionInfo(card);
  const goals = cardGoals(card);
  const special = card.dataset.special;

  if (chapterValidated(card)) {
    showToast('Cette quête est validée par le chapitre dans Mon aventure.');
    return;
  }

  if (special === 'class' && !adventureState().profile.className) {
    showToast('Choisis d’abord une classe dans le guide des classes.');
    return;
  }

  if (['ending-choice','ending-sealed','ending-opened'].includes(special)) {
    openJournal(card.id);
    showToast('Le statut dépend du choix final enregistré.');
    return;
  }

  if (goals.length) {
    const enable = !info.complete;
    goals.forEach(goal => setAdventureGoal(goal,enable));
    showToast(enable ? 'Objectif ajouté à Mon aventure.' : 'Objectif retiré de Mon aventure.');
  } else {
    const journal = journalState();
    const values = new Set(journal.completed);
    values.has(card.id) ? values.delete(card.id) : values.add(card.id);
    journal.completed = [...values];
    saveJournal(journal);
    showToast(values.has(card.id) ? 'Quête marquée comme terminée.' : 'Quête remise à faire.');
  }

  renderAll();
}

function toggleFavorite(card) {
  const journal = journalState();
  const values = new Set(journal.favorites);
  values.has(card.id) ? values.delete(card.id) : values.add(card.id);
  journal.favorites = [...values];
  saveJournal(journal);
  renderAll();
}

function toggleChapter(chapterId) {
  const chapter = CHAPTERS.find(item => item.id === chapterId);
  if (!chapter) return;
  const adventure = adventureState();
  const values = new Set(adventure.company.completed || []);
  const enabled = !values.has(chapter.goal);
  enabled ? values.add(chapter.goal) : values.delete(chapter.goal);
  adventure.company.completed = [...values];
  saveAdventure(adventure);
  showToast(enabled ? `Chapitre ${chapter.roman} validé.` : `Validation du chapitre ${chapter.roman} retirée.`);
  renderAll();
}

function statusLabel(info) {
  if (!info.complete) return 'À faire';
  if (info.source === 'chapter') return 'Chapitre validé';
  if (info.source === 'goal') return 'Synchronisée';
  if (info.source === 'choice') return 'Choix enregistré';
  return 'Terminée';
}

function ensureCardControls(card) {
  if (card.dataset.journalReady === 'true') return;
  card.dataset.journalReady = 'true';

  const summary = card.querySelector('summary');
  const meta = document.createElement('span');
  meta.className = 'quest-summary-journal-meta';
  meta.innerHTML = '<span data-quest-scope-badge></span><span data-quest-status-badge></span>';
  summary.append(meta);

  const body = card.querySelector('.quest-body');
  const actions = document.createElement('div');
  actions.className = 'quest-journal-actions';
  actions.innerHTML = `
    <button type="button" data-quest-action="complete">○ Marquer comme terminée</button>
    <button type="button" data-quest-action="favorite">☆ Favori</button>
    <button type="button" data-quest-action="journal">✎ Journal et guides</button>
  `;
  body.append(actions);

  actions.querySelector('[data-quest-action="complete"]').addEventListener('click',() => toggleQuest(card));
  actions.querySelector('[data-quest-action="favorite"]').addEventListener('click',() => toggleFavorite(card));
  actions.querySelector('[data-quest-action="journal"]').addEventListener('click',() => openJournal(card.id));
}

function updateCard(card) {
  ensureCardControls(card);
  const journal = journalState();
  const info = completionInfo(card);
  const favorite = journal.favorites.includes(card.id);
  const hasNote = Boolean(String(journal.notes[card.id] || '').trim());
  const locked = card.dataset.spoiler === 'true' && !spoilersVisible();

  card.classList.toggle('is-complete',info.complete);
  card.classList.toggle('is-synced',info.synced);
  card.classList.toggle('is-favorite',favorite);
  card.classList.toggle('has-journal-note',hasNote);
  card.classList.toggle('is-spoiler-locked',locked);

  const scopeBadge = card.querySelector('[data-quest-scope-badge]');
  const statusBadge = card.querySelector('[data-quest-status-badge]');
  scopeBadge.textContent = card.dataset.scope === 'personal' ? 'Personnel' : 'Compagnie';
  scopeBadge.className = `quest-scope-badge ${card.dataset.scope}`;
  statusBadge.textContent = locked ? 'Spoiler masqué' : statusLabel(info);
  statusBadge.className = `quest-status-badge source-${locked ? 'spoiler' : info.source}`;

  const completeButton = card.querySelector('[data-quest-action="complete"]');
  const favoriteButton = card.querySelector('[data-quest-action="favorite"]');
  completeButton.textContent = info.complete ? '✓ Quête terminée' : '○ Marquer comme terminée';
  completeButton.classList.toggle('active',info.complete);
  favoriteButton.textContent = favorite ? '★ Retirer des favoris' : '☆ Favori';
  favoriteButton.classList.toggle('active',favorite);

  let lockNotice = card.querySelector('.quest-spoiler-lock-notice');
  if (locked && !lockNotice) {
    lockNotice = document.createElement('div');
    lockNotice.className = 'quest-spoiler-lock-notice';
    lockNotice.innerHTML = '<strong>Révélation masquée</strong><span>Active le mode spoilers pour lire cette quête.</span>';
    card.append(lockNotice);
  }
  if (lockNotice) lockNotice.hidden = !locked;
}

function matchesFilters(card) {
  const info = completionInfo(card);
  const journal = journalState();
  const query = normalize(searchInput.value);
  const chapterOk = chapterFilter.value === 'all' || card.dataset.chapter === chapterFilter.value;
  const scopeOk = scopeFilter.value === 'all' || card.dataset.scope === scopeFilter.value;
  const favoriteOk = !onlyFavorites || journal.favorites.includes(card.id);
  const noteOk = !onlyNotes || Boolean(String(journal.notes[card.id] || '').trim());
  const haystack = normalize(`${card.dataset.title} ${card.dataset.search || ''} ${card.textContent}`);
  const searchOk = !query || haystack.includes(query);

  let statusOk = true;
  if (statusFilter.value === 'todo') statusOk = !info.complete;
  if (statusFilter.value === 'done') statusOk = info.complete;
  if (statusFilter.value === 'synced') statusOk = info.synced;
  if (statusFilter.value === 'manual') statusOk = info.complete && !info.synced;

  return chapterOk && scopeOk && favoriteOk && noteOk && searchOk && statusOk;
}

function renderCards() {
  let visible = 0;
  cards.forEach(card => {
    updateCard(card);
    const show = matchesFilters(card);
    card.hidden = !show;
    if (show) visible += 1;
  });

  sections.forEach(section => {
    section.hidden = ![...section.querySelectorAll('.quest-card')].some(card => !card.hidden);
  });

  visibleCount.textContent = String(visible);
  document.getElementById('quest-results-note').classList.toggle('hidden',visible !== 0);
  filterMessage.textContent = visible === cards.length
    ? 'Toutes les quêtes du registre.'
    : `${visible} résultat(s) avec les filtres actuels.`;
}

function chapterStats(chapter) {
  const chapterCards = cards.filter(card => card.dataset.chapter === chapter.id);
  const complete = chapterCards.filter(card => completionInfo(card).complete).length;
  const validated = (adventureState().company.completed || []).includes(chapter.goal);
  return {total:chapterCards.length,complete,validated,percent:Math.round(complete / chapterCards.length * 100)};
}

function chapterCardMarkup(chapter) {
  const stats = chapterStats(chapter);
  const locked = chapter.spoiler && !spoilersVisible();
  return `
    <article class="quest-chapter-dashboard-card ${stats.validated ? 'is-validated' : ''} ${locked ? 'is-locked' : ''}" data-dashboard-chapter="${escapeHtml(chapter.id)}">
      <button class="quest-chapter-open" type="button">
        <span class="quest-chapter-number">${escapeHtml(chapter.roman)}</span>
        <div>
          <p>${escapeHtml(chapter.stage === 'early' ? 'Début' : chapter.stage === 'mid' ? 'Milieu' : 'Endgame')}</p>
          <h3>${locked ? 'Chapitre masqué' : escapeHtml(chapter.name)}</h3>
          <small>${locked ? 'Révélation protégée par le mode spoilers.' : escapeHtml(chapter.subtitle)}</small>
        </div>
      </button>
      <div class="quest-chapter-progress"><span style="width:${stats.percent}%"></span></div>
      <div class="quest-chapter-card-footer"><strong>${stats.complete} / ${stats.total}</strong><span>${stats.validated ? 'Validé dans Mon aventure' : `${stats.percent}%`}</span></div>
    </article>
  `;
}

function renderChapterDashboard() {
  chapterGrid.innerHTML = CHAPTERS.map(chapterCardMarkup).join('');
  chapterGrid.querySelectorAll('[data-dashboard-chapter]').forEach(card => {
    card.querySelector('.quest-chapter-open').addEventListener('click',() => {
      const chapterId = card.dataset.dashboardChapter;
      const chapter = CHAPTERS.find(item => item.id === chapterId);
      if (chapter.spoiler && !spoilersVisible()) {
        showToast('Active le mode spoilers pour ouvrir ce chapitre.');
        return;
      }
      chapterFilter.value = chapterId;
      renderCards();
      document.getElementById(chapterId).scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
}

function renderChapterHeadings() {
  sections.forEach(section => {
    const chapter = CHAPTERS.find(item => item.id === section.id);
    const stats = chapterStats(chapter);
    const count = section.querySelector('.quest-chapter-heading-count');
    const bar = section.querySelector('.quest-chapter-heading-progress i');
    const button = section.querySelector('[data-validate-chapter]');
    if (count) count.textContent = `${stats.complete} / ${stats.total}`;
    if (bar) bar.style.width = `${stats.percent}%`;
    if (button) {
      button.textContent = stats.validated ? '✓ Chapitre validé' : 'Valider dans Mon aventure';
      button.classList.toggle('active',stats.validated);
    }
  });
}

function renderDashboard() {
  const completed = cards.filter(card => completionInfo(card).complete);
  const personal = completed.filter(card => card.dataset.scope === 'personal').length;
  const company = completed.filter(card => card.dataset.scope === 'company').length;
  const journal = journalState();
  const notes = Object.values(journal.notes).filter(note => String(note || '').trim()).length;
  const percent = Math.round(completed.length / cards.length * 100);

  document.getElementById('quest-overall-percent').textContent = `${percent}%`;
  document.getElementById('quest-overall-count').textContent = `${completed.length} / ${cards.length} quêtes`;
  document.getElementById('quest-personal-count').textContent = String(personal);
  document.getElementById('quest-company-count').textContent = String(company);
  document.getElementById('quest-notes-count').textContent = String(notes);
  document.getElementById('quest-favorites-count').textContent = String(journal.favorites.length);

  const next = cards.find(card => !completionInfo(card).complete && !(card.dataset.spoiler === 'true' && !spoilersVisible()));
  nextQuestId = next?.id || '';
  document.getElementById('quest-next-title').textContent = next ? next.dataset.title : 'Chronique accomplie';
  document.getElementById('quest-next-detail').textContent = next
    ? `${chapterFor(next).roman} — ${chapterFor(next).name} · ${next.dataset.scope === 'personal' ? 'objectif personnel' : 'objectif de compagnie'}`
    : 'Toutes les quêtes visibles sont enregistrées comme terminées.';
  document.getElementById('quest-next-button').disabled = !next;

  const spoilerButton = document.getElementById('quest-spoiler-toggle');
  spoilerButton.textContent = spoilersVisible() ? 'Masquer les spoilers' : 'Afficher les spoilers';
  spoilerButton.classList.toggle('active',spoilersVisible());
}

function renderAll() {
  renderCards();
  renderChapterDashboard();
  renderChapterHeadings();
  renderDashboard();
}

function linksForCard(card) {
  const chapter = chapterFor(card);
  const links = [...chapter.links,...(SPECIFIC_LINKS[card.id] || [])];
  const unique = new Map();
  links.forEach(link => unique.set(link.href,link));
  return [...unique.values()];
}

function endingMarkup(card) {
  if (!['ending-choice','ending-sealed','ending-opened'].includes(card.dataset.special)) return '';
  const ending = adventureState().company.ending || '';
  return `
    <section class="quest-journal-section quest-ending-choice">
      <p class="page-kicker">Décision irréversible en jeu</p>
      <h3>Choix du Septième Miracle</h3>
      <select id="quest-ending-select">
        <option value="" ${!ending ? 'selected' : ''}>Non décidé</option>
        <option value="sealed" ${ending === 'sealed' ? 'selected' : ''}>Sceller le ciel</option>
        <option value="opened" ${ending === 'opened' ? 'selected' : ''}>Rouvrir le ciel</option>
      </select>
      <p>Ce réglage organise le wiki. La décision réelle reste appliquée dans Minecraft avec la commande prévue.</p>
    </section>
  `;
}

function openJournal(id) {
  const card = cards.find(item => item.id === id);
  if (!card) return;
  if (card.dataset.spoiler === 'true' && !spoilersVisible()) {
    showToast('Active le mode spoilers pour ouvrir cette entrée.');
    return;
  }

  activeJournalQuestId = id;
  const chapter = chapterFor(card);
  const journal = journalState();
  const note = journal.notes[id] || '';
  const chapterNote = journal.chapterNotes[chapter.id] || '';
  const objective = card.querySelector('.quest-columns')?.innerHTML || '';
  const links = linksForCard(card);
  const info = completionInfo(card);

  drawerContent.innerHTML = `
    <div class="quest-journal-drawer-hero">
      <span>${escapeHtml(String(card.dataset.order).padStart(2,'0'))}</span>
      <div><p class="page-kicker">Chapitre ${escapeHtml(chapter.roman)} — ${escapeHtml(chapter.name)}</p><h2 id="quest-journal-title">${escapeHtml(card.dataset.title)}</h2><div class="chips"><span class="tag">${card.dataset.scope === 'personal' ? 'Personnel' : 'Compagnie'}</span><span class="tag">${escapeHtml(statusLabel(info))}</span></div></div>
    </div>

    <section class="quest-journal-section">
      <h3>Objectifs et récompenses</h3>
      <div class="quest-journal-objectives">${objective}</div>
    </section>

    ${endingMarkup(card)}

    <section class="quest-journal-section">
      <div class="quest-journal-note-heading"><div><p class="page-kicker">Souvenir personnel</p><h3>Note de cette quête</h3></div><span id="quest-note-status">Sauvegarde automatique</span></div>
      <textarea id="quest-note-input" maxlength="2000" placeholder="Stratégie, coordonnées, personnes présentes, événement marquant…">${escapeHtml(note)}</textarea>
    </section>

    <section class="quest-journal-section">
      <div class="quest-journal-note-heading"><div><p class="page-kicker">Mémoire collective</p><h3>Note du chapitre</h3></div></div>
      <textarea id="quest-chapter-note-input" maxlength="2000" placeholder="Décisions prises par la compagnie pendant ce chapitre…">${escapeHtml(chapterNote)}</textarea>
    </section>

    <section class="quest-journal-section">
      <h3>Guides associés</h3>
      <div class="quest-guide-links">${links.map(link => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)} →</a>`).join('')}</div>
    </section>

    <div class="quest-journal-drawer-actions">
      <button class="button secondary" id="quest-copy-entry" type="button">Copier l’entrée</button>
      <button class="button" id="quest-drawer-complete" type="button">${info.complete ? '✓ Quête terminée' : 'Marquer comme terminée'}</button>
    </div>
  `;

  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  drawerBackdrop.hidden = false;
  document.body.classList.add('quest-journal-open');

  const noteInput = document.getElementById('quest-note-input');
  const chapterInput = document.getElementById('quest-chapter-note-input');
  let timer = 0;
  const persistNotes = () => {
    const next = journalState();
    next.notes[id] = noteInput.value;
    next.chapterNotes[chapter.id] = chapterInput.value;
    saveJournal(next);
    document.getElementById('quest-note-status').textContent = 'Sauvegardé';
    clearTimeout(timer);
    timer = setTimeout(() => {
      const status = document.getElementById('quest-note-status');
      if (status) status.textContent = 'Sauvegarde automatique';
    },1200);
    renderAll();
  };
  noteInput.addEventListener('input',persistNotes);
  chapterInput.addEventListener('input',persistNotes);

  document.getElementById('quest-drawer-complete').addEventListener('click',() => {
    toggleQuest(card);
    openJournal(id);
  });

  document.getElementById('quest-copy-entry').addEventListener('click',async() => {
    const text = [
      `ASCENSION — ${card.dataset.title}`,
      `Chapitre ${chapter.roman} — ${chapter.name}`,
      `État : ${statusLabel(completionInfo(card))}`,
      '',
      `Note : ${noteInput.value || 'Aucune note'}`,
      `Note du chapitre : ${chapterInput.value || 'Aucune note'}`
    ].join('\n');
    try {
      await navigator.clipboard.writeText(text);
      showToast('Entrée du journal copiée.');
    } catch (error) {
      console.warn(error);
      showToast('Copie impossible dans ce navigateur.');
    }
  });

  const endingSelect = document.getElementById('quest-ending-select');
  endingSelect?.addEventListener('change',() => {
    const adventure = adventureState();
    adventure.company.ending = endingSelect.value;
    saveAdventure(adventure);
    showToast(endingSelect.value ? 'Fin enregistrée dans Mon aventure.' : 'Choix final retiré.');
    renderAll();
    openJournal(id);
  });
}

function closeJournal() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  drawerBackdrop.hidden = true;
  document.body.classList.remove('quest-journal-open');
  activeJournalQuestId = '';
}

function toggleSpoilers() {
  const adventure = adventureState();
  const journal = journalState();
  const visible = spoilersVisible();
  adventure.profile.spoilers = !visible;
  journal.revealedSpoilers = !visible;
  saveAdventure(adventure);
  saveJournal(journal);
  showToast(!visible ? 'Chapitres secrets révélés.' : 'Chapitres secrets masqués.');
  renderAll();
}

function resetFilters() {
  searchInput.value = '';
  chapterFilter.value = 'all';
  statusFilter.value = 'all';
  scopeFilter.value = 'all';
  onlyFavorites = false;
  onlyNotes = false;
  favoritesFilter.classList.remove('active');
  notesFilter.classList.remove('active');
  renderCards();
}

function exportJournal() {
  const payload = {
    ...journalState(),
    schema:JOURNAL_SCHEMA,
    version:JOURNAL_VERSION,
    adventureSnapshot:{
      className:adventureState().profile.className,
      companyName:adventureState().company.name,
      ending:adventureState().company.ending
    },
    exportedAt:new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'ascension-journal-quetes.json';
  anchor.click();
  URL.revokeObjectURL(url);
  showToast('Journal des quêtes exporté.');
}

async function importJournal(file) {
  if (!file) return;
  try {
    const raw = JSON.parse(await file.text());
    if (raw.schema !== JOURNAL_SCHEMA) throw new Error('schema');
    const current = journalState();
    const merged = {
      ...current,
      completed:[...new Set([...current.completed,...(raw.completed || [])])],
      favorites:[...new Set([...current.favorites,...(raw.favorites || [])])],
      notes:{...current.notes,...(raw.notes || {})},
      chapterNotes:{...current.chapterNotes,...(raw.chapterNotes || {})},
      revealedSpoilers:Boolean(current.revealedSpoilers || raw.revealedSpoilers)
    };
    saveJournal(merged);
    renderAll();
    showToast('Journal importé et fusionné.');
  } catch (error) {
    console.warn(error);
    showToast('Ce fichier de journal est invalide.');
  }
}

cards.forEach(ensureCardControls);
root.querySelectorAll('[data-validate-chapter]').forEach(button => {
  button.addEventListener('click',() => toggleChapter(button.dataset.validateChapter));
});

[searchInput,chapterFilter,statusFilter,scopeFilter].forEach(input => {
  input.addEventListener(input === searchInput ? 'input' : 'change',renderCards);
});
favoritesFilter.addEventListener('click',() => {
  onlyFavorites = !onlyFavorites;
  favoritesFilter.classList.toggle('active',onlyFavorites);
  renderCards();
});
notesFilter.addEventListener('click',() => {
  onlyNotes = !onlyNotes;
  notesFilter.classList.toggle('active',onlyNotes);
  renderCards();
});
document.getElementById('quest-reset-filters').addEventListener('click',resetFilters);
document.getElementById('quest-next-button').addEventListener('click',() => {
  const card = cards.find(item => item.id === nextQuestId);
  if (!card) return;
  chapterFilter.value = card.dataset.chapter;
  statusFilter.value = 'all';
  renderCards();
  card.open = true;
  card.scrollIntoView({behavior:'smooth',block:'center'});
});
document.getElementById('quest-spoiler-toggle').addEventListener('click',toggleSpoilers);
document.getElementById('quest-export-journal').addEventListener('click',exportJournal);
document.getElementById('quest-import-journal').addEventListener('change',event => {
  importJournal(event.target.files?.[0]);
  event.target.value = '';
});
document.getElementById('quest-journal-close').addEventListener('click',closeJournal);
drawerBackdrop.addEventListener('click',closeJournal);
document.addEventListener('keydown',event => {if (event.key === 'Escape') closeJournal();});

renderAll();
})();
