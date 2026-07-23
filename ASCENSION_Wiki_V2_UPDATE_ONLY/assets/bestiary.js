
(() => {
  const grid = document.getElementById('bestiary-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.bestiary-card')];
  const search = document.getElementById('bestiary-search');
  const kind = document.getElementById('bestiary-kind');
  const mod = document.getElementById('bestiary-mod');
  const danger = document.getElementById('bestiary-danger');
  const count = document.getElementById('bestiary-count');
  const reset = document.getElementById('bestiary-reset');
  const normalize = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function apply(){
    const q=normalize(search.value); let visible=0;
    cards.forEach(card=>{
      const ok=(!q || normalize(card.textContent).includes(q) || normalize(card.dataset.name).includes(q)) && (!kind.value || card.dataset.kind===kind.value) && (!mod.value || card.dataset.mod===mod.value) && (!danger.value || card.dataset.danger===danger.value);
      card.hidden=!ok; if(ok) visible++;
    }); count.textContent=visible;
  }
  [search,kind,mod,danger].forEach(x=>x.addEventListener('input',apply));
  reset.addEventListener('click',()=>{search.value='';kind.value='';mod.value='';danger.value='';apply();});
  const data=JSON.parse(document.getElementById('bestiary-data').textContent);
  const modal=document.getElementById('bestiary-modal'); const content=document.getElementById('bestiary-modal-content');
  function openMob(slug){const e=data[slug];if(!e)return; const cardImg=document.querySelector(`[data-mob="${CSS.escape(slug)}"]`)?.closest('.bestiary-card')?.querySelector('img')?.src || e.image;
    content.innerHTML=`<div class="modal-mob"><div><img src="${cardImg}" alt="${e.name}"><p class="small">Visuel officiel du mod ou rendu chargé depuis son wiki communautaire.</p></div><div><p class="page-kicker">${e.mod} • ${e.kind}</p><h1>${e.name}</h1><p class="latin-name">${e.name_en}</p><p>${e.description}</p><div class="modal-fields"><div><strong>Danger</strong><span>${e.danger}</span></div><div><strong>Apparition</strong><span>${e.spawn}</span></div><div><strong>Butin</strong><span>${e.loot}</span></div><div><strong>Conseil</strong><span>${e.tips}</span></div></div><p><strong>Identifiant technique</strong><br><span class="technical-id">${e.id}</span></p></div></div>`;
    modal.hidden=false; document.body.style.overflow='hidden';
  }
  document.addEventListener('click',ev=>{const b=ev.target.closest('[data-mob]');if(b)openMob(b.dataset.mob); if(ev.target.closest('[data-close]')){modal.hidden=true;document.body.style.overflow='';}});
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&!modal.hidden){modal.hidden=true;document.body.style.overflow='';}});

  // Upgrade local official textures with wiki renders when a public MediaWiki API has a matching page.
  const imgs=[...document.querySelectorAll('img[data-api][data-wiki-title]')];
  const groups=new Map(); imgs.forEach(img=>{if(!groups.has(img.dataset.api))groups.set(img.dataset.api,[]);groups.get(img.dataset.api).push(img);});
  const chunks=(a,n)=>Array.from({length:Math.ceil(a.length/n)},(_,i)=>a.slice(i*n,i*n+n));
  for(const [api,list] of groups){for(const batch of chunks(list,35)){
    const titles=batch.map(i=>i.dataset.wikiTitle); const url=api+'?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=640&titles='+encodeURIComponent(titles.join('|'));
    fetch(url).then(r=>r.json()).then(j=>{
      const wanted=new Map(batch.map(i=>[normalize(i.dataset.wikiTitle),i]));
      const aliases=new Map(); (j.query?.normalized||[]).forEach(x=>aliases.set(normalize(x.to),normalize(x.from))); (j.query?.redirects||[]).forEach(x=>aliases.set(normalize(x.to),normalize(x.from)));
      Object.values(j.query?.pages||{}).forEach(p=>{if(!p.thumbnail?.source)return; let k=normalize(p.title); let img=wanted.get(k); if(!img){const original=aliases.get(k);if(original)img=wanted.get(original);} if(img){img.src=p.thumbnail.source;img.dataset.remote='1';}});
    }).catch(()=>{});
  }}
})();
