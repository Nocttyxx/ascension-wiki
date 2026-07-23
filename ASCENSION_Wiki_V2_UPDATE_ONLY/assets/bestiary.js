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
      const ok=(!q || normalize(card.textContent).includes(q) || normalize(card.dataset.name).includes(q))
        && (!kind.value || card.dataset.kind===kind.value)
        && (!mod.value || card.dataset.mod===mod.value)
        && (!danger.value || card.dataset.danger===danger.value);
      card.hidden=!ok; if(ok) visible++;
    });
    count.textContent=visible;
  }
  [search,kind,mod,danger].forEach(x=>x.addEventListener('input',apply));
  reset.addEventListener('click',()=>{search.value='';kind.value='';mod.value='';danger.value='';apply();});

  const data=JSON.parse(document.getElementById('bestiary-data').textContent);
  const modal=document.getElementById('bestiary-modal');
  const content=document.getElementById('bestiary-modal-content');

  function openMob(slug){
    const e=data[slug]; if(!e)return;
    const imgEl=document.querySelector(`[data-mob="${CSS.escape(slug)}"]`)?.closest('.bestiary-card')?.querySelector('img');
    const cardImg=imgEl?.src || e.image;
    const sourceNote=imgEl?.dataset.remote==='1'
      ? 'Rendu complet chargé depuis un wiki public.'
      : 'Carte d’identification propre utilisée lorsqu’aucun rendu complet fiable n’est disponible.';
    content.innerHTML=`<div class="modal-mob"><div><img src="${cardImg}" alt="${e.name}"><p class="small">${sourceNote}</p></div><div><p class="page-kicker">${e.mod} • ${e.kind}</p><h1>${e.name}</h1><p class="latin-name">${e.name_en}</p><p>${e.description}</p><div class="modal-fields"><div><strong>Danger</strong><span>${e.danger}</span></div><div><strong>Apparition</strong><span>${e.spawn}</span></div><div><strong>Butin</strong><span>${e.loot}</span></div><div><strong>Conseil</strong><span>${e.tips}</span></div></div><p><strong>Identifiant technique</strong><br><span class="technical-id">${e.id}</span></p></div></div>`;
    modal.hidden=false; document.body.style.overflow='hidden';
  }

  document.addEventListener('click',ev=>{
    const b=ev.target.closest('[data-mob]');
    if(b)openMob(b.dataset.mob);
    if(ev.target.closest('[data-close]')){modal.hidden=true;document.body.style.overflow='';}
  });
  document.addEventListener('keydown',ev=>{
    if(ev.key==='Escape'&&!modal.hidden){modal.hidden=true;document.body.style.overflow='';}
  });

  const cache = new Map();

  async function fetchJson(url){
    if(cache.has(url)) return cache.get(url);
    const p = fetch(url, {mode:'cors', credentials:'omit'}).then(r=>{
      if(!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    });
    cache.set(url,p);
    return p;
  }

  function scoreFile(name, title){
    const n=normalize(name), t=normalize(title);
    let s=0;
    for(const token of t.split(/\s+/).filter(x=>x.length>2)){
      if(n.includes(token)) s+=5;
    }
    if(/\.(png|webp|jpg|jpeg)$/i.test(name)) s+=2;
    if(/render|entity|mob|portrait/i.test(name)) s+=5;
    if(/icon|item|spawn egg|banner|logo|map|gui|achievement|advancement/i.test(name)) s-=8;
    return s;
  }

  async function exactThumbnail(api, title){
    const u=api+'?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=900&titles='+encodeURIComponent(title);
    const j=await fetchJson(u);
    const pages=Object.values(j.query?.pages||{});
    return pages.find(p=>p.thumbnail?.source)?.thumbnail?.source || null;
  }

  async function searchThumbnail(api, title){
    const u=api+'?action=query&format=json&origin=*&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='+encodeURIComponent('intitle:"'+title+'"')+'&prop=pageimages&piprop=thumbnail&pithumbsize=900';
    const j=await fetchJson(u);
    const pages=Object.values(j.query?.pages||{});
    const best=pages.filter(p=>p.thumbnail?.source).sort((a,b)=>{
      return scoreFile(b.title,title)-scoreFile(a.title,title);
    })[0];
    return best?.thumbnail?.source || null;
  }

  async function pageFileThumbnail(api, title){
    const q=api+'?action=query&format=json&origin=*&redirects=1&prop=images&imlimit=50&titles='+encodeURIComponent(title);
    const j=await fetchJson(q);
    const page=Object.values(j.query?.pages||{})[0];
    const files=(page?.images||[]).map(x=>x.title).sort((a,b)=>scoreFile(b,title)-scoreFile(a,title));
    const chosen=files.find(x=>scoreFile(x,title)>0);
    if(!chosen) return null;
    const q2=api+'?action=query&format=json&origin=*&prop=imageinfo&iiprop=url&iiurlwidth=900&titles='+encodeURIComponent(chosen);
    const j2=await fetchJson(q2);
    const p2=Object.values(j2.query?.pages||{})[0];
    return p2?.imageinfo?.[0]?.thumburl || p2?.imageinfo?.[0]?.url || null;
  }

  async function resolveImage(img){
    if(img.dataset.resolving==='1' || img.dataset.remote==='1') return;
    const apis=(img.dataset.apis||'').split('|').filter(Boolean);
    const titles=(img.dataset.wikiTitles||'').split('|').filter(Boolean);
    if(!apis.length || !titles.length) return;
    img.dataset.resolving='1';

    for(const api of apis){
      for(const title of titles){
        for(const resolver of [exactThumbnail, searchThumbnail, pageFileThumbnail]){
          try{
            const src=await resolver(api,title);
            if(src){
              const probe=new Image();
              const ok=await new Promise(resolve=>{
                probe.onload=()=>resolve(true);
                probe.onerror=()=>resolve(false);
                probe.referrerPolicy='no-referrer';
                probe.src=src;
              });
              if(ok){
                img.src=src;
                img.dataset.remote='1';
                img.classList.add('portrait-loaded');
                img.closest('.bestiary-image')?.classList.add('has-render');
                return;
              }
            }
          }catch(_){}
        }
      }
    }
    img.dataset.resolving='0';
  }

  const candidates=[...document.querySelectorAll('img[data-apis][data-wiki-titles]')];
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          resolveImage(e.target);
          observer.unobserve(e.target);
        }
      });
    },{rootMargin:'700px'});
    candidates.forEach(img=>observer.observe(img));
  }else{
    candidates.forEach(resolveImage);
  }
})();