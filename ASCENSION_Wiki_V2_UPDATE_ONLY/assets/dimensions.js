(() => {
'use strict';

const root = document.querySelector('[data-dimensions]');
if (!root) return;

const ROUTES = [{"id":"overworld","name":"Le Monde brisé","subtitle":"Terralith, structures et premières routes","icon":"assets/dimension_icons/overworld.svg","stage":"early","difficulty":"Progressive","group":"1–4 joueurs","summary":"La base de toute la campagne : installer la compagnie, cartographier les biomes, relier les Waystones et apprendre à reconnaître les grandes structures.","goal":"company-chapter-2","arsenal":"first-dungeons","color":"gold","warnings":["Ne transforme pas la première base en dépôt unique.","Pose des marqueurs compréhensibles par toute la compagnie.","Les structures de When Dungeons Arise peuvent dépasser le niveau du groupe."],"items":["Cartes Xaero","Nature’s Compass","Explorer’s Compass","Backpack organisé","Waystone de repli"],"steps":[{"id":"camp","name":"Camp des survivants","place":"Point d’apparition et première base","task":"Créer un abri, une réserve commune et un point de rassemblement.","goal":"company-chapter-1"},{"id":"map","name":"Mémoire du monde","place":"Rayon proche de la base","task":"Créer les premiers marqueurs : base, village, minerai et danger."},{"id":"waystone","name":"Premier relais","place":"Route principale","task":"Activer une Waystone et définir un nom partagé."},{"id":"dungeon","name":"Première grande structure","place":"Structure YUNG ou When Dungeons Arise","task":"Sécuriser l’entrée, définir le repli et tester Lootr."},{"id":"hunting","name":"Route des gardiens","place":"Biomes de Mowzie et structures de Cataclysm","task":"Repérer les futures rencontres sans les engager trop tôt.","goal":"company-chapter-3"}]},{"id":"deep-dark","name":"Les Profondeurs silencieuses","subtitle":"Ancient City et territoire du Warden","icon":"assets/dimension_icons/deep-dark.svg","stage":"mid","difficulty":"Extrême","group":"2–4 joueurs","summary":"Une expédition où le véritable objectif est souvent de ressortir vivant avec les ressources et les informations, pas de vaincre le Warden.","goal":"","arsenal":"first-dungeons","color":"blue","warnings":["Le Warden n’est pas un boss de progression obligatoire.","La laine et les distractions comptent davantage que les dégâts.","Prépare le chemin de sortie avant d’ouvrir les coffres."],"items":["Laine","Vision nocturne","Projectiles de diversion","Carte Xaero","Équipement de récupération Corpse"],"steps":[{"id":"entrance","name":"Entrée balisée","place":"Accès au Deep Dark","task":"Créer un marqueur et une réserve de laine hors de la zone des capteurs."},{"id":"safe-lane","name":"Couloir silencieux","place":"Bord de l’Ancient City","task":"Tracer un trajet avec laine et éviter les mouvements inutiles."},{"id":"archive","name":"Archives sculk","place":"Structures centrales","task":"Récupérer le butin sans déclencher plusieurs hurleurs."},{"id":"warden","name":"Rupture de contact","place":"Zone d’apparition du Warden","task":"Utiliser une diversion puis quitter la zone au lieu de chercher le duel."}]},{"id":"frozen","name":"Les Mers gelées","subtitle":"Aquamirae, monuments et Ice Maze","icon":"assets/dimension_icons/frozen.svg","stage":"mid","difficulty":"Élevée","group":"2–4 joueurs","summary":"Une route aquatique où la respiration, la visibilité et la récupération sont aussi importantes que l’armure.","goal":"personal-expedition-aquamirae","arsenal":"aquamirae","color":"ice","warnings":["Ne descends jamais sans route vers l’air.","Garde une potion de secours séparée du sac principal.","Nettoie les ennemis secondaires avant la rencontre majeure."],"items":["Respiration aquatique","Vision nocturne","Ensemble aquatique","Backpack de secours","Waystone côtière"],"steps":[{"id":"coast","name":"Relais côtier","place":"Côte proche des océans gelés","task":"Créer une Waystone, un coffre de secours et une embarcation."},{"id":"monument","name":"Monument océanique","place":"Océan profond","task":"Préparer lait, respiration et obstacles pour le Grand gardien."},{"id":"ship","name":"Navire spectral","place":"Zone d’Aquamirae","task":"Sécuriser le pont et affronter la Capitaine Cornelia."},{"id":"maze","name":"Ice Maze","place":"Structure majeure d’Aquamirae","task":"Balisage, respiration et nettoyage méthodique."},{"id":"mother","name":"Maze Mother","place":"Cœur du labyrinthe","task":"Répartir boss, renforts et surveillance de l’oxygène."}]},{"id":"twilight","name":"Le Royaume du Crépuscule","subtitle":"La route linéaire des trophées","icon":"assets/dimension_icons/twilight.svg","stage":"mid","difficulty":"Élevée","group":"2–4 joueurs","summary":"La dimension la plus structurée du modpack. Chaque trophée ouvre la route vers le suivant : respecter l’ordre évite les blocages et les détours inutiles.","goal":"personal-expedition-twilight","arsenal":"twilight-route","color":"violet","warnings":["Respecte l’ordre des trophées.","Place une Waystone à chaque grande transition.","Ne sépare pas la compagnie dans les labyrinthes et les tours."],"items":["Armure diamant enchantée","Arc","Soins et régénération","Carte Xaero","Waystones"],"steps":[{"id":"portal","name":"Portail du Crépuscule","place":"Base ou zone sécurisée","task":"Construire le portail et créer un relais de retour."},{"id":"naga","name":"Cour de la Nâga","place":"Naga Courtyard","task":"Obtenir le premier trophée et la preuve collective.","goal":"company-proof-naga"},{"id":"lich","name":"Tour de la Liche","place":"Lich Tower","task":"Renvoi des projectiles, clones puis duel final.","goal":"company-boss-lich"},{"id":"labyrinth","name":"Labyrinthe du Minoshroom","place":"Labyrinth","task":"Sécuriser les couloirs puis vaincre le Minoshroom.","goal":"company-boss-minoshroom"},{"id":"hydra","name":"Repaire de l’Hydre","place":"Fire Swamp","task":"Préparer Résistance au feu et espacer les joueurs.","goal":"company-boss-hydra"},{"id":"phantoms","name":"Crypte des Chevaliers","place":"Knight Stronghold","task":"Concentrer les dégâts sur une cible et annoncer les charges.","goal":"company-boss-knight-phantom"},{"id":"urghast","name":"Tour sombre","place":"Dark Tower","task":"Utiliser les mécanismes de la tour et gérer les Ghastlings.","goal":"company-boss-ur-ghast"},{"id":"yeti","name":"Antre de l’Alpha Yeti","place":"Snowy Forest","task":"Éviter le corps-à-corps prolongé.","goal":"company-boss-alpha-yeti"},{"id":"queen","name":"Palais de la Reine","place":"Aurora Palace","task":"Gérer cristaux, charges et plongeons.","goal":"company-boss-snow-queen"}]},{"id":"nether","name":"Les Forteresses du Nether","subtitle":"Stalwart, feu et premiers Cataclysmes","icon":"assets/dimension_icons/nether.svg","stage":"mid","difficulty":"Extrême","group":"3–4 joueurs","summary":"Un réseau d’expéditions où la lave, les couloirs et les renforts transforment chaque erreur de placement en catastrophe.","goal":"personal-expedition-nether","arsenal":"nether-fire","color":"red","warnings":["Résistance au feu avant l’entrée, pas après le premier dégât.","Ne place pas la Waystone directement dans une salle hostile.","Nettoie les couloirs avant d’ouvrir la salle du boss."],"items":["Résistance au feu","Armure diamant ou Netherite","Soins instantanés","Blocs résistants","Waystone de repli"],"steps":[{"id":"portal","name":"Bastion du portail","place":"Sortie du portail du Nether","task":"Construire un abri, un coffre et une route balisée."},{"id":"fortress","name":"Forteresse et ressources","place":"Forteresse du Nether","task":"Sécuriser les ingrédients et les routes de potions."},{"id":"stalwart","name":"Donjons Stalwart","place":"Structures du Nether","task":"Nettoyer les accès et définir un point de repli.","goal":"personal-expedition-stalwart"},{"id":"cerberus","name":"Territoire du Cerbère","place":"Rencontre de difficulté progressive","task":"Éloigner le combat de la lave et lire les charges."},{"id":"monstrosity","name":"Forge de la Monstrosité","place":"Structure dédiée de Cataclysm","task":"Empêcher la régénération par la lave et punir les impacts."},{"id":"ignis","name":"Arène d’Ignis","place":"Endgame du Nether","task":"Gérer bouclier, combos et zones de feu."}]},{"id":"end","name":"L’Au-delà fracturé","subtitle":"Dragon, Stalwart et structures de l’End","icon":"assets/dimension_icons/end.svg","stage":"end","difficulty":"Extrême","group":"3–5 joueurs","summary":"La dimension des chutes, des distances et des combats prolongés. Chaque route doit comporter un retour, des blocs et une solution contre le vide.","goal":"personal-expedition-end","arsenal":"cataclysm","color":"void","warnings":["Chute lente et perles dans plusieurs inventaires.","Ne construis pas un seul pont sans protection latérale.","Place les ressources de récupération avant les îles éloignées."],"items":["Chute lente","Arc puissant","Blocs et perles","Armure endgame","Équipement de récupération"],"steps":[{"id":"dragon","name":"Île du Dragon","place":"Centre de l’End","task":"Détruire les cristaux, survivre aux charges et obtenir la preuve.","goal":"company-proof-dragon"},{"id":"gateway","name":"Passerelle extérieure","place":"Portail de l’End extérieur","task":"Créer un point de retour et un coffre secondaire."},{"id":"city","name":"Cités de l’End","place":"Îles extérieures","task":"Sécuriser les ponts et marquer les navires."},{"id":"stalwart","name":"Forteresses Stalwart","place":"Structures de l’End","task":"Contrôler les projectiles et le vide.","goal":"personal-expedition-stalwart"},{"id":"guardian","name":"Ender Guardian","place":"Structure dédiée de Cataclysm","task":"Éviter les bords, runes et téléportations."},{"id":"harbinger","name":"The Harbinger","place":"Structure technologique de Cataclysm","task":"Courir en courbe pendant les missiles et le bombardement."}]},{"id":"citadel","name":"La Route de la Citadelle","subtitle":"Le chapitre final et le Roi de Cendres","icon":"assets/dimension_icons/citadel.svg","stage":"end","difficulty":"Ultime","group":"Compagnie complète","summary":"Le dernier itinéraire d’ASCENSION. Il doit être préparé comme une opération collective : progression vérifiée, équipement final et décision commune.","goal":"company-chapter-10","arsenal":"vaelorn","color":"ash","spoiler":true,"warnings":["Le choix final est irréversible.","Vérifie l’export de progression avant et après la rencontre.","Aucun joueur ne doit lancer le rituel sans l’accord du groupe."],"items":["Arme de Miracle","Armure endgame","Soins et régénération","Seconde chance","Communication vocale"],"steps":[{"id":"trials","name":"Convergence des Six","place":"Fin du chapitre IX","task":"Vérifier les six responsabilités et l’Éclat du Septième Miracle.","goal":"company-chapter-9"},{"id":"road","name":"Route de la Citadelle","place":"Accès final de la campagne","task":"Rassembler la compagnie, les ressources et les preuves."},{"id":"ritual","name":"Rituel des Cendres","place":"Seuil de Vaelorn","task":"Confirmer les rôles, le rayon coopératif et la voie de repli."},{"id":"vaelorn","name":"Vaelorn, Roi de Cendres","place":"Citadelle Noire","task":"Survivre aux phases et obtenir la preuve coopérative.","goal":"company-boss-vaelorn"},{"id":"ending","name":"Le Dernier choix","place":"Après la victoire","task":"Décider collectivement de la fin irréversible."}]}];
const STAGE_LABELS = {"early":"Début","mid":"Milieu","end":"Endgame"};
const STORAGE_KEY = 'ascension.dimensions.v1';
const ADVENTURE_KEY = 'ascension.adventure.hybrid.v2';

const grid = document.getElementById('dimension-grid');
const mapTrack = document.getElementById('dimension-map-track');
const searchInput = document.getElementById('dimension-search-input');
const stageButtons = [...document.querySelectorAll('[data-stage]')];
const onlyIncompleteInput = document.getElementById('dimension-only-incomplete');
const visibleCount = document.getElementById('dimension-visible-count');
const emptyState = document.getElementById('dimension-empty');
const globalPercent = document.getElementById('dimension-global-percent');
const globalCount = document.getElementById('dimension-global-count');
const drawer = document.getElementById('dimension-drawer');
const drawerBackdrop = document.getElementById('dimension-drawer-backdrop');
const drawerContent = document.getElementById('dimension-drawer-content');
const toast = document.getElementById('dimension-toast');

let activeStage = 'all';
let activeRouteId = '';

function safeParse(key,fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(error);
    return fallback;
  }
}

function state() {
  return safeParse(STORAGE_KEY,{completed:[],waypoints:{},notes:{}});
}

function saveState(next) {
  localStorage.setItem(STORAGE_KEY,JSON.stringify(next));
}

function adventureState() {
  return safeParse(ADVENTURE_KEY,{
    profile:{spoilers:false},personal:{completed:[]},company:{completed:[]}
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
    .replaceAll('"','&quot;').replaceAll("'",'&#039;');
}

function normalize(value) {
  return String(value || '').normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'').toLowerCase();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'),2300);
}

function completedGoals() {
  const adventure = adventureState();
  return new Set([
    ...(adventure.personal?.completed || []),
    ...(adventure.company?.completed || [])
  ]);
}

function stepKey(routeId,stepId) {
  return `${routeId}:${stepId}`;
}

function isStepComplete(route,step) {
  const local = state().completed.includes(stepKey(route.id,step.id));
  const imported = step.goal && completedGoals().has(step.goal);
  return Boolean(local || imported);
}

function routeProgress(route) {
  const complete = route.steps.filter(step => isStepComplete(route,step)).length;
  const importedRoute = route.goal && completedGoals().has(route.goal);
  return {
    complete: importedRoute ? route.steps.length : complete,
    total:route.steps.length,
    percent: importedRoute ? 100 : Math.round(complete / route.steps.length * 100)
  };
}

function spoilersEnabled() {
  return Boolean(adventureState().profile?.spoilers);
}

function routeLocked(route) {
  return Boolean(route.spoiler && !spoilersEnabled());
}

function routeStatus(route) {
  const progress = routeProgress(route);
  if (routeLocked(route)) return '<span class="dimension-status locked">Spoiler masqué</span>';
  if (progress.percent === 100) return '<span class="dimension-status complete">Route terminée</span>';
  if (progress.complete > 0) return '<span class="dimension-status active">En cours</span>';
  return '<span class="dimension-status new">À explorer</span>';
}

function cardMarkup(route) {
  const progress = routeProgress(route);
  const locked = routeLocked(route);
  return `
    <article class="dimension-card color-${escapeHtml(route.color)} ${progress.percent === 100 ? 'is-complete' : ''} ${locked ? 'is-locked' : ''}" data-route-id="${escapeHtml(route.id)}">
      <button type="button" class="dimension-card-open">
        <div class="dimension-card-visual">
          <img src="${escapeHtml(route.icon)}" alt="">
          <span>${escapeHtml(STAGE_LABELS[route.stage])}</span>
          ${locked ? '<b>◆</b>' : ''}
        </div>
        <div class="dimension-card-body">
          <p>${escapeHtml(route.subtitle)}</p>
          <h2>${locked ? 'Route finale masquée' : escapeHtml(route.name)}</h2>
          <div class="dimension-card-meta"><span>${escapeHtml(route.difficulty)}</span><span>${escapeHtml(route.group)}</span></div>
          <div class="dimension-card-progress"><div><i style="width:${progress.percent}%"></i></div><strong>${progress.complete}/${progress.total}</strong></div>
          <div class="dimension-card-footer">${routeStatus(route)}<span>Ouvrir →</span></div>
        </div>
      </button>
    </article>
  `;
}

function renderMap() {
  mapTrack.innerHTML = ROUTES.map((route,index) => {
    const progress = routeProgress(route);
    const locked = routeLocked(route);
    return `
      <button type="button" data-map-route="${escapeHtml(route.id)}" class="${progress.percent === 100 ? 'complete' : ''} ${locked ? 'locked' : ''}">
        <span>${index + 1}</span>
        <img src="${escapeHtml(route.icon)}" alt="">
        <strong>${locked ? 'Route finale' : escapeHtml(route.name)}</strong>
        <small>${progress.percent}%</small>
      </button>
    `;
  }).join('');

  mapTrack.querySelectorAll('[data-map-route]').forEach(button => {
    button.addEventListener('click',() => openRoute(button.dataset.mapRoute));
  });
}

function renderGrid() {
  const query = normalize(searchInput.value);
  const onlyIncomplete = onlyIncompleteInput.checked;

  const visible = ROUTES.filter(route => {
    const stageOk = activeStage === 'all' || route.stage === activeStage;
    const incompleteOk = !onlyIncomplete || routeProgress(route).percent < 100;
    const haystack = normalize([
      route.name,route.subtitle,route.summary,route.difficulty,route.group,
      route.steps.map(step => `${step.name} ${step.place} ${step.task}`).join(' '),
      route.items.join(' ')
    ].join(' '));
    return stageOk && incompleteOk && (!query || haystack.includes(query));
  });

  grid.innerHTML = visible.map(cardMarkup).join('');
  visibleCount.textContent = String(visible.length);
  emptyState.hidden = visible.length !== 0;

  grid.querySelectorAll('[data-route-id]').forEach(card => {
    card.querySelector('.dimension-card-open').addEventListener('click',() => openRoute(card.dataset.routeId));
  });

  renderMap();
  renderGlobalProgress();
}

function renderGlobalProgress() {
  const total = ROUTES.reduce((sum,route) => sum + route.steps.length,0);
  const complete = ROUTES.reduce((sum,route) => sum + routeProgress(route).complete,0);
  const percent = Math.round(complete / total * 100);
  globalPercent.textContent = `${percent}%`;
  globalCount.textContent = `${complete} / ${total} étapes`;
}

function stepsMarkup(route) {
  const current = state();
  return route.steps.map((step,index) => {
    const complete = isStepComplete(route,step);
    const imported = step.goal && completedGoals().has(step.goal);
    const key = stepKey(route.id,step.id);
    return `
      <article class="dimension-step ${complete ? 'complete' : ''}">
        <label>
          <input type="checkbox" data-step-key="${escapeHtml(key)}" ${complete ? 'checked' : ''} ${imported ? 'disabled' : ''}>
          <span></span>
        </label>
        <div class="dimension-step-number">${index + 1}</div>
        <div>
          <div class="dimension-step-heading"><h4>${escapeHtml(step.name)}</h4>${imported ? '<b>Import Minecraft</b>' : ''}</div>
          <p class="dimension-step-place">${escapeHtml(step.place)}</p>
          <p>${escapeHtml(step.task)}</p>
        </div>
      </article>
    `;
  }).join('');
}

function drawerMarkup(route) {
  const locked = routeLocked(route);
  if (locked) {
    return `
      <div class="dimension-drawer-locked">
        <img src="${escapeHtml(route.icon)}" alt="">
        <p class="page-kicker">Spoiler majeur</p>
        <h2 id="dimension-drawer-title">La route finale est masquée</h2>
        <p>Active le mode spoilers dans Mon aventure pour afficher la Citadelle Noire et ses étapes.</p>
        <a class="button" href="adventure.html">Ouvrir Mon aventure</a>
      </div>
    `;
  }

  const progress = routeProgress(route);
  const current = state();
  const waypoint = current.waypoints?.[route.id] || '';
  const note = current.notes?.[route.id] || '';

  return `
    <div class="dimension-drawer-hero">
      <img src="${escapeHtml(route.icon)}" alt="">
      <div>
        <p class="page-kicker">${escapeHtml(STAGE_LABELS[route.stage])} · ${escapeHtml(route.difficulty)}</p>
        <h2 id="dimension-drawer-title">${escapeHtml(route.name)}</h2>
        <p>${escapeHtml(route.summary)}</p>
        <div class="chips"><span class="tag">${escapeHtml(route.group)}</span><span class="tag">${progress.complete}/${progress.total} étapes</span></div>
      </div>
    </div>

    <div class="dimension-drawer-progress"><div><i style="width:${progress.percent}%"></i></div><strong>${progress.percent}%</strong></div>

    <section class="dimension-detail-section">
      <div class="dimension-inline-heading"><div><p class="page-kicker">Route recommandée</p><h3>Étapes de l’expédition</h3></div><button id="dimension-reset-route" type="button">Réinitialiser le manuel</button></div>
      <div class="dimension-step-list">${stepsMarkup(route)}</div>
    </section>

    <div class="dimension-detail-grid">
      <section class="dimension-detail-section"><h3>À emporter</h3><ul>${route.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul><a class="button secondary" href="arsenal.html?preset=${escapeHtml(route.arsenal)}">Ouvrir l’Arsenal</a></section>
      <section class="dimension-detail-section dimension-warning"><h3>Erreurs à éviter</h3><ul>${route.warnings.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
    </div>

    <section class="dimension-detail-section">
      <h3>Waypoint principal</h3>
      <div class="dimension-waypoint-editor"><input id="dimension-waypoint-input" value="${escapeHtml(waypoint)}" placeholder="Ex. TWILIGHT — Portail principal"><button id="dimension-save-waypoint" type="button">Enregistrer</button></div>
    </section>

    <section class="dimension-detail-section">
      <h3>Note de compagnie</h3>
      <textarea id="dimension-note-input" rows="4" placeholder="Coordonnées, ressources manquantes, prochain objectif…">${escapeHtml(note)}</textarea>
      <button class="button secondary" id="dimension-save-note" type="button">Sauvegarder la note</button>
    </section>

    <div class="dimension-drawer-actions"><a class="button" href="bosses.html">Ouvrir le Codex des Boss</a><button class="button secondary" id="dimension-copy-route" type="button">Copier cette route</button></div>
  `;
}

function openRoute(id) {
  const route = ROUTES.find(item => item.id === id);
  if (!route) return;
  activeRouteId = id;
  drawerContent.innerHTML = drawerMarkup(route);
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  drawerBackdrop.hidden = false;
  document.body.classList.add('dimension-drawer-open');

  drawerContent.querySelectorAll('[data-step-key]').forEach(input => {
    input.addEventListener('change',() => {
      const current = state();
      const completed = new Set(current.completed || []);
      input.checked ? completed.add(input.dataset.stepKey) : completed.delete(input.dataset.stepKey);
      current.completed = [...completed];
      saveState(current);
      renderGrid();
      openRoute(route.id);
    });
  });

  const reset = document.getElementById('dimension-reset-route');
  if (reset) reset.addEventListener('click',() => {
    const current = state();
    current.completed = (current.completed || []).filter(key => !key.startsWith(`${route.id}:`));
    saveState(current);
    renderGrid();
    openRoute(route.id);
    showToast('Étapes manuelles réinitialisées.');
  });

  const saveWaypoint = document.getElementById('dimension-save-waypoint');
  if (saveWaypoint) saveWaypoint.addEventListener('click',() => {
    const current = state();
    current.waypoints = current.waypoints || {};
    current.waypoints[route.id] = document.getElementById('dimension-waypoint-input').value.trim();
    saveState(current);
    showToast('Waypoint enregistré.');
  });

  const saveNote = document.getElementById('dimension-save-note');
  if (saveNote) saveNote.addEventListener('click',() => {
    const current = state();
    current.notes = current.notes || {};
    current.notes[route.id] = document.getElementById('dimension-note-input').value.trim();
    saveState(current);
    showToast('Note sauvegardée.');
  });

  const copy = document.getElementById('dimension-copy-route');
  if (copy) copy.addEventListener('click',() => copyRoute(route));

  history.replaceState(null,'',`#${encodeURIComponent(id)}`);
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  drawerBackdrop.hidden = true;
  document.body.classList.remove('dimension-drawer-open');
  activeRouteId = '';
}

function routeText(route) {
  const current = state();
  const waypoint = current.waypoints?.[route.id] || 'Non défini';
  const note = current.notes?.[route.id] || 'Aucune';
  return [
    `ASCENSION — ${route.name}`,
    `${route.difficulty} · ${route.group}`,
    '',
    'Étapes :',
    ...route.steps.map((step,index) => `${isStepComplete(route,step) ? '✓' : '○'} ${index + 1}. ${step.name} — ${step.task}`),
    '',
    'À emporter :',...route.items.map(item => `- ${item}`),
    '',`Waypoint : ${waypoint}`,`Note : ${note}`
  ].join('\n');
}

function copyRoute(route) {
  navigator.clipboard.writeText(routeText(route))
    .then(() => showToast('Route copiée.'))
    .catch(error => {console.warn(error);showToast('Copie impossible dans ce navigateur.');});
}

function copyJourney() {
  const text = ['ASCENSION — Itinéraire de la compagnie',''];
  ROUTES.forEach(route => {
    const progress = routeProgress(route);
    text.push(`${progress.percent === 100 ? '✓' : '○'} ${route.name} — ${progress.complete}/${progress.total}`);
  });
  navigator.clipboard.writeText(text.join('\n'))
    .then(() => showToast('Itinéraire global copié.'))
    .catch(error => {console.warn(error);showToast('Copie impossible.');});
}

stageButtons.forEach(button => {
  button.addEventListener('click',() => {
    activeStage = button.dataset.stage;
    stageButtons.forEach(item => item.classList.toggle('active',item === button));
    renderGrid();
  });
});
searchInput.addEventListener('input',renderGrid);
onlyIncompleteInput.addEventListener('change',renderGrid);
document.getElementById('dimension-copy-journey').addEventListener('click',copyJourney);
document.getElementById('dimension-drawer-close').addEventListener('click',closeDrawer);
drawerBackdrop.addEventListener('click',closeDrawer);
document.addEventListener('keydown',event => {if (event.key === 'Escape') closeDrawer();});

renderGrid();
const initial = decodeURIComponent(location.hash.replace(/^#/,''));
if (initial && ROUTES.some(route => route.id === initial)) openRoute(initial);
})();
