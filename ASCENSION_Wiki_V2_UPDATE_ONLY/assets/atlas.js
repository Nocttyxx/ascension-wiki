(() => {
  'use strict';
  const DATA = Array.isArray(window.ASCENSION_ATLAS_STRUCTURES) ? window.ASCENSION_ATLAS_STRUCTURES : [];
  const STORE = 'ascension-atlas-v4.9.1';
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const norm = v => String(v ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const esc = v => String(v ?? '').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const stars = n => '◆'.repeat(n) + '◇'.repeat(5-n);
  const slugClass = v => 'dim-' + norm(v).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const iconFor = d => ({'Overworld':'⌂','Nether':'♨','End':'◈','Twilight Forest':'✧'}[d] || '✦');
  const stageOrder = v => /début/i.test(v)?1:/milieu/i.test(v)?2:/fin/i.test(v)?3:4;
  const state = {search:'',dimension:'',stage:'',type:'',danger:5,bossOnly:false,favoritesOnly:false,unexploredOnly:false,sort:'recommended',tab:'structures', progress:loadProgress()};

  function loadProgress(){
    try { const p=JSON.parse(localStorage.getItem(STORE)||'{}'); return {explored:p.explored||{},favorites:p.favorites||{},updatedAt:p.updatedAt||null}; }
    catch { return {explored:{},favorites:{},updatedAt:null}; }
  }
  function saveProgress(){ state.progress.updatedAt=new Date().toISOString(); localStorage.setItem(STORE,JSON.stringify(state.progress)); updateStats(); renderJournal(); }
  function toast(msg){ const el=$('#atlasToast'); el.textContent=msg; el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),2200); }
  function unique(key){ return [...new Set(DATA.map(x=>x[key]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr')); }
  function matchSearch(x,q){ if(!q)return true; const hay=norm([x.name,x.mod,x.dimension,x.type,x.stage,x.where,x.summary,...x.tags,...x.threats,...x.loot.flatMap(l=>[l.name,l.note])].join(' ')); return q.split(/\s+/).every(t=>hay.includes(t)); }

  function setupFilters(){
    const dims=unique('dimension'); const counts=Object.fromEntries(dims.map(d=>[d,DATA.filter(x=>x.dimension===d).length]));
    $('#dimensionFilters').innerHTML=`<button class="active" data-dimension=""><span>Toutes</span><em>${DATA.length}</em></button>`+dims.map(d=>`<button data-dimension="${esc(d)}"><span>${esc(d)}</span><em>${counts[d]}</em></button>`).join('');
    unique('stage').forEach(v=>$('#stageFilter').insertAdjacentHTML('beforeend',`<option>${esc(v)}</option>`));
    unique('type').forEach(v=>$('#typeFilter').insertAdjacentHTML('beforeend',`<option>${esc(v)}</option>`));
    $('#dimensionFilters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;state.dimension=b.dataset.dimension;$$('#dimensionFilters button').forEach(x=>x.classList.toggle('active',x===b));renderStructures();});
    $('#stageFilter').onchange=e=>{state.stage=e.target.value;renderStructures();};
    $('#typeFilter').onchange=e=>{state.type=e.target.value;renderStructures();};
    $('#dangerFilter').oninput=e=>{state.danger=+e.target.value;$('#dangerValue').textContent=`${state.danger}/5`;renderStructures();};
    $('#atlasSearch').oninput=e=>{state.search=norm(e.target.value.trim());renderStructures();};
    ['bossOnly','favoritesOnly','unexploredOnly'].forEach(id=>$('#'+id).onchange=e=>{state[id]=e.target.checked;renderStructures();});
    $('#sortStructures').onchange=e=>{state.sort=e.target.value;renderStructures();};
    $('#resetFilters').onclick=resetFilters;
  }

  function resetFilters(){
    Object.assign(state,{search:'',dimension:'',stage:'',type:'',danger:5,bossOnly:false,favoritesOnly:false,unexploredOnly:false,sort:'recommended'});
    $('#atlasSearch').value='';$('#stageFilter').value='';$('#typeFilter').value='';$('#dangerFilter').value=5;$('#dangerValue').textContent='5/5';$('#bossOnly').checked=false;$('#favoritesOnly').checked=false;$('#unexploredOnly').checked=false;$('#sortStructures').value='recommended';
    $$('#dimensionFilters button').forEach(b=>b.classList.toggle('active',!b.dataset.dimension));renderStructures();
  }
  function filtered(){
    let a=DATA.filter(x=>matchSearch(x,state.search)&&(!state.dimension||x.dimension===state.dimension)&&(!state.stage||x.stage===state.stage)&&(!state.type||x.type===state.type)&&x.danger<=state.danger&&(!state.bossOnly||!/^(aucun|variable)$/i.test(x.boss))&&(!state.favoritesOnly||state.progress.favorites[x.id])&&(!state.unexploredOnly||!state.progress.explored[x.id]));
    const sorters={name:(a,b)=>a.name.localeCompare(b.name,'fr'),'danger-desc':(a,b)=>b.danger-a.danger||b.lootScore-a.lootScore,'loot-desc':(a,b)=>b.lootScore-a.lootScore||b.danger-a.danger,stage:(a,b)=>stageOrder(a.stage)-stageOrder(b.stage)||a.name.localeCompare(b.name,'fr'),recommended:(a,b)=>(b.lootScore*2-b.danger)-(a.lootScore*2-a.danger)||a.danger-b.danger};
    return a.sort(sorters[state.sort]);
  }
  function card(x){
    const fav=!!state.progress.favorites[x.id], exp=!!state.progress.explored[x.id];
    return `<article class="structure-card ${slugClass(x.dimension)}" data-id="${esc(x.id)}"><div class="structure-visual"><span class="structure-dimension">${esc(x.dimension)}</span><span class="structure-symbol">${iconFor(x.dimension)}</span><div class="card-actions"><button class="icon-button favorite ${fav?'active':''}" title="Ajouter aux favorites" data-action="favorite">${fav?'★':'☆'}</button><button class="icon-button explored ${exp?'active':''}" title="Marquer comme explorée" data-action="explored">${exp?'✓':'○'}</button></div></div><div class="structure-body"><div class="structure-topline"><span>${esc(x.mod)}</span><span>${esc(x.type)}</span></div><h3>${esc(x.name)}</h3><p class="structure-summary">${esc(x.summary)}</p><div class="structure-ratings"><div class="rating"><span>Danger</span><strong>${stars(x.danger)}</strong></div><div class="rating"><span>Butin</span><strong>${stars(x.lootScore)}</strong></div></div><div class="structure-footer"><span class="stage-tag">${esc(x.stage)}</span><button class="open-structure" data-action="open">Ouvrir la fiche →</button></div></div></article>`;
  }
  function renderStructures(){
    const a=filtered();$('#structureGrid').innerHTML=a.map(card).join('');$('#structureEmpty').hidden=!!a.length;$('#resultCount').textContent=`${a.length} structure${a.length>1?'s':''} trouvée${a.length>1?'s':''}`;
    $('#resultTitle').textContent=state.dimension||state.stage||state.type||state.search?'Routes filtrées':'Toutes les structures';
    const chips=[]; if(state.dimension)chips.push(state.dimension);if(state.stage)chips.push(state.stage);if(state.type)chips.push(state.type);if(state.danger<5)chips.push(`Danger ≤ ${state.danger}`);if(state.bossOnly)chips.push('Avec boss');if(state.favoritesOnly)chips.push('Favorites');if(state.unexploredOnly)chips.push('Non explorées');
    $('#activeFilters').innerHTML=chips.map(c=>`<span class="filter-chip">${esc(c)}</span>`).join('');
  }
  function toggle(id,kind){ const bucket=state.progress[kind]; if(bucket[id]) delete bucket[id]; else bucket[id]=kind==='explored'?new Date().toISOString():true; saveProgress(); renderStructures(); if($('#lootPanel')&&!$('#lootPanel').hidden) renderLoot(); }

  function openDrawer(id){ const x=DATA.find(v=>v.id===id);if(!x)return; const fav=!!state.progress.favorites[id], exp=!!state.progress.explored[id];
    $('#drawerContent').innerHTML=`<div class="drawer-hero ${slugClass(x.dimension)}"><p class="atlas-kicker">${esc(x.mod)} • ${esc(x.dimension)}</p><h2>${esc(x.name)}</h2></div><div class="drawer-body"><p class="drawer-summary">${esc(x.summary)}</p><div class="drawer-actions"><button class="atlas-button ${fav?'primary':''}" data-drawer-action="favorite">${fav?'★ Favorite':'☆ Ajouter aux favorites'}</button><button class="atlas-button ${exp?'primary':''}" data-drawer-action="explored">${exp?'✓ Explorée':'○ Marquer comme explorée'}</button><button class="atlas-button" data-drawer-action="copy">Copier la checklist</button></div><div class="drawer-grid"><div class="drawer-stat"><span>Danger</span><strong>${stars(x.danger)}</strong></div><div class="drawer-stat"><span>Intérêt du butin</span><strong>${stars(x.lootScore)}</strong></div><div class="drawer-stat"><span>Progression</span><strong>${esc(x.stage)}</strong></div><div class="drawer-stat"><span>Compagnie</span><strong>${esc(x.players)} joueurs</strong></div><div class="drawer-stat"><span>Boss / rencontre</span><strong>${esc(x.boss)}</strong></div><div class="drawer-stat"><span>Localisation</span><strong>${esc(x.where)}</strong></div></div><section class="drawer-section"><h3>Menaces principales</h3><ul class="drawer-list">${x.threats.map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="drawer-section"><h3>Butin notable</h3>${x.loot.map(l=>`<div class="loot-detail"><strong>${esc(l.name)}</strong><span>${esc(l.rarity)}<br>${esc(l.note)}</span></div>`).join('')}</section><section class="drawer-section"><h3>Préparation recommandée</h3><ul class="drawer-list">${x.prep.map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="drawer-section"><h3>Référence</h3><p class="structure-summary">${esc(x.source)}. Les tables de butin moddé peuvent varier selon le monde et la configuration.</p></section></div>`;
    $('#structureDrawer').dataset.id=id;$('#atlasOverlay').hidden=false;$('#structureDrawer').classList.add('open');$('#structureDrawer').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';history.replaceState(null,'','#structure='+encodeURIComponent(id));
  }
  function closeDrawer(){ $('#structureDrawer').classList.remove('open');$('#structureDrawer').setAttribute('aria-hidden','true');$('#atlasOverlay').hidden=true;document.body.style.overflow='';if(location.hash.startsWith('#structure='))history.replaceState(null,'',location.pathname+location.search); }
  function checklist(x){ return `ASCENSION — EXPÉDITION : ${x.name}\nDimension : ${x.dimension}\nDanger : ${x.danger}/5 | Butin : ${x.lootScore}/5\nBoss : ${x.boss}\nLocalisation : ${x.where}\n\nPRÉPARATION\n${x.prep.map(v=>'☐ '+v).join('\n')}\n\nOBJECTIFS DE BUTIN\n${x.loot.map(v=>'☐ '+v.name).join('\n')}\n\nRETOUR\n☐ Waystone / point de repli posé\n☐ Coffres principaux fouillés\n☐ Compagnie regroupée`; }

  function lootEntries(){ const map=new Map(); DATA.forEach(x=>x.loot.forEach(l=>{const key=norm(l.name);if(!map.has(key))map.set(key,{name:l.name,rarities:new Set(),locations:[]});const e=map.get(key);e.rarities.add(l.rarity);e.locations.push({id:x.id,name:x.name,dimension:x.dimension,note:l.note});})); return [...map.values()].sort((a,b)=>a.name.localeCompare(b.name,'fr')); }
  function renderLoot(){ const q=norm($('#lootSearch').value.trim()); const list=lootEntries().filter(e=>!q||norm([e.name,...e.locations.flatMap(l=>[l.name,l.dimension,l.note])].join(' ')).includes(q));$('#lootIndex').innerHTML=list.map(e=>`<article class="loot-card"><h3>${esc(e.name)}</h3><div class="loot-meta">${[...e.rarities].map(esc).join(' • ')} • ${e.locations.length} source${e.locations.length>1?'s':''}</div><div class="loot-locations">${e.locations.map(l=>`<button class="loot-location" data-open="${esc(l.id)}"><strong>${esc(l.name)}</strong><br><small>${esc(l.dimension)} — ${esc(l.note)}</small></button>`).join('')}</div></article>`).join('');$('#lootEmpty').hidden=!!list.length; }

  function updateStats(){ const exp=Object.keys(state.progress.explored).filter(id=>DATA.some(x=>x.id===id)).length; const fav=Object.keys(state.progress.favorites).filter(id=>DATA.some(x=>x.id===id)).length;const pct=DATA.length?Math.round(exp/DATA.length*100):0;$('#structureTotal').textContent=DATA.length;$('#exploredTotal').textContent=exp;$('#favoriteTotal').textContent=fav;$('#completionTotal').textContent=pct+'%'; }
  function renderJournal(){ if(!$('#journalPercent'))return; const exIds=Object.entries(state.progress.explored).filter(([id])=>DATA.some(x=>x.id===id)).sort((a,b)=>String(b[1]).localeCompare(String(a[1])));const favIds=Object.keys(state.progress.favorites).filter(id=>DATA.some(x=>x.id===id));const pct=DATA.length?Math.round(exIds.length/DATA.length*100):0;$('#journalPercent').textContent=pct+'%';$('#journalRatio').textContent=`${exIds.length} / ${DATA.length}`;$('#journalBar').style.width=pct+'%';$('#journalMessage').textContent=pct===100?'L’Atlas entier porte désormais la marque de ta compagnie.':pct>=50?'Plus de la moitié des routes connues ont été explorées.':pct>0?'Chaque structure cochée enrichit la mémoire de la compagnie.':'Aucune expédition n’est encore enregistrée.';
    const row=id=>{const x=DATA.find(v=>v.id===id);return `<div class="journal-item"><span><strong>${esc(x.name)}</strong><br><small>${esc(x.dimension)} • ${esc(x.mod)}</small></span><button data-open="${esc(id)}">Ouvrir →</button></div>`};
    $('#exploredList').innerHTML=exIds.length?exIds.slice(0,12).map(([id])=>row(id)).join(''):'<p class="journal-empty">Aucune structure explorée.</p>';$('#favoriteList').innerHTML=favIds.length?favIds.map(row).join(''):'<p class="journal-empty">Aucune expédition favorite.</p>';
  }
  function switchTab(tab){state.tab=tab;$$('.atlas-tab').forEach(b=>{const on=b.dataset.tab===tab;b.classList.toggle('active',on);b.setAttribute('aria-selected',on?'true':'false');});$$('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==tab);if(tab==='loot')renderLoot();if(tab==='journal')renderJournal();scrollTo({top:$('#top').offsetTop+330,behavior:'smooth'});}
  function exportProgress(){ const data={schema:'ascension-atlas-progress',version:1,application:'ASCENSION Wiki — Atlas',atlasVersion:'4.9.1',explored:state.progress.explored,favorites:state.progress.favorites,exportedAt:new Date().toISOString()};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ascension_atlas_progression.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);toast('Progression Atlas exportée.');}
  async function importProgress(file){ try{const d=JSON.parse(await file.text());if(d.schema!=='ascension-atlas-progress')throw new Error('format');state.progress.explored={...state.progress.explored,...(d.explored||{})};state.progress.favorites={...state.progress.favorites,...(d.favorites||{})};saveProgress();renderStructures();toast('Progression Atlas importée sans effacement.');}catch{toast('Fichier Atlas invalide.');}}

  function bind(){
    setupFilters();
    $('#structureGrid').addEventListener('click',e=>{const c=e.target.closest('.structure-card');if(!c)return;const a=e.target.closest('[data-action]');if(!a)return;if(a.dataset.action==='open')openDrawer(c.dataset.id);else toggle(c.dataset.id,a.dataset.action==='favorite'?'favorites':'explored');});
    $('#lootIndex').addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openDrawer(b.dataset.open);});$('#journalPanel').addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openDrawer(b.dataset.open);});
    $('#drawerClose').onclick=closeDrawer;$('#atlasOverlay').onclick=closeDrawer;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();});
    $('#structureDrawer').addEventListener('click',async e=>{const b=e.target.closest('[data-drawer-action]');if(!b)return;const id=$('#structureDrawer').dataset.id,x=DATA.find(v=>v.id===id);if(b.dataset.drawerAction==='copy'){try{await navigator.clipboard.writeText(checklist(x));toast('Checklist copiée.');}catch{toast('Copie impossible dans ce navigateur.');}}else{toggle(id,b.dataset.drawerAction==='favorite'?'favorites':'explored');openDrawer(id);}});
    $$('.atlas-tab').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));$('#openLootTab').onclick=()=>switchTab('loot');$('#lootSearch').oninput=renderLoot;
    $('#showRecommended').onclick=()=>{resetFilters();state.sort='recommended';$('#sortStructures').value='recommended';state.unexploredOnly=true;$('#unexploredOnly').checked=true;renderStructures();toast('Les meilleures routes non explorées sont affichées.');};
    $('#exportProgress').onclick=exportProgress;$('#importProgress').onchange=e=>{const f=e.target.files[0];if(f)importProgress(f);e.target.value='';};
    $('#resetProgress').onclick=()=>{if(confirm('Effacer uniquement les favoris et structures explorées de l’Atlas ?')){state.progress={explored:{},favorites:{},updatedAt:null};saveProgress();renderStructures();toast('Suivi Atlas effacé.');}};
  }
  function init(){bind();renderStructures();renderLoot();updateStats();renderJournal();const m=location.hash.match(/^#structure=(.+)$/);if(m)openDrawer(decodeURIComponent(m[1]));}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
