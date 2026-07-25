/* ASCENSION Wiki V5.0 — La Citadelle des Miracles
   Interface ajoutée sans remplacer les scripts existants. */
(function(){
  'use strict';

  const VERSION = 'V5.0';
  const STORAGE = {
    collapsed: 'ascension_v5_sidebar_collapsed',
    density: 'ascension_v5_density'
  };

  const pages = [
    {href:'index.html', label:'Accueil', icon:'⌂', group:'Citadelle', description:'Tableau de bord général du wiki'},
    {href:'adventure.html', label:'Mon aventure', icon:'✦', group:'Progression', description:'Progression personnelle et compagnie'},
    {href:'quests.html', label:'72 quêtes', icon:'☷', group:'Progression', description:'Journal des quêtes et suivi narratif'},
    {href:'progression.html', label:'Campagne', icon:'◈', group:'Progression', description:'Les dix chapitres de la campagne'},
    {href:'debuter.html', label:'Bien débuter', icon:'◇', group:'Progression', description:'Premières heures et ordre recommandé'},
    {href:'lore.html', label:'Lore & Archives', icon:'⌁', group:'Progression', description:'Chroniques, révélations et histoire'},

    {href:'classes.html', label:'Classes & builds', icon:'♜', group:'Combat', description:'Archétypes, rôles et synergies'},
    {href:'miracles.html', label:'Miracles', icon:'✧', group:'Combat', description:'Les seize Miracles et leurs porteurs'},
    {href:'skills.html', label:'Compétences & sorts', icon:'⌘', group:'Combat', description:'Techniques, passifs et sorts officiels'},
    {href:'bosses.html', label:'Boss', icon:'⚔', group:'Combat', description:'Affrontements majeurs et stratégies'},
    {href:'bestiary.html', label:'Bestiaire', icon:'♞', group:'Combat', description:'Créatures, dangers et butins'},
    {href:'arsenal.html', label:'Arsenal', icon:'◆', group:'Combat', description:'Armes, armures et équipements'},

    {href:'atlas.html', label:'Atlas', icon:'⌖', group:'Exploration', description:'Structures, danger et butin'},
    {href:'dimensions.html', label:'Dimensions', icon:'◎', group:'Exploration', description:'Itinéraires et progression dimensionnelle'},

    {href:'systems.html', label:'Systèmes', icon:'⚙', group:'Compagnie & outils', description:'Mods, systèmes et mécaniques du pack'},
    {href:'commands.html', label:'Commandes', icon:'›_', group:'Compagnie & outils', description:'Commandes de progression et récupération'},
    {href:'technical.html', label:'Aide', icon:'?', group:'Compagnie & outils', description:'Dépannage et solutions connues'},
    {href:'spoilers.html', label:'Spoilers', icon:'◉', group:'Compagnie & outils', description:'Révélations et fin de campagne'}
  ];

  const groups = ['Citadelle','Progression','Combat','Exploration','Compagnie & outils'];
  const groupLabels = {
    'Citadelle':'Navigation',
    'Progression':'Progression',
    'Combat':'Combat',
    'Exploration':'Exploration',
    'Compagnie & outils':'Compagnie & outils'
  };

  function safeGet(key, fallback){
    try { const value = localStorage.getItem(key); return value === null ? fallback : value; }
    catch(_){ return fallback; }
  }
  function safeSet(key, value){ try { localStorage.setItem(key, value); } catch(_){} }

  function currentFile(){
    const path = decodeURIComponent(location.pathname || '');
    const file = path.split('/').filter(Boolean).pop() || 'index.html';
    return file.includes('.') ? file : 'index.html';
  }
  function normalize(value){
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  }
  function pageForCurrent(){
    const file = currentFile();
    return pages.find(page => page.href === file) || {
      href:file,
      label:(document.querySelector('h1')?.textContent || document.title || 'Page').trim(),
      icon:'◇',group:'Archives',description:'Page du wiki ASCENSION'
    };
  }

  function markLegacyHeaders(){
    document.querySelectorAll('header').forEach(header => {
      if (!header.closest('main') && !header.classList.contains('v5-topbar')) header.classList.add('v5-legacy-header');
    });
  }

  function buildSidebar(current){
    const aside = document.createElement('aside');
    aside.className = 'v5-sidebar';
    aside.setAttribute('aria-label','Navigation principale de la Citadelle');
    aside.innerHTML = `
      <a class="v5-brand" href="index.html" aria-label="Accueil ASCENSION">
        <span class="v5-brand-mark" aria-hidden="true">✦</span>
        <span class="v5-brand-copy"><strong>ASCENSION</strong><small>La Citadelle des Miracles</small></span>
      </a>
      <div class="v5-nav-scroll"></div>
      <div class="v5-sidebar-footer">
        <button type="button" class="v5-side-control" data-v5-action="density"><span>▦</span><span>Affichage</span></button>
        <button type="button" class="v5-side-control" data-v5-action="collapse"><span>⇤</span><span>Réduire le menu</span></button>
      </div>`;

    const scroll = aside.querySelector('.v5-nav-scroll');
    groups.forEach(group => {
      const items = pages.filter(page => page.group === group);
      if (!items.length) return;
      const section = document.createElement('section');
      section.className = 'v5-nav-section';
      section.innerHTML = `<div class="v5-nav-title">${groupLabels[group]}</div>`;
      items.forEach(page => {
        const link = document.createElement('a');
        link.className = 'v5-nav-link';
        link.href = page.href;
        link.dataset.label = page.label;
        link.innerHTML = `<span class="v5-nav-icon" aria-hidden="true">${page.icon}</span><span class="v5-nav-label">${page.label}</span>`;
        if (page.href === current.href) link.setAttribute('aria-current','page');
        section.appendChild(link);
      });
      scroll.appendChild(section);
    });
    document.body.appendChild(aside);
    return aside;
  }

  function buildTopbar(current){
    const topbar = document.createElement('div');
    topbar.className = 'v5-topbar';
    topbar.setAttribute('role','banner');
    topbar.innerHTML = `
      <button class="v5-menu-button" type="button" aria-label="Ouvrir le menu" data-v5-action="mobile-menu">☰</button>
      <div class="v5-breadcrumb" aria-label="Fil d’Ariane">
        <a href="index.html">ASCENSION</a><span class="v5-breadcrumb-sep">/</span>
        <span>${current.group}</span><span class="v5-breadcrumb-sep">/</span>
        <strong>${current.label}</strong>
      </div>
      <div class="v5-top-spacer"></div>
      <button class="v5-search-button" type="button" data-v5-action="search" aria-label="Ouvrir la recherche">
        <span aria-hidden="true">⌕</span><strong>Rechercher dans le wiki</strong><kbd>Ctrl K</kbd>
      </button>
      <button class="v5-top-action" type="button" data-v5-action="density" aria-label="Changer l’affichage" title="Changer l’affichage">▦</button>
      <span class="v5-version-pill">${VERSION} · CITADELLE</span>`;
    document.body.appendChild(topbar);

    const backdrop = document.createElement('div');
    backdrop.className = 'v5-mobile-backdrop';
    backdrop.dataset.v5Action = 'close-menu';
    document.body.appendChild(backdrop);
    return topbar;
  }

  function buildDashboard(){
    if ((currentFile() !== 'index.html' && !document.body.hasAttribute('data-v5-preview-home')) || document.querySelector('.v5-dashboard')) return;
    const main = document.querySelector('main');
    if (!main) return;
    const dashboard = document.createElement('section');
    dashboard.className = 'v5-dashboard';
    dashboard.setAttribute('aria-label','Tableau de bord de la Citadelle');
    dashboard.innerHTML = `
      <div class="v5-dashboard-head">
        <div>
          <p class="v5-dashboard-kicker">${VERSION} · Nouvelle interface</p>
          <h1>La Citadelle<br>des Miracles</h1>
          <p class="v5-dashboard-lead">Toute l’aventure est désormais organisée autour de quatre ailes : progression, combat, exploration et compagnie.</p>
        </div>
        <a class="v5-dashboard-continue" href="adventure.html">Reprendre mon aventure →</a>
      </div>
      <div class="v5-dashboard-grid">
        <a class="v5-dash-card" href="quests.html"><span class="v5-dash-icon">☷</span><strong>Progression</strong><span>72 quêtes, dix chapitres et suivi narratif.</span></a>
        <a class="v5-dash-card" href="bosses.html"><span class="v5-dash-icon">⚔</span><strong>Combat</strong><span>Boss, Miracles, compétences, classes et bestiaire.</span></a>
        <a class="v5-dash-card" href="atlas.html"><span class="v5-dash-icon">⌖</span><strong>Exploration</strong><span>48 structures, dimensions et index du butin.</span></a>
        <a class="v5-dash-card" href="adventure.html"><span class="v5-dash-icon">♜</span><strong>Compagnie</strong><span>Progression collective, notes et sauvegardes.</span></a>
      </div>`;
    main.insertBefore(dashboard, main.firstChild);
  }

  function collectCurrentHeadings(current){
    const items = [];
    document.querySelectorAll('main h1, main h2, main h3').forEach((heading,index) => {
      const text = heading.textContent.trim();
      if (!text || heading.closest('.v5-dashboard')) return;
      if (!heading.id) heading.id = `v5-section-${index + 1}`;
      items.push({
        href:`${current.href}#${heading.id}`,
        label:text,
        icon:heading.tagName === 'H1' ? '◆' : '›',
        group:current.label,
        description:'Section de la page actuelle',
        type:'section'
      });
    });
    return items;
  }

  function buildSearch(current){
    const overlay = document.createElement('div');
    overlay.className = 'v5-search-overlay';
    overlay.setAttribute('aria-hidden','true');
    overlay.innerHTML = `
      <div class="v5-search-dialog" role="dialog" aria-modal="true" aria-label="Recherche dans le wiki">
        <div class="v5-search-head"><span aria-hidden="true">⌕</span><input type="search" autocomplete="off" placeholder="Boss, quête, Miracle, structure…"><button class="v5-search-close" type="button" aria-label="Fermer">×</button></div>
        <div class="v5-search-results"></div>
        <div class="v5-search-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> naviguer</span><span><kbd>Entrée</kbd> ouvrir</span><span><kbd>Échap</kbd> fermer</span></div>
      </div>`;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('input');
    const results = overlay.querySelector('.v5-search-results');
    const close = overlay.querySelector('.v5-search-close');
    const searchable = pages.map(page => ({...page,type:'page'})).concat(collectCurrentHeadings(current));
    let activeIndex = 0;
    let visible = [];

    function render(query=''){
      const q = normalize(query);
      visible = searchable.filter(item => {
        if (!q) return item.type === 'page';
        return normalize(`${item.label} ${item.group} ${item.description}`).includes(q);
      }).slice(0,22);
      activeIndex = Math.min(activeIndex, Math.max(visible.length - 1,0));
      if (!visible.length){
        results.innerHTML = '<div class="v5-search-empty"><strong>Aucun passage trouvé.</strong><br>Essaie un nom de boss, de quête, de Miracle ou de structure.</div>';
        return;
      }
      results.innerHTML = visible.map((item,index) => `
        <a class="v5-result${index === activeIndex ? ' is-active' : ''}" href="${item.href}">
          <span class="v5-result-icon">${item.icon}</span>
          <span><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.description)}</small></span>
          <span class="v5-result-type">${item.type === 'section' ? 'Section' : item.group}</span>
        </a>`).join('');
    }
    function open(){
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
      input.value = '';
      activeIndex = 0;
      render('');
      setTimeout(() => input.focus(),20);
    }
    function closeSearch(){
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }
    function refreshActive(){
      results.querySelectorAll('.v5-result').forEach((node,index) => node.classList.toggle('is-active',index === activeIndex));
      results.querySelector('.v5-result.is-active')?.scrollIntoView({block:'nearest'});
    }
    input.addEventListener('input',() => {activeIndex=0;render(input.value)});
    input.addEventListener('keydown',event => {
      if (event.key === 'ArrowDown'){event.preventDefault();activeIndex=Math.min(activeIndex+1,visible.length-1);refreshActive()}
      if (event.key === 'ArrowUp'){event.preventDefault();activeIndex=Math.max(activeIndex-1,0);refreshActive()}
      if (event.key === 'Enter' && visible[activeIndex]){event.preventDefault();location.href=visible[activeIndex].href}
    });
    close.addEventListener('click',closeSearch);
    overlay.addEventListener('mousedown',event => {if(event.target===overlay)closeSearch()});
    return {open,close:closeSearch,isOpen:()=>overlay.classList.contains('is-open')};
  }

  function escapeHtml(text){
    return String(text).replace(/[&<>'"]/g,char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function buildDensity(){
    const popover = document.createElement('div');
    popover.className = 'v5-density-popover';
    popover.innerHTML = `
      <p>Densité de lecture</p>
      <button class="v5-density-option" type="button" data-density="comfortable">Confortable — illustrée</button>
      <button class="v5-density-option" type="button" data-density="compact">Compacte — tactique</button>`;
    document.body.appendChild(popover);

    function apply(value){
      const density = value === 'compact' ? 'compact' : 'comfortable';
      document.body.classList.toggle('v5-density-compact',density === 'compact');
      popover.querySelectorAll('[data-density]').forEach(button => button.classList.toggle('is-active',button.dataset.density === density));
      safeSet(STORAGE.density,density);
    }
    function toggle(){popover.classList.toggle('is-open')}
    popover.addEventListener('click',event => {
      const button = event.target.closest('[data-density]');
      if (!button) return;
      apply(button.dataset.density);
      popover.classList.remove('is-open');
    });
    apply(safeGet(STORAGE.density,'comfortable'));
    return {toggle,close:()=>popover.classList.remove('is-open')};
  }

  function applyCollapsedState(value){
    const collapsed = value === true || value === '1';
    document.body.classList.toggle('v5-sidebar-collapsed',collapsed);
    const button = document.querySelector('[data-v5-action="collapse"]');
    if (button){
      button.querySelector('span:first-child').textContent = collapsed ? '⇥' : '⇤';
      button.querySelector('span:last-child').textContent = collapsed ? 'Déployer le menu' : 'Réduire le menu';
    }
    safeSet(STORAGE.collapsed,collapsed ? '1' : '0');
  }

  function init(){
    if (document.body.classList.contains('v5-citadel')) return;
    document.body.classList.add('v5-citadel','v5-ready');
    markLegacyHeaders();
    const current = pageForCurrent();
    buildSidebar(current);
    buildTopbar(current);
    buildDashboard();
    const search = buildSearch(current);
    const density = buildDensity();
    applyCollapsedState(safeGet(STORAGE.collapsed,'0'));

    document.addEventListener('click',event => {
      const action = event.target.closest('[data-v5-action]')?.dataset.v5Action;
      if (!action) {
        if (!event.target.closest('.v5-density-popover')) density.close();
        return;
      }
      if (action === 'collapse') applyCollapsedState(!document.body.classList.contains('v5-sidebar-collapsed'));
      if (action === 'mobile-menu') document.body.classList.toggle('v5-nav-open');
      if (action === 'close-menu') document.body.classList.remove('v5-nav-open');
      if (action === 'search') search.open();
      if (action === 'density') density.toggle();
    });

    document.querySelectorAll('.v5-sidebar a').forEach(link => link.addEventListener('click',() => document.body.classList.remove('v5-nav-open')));
    document.addEventListener('keydown',event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k'){
        event.preventDefault();search.open();return;
      }
      if (event.key === '/' && !/input|textarea|select/i.test(document.activeElement?.tagName || '')){
        event.preventDefault();search.open();return;
      }
      if (event.key === 'Escape'){
        if (search.isOpen()) search.close();
        document.body.classList.remove('v5-nav-open');
        density.close();
      }
    });

    window.addEventListener('resize',() => {
      if (window.innerWidth > 860) document.body.classList.remove('v5-nav-open');
    },{passive:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
