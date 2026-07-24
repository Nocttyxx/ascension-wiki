
(() => {
  'use strict';

  const root = document.querySelector('[data-adventure-root]');
  if (!root) return;

  const STORAGE_KEY = 'ascension.adventure.v4';
  const VERSION = 1;

  const goalInputs = [...root.querySelectorAll('[data-goal]')];
  const classInputs = [...root.querySelectorAll('input[name="adventure-class"]')];
  const endingInputs = [...root.querySelectorAll('input[name="adventure-ending"]')];
  const companyName = document.getElementById('company-name');
  const spoilerToggle = document.getElementById('spoiler-toggle');
  const spoilerLock = root.querySelector('[data-spoiler-lock]');
  const spoilerContent = root.querySelector('[data-spoiler-content]');
  const saveStatus = document.getElementById('save-status');
  const toast = document.getElementById('adventure-toast');

  const progressPercent = document.getElementById('progress-percent');
  const heroProgress = document.getElementById('hero-progress');
  const progressBar = document.getElementById('progress-bar');
  const progressCompleted = document.getElementById('progress-completed');
  const chapterCount = document.getElementById('chapter-count');
  const proofCount = document.getElementById('proof-count');
  const trialCount = document.getElementById('trial-count');
  const progressTitle = document.getElementById('progress-title');
  const nextTitle = document.getElementById('next-objective');
  const nextDetail = document.getElementById('next-objective-detail');
  const nextLink = document.getElementById('next-objective-link');

  const nextObjectiveOrder = [
    { type: 'class', title: 'Choisir une classe', detail: 'Définis ton rôle dans la compagnie avant de poursuivre.', href: 'classes.html' },
    ...[
      ['chapter-1', 'Terminer le chapitre I', 'Survis au réveil du Voile et fonde ta compagnie.', 'quests.html#prologue'],
      ['chapter-2', 'Explorer le monde brisé', 'Cartographie les environs et établis des routes sûres.', 'quests.html#exploration'],
      ['chapter-3', 'Commencer la chasse', 'Prépare ton équipement pour les premières rencontres majeures.', 'quests.html#boss_hunt'],
      ['chapter-4', 'Franchir l’Ascension', 'Débloque les premiers verrous de puissance.', 'quests.html#ascension'],
      ['chapter-5', 'Choisir ton destin', 'Confirme une classe et organise la compagnie.', 'quests.html#guildes_destins'],
      ['expedition-nether', 'Sécuriser le Nether', 'Ouvre une route durable vers les structures expertes.', 'systems.html'],
      ['expedition-twilight', 'Entrer dans la Forêt du Crépuscule', 'Commence la route des trophées.', 'bosses.html'],
      ['proof-naga', 'Obtenir la preuve de la Naga', 'Vaincs la Naga avec les joueurs proches.', 'bosses.html'],
      ['boss-lich', 'Vaincre la Liche', 'Poursuis la progression du Crépuscule.', 'bosses.html'],
      ['boss-minoshroom', 'Vaincre le Minoshroom', 'Traverse le labyrinthe et récupère son trophée.', 'bosses.html'],
      ['boss-hydra', 'Vaincre l’Hydre', 'Prépare résistance au feu et mobilité.', 'bosses.html'],
      ['boss-knight-phantom', 'Vaincre les Chevaliers fantômes', 'Termine la rencontre des cryptes.', 'bosses.html'],
      ['boss-ur-ghast', 'Vaincre l’Ur-Ghast', 'Atteins le sommet de la tour sombre.', 'bosses.html'],
      ['boss-alpha-yeti', 'Vaincre l’Alpha Yeti', 'Domine les terres enneigées.', 'bosses.html'],
      ['boss-snow-queen', 'Vaincre la Reine des Neiges', 'Achève la route glacée.', 'bosses.html'],
      ['expedition-aquamirae', 'Explorer les océans gelés', 'Prépare respiration et résistance au froid.', 'bestiary.html'],
      ['expedition-stalwart', 'Trouver une forteresse Stalwart', 'Explore de nouveaux chunks du Nether.', 'systems.html'],
      ['proof-mowzie', 'Obtenir la preuve de Mowzie', 'Vaincs un gardien reconnu de Mowzie’s Mobs.', 'bosses.html'],
      ['proof-cataclysm', 'Obtenir la preuve Cataclysm', 'Un seul boss reconnu suffit.', 'bosses.html'],
      ['expedition-end', 'Atteindre l’End', 'Prépare l’assaut contre le Dragon.', 'progression.html'],
      ['proof-dragon', 'Obtenir le Sceau du Dragon', 'Vaincs le Dragon avec ta compagnie.', 'bosses.html'],
      ['chapter-6', 'Survivre aux Cieux Rouges', 'Lis les présages et affronte les événements célestes.', 'quests.html#cieux_rouges'],
      ['chapter-7', 'Compléter le Registre', 'Réunis les quatre preuves automatiques.', 'quests.html#registre_verifie'],
      ['chapter-8', 'Ouvrir les Archives Interdites', 'Comprends la guerre oubliée.', 'quests.html#archives_interdites'],
      ['trial-braise', 'Accomplir l’Épreuve de la Braise', 'Obtiens le premier sceau.', 'quests.html#epreuves_miracles'],
      ['trial-gardien', 'Accomplir l’Épreuve du Gardien', 'Obtiens le sceau du Gardien.', 'quests.html#epreuves_miracles'],
      ['trial-horizon', 'Accomplir l’Épreuve de l’Horizon', 'Obtiens le sceau de l’Horizon.', 'quests.html#epreuves_miracles'],
      ['trial-memoire', 'Accomplir l’Épreuve de la Mémoire', 'Obtiens le sceau de la Mémoire.', 'quests.html#epreuves_miracles'],
      ['trial-rempart', 'Accomplir l’Épreuve du Rempart', 'Obtiens le sceau du Rempart.', 'quests.html#epreuves_miracles'],
      ['trial-volonte', 'Accomplir l’Épreuve de la Volonté', 'Réunis les six sceaux.', 'quests.html#epreuves_miracles'],
      ['chapter-9', 'Terminer les Six Épreuves', 'Porte les six responsabilités du Septième.', 'quests.html#epreuves_miracles'],
      ['boss-vaelorn', 'Vaincre Vaelorn', 'Rassemble la compagnie dans le rayon coopératif.', 'quests.html#roi_de_cendres'],
      ['chapter-10', 'Terminer le Roi de Cendres', 'Atteins la conclusion irréversible.', 'quests.html#roi_de_cendres'],
    ].map(([id, title, detail, href]) => ({ type: 'goal', id, title, detail, href })),
    { type: 'ending', title: 'Choisir le destin du ciel', detail: 'Active le mode spoilers et enregistre la conclusion choisie.', href: '#adventure-ending' },
  ];

  const defaultState = () => ({
    version: VERSION,
    companyName: '',
    className: '',
    ending: '',
    spoilers: false,
    completed: [],
    updatedAt: new Date().toISOString(),
  });

  function sanitizeState(candidate) {
    const validGoalIds = new Set(goalInputs.map(input => input.dataset.goal));
    const validClasses = new Set(classInputs.map(input => input.value));
    const validEndings = new Set(endingInputs.map(input => input.value));

    const state = defaultState();
    if (!candidate || typeof candidate !== 'object') return state;

    state.companyName = typeof candidate.companyName === 'string'
      ? candidate.companyName.slice(0, 40)
      : '';
    state.className = validClasses.has(candidate.className) ? candidate.className : '';
    state.ending = validEndings.has(candidate.ending) ? candidate.ending : '';
    state.spoilers = Boolean(candidate.spoilers);
    state.completed = Array.isArray(candidate.completed)
      ? [...new Set(candidate.completed.filter(id => validGoalIds.has(id)))]
      : [];
    state.updatedAt = typeof candidate.updatedAt === 'string'
      ? candidate.updatedAt
      : new Date().toISOString();

    return state;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? sanitizeState(JSON.parse(raw)) : defaultState();
    } catch (error) {
      console.warn('ASCENSION: sauvegarde illisible.', error);
      return defaultState();
    }
  }

  let state = loadState();

  function saveState(message = 'Progression sauvegardée.') {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      saveStatus.textContent = message;
      saveStatus.classList.add('saved');
      window.setTimeout(() => saveStatus.classList.remove('saved'), 900);
    } catch (error) {
      saveStatus.textContent = 'Impossible d’enregistrer dans ce navigateur.';
      console.error(error);
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('visible'), 2400);
  }

  function applyStateToControls() {
    companyName.value = state.companyName;
    spoilerToggle.checked = state.spoilers;

    goalInputs.forEach(input => {
      input.checked = state.completed.includes(input.dataset.goal);
    });
    classInputs.forEach(input => {
      input.checked = input.value === state.className;
    });
    endingInputs.forEach(input => {
      input.checked = input.value === state.ending;
    });

    updateSpoilerView();
    updateDashboard();
  }

  function syncStateFromControls() {
    state.companyName = companyName.value.trim();
    state.className = classInputs.find(input => input.checked)?.value || '';
    state.ending = endingInputs.find(input => input.checked)?.value || '';
    state.spoilers = spoilerToggle.checked;
    state.completed = goalInputs
      .filter(input => input.checked)
      .map(input => input.dataset.goal);

    saveState();
    updateSpoilerView();
    updateDashboard();
  }

  function updateSpoilerView() {
    const show = Boolean(state.spoilers);
    spoilerLock.hidden = show;
    spoilerContent.hidden = !show;
    document.body.classList.toggle('spoilers-enabled', show);
  }

  function countPrefix(prefix) {
    const total = goalInputs.filter(input => input.dataset.goal.startsWith(prefix)).length;
    const completed = state.completed.filter(id => id.startsWith(prefix)).length;
    return { completed, total };
  }

  function updateDashboard() {
    const totalGoals = goalInputs.length + 1; // La fin choisie compte pour un jalon.
    const completedGoals = state.completed.length + (state.ending ? 1 : 0);
    const percent = Math.round((completedGoals / totalGoals) * 100);

    progressPercent.textContent = `${percent}%`;
    heroProgress.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    progressCompleted.textContent = `${completedGoals}/${totalGoals}`;

    const chapters = countPrefix('chapter-');
    const proofs = countPrefix('proof-');
    const trials = countPrefix('trial-');

    chapterCount.textContent = `${chapters.completed}/${chapters.total}`;
    proofCount.textContent = `${proofs.completed}/${proofs.total}`;
    trialCount.textContent = `${trials.completed}/${trials.total}`;

    if (percent === 0) progressTitle.textContent = 'Le voyage commence';
    else if (percent < 25) progressTitle.textContent = 'Les premières braises';
    else if (percent < 50) progressTitle.textContent = 'La compagnie s’élève';
    else if (percent < 75) progressTitle.textContent = 'Le Voile se fissure';
    else if (percent < 100) progressTitle.textContent = 'Aux portes du Dernier Miracle';
    else progressTitle.textContent = 'Ascension accomplie';

    document.documentElement.style.setProperty('--adventure-progress', `${percent}%`);

    updateNextObjective();
  }

  function updateNextObjective() {
    let objective = null;

    for (const item of nextObjectiveOrder) {
      if (item.type === 'class' && !state.className) {
        objective = item;
        break;
      }
      if (item.type === 'goal' && !state.completed.includes(item.id)) {
        objective = item;
        break;
      }
      if (item.type === 'ending' && !state.ending) {
        objective = item;
        break;
      }
    }

    if (!objective) {
      nextTitle.textContent = 'Ascension accomplie';
      nextDetail.textContent = 'Tous les jalons ont été enregistrés. Le dernier Miracle porte désormais ton histoire.';
      nextLink.textContent = 'Relire le lore';
      nextLink.href = 'lore.html';
      return;
    }

    nextTitle.textContent = objective.title;
    nextDetail.textContent = objective.detail;
    nextLink.textContent = 'Ouvrir le guide';
    nextLink.href = objective.href;
  }

  function exportState() {
    const payload = {
      ...state,
      version: VERSION,
      exportedAt: new Date().toISOString(),
      application: 'ASCENSION Wiki — Mon aventure',
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    const safeCompany = (state.companyName || 'compagnie')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase();
    anchor.href = url;
    anchor.download = `ascension-${safeCompany || 'aventure'}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showToast('Progression exportée.');
  }

  async function importState(file) {
    if (!file) return;
    try {
      const imported = JSON.parse(await file.text());
      state = sanitizeState(imported);
      saveState('Progression importée.');
      applyStateToControls();
      showToast('Progression importée avec succès.');
    } catch (error) {
      console.error(error);
      showToast('Ce fichier de progression est invalide.');
    }
  }

  goalInputs.forEach(input => input.addEventListener('change', syncStateFromControls));
  classInputs.forEach(input => input.addEventListener('change', syncStateFromControls));
  endingInputs.forEach(input => input.addEventListener('change', syncStateFromControls));
  companyName.addEventListener('input', syncStateFromControls);
  spoilerToggle.addEventListener('change', syncStateFromControls);

  document.getElementById('export-adventure').addEventListener('click', exportState);
  document.getElementById('import-adventure').addEventListener('change', event => {
    importState(event.target.files?.[0]);
    event.target.value = '';
  });
  document.getElementById('reset-adventure').addEventListener('click', () => {
    if (!window.confirm('Effacer toute la progression enregistrée dans ce navigateur ?')) return;
    state = defaultState();
    saveState('Progression réinitialisée.');
    applyStateToControls();
    showToast('La campagne a été réinitialisée.');
  });

  applyStateToControls();
})();
