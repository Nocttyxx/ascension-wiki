(() => {
'use strict';

const root = document.querySelector('[data-class-guides]');
if (!root) return;

const CLASSES = [{"id":"chevalier","name":"Chevalier","faction":"Bastion de Solarys","icon":"assets/items/sceau_chevalier.png","role":"Protection et première ligne","summary":"Le point d’ancrage de la compagnie. Il sécurise l’espace, attire l’attention et donne aux alliés le temps d’agir.","difficulty":"Accessible","range":"Mêlée","stats":{"durability":5,"damage":3,"mobility":2,"utility":4},"strengths":["Excellent contrôle de la ligne de front","Très fiable pendant les combats longs","Protège efficacement les builds fragiles"],"weaknesses":["Mobilité plus faible","Dégâts moins explosifs","Doit surveiller son endurance"],"priorities":["Vie","Armure","Endurance","Blocage","Résistance"],"weapons":["Épée et bouclier","Lance ou arme à grande portée","Arme secondaire rapide"],"armor":"Armure lourde avec Protection, durabilité et réduction des dégâts.","accessories":"Privilégier la vie, la résistance et les effets défensifs.","stages":[{"name":"Début de partie","title":"Rempart de fortune","goal":"Rester en vie et protéger le groupe pendant les premières structures.","equipment":["Bouclier réparé","Épée fiable","Armure complète","Soins accessibles"],"skills":["Vie maximale","Armure","Régénération d’endurance"],"combat":"Bloque les attaques lisibles, réponds avec un combo court et conserve toujours une esquive."},{"name":"Milieu de partie","title":"Gardien du Voile","goal":"Contrôler les boss de progression et stabiliser les expéditions.","equipment":["Armure diamant enchantée","Arme à bonne portée","Option défensive","Backpack de secours"],"skills":["Réduction des dégâts","Vie","Blocage","Résistance élémentaire"],"combat":"Reste devant le groupe sans isoler le boss et annonce les changements de cible."},{"name":"Fin de partie","title":"Bastion de Solarys","goal":"Maintenir la compagnie pendant Cataclysm et Vaelorn.","equipment":["Armure endgame réparée","Arme maîtrisée","Seconde chance","Consommables défensifs"],"skills":["Résistance maximale","Endurance","Vie","Contrôle"],"combat":"Protège la voie de repli et interromps tes dégâts pour sauver un allié."}],"presets":[{"id":"bastion","name":"Bastion","style":"Défense maximale","description":"Pour les groupes fragiles et les combats très longs.","focus":["Vie","Armure","Blocage"],"weapon":"Épée + bouclier"},{"id":"sentinelle","name":"Sentinelle","style":"Protection mobile","description":"Plus de portée et de mobilité sans abandonner la défense.","focus":["Endurance","Résistance","Portée"],"weapon":"Lance ou arme longue"},{"id":"paladin","name":"Paladin de cendres","style":"Défense offensive","description":"Un compromis sûr pour jouer seul ou en duo.","focus":["Vie","Dégâts","Récupération"],"weapon":"Épée polyvalente"}],"bossTips":["Sur l’Hydre, garde les têtes orientées loin des alliés.","Contre Ignis, n’attaque jamais son bouclier en continu.","Face à Vaelorn, reste dans le rayon coopératif."]},{"id":"berserker","name":"Berserker","faction":"Serment des Cendres","icon":"assets/items/sceau_berserker.png","role":"Dégâts de mêlée et pression","summary":"Un combattant agressif qui transforme les ouvertures en dégâts massifs. Sa maîtrise vient du contrôle de l’endurance.","difficulty":"Intermédiaire","range":"Mêlée","stats":{"durability":3,"damage":5,"mobility":3,"utility":2},"strengths":["Très gros dégâts pendant les fenêtres","Excellent contre les ennemis isolés","Progression solo rapide"],"weaknesses":["Puni après un combo trop long","Dépend de l’endurance","Moins à l’aise contre les zones persistantes"],"priorities":["Dégâts de mêlée","Endurance","Vitesse d’attaque","Récupération","Vie"],"weapons":["Hache ou arme lourde","Grande épée","Arme rapide de secours"],"armor":"Armure intermédiaire ou lourde sans sacrifier toute la mobilité.","accessories":"Privilégier dégâts, endurance et récupération après les échanges.","stages":[{"name":"Début de partie","title":"Porte-cendre","goal":"Apprendre les combos courts et éviter les échanges inutiles.","equipment":["Hache ou arme simple","Armure complète","Nourriture saturante","Arme rapide de secours"],"skills":["Dégâts de mêlée","Endurance","Vie"],"combat":"Deux ou trois coups, puis repositionnement. L’agressivité ne doit jamais supprimer l’esquive."},{"name":"Milieu de partie","title":"Exécuteur du Serment","goal":"Punir les récupérations des boss sans voler l’attention au tank.","equipment":["Arme lourde enchantée","Armure diamant","Force ou régénération","Option à distance"],"skills":["Vitesse d’attaque","Dégâts","Endurance","Récupération"],"combat":"Attends l’appel du Chevalier ou la fin d’une grande attaque avant ton combo principal."},{"name":"Fin de partie","title":"Cœur de la Fournaise","goal":"Convertir chaque fenêtre endgame en dégâts décisifs.","equipment":["Arme endgame","Build offensif cohérent","Totem","Soins instantanés"],"skills":["Dégâts maximaux","Endurance","Récupération","Vie"],"combat":"Garde ton combo le plus puissant pour les vraies ouvertures."}],"presets":[{"id":"ravageur","name":"Ravageur","style":"Dégâts lourds","description":"Maximum de dégâts sur une fenêtre courte.","focus":["Dégâts","Force","Critique"],"weapon":"Hache ou grande arme"},{"id":"duelliste","name":"Duelliste de cendres","style":"Vitesse et esquive","description":"Pour les boss rapides et les joueurs à l’aise avec Epic Fight.","focus":["Vitesse","Endurance","Récupération"],"weapon":"Arme rapide"},{"id":"survivant","name":"Survivant","style":"Solo équilibré","description":"Moins explosif, mais plus sûr en exploration.","focus":["Vie","Dégâts","Résistance"],"weapon":"Grande épée polyvalente"}],"bossTips":["Contre le Wroughtnaut, frappe seulement après son animation.","Sur Cataclysm, termine toujours l’esquive avant le combo.","Face à Vaelorn, garde une réserve d’endurance."]},{"id":"eclaireur","name":"Éclaireur","faction":"Voie sans Étoile","icon":"assets/items/sceau_eclaireur.png","role":"Distance, mobilité et reconnaissance","summary":"Le regard de la compagnie. Il ouvre les combats, repère les menaces et maintient une pression sûre à distance.","difficulty":"Intermédiaire","range":"Distance","stats":{"durability":2,"damage":4,"mobility":5,"utility":4},"strengths":["Excellente mobilité","Dégâts sûrs pendant les phases dangereuses","Très utile pour explorer"],"weaknesses":["Fragile au contact","Dépend des munitions","Moins efficace dans les espaces étroits"],"priorities":["Mouvement","Projectiles","Endurance","Esquive","Dégâts à distance"],"weapons":["Arc principal","Arbalète pour l’ouverture","Arme rapide de secours"],"armor":"Armure légère ou intermédiaire, enchantée pour survivre à une erreur.","accessories":"Privilégier mobilité, vitesse et projectiles.","stages":[{"name":"Début de partie","title":"Traceur du Voile","goal":"Sécuriser les routes et combattre sans être encerclé.","equipment":["Arc et flèches","Arme légère","Carte et boussole","Armure légère"],"skills":["Mouvement","Projectiles","Endurance"],"combat":"Commence les combats depuis une position sûre et garde une direction de fuite."},{"name":"Milieu de partie","title":"Œil sans Étoile","goal":"Maintenir les dégâts pendant les mécaniques de boss.","equipment":["Arc enchanté","Munitions d’expédition","Armure optimisée","Perles et blocs"],"skills":["Dégâts à distance","Esquive","Mouvement","Endurance"],"combat":"Change d’angle afin que les charges ne traversent pas toute l’équipe."},{"name":"Fin de partie","title":"Horizon vivant","goal":"Survivre aux motifs endgame tout en maintenant la pression.","equipment":["Arme à distance endgame","Arme rapide","Mobilité","Consommables d’arène"],"skills":["Mobilité maximale","Projectiles","Endurance","Survie"],"combat":"Reste actif pendant les phases où les mêlées doivent reculer."}],"presets":[{"id":"tireur","name":"Tireur d’élite","style":"Dégâts à distance","description":"Pour les grandes arènes et les boss lents.","focus":["Projectiles","Précision","Dégâts"],"weapon":"Arc puissant"},{"id":"voltigeur","name":"Voltigeur","style":"Mobilité maximale","description":"Idéal pour survivre aux motifs de Cataclysm.","focus":["Mouvement","Esquive","Endurance"],"weapon":"Arc rapide + arme légère"},{"id":"chasseur","name":"Chasseur polyvalent","style":"Exploration et combat","description":"Une configuration fiable pour jouer seul.","focus":["Survie","Distance","Mobilité"],"weapon":"Arbalète + épée légère"}],"bossTips":["Contre l’Ur-Ghast, surveille les projectiles et les pièges.","Sur le Dragon, gère les cristaux et garde Chute lente.","Contre le Harbinger, cours en courbe."]},{"id":"reliques","name":"Chasseur de reliques","faction":"Archive des Lanternes","icon":"assets/items/sceau_chasseur_reliques.png","role":"Exploration, ressources et soutien","summary":"Le préparateur de l’équipe. Il transforme les découvertes, le butin et les routes sûres en avantage durable.","difficulty":"Accessible","range":"Hybride","stats":{"durability":3,"damage":3,"mobility":3,"utility":5},"strengths":["Excellent rendement d’exploration","Prépare les ressources du groupe","Très polyvalent"],"weaknesses":["Moins spécialisé en combat direct","Dépend de la préparation","Doit gérer beaucoup d’équipement"],"priorities":["Survie","Butin","Expérience","Minage","Mobilité"],"weapons":["Arbalète","Arme polyvalente","Outils toujours réparés"],"armor":"Armure polyvalente avec protection environnementale et durabilité.","accessories":"Privilégier inventaire, expérience, survie et mobilité.","stages":[{"name":"Début de partie","title":"Porte-lanterne","goal":"Établir les premières routes et alimenter la compagnie.","equipment":["Outils en fer","Arbalète","Torches et carte","Premier backpack"],"skills":["Survie","Expérience","Minage"],"combat":"Prépare le terrain avant le combat : lumière, sortie et Waystone proche."},{"name":"Milieu de partie","title":"Archiviste d’expédition","goal":"Rendre chaque dimension plus sûre et plus rentable.","equipment":["Backpack organisé","Outils diamant","Arme hybride","Compas d’exploration"],"skills":["Butin","Expérience","Mobilité","Survie"],"combat":"Gère les ennemis secondaires et conserve les ressources des prochaines tentatives."},{"name":"Fin de partie","title":"Maître des Lanternes","goal":"Fournir la logistique des combats endgame.","equipment":["Backpack de secours","Outils réparés","Consommables classés","Équipement de récupération"],"skills":["Survie maximale","Butin","Expérience","Polyvalence"],"combat":"Entre dans chaque boss avec un inventaire clair et un plan de récupération partagé."}],"presets":[{"id":"archiviste","name":"Archiviste","style":"Butin et expérience","description":"Pour accélérer la progression générale du groupe.","focus":["Butin","Expérience","Inventaire"],"weapon":"Arbalète polyvalente"},{"id":"expedition","name":"Chef d’expédition","style":"Survie dimensionnelle","description":"Conçu pour les longues sorties.","focus":["Survie","Mobilité","Durabilité"],"weapon":"Arme hybride"},{"id":"artificier","name":"Préparateur de boss","style":"Soutien coop","description":"Stocke et distribue les consommables du groupe.","focus":["Inventaire","Survie","Soutien"],"weapon":"Arbalète + arme défensive"}],"bossTips":["Place une Waystone et un coffre de secours avant les boss.","Dans Aquamirae, emporte respiration et vision nocturne.","Avant Vaelorn, vérifie les réparations de toute la compagnie."]}];
const SYNERGIES = {"berserker+chevalier":{"name":"Marteau et enclume","rating":"Excellent","description":"Le Chevalier crée les ouvertures et le Berserker les transforme en dégâts.","gap":"Peu de pression à longue distance"},"chevalier+eclaireur":{"name":"Rempart et horizon","rating":"Excellent","description":"Le Chevalier stabilise la cible pendant que l’Éclaireur reste actif.","gap":"Dégâts explosifs plus faibles"},"chevalier+reliques":{"name":"Forteresse d’expédition","rating":"Très solide","description":"Une équipe lente, mais difficile à arrêter et toujours bien préparée.","gap":"Manque de dégâts rapides"},"berserker+eclaireur":{"name":"Chasse croisée","rating":"Puissant","description":"Pression simultanée à courte et longue portée.","gap":"Équipe fragile sans contrôle"},"berserker+reliques":{"name":"Cendres et lanternes","rating":"Équilibré","description":"Le Chasseur soutient la progression pendant que le Berserker gère les combats.","gap":"Protection limitée dans les boss extrêmes"},"eclaireur+reliques":{"name":"Avant-garde d’exploration","rating":"Excellent en voyage","description":"Mobilité, cartes, ressources et sécurité à distance.","gap":"Faible résistance au contact"}};

const ADVENTURE_KEY = 'ascension.adventure.hybrid.v2';
const GUIDE_KEY = 'ascension.classGuides.v1';

const selectorGrid = document.getElementById('class-selector-grid');
const detailHeader = document.getElementById('class-detail-header');
const overviewPanel = document.getElementById('class-overview-panel');
const progressionPanel = document.getElementById('class-progression-panel');
const buildsPanel = document.getElementById('class-builds-panel');
const coopPanel = document.getElementById('class-coop-panel');
const selectedClassIcon = document.getElementById('selected-class-icon');
const selectedClassName = document.getElementById('selected-class-name');
const selectedBuildName = document.getElementById('selected-build-name');
const teamSlots = document.getElementById('team-slots');
const teamAnalysis = document.getElementById('team-analysis');
const compareDrawer = document.getElementById('class-compare-drawer');
const compareBackdrop = document.getElementById('class-compare-backdrop');
const comparisonTable = document.getElementById('class-comparison-table');
const toast = document.getElementById('class-guide-toast');

let activeClassId = 'chevalier';

function safeParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(error);
    return fallback;
  }
}

function guideState() {
  return safeParse(GUIDE_KEY, {favoriteBuilds:{},team:[]});
}

function saveGuideState(state) {
  localStorage.setItem(GUIDE_KEY, JSON.stringify(state));
}

function adventureState() {
  return safeParse(ADVENTURE_KEY, {
    profile:{className:'',playerName:'',spoilers:false},
    personal:{completed:[]},
    company:{completed:[]}
  });
}

function saveAdventureState(state) {
  state.meta = {
    ...(state.meta || {}),
    updatedAt:new Date().toISOString(),
    source:'class-guides'
  };
  localStorage.setItem(ADVENTURE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(
    () => toast.classList.remove('visible'),
    2300
  );
}

function getClass(id) {
  return CLASSES.find(item => item.id === id) || CLASSES[0];
}

function selectedClassId() {
  const state = adventureState();
  return CLASSES.some(item => item.id === state.profile?.className)
    ? state.profile.className
    : '';
}

function selectedBuild(classId) {
  return guideState().favoriteBuilds?.[classId] || '';
}

function statBar(label, value) {
  return `
    <div class="class-stat-row">
      <span>${escapeHtml(label)}</span>
      <div><i style="width:${value * 20}%"></i></div>
      <b>${value}/5</b>
    </div>
  `;
}

function listMarkup(items, className = '') {
  return `<ul class="${className}">${
    items.map(item => `<li>${escapeHtml(item)}</li>`).join('')
  }</ul>`;
}

function selectorMarkup(item) {
  const selected = selectedClassId() === item.id;
  const active = activeClassId === item.id;

  return `
    <article class="class-selector-card ${active ? 'active' : ''} ${selected ? 'selected' : ''}" data-class-id="${escapeHtml(item.id)}">
      <button type="button" class="class-selector-open">
        <div class="class-selector-icon">
          <img src="${escapeHtml(item.icon)}" alt="">
          ${selected ? '<span>Classe enregistrée</span>' : ''}
        </div>
        <p>${escapeHtml(item.faction)}</p>
        <h3>${escapeHtml(item.name)}</h3>
        <strong>${escapeHtml(item.role)}</strong>
        <div class="class-selector-meta">
          <span>${escapeHtml(item.difficulty)}</span>
          <span>${escapeHtml(item.range)}</span>
        </div>
      </button>
    </article>
  `;
}

function renderSelectors() {
  selectorGrid.innerHTML = CLASSES.map(selectorMarkup).join('');

  selectorGrid.querySelectorAll('[data-class-id]').forEach(card => {
    card.querySelector('.class-selector-open').addEventListener('click',() => {
      activeClassId = card.dataset.classId;
      renderAll();
      document
        .getElementById('class-detail-shell')
        .scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
}

function overviewMarkup(item) {
  return `
    <div class="class-overview-grid">
      <article class="class-overview-card">
        <p class="page-kicker">Forces</p>
        <h3>Ce que la classe apporte</h3>
        ${listMarkup(item.strengths,'class-positive-list')}
      </article>
      <article class="class-overview-card">
        <p class="page-kicker">Limites</p>
        <h3>Ce qu’il faut compenser</h3>
        ${listMarkup(item.weaknesses,'class-warning-list')}
      </article>
      <article class="class-overview-card class-stats-card">
        <p class="page-kicker">Profil</p>
        <h3>Répartition du rôle</h3>
        ${statBar('Résistance',item.stats.durability)}
        ${statBar('Dégâts',item.stats.damage)}
        ${statBar('Mobilité',item.stats.mobility)}
        ${statBar('Utilité',item.stats.utility)}
      </article>
    </div>

    <div class="class-core-guide">
      <section>
        <h3>Priorités de progression</h3>
        <div class="class-priority-cloud">
          ${item.priorities.map((priority,index) =>
            `<span><b>${index + 1}</b>${escapeHtml(priority)}</span>`
          ).join('')}
        </div>
      </section>
      <section>
        <h3>Armes recommandées</h3>
        ${listMarkup(item.weapons,'class-equipment-list')}
      </section>
      <section>
        <h3>Armure et accessoires</h3>
        <p><strong>Armure :</strong> ${escapeHtml(item.armor)}</p>
        <p><strong>Accessoires :</strong> ${escapeHtml(item.accessories)}</p>
      </section>
    </div>
  `;
}

function progressionMarkup(item) {
  return `
    <div class="class-stage-grid">
      ${item.stages.map((stage,index) => `
        <article class="class-stage-card">
          <div class="class-stage-number">${index + 1}</div>
          <p class="page-kicker">${escapeHtml(stage.name)}</p>
          <h3>${escapeHtml(stage.title)}</h3>
          <p>${escapeHtml(stage.goal)}</p>
          <h4>Équipement</h4>
          ${listMarkup(stage.equipment,'class-equipment-list')}
          <h4>Talents prioritaires</h4>
          <div class="class-stage-skills">
            ${stage.skills.map(skill => `<span>${escapeHtml(skill)}</span>`).join('')}
          </div>
          <div class="class-stage-combat">
            <strong>Style de combat</strong>
            <p>${escapeHtml(stage.combat)}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function buildsMarkup(item) {
  const favorite = selectedBuild(item.id);

  return `
    <div class="class-build-grid">
      ${item.presets.map(preset => `
        <article class="class-build-card ${favorite === preset.id ? 'favorite' : ''}" data-build-id="${escapeHtml(preset.id)}">
          <div class="class-build-heading">
            <div>
              <p class="page-kicker">${escapeHtml(preset.style)}</p>
              <h3>${escapeHtml(preset.name)}</h3>
            </div>
            ${favorite === preset.id ? '<span>Favori</span>' : ''}
          </div>
          <p>${escapeHtml(preset.description)}</p>
          <div class="class-build-weapon">
            <small>Arme principale</small>
            <strong>${escapeHtml(preset.weapon)}</strong>
          </div>
          <div class="class-build-focus">
            ${preset.focus.map(focus => `<span>${escapeHtml(focus)}</span>`).join('')}
          </div>
          <button class="button secondary class-build-select" type="button">
            ${favorite === preset.id ? 'Build sélectionné' : 'Choisir ce build'}
          </button>
        </article>
      `).join('')}
    </div>

    <div class="class-build-note">
      <strong>Important :</strong>
      <p>Les noms de builds décrivent une direction de progression. Adapte les nœuds de Passive Skill Trees à ton arme réelle et à ton style.</p>
    </div>
  `;
}

function pairKey(a,b) {
  return [a,b].sort().join('+');
}

function coopMarkup(item) {
  const partners = CLASSES.filter(other => other.id !== item.id);

  return `
    <div class="class-coop-grid">
      <article class="class-coop-card">
        <p class="page-kicker">Partenaires</p>
        <h3>Synergies directes</h3>
        <div class="class-partner-list">
          ${partners.map(partner => {
            const synergy = SYNERGIES[pairKey(item.id,partner.id)];
            return `
              <div>
                <img src="${escapeHtml(partner.icon)}" alt="">
                <span>
                  <strong>${escapeHtml(partner.name)}</strong>
                  <small>${escapeHtml(synergy?.description || 'Composition polyvalente.')}</small>
                </span>
              </div>
            `;
          }).join('')}
        </div>
      </article>

      <article class="class-coop-card">
        <p class="page-kicker">Codex des Boss</p>
        <h3>Conseils de rencontres</h3>
        ${listMarkup(item.bossTips,'class-boss-tip-list')}
        <a class="button secondary" href="bosses.html">Ouvrir le Codex des Boss</a>
      </article>
    </div>
  `;
}

function renderDetail() {
  const item = getClass(activeClassId);
  const selected = selectedClassId() === item.id;

  detailHeader.innerHTML = `
    <div class="class-detail-identity">
      <img src="${escapeHtml(item.icon)}" alt="">
      <div>
        <p class="page-kicker">${escapeHtml(item.faction)}</p>
        <h2>${escapeHtml(item.name)}</h2>
        <p>${escapeHtml(item.summary)}</p>
        <div class="chips">
          <span class="tag">${escapeHtml(item.role)}</span>
          <span class="tag">${escapeHtml(item.difficulty)}</span>
          <span class="tag">${escapeHtml(item.range)}</span>
        </div>
      </div>
    </div>
    <div class="class-detail-actions">
      <button class="button ${selected ? 'secondary' : ''}" id="save-class-choice" type="button">
        ${selected ? 'Classe enregistrée dans Mon aventure' : 'Choisir cette classe dans le wiki'}
      </button>
      <a class="button secondary" href="arsenal.html?class=${escapeHtml(item.id)}">Voir l’arsenal conseillé</a>
    </div>
  `;

  overviewPanel.innerHTML = overviewMarkup(item);
  progressionPanel.innerHTML = progressionMarkup(item);
  buildsPanel.innerHTML = buildsMarkup(item);
  coopPanel.innerHTML = coopMarkup(item);

  document
    .getElementById('save-class-choice')
    .addEventListener('click',() => {
      const state = adventureState();
      state.profile = state.profile || {};
      state.profile.className = item.id;
      saveAdventureState(state);
      renderAll();
      showToast(`${item.name} enregistré dans Mon aventure.`);
    });

  buildsPanel.querySelectorAll('[data-build-id]').forEach(card => {
    card.querySelector('.class-build-select').addEventListener('click',() => {
      const state = guideState();
      state.favoriteBuilds = state.favoriteBuilds || {};
      state.favoriteBuilds[item.id] = card.dataset.buildId;
      saveGuideState(state);
      renderAll();
      setClassTab('builds');
      showToast('Build favori enregistré.');
    });
  });
}

function setClassTab(name) {
  document.querySelectorAll('[data-class-tab]').forEach(button => {
    const active = button.dataset.classTab === name;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
  });

  document.querySelectorAll('[data-class-panel]').forEach(panel => {
    panel.hidden = panel.dataset.classPanel !== name;
  });
}

function renderHeroSelection() {
  const classId = selectedClassId();

  if (!classId) {
    selectedClassIcon.src = 'assets/items/sceau_destin.png';
    selectedClassName.textContent = 'Aucune classe';
    selectedBuildName.textContent = 'Aucun build favori';
    return;
  }

  const item = getClass(classId);
  const favoriteId = selectedBuild(classId);
  const favorite = item.presets.find(build => build.id === favoriteId);

  selectedClassIcon.src = item.icon;
  selectedClassName.textContent = item.name;
  selectedBuildName.textContent = favorite
    ? favorite.name
    : 'Aucun build favori';
}

function renderTeamSlots() {
  const state = guideState();
  const selected = new Set(state.team || []);

  teamSlots.innerHTML = CLASSES.map(item => `
    <label class="team-slot ${selected.has(item.id) ? 'active' : ''}">
      <input type="checkbox" value="${escapeHtml(item.id)}" ${selected.has(item.id) ? 'checked' : ''}>
      <img src="${escapeHtml(item.icon)}" alt="">
      <span>
        <strong>${escapeHtml(item.name)}</strong>
        <small>${escapeHtml(item.role)}</small>
      </span>
    </label>
  `).join('');

  teamSlots.querySelectorAll('input').forEach(input => {
    input.addEventListener('change',() => {
      const current = new Set(guideState().team || []);

      if (input.checked && current.size >= 4) {
        input.checked = false;
        showToast('Une compagnie contient au maximum quatre rôles ici.');
        return;
      }

      input.checked ? current.add(input.value) : current.delete(input.value);
      const next = guideState();
      next.team = [...current];
      saveGuideState(next);
      renderTeamSlots();
      renderTeamAnalysis();
    });
  });
}

function teamStats(ids) {
  const members = ids.map(getClass);
  const average = key => Math.round(
    members.reduce((sum,item) => sum + item.stats[key],0) / members.length
  );

  return {
    durability:average('durability'),
    damage:average('damage'),
    mobility:average('mobility'),
    utility:average('utility')
  };
}

function renderTeamAnalysis() {
  const ids = guideState().team || [];

  if (ids.length < 2) {
    teamAnalysis.innerHTML = `
      <p class="page-kicker">Analyse</p>
      <h3>Sélectionne au moins deux classes</h3>
      <p>Le wiki affichera les forces, les faiblesses et la répartition recommandée.</p>
    `;
    return;
  }

  const members = ids.map(getClass);
  const stats = teamStats(ids);
  const pairs = [];

  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const synergy = SYNERGIES[pairKey(ids[i],ids[j])];
      if (synergy) pairs.push(synergy);
    }
  }

  const highlight = pairs[0];
  const gaps = [];

  if (stats.durability <= 2) gaps.push('Protection au contact');
  if (stats.damage <= 2) gaps.push('Dégâts pendant les fenêtres');
  if (stats.mobility <= 2) gaps.push('Mobilité contre les zones');
  if (stats.utility <= 2) gaps.push('Préparation et soutien');

  teamAnalysis.innerHTML = `
    <p class="page-kicker">Analyse de la compagnie</p>
    <h3>${members.map(item => item.name).join(' + ')}</h3>

    ${highlight ? `
      <div class="team-synergy-highlight">
        <strong>${escapeHtml(highlight.name)} · ${escapeHtml(highlight.rating)}</strong>
        <p>${escapeHtml(highlight.description)}</p>
      </div>
    ` : ''}

    <div class="team-stat-grid">
      ${statBar('Résistance',stats.durability)}
      ${statBar('Dégâts',stats.damage)}
      ${statBar('Mobilité',stats.mobility)}
      ${statBar('Utilité',stats.utility)}
    </div>

    <h4>Répartition recommandée</h4>
    <ul>
      ${members.map(item =>
        `<li><strong>${escapeHtml(item.name)} :</strong> ${escapeHtml(item.role)}.</li>`
      ).join('')}
    </ul>

    <h4>Point à surveiller</h4>
    <p>${gaps.length ? escapeHtml(gaps.join(' · ')) : 'Composition complète sans faiblesse majeure évidente.'}</p>
  `;
}

function comparisonMarkup() {
  const rows = [
    ['Résistance','durability'],
    ['Dégâts','damage'],
    ['Mobilité','mobility'],
    ['Utilité','utility']
  ];

  return `
    <div class="class-comparison-head">
      <span>Critère</span>
      ${CLASSES.map(item => `
        <div><img src="${escapeHtml(item.icon)}" alt=""><strong>${escapeHtml(item.name)}</strong></div>
      `).join('')}
    </div>

    ${rows.map(([label,key]) => `
      <div class="class-comparison-row">
        <strong>${label}</strong>
        ${CLASSES.map(item =>
          `<span>${'●'.repeat(item.stats[key])}${'○'.repeat(5-item.stats[key])}</span>`
        ).join('')}
      </div>
    `).join('')}

    <div class="class-comparison-row text-row">
      <strong>Rôle</strong>
      ${CLASSES.map(item => `<span>${escapeHtml(item.role)}</span>`).join('')}
    </div>
    <div class="class-comparison-row text-row">
      <strong>Difficulté</strong>
      ${CLASSES.map(item => `<span>${escapeHtml(item.difficulty)}</span>`).join('')}
    </div>
  `;
}

function openComparison() {
  comparisonTable.innerHTML = comparisonMarkup();
  compareDrawer.classList.add('open');
  compareDrawer.setAttribute('aria-hidden','false');
  compareBackdrop.hidden = false;
  document.body.classList.add('class-compare-open');
}

function closeComparison() {
  compareDrawer.classList.remove('open');
  compareDrawer.setAttribute('aria-hidden','true');
  compareBackdrop.hidden = true;
  document.body.classList.remove('class-compare-open');
}

function classPlanText() {
  const classId = selectedClassId() || activeClassId;
  const item = getClass(classId);
  const favoriteId = selectedBuild(classId);
  const favorite = item.presets.find(build => build.id === favoriteId);

  return [
    `ASCENSION — ${item.name}`,
    item.role,
    '',
    favorite
      ? `Build favori : ${favorite.name} (${favorite.style})`
      : 'Build favori : non défini',
    favorite
      ? `Arme : ${favorite.weapon}`
      : `Armes : ${item.weapons.join(', ')}`,
    '',
    'Priorités :',
    ...item.priorities.map((priority,index) => `${index + 1}. ${priority}`),
    '',
    'Progression :',
    ...item.stages.map(stage => `- ${stage.name} : ${stage.title} — ${stage.goal}`),
    '',
    'Conseils de boss :',
    ...item.bossTips.map(tip => `- ${tip}`)
  ].join('\n');
}

function renderAll() {
  renderSelectors();
  renderDetail();
  renderHeroSelection();
  renderTeamSlots();
  renderTeamAnalysis();
}

document.querySelectorAll('[data-class-tab]').forEach(button => {
  button.addEventListener('click',() => setClassTab(button.dataset.classTab));
});

document
  .getElementById('compare-classes-button')
  .addEventListener('click',openComparison);

document
  .getElementById('class-compare-close')
  .addEventListener('click',closeComparison);

compareBackdrop.addEventListener('click',closeComparison);

document
  .getElementById('copy-class-plan')
  .addEventListener('click',async() => {
    try {
      await navigator.clipboard.writeText(classPlanText());
      showToast('Plan de classe copié.');
    } catch (error) {
      console.warn(error);
      showToast('Copie impossible dans ce navigateur.');
    }
  });

document.addEventListener('keydown',event => {
  if (event.key === 'Escape') closeComparison();
});

const savedClass = selectedClassId();
if (savedClass) activeClassId = savedClass;

renderAll();
setClassTab('overview');
})();
