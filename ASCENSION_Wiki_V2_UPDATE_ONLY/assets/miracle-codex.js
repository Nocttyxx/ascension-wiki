
(() => {
const DATA=window.ASCENSION_MIRACLES||[], KEY="ascension.miracles.v1";
const state=Object.assign({obtained:[],favorites:[],selected:null,checks:{},notes:{},filters:{q:"",type:"all",stage:"all",class:"all",onlyMissing:false}},JSON.parse(localStorage.getItem(KEY)||"{}"));
const $=s=>document.querySelector(s), save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const OFFICIAL_PORTRAITS=new Set(["agony","antitheus","enderblaster","moonless","napoleon","orbit","ruine","satsujin","solar","torment"]);
const artPath=id=>`assets/miracle_icons/${id}.${OFFICIAL_PORTRAITS.has(id)?"png":"svg"}`;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function card(m){
 const got=state.obtained.includes(m.id), fav=state.favorites.includes(m.id);
 return `<article class="miracle-card ${got?"is-obtained":""}" data-id="${m.id}">
 <div class="miracle-art"><img src="${artPath(m.id)}" alt=""><span>${esc(m.stage)}</span></div>
 <div class="miracle-card-body"><p class="page-kicker">${esc(m.type)} · ${esc(m.role)}</p><h2>${esc(m.name)}</h2><h3>${esc(m.subtitle)}</h3>
 <p>${esc(m.summary)}</p><div class="miracle-tags">${m.classes.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
 <div class="miracle-actions"><button data-a="details">Ouvrir la fiche</button><button data-a="favorite" title="Favori">${fav?"★":"☆"}</button><button data-a="obtained">${got?"✓ Obtenu":"○ À obtenir"}</button></div></div></article>`;
}
function filtered(){
 const f=state.filters,q=(f.q||"").toLowerCase();
 return DATA.filter(m=>(!q||JSON.stringify(m).toLowerCase().includes(q))&&(f.type==="all"||m.type===f.type)&&(f.stage==="all"||m.stage===f.stage)&&(f.class==="all"||m.classes.includes(f.class))&&(!f.onlyMissing||!state.obtained.includes(m.id)));
}
function render(){
 $("#miracle-count").textContent=`${state.obtained.length} / ${DATA.length} obtenus`;
 $("#miracle-grid").innerHTML=filtered().map(card).join("")||'<div class="panel"><h2>Aucun Miracle trouvé</h2></div>';
 document.querySelectorAll(".miracle-card").forEach(el=>el.onclick=e=>{
   const id=el.dataset.id,a=e.target.closest("button")?.dataset.a;if(!a)return;
   if(a==="details") open(id);
   if(a==="favorite"){toggle("favorites",id);render()}
   if(a==="obtained"){toggle("obtained",id);render()}
 });
}
function toggle(k,id){const a=state[k]||[];state[k]=a.includes(id)?a.filter(x=>x!==id):[...a,id];save()}
function open(id){
 const m=DATA.find(x=>x.id===id); if(!m)return; state.selected=id;save();
 const checks=state.checks[id]||[];
 $("#miracle-drawer-content").innerHTML=`<button class="drawer-close" id="miracle-close">×</button>
 <div class="miracle-detail-head"><img src="${artPath(m.id)}" alt=""><div><p class="page-kicker">${esc(m.type)} · ${esc(m.stage)}</p><h2>${esc(m.name)}</h2><p>${esc(m.subtitle)}</p></div></div>
 <section><h3>Comment l’obtenir</h3><p><strong>${esc(m.obtain)}</strong> · ${esc(m.chance)}</p>
 <ol class="miracle-checklist">${m.obtain_steps.map((x,i)=>`<li><label><input type="checkbox" data-check="${i}" ${checks.includes(i)?"checked":""}> ${esc(x)}</label></li>`).join("")}</ol></section>
 <section><h3>Techniques et sorts</h3>${m.skills.map(s=>`<article class="miracle-skill"><h4>${esc(s[0])}</h4><p>${esc(s[1])}</p></article>`).join("")}</section>
 <section class="miracle-columns"><div><h3>Forces</h3><ul>${m.strengths.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div><h3>Faiblesses</h3><ul>${m.weaknesses.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></section>
 <section><h3>Notes personnelles</h3><textarea id="miracle-note" placeholder="Combo, touche, objectif, conseil de ton groupe…">${esc(state.notes[id]||"")}</textarea></section>
 <div class="miracle-detail-actions"><button id="miracle-got">${state.obtained.includes(id)?"Retirer des obtenus":"Marquer comme obtenu"}</button><a href="arsenal.html?miracle=${id}">Préparer dans l’Arsenal</a><a href="classes.html">Comparer les classes</a></div>`;
 $("#miracle-drawer").classList.add("open");
 $("#miracle-close").onclick=()=>$("#miracle-drawer").classList.remove("open");
 $("#miracle-got").onclick=()=>{toggle("obtained",id);open(id);render()};
 $("#miracle-note").oninput=e=>{state.notes[id]=e.target.value;save()};
 document.querySelectorAll("[data-check]").forEach(c=>c.onchange=()=>{const i=+c.dataset.check,a=state.checks[id]||[];state.checks[id]=c.checked?[...new Set([...a,i])]:a.filter(x=>x!==i);save()});
}
function initFilters(){
 const types=[...new Set(DATA.map(x=>x.type))];$("#miracle-type").innerHTML='<option value="all">Tous les types</option>'+types.map(x=>`<option>${esc(x)}</option>`).join("");
 ["q","type","stage","class"].forEach(k=>{const el=$("#miracle-"+k);el.value=state.filters[k]||"all";el.oninput=()=>{state.filters[k]=el.value;save();render()}});
 $("#miracle-missing").checked=!!state.filters.onlyMissing;$("#miracle-missing").onchange=e=>{state.filters.onlyMissing=e.target.checked;save();render()};
 $("#miracle-export").onclick=()=>{const blob=new Blob([JSON.stringify({schema:"ascension-miracle-codex",version:1,state},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="ascension_codex_miracles.json";a.click();URL.revokeObjectURL(a.href)};
 $("#miracle-reset").onclick=()=>{if(confirm("Réinitialiser uniquement le Codex des Miracles ?")){localStorage.removeItem(KEY);location.reload()}};
}
initFilters();render(); if(new URLSearchParams(location.search).get("miracle"))open(new URLSearchParams(location.search).get("miracle"));
})();
