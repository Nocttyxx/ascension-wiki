(() => {
'use strict';
const root = document.querySelector('[data-adventure-root]');
if (!root) return;

const STORAGE_KEY = 'ascension.adventure.v4';
const SCHEMA = 'ascension-wiki-progress';
const VERSION = 2;
const personalInputs = [...root.querySelectorAll('[data-scope="personal"][data-goal]')];
const companyInputs = [...root.querySelectorAll('[data-scope="company"][data-goal]')];
const classInputs = [...root.querySelectorAll('input[name="adventure-class"]')];
const endingInputs = [...root.querySelectorAll('input[name="adventure-ending"]')];
const playerName = document.getElementById('player-name');
const companyName = document.getElementById('company-name');
const teamId = document.getElementById('team-id');
const spoilerToggle = document.getElementById('spoiler-toggle');
const saveStatus = document.getElementById('save-status');
const toast = document.getElementById('adventure-toast');
const migrationNote = document.getElementById('migration-note');
const tabs = [...root.querySelectorAll('[data-tab]')];
const panes = [...root.querySelectorAll('[data-pane]')];

const personalIds = new Set(personalInputs.map(i => i.dataset.goal));
const companyIds = new Set(companyInputs.map(i => i.dataset.goal));
const validClasses = new Set(classInputs.map(i => i.value));
const validEndings = new Set(endingInputs.map(i => i.value));

function now(){ return new Date().toISOString(); }
function uniqueValid(list, valid){ return [...new Set(Array.isArray(list) ? list.filter(id => valid.has(id)) : [])]; }
function defaults(){ return { schema:SCHEMA, version:VERSION, profile:{playerName:'',className:'',spoilers:false}, personal:{completed:[]}, company:{name:'',teamId:'',completed:[],ending:''}, meta:{updatedAt:now(),source:'wiki'}, ui:{activeTab:'personal'} }; }

const legacyMap = {
  'expedition-nether':'personal-expedition-nether','expedition-twilight':'personal-expedition-twilight','expedition-end':'personal-expedition-end','expedition-aquamirae':'personal-expedition-aquamirae','expedition-stalwart':'personal-expedition-stalwart',
  'chapter-1':'company-chapter-1','chapter-2':'company-chapter-2','chapter-3':'company-chapter-3','chapter-4':'company-chapter-4','chapter-5':'company-chapter-5','chapter-6':'company-chapter-6','chapter-7':'company-chapter-7','chapter-8':'company-chapter-8','chapter-9':'company-chapter-9','chapter-10':'company-chapter-10',
  'proof-mowzie':'company-proof-mowzie','proof-cataclysm':'company-proof-cataclysm','proof-naga':'company-proof-naga','proof-dragon':'company-proof-dragon',
  'trial-braise':'company-trial-braise','trial-gardien':'company-trial-gardien','trial-horizon':'company-trial-horizon','trial-memoire':'company-trial-memoire','trial-rempart':'company-trial-rempart','trial-volonte':'company-trial-volonte',
  'boss-lich':'company-boss-lich','boss-minoshroom':'company-boss-minoshroom','boss-hydra':'company-boss-hydra','boss-knight-phantom':'company-boss-knight-phantom','boss-ur-ghast':'company-boss-ur-ghast','boss-alpha-yeti':'company-boss-alpha-yeti','boss-snow-queen':'company-boss-snow-queen','boss-vaelorn':'company-boss-vaelorn'
};
const legacyParticipationMap = {
  'boss-lich':'personal-participation-lich','boss-minoshroom':'personal-participation-minoshroom','boss-hydra':'personal-participation-hydra','boss-knight-phantom':'personal-participation-knight-phantom','boss-ur-ghast':'personal-participation-ur-ghast','boss-alpha-yeti':'personal-participation-alpha-yeti','boss-snow-queen':'personal-participation-snow-queen','boss-vaelorn':'personal-participation-vaelorn'
};

function migrateV1(old){
  const state = defaults();
  state.profile.playerName = typeof old.playerName === 'string' ? old.playerName.slice(0,40) : '';
  state.profile.className = validClasses.has(old.className) ? old.className : '';
  state.profile.spoilers = Boolean(old.spoilers);
  state.company.name = typeof old.companyName === 'string' ? old.companyName.slice(0,40) : '';
  state.company.ending = validEndings.has(old.ending) ? old.ending : '';
  for (const id of Array.isArray(old.completed) ? old.completed : []) {
    const mapped = legacyMap[id];
    if (mapped && companyIds.has(mapped)) state.company.completed.push(mapped);
    if (mapped && personalIds.has(mapped)) state.personal.completed.push(mapped);
    const participation = legacyParticipationMap[id];
    if (participation && personalIds.has(participation)) state.personal.completed.push(participation);
  }
  state.personal.completed = [...new Set(state.personal.completed)];
  state.company.completed = [...new Set(state.company.completed)];
  state.meta = {updatedAt: typeof old.updatedAt === 'string' ? old.updatedAt : now(), source:'migration-v4.0', migratedFrom:1};
  return {state, migrated:true};
}

function fromMinecraft(data){
  const state = defaults();
  const player = data.player || data.profile || {};
  const team = data.team || data.company || {};
  state.profile.playerName = String(player.name || player.playerName || '').slice(0,40);
  state.profile.className = validClasses.has(player.className) ? player.className : '';
  state.profile.spoilers = Boolean(player.spoilers || data.spoilers);
  state.personal.completed = uniqueValid(player.completed || data.personal?.completed, personalIds);
  state.company.name = String(team.name || '').slice(0,40);
  state.company.teamId = String(team.id || team.teamId || '').slice(0,80);
  state.company.completed = uniqueValid(team.completed || data.company?.completed, companyIds);
  state.company.ending = validEndings.has(team.ending) ? team.ending : '';
  state.meta = {updatedAt:now(),source:'minecraft-import'};
  return state;
}

function sanitize(raw){
  if (!raw || typeof raw !== 'object') return {state:defaults(),migrated:false};
  if (!raw.version || raw.version === 1 || (Array.isArray(raw.completed) && !raw.personal)) return migrateV1(raw);
  if (raw.schema === 'ascension-minecraft-progress' || raw.player || raw.team) return {state:fromMinecraft(raw),migrated:false};
  const state = defaults();
  state.profile.playerName = String(raw.profile?.playerName || '').slice(0,40);
  state.profile.className = validClasses.has(raw.profile?.className) ? raw.profile.className : '';
  state.profile.spoilers = Boolean(raw.profile?.spoilers);
  state.personal.completed = uniqueValid(raw.personal?.completed, personalIds);
  state.company.name = String(raw.company?.name || '').slice(0,40);
  state.company.teamId = String(raw.company?.teamId || '').slice(0,80);
  state.company.completed = uniqueValid(raw.company?.completed, companyIds);
  state.company.ending = validEndings.has(raw.company?.ending) ? raw.company.ending : '';
  state.meta = {updatedAt: typeof raw.meta?.updatedAt === 'string' ? raw.meta.updatedAt : now(),source:String(raw.meta?.source || 'wiki')};
  state.ui.activeTab = raw.ui?.activeTab === 'company' ? 'company' : 'personal';
  return {state,migrated:false};
}

function load(){
  try { const raw=localStorage.getItem(STORAGE_KEY); return raw ? sanitize(JSON.parse(raw)) : {state:defaults(),migrated:false}; }
  catch(e){ console.warn(e); return {state:defaults(),migrated:false}; }
}
let loaded = load();
let state = loaded.state;

function persist(message='Progression sauvegardée.'){
  state.meta.updatedAt=now(); state.meta.source='wiki';
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); saveStatus.textContent=message; saveStatus.classList.add('saved'); setTimeout(()=>saveStatus.classList.remove('saved'),900); }
  catch(e){ saveStatus.textContent='Impossible d’enregistrer dans ce navigateur.'; console.error(e); }
}
function say(message){ toast.textContent=message; toast.classList.add('visible'); clearTimeout(say.t); say.t=setTimeout(()=>toast.classList.remove('visible'),2400); }
function activateTab(name,scroll=false){
  state.ui.activeTab=name==='company'?'company':'personal';
  tabs.forEach(tab=>{ const active=tab.dataset.tab===state.ui.activeTab; tab.classList.toggle('active',active); tab.setAttribute('aria-selected',String(active)); });
  panes.forEach(pane=>{ const active=pane.dataset.pane===state.ui.activeTab; pane.hidden=!active; pane.classList.toggle('active',active); });
  persist('Vue enregistrée.');
  if(scroll) document.querySelector('.hybrid-mode-panel')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function apply(){
  playerName.value=state.profile.playerName; companyName.value=state.company.name; teamId.value=state.company.teamId; spoilerToggle.checked=state.profile.spoilers;
  classInputs.forEach(i=>i.checked=i.value===state.profile.className);
  endingInputs.forEach(i=>i.checked=i.value===state.company.ending);
  personalInputs.forEach(i=>i.checked=state.personal.completed.includes(i.dataset.goal));
  companyInputs.forEach(i=>i.checked=state.company.completed.includes(i.dataset.goal));
  tabs.forEach(tab=>{ const active=tab.dataset.tab===state.ui.activeTab; tab.classList.toggle('active',active); tab.setAttribute('aria-selected',String(active)); });
  panes.forEach(pane=>{ const active=pane.dataset.pane===state.ui.activeTab; pane.hidden=!active; pane.classList.toggle('active',active); });
  updateSpoilers(); updateDashboard();
}
function sync(){
  state.profile.playerName=playerName.value.trim(); state.profile.className=classInputs.find(i=>i.checked)?.value||''; state.profile.spoilers=spoilerToggle.checked;
  state.personal.completed=personalInputs.filter(i=>i.checked).map(i=>i.dataset.goal);
  state.company.name=companyName.value.trim(); state.company.teamId=teamId.value.trim(); state.company.completed=companyInputs.filter(i=>i.checked).map(i=>i.dataset.goal); state.company.ending=endingInputs.find(i=>i.checked)?.value||'';
  persist(); updateSpoilers(); updateDashboard();
}
function updateSpoilers(){ root.querySelectorAll('[data-spoiler-lock]').forEach(el=>el.hidden=state.profile.spoilers); root.querySelectorAll('[data-spoiler-content]').forEach(el=>el.hidden=!state.profile.spoilers); }
function pct(done,total){ return total ? Math.round(done/total*100) : 0; }
function titleFor(percent,scope){
  if(scope==='personal') return percent===0?'Le porteur s’éveille':percent<30?'Les premiers pas':percent<60?'L’aventurier se forge':percent<100?'Le porteur s’élève':'Maîtrise personnelle';
  return percent===0?'La compagnie se rassemble':percent<30?'Les premières alliances':percent<60?'Le registre se remplit':percent<100?'Aux portes de Vaelorn':'Destin accompli';
}
const objectives=[
 {scope:'personal',special:'class',title:'Choisir une classe',detail:'Définis ton rôle personnel.',target:'panel-personal'},
 ...personalInputs.map(i=>({scope:'personal',id:i.dataset.goal,title:i.closest('label').querySelector('strong').textContent,detail:i.closest('label').querySelector('small').textContent,target:'panel-personal'})),
 ...companyInputs.map(i=>({scope:'company',id:i.dataset.goal,title:i.closest('label').querySelector('strong').textContent,detail:i.closest('label').querySelector('small').textContent,target:'panel-company'})),
 {scope:'company',special:'ending',title:'Choisir le destin du ciel',detail:'Enregistre la fin commune après Vaelorn.',target:'panel-company'}
];
let nextTarget='personal';
function updateDashboard(){
  const pDone=state.personal.completed.length+(state.profile.className?1:0), pTotal=personalInputs.length+1;
  const cDone=state.company.completed.length+(state.company.ending?1:0), cTotal=companyInputs.length+1;
  const p=pct(pDone,pTotal), c=pct(cDone,cTotal), overall=pct(pDone+cDone,pTotal+cTotal);
  document.getElementById('personal-percent').textContent=p+'%'; document.getElementById('personal-bar').style.width=p+'%'; document.getElementById('personal-count').textContent=pDone+'/'+pTotal; document.getElementById('personal-title').textContent=titleFor(p,'personal');
  document.getElementById('company-percent').textContent=c+'%'; document.getElementById('company-bar').style.width=c+'%'; document.getElementById('company-count').textContent=cDone+'/'+cTotal; document.getElementById('company-title').textContent=titleFor(c,'company');
  document.getElementById('overall-percent').textContent=overall+'%';
  document.getElementById('solo-mode-text').textContent=state.company.name ? 'Les validations collectives sont liées à « '+state.company.name+' ».' : 'Sans compagnie définie, tu peux utiliser les deux vues comme une partie solo.';
  let next=objectives.find(o=>o.special==='class'?!state.profile.className:o.special==='ending'?!state.company.ending:o.scope==='personal'?!state.personal.completed.includes(o.id):!state.company.completed.includes(o.id));
  if(!next) next={scope:'personal',title:'Ascension accomplie',detail:'Toutes les étapes personnelles et collectives sont enregistrées.',target:'panel-personal'};
  document.getElementById('next-objective').textContent=next.title; document.getElementById('next-objective-detail').textContent=next.detail; nextTarget=next.scope;
}
function exportPayload(mode){
  const full={...state,meta:{...state.meta,exportedAt:now(),source:'wiki-export',mode}};
  if(mode==='personal') return {schema:SCHEMA,version:VERSION,profile:full.profile,personal:full.personal,meta:full.meta};
  if(mode==='company') return {schema:SCHEMA,version:VERSION,company:full.company,meta:full.meta};
  return full;
}
function download(mode){
  const payload=exportPayload(mode); const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a');
  const base=(state.company.name||state.profile.playerName||'ascension').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase();
  a.href=url; a.download=`ascension-${mode}-${base||'progression'}.json`; a.click(); URL.revokeObjectURL(url); say(mode==='all'?'Progression complète exportée.':mode==='personal'?'Progression du joueur exportée.':'Progression de la compagnie exportée.');
}
async function importFile(file){
  if(!file)return; try{ const result=sanitize(JSON.parse(await file.text()));
    // Les exports partiels fusionnent au lieu d’effacer l’autre vue.
    const raw=JSON.parse(await file.text());
    if(raw.version===2 && raw.personal && !raw.company){ state.profile=result.state.profile; state.personal=result.state.personal; }
    else if(raw.version===2 && raw.company && !raw.personal && !raw.profile){ state.company=result.state.company; }
    else state=result.state;
    persist('Progression importée.'); apply(); say('Import réussi.');
  }catch(e){console.error(e);say('Ce fichier de progression est invalide.');}
}

[...personalInputs,...companyInputs].forEach(i=>i.addEventListener('change',sync)); classInputs.forEach(i=>i.addEventListener('change',sync)); endingInputs.forEach(i=>i.addEventListener('change',sync));
[playerName,companyName,teamId].forEach(i=>i.addEventListener('input',sync)); spoilerToggle.addEventListener('change',sync);
tabs.forEach(tab=>tab.addEventListener('click',()=>activateTab(tab.dataset.tab)));
root.querySelectorAll('[data-open-scope]').forEach(card=>{ const open=()=>activateTab(card.dataset.openScope,true); card.addEventListener('click',open); card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}}); });
document.getElementById('next-objective-button').addEventListener('click',()=>activateTab(nextTarget,true));
document.getElementById('export-all').addEventListener('click',()=>download('all')); document.getElementById('export-personal').addEventListener('click',()=>download('personal')); document.getElementById('export-company').addEventListener('click',()=>download('company'));
document.getElementById('import-adventure').addEventListener('change',e=>{importFile(e.target.files?.[0]);e.target.value='';});
document.getElementById('reset-adventure').addEventListener('click',()=>{if(!confirm('Effacer les progressions personnelle et collective de ce navigateur ?'))return;state=defaults();persist('Progression réinitialisée.');apply();say('Progression réinitialisée.');});
migrationNote.querySelector('button')?.addEventListener('click',()=>migrationNote.hidden=true);
apply();
if(loaded.migrated){ persist('Progression V4.0 migrée.'); migrationNote.hidden=false; }
})();