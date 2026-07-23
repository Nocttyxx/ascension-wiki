
(function(){
  const search=document.getElementById('quest-search');
  const filter=document.getElementById('chapter-filter');
  const cards=[...document.querySelectorAll('.quest-card')];
  const sections=[...document.querySelectorAll('[data-chapter-section]')];
  const note=document.getElementById('quest-results-note');
  function applyQuestFilter(){
    if(!cards.length)return;
    const q=(search?.value||'').trim().toLowerCase();
    const chapter=filter?.value||'all';
    let shown=0;
    cards.forEach(card=>{
      const okText=!q||(card.dataset.search||'').includes(q);
      const okChap=chapter==='all'||card.dataset.chapter===chapter;
      card.hidden=!(okText&&okChap); if(!card.hidden)shown++;
    });
    sections.forEach(sec=>{sec.hidden=![...sec.querySelectorAll('.quest-card')].some(c=>!c.hidden)});
    if(note)note.classList.toggle('hidden',shown!==0);
  }
  search?.addEventListener('input',applyQuestFilter);filter?.addEventListener('change',applyQuestFilter);
  document.getElementById('expand-quests')?.addEventListener('click',()=>cards.filter(c=>!c.hidden).forEach(c=>c.open=true));
  document.getElementById('collapse-quests')?.addEventListener('click',()=>cards.forEach(c=>c.open=false));
  const cs=document.getElementById('command-search'); const rows=[...document.querySelectorAll('#commands-table tbody tr')];
  cs?.addEventListener('input',()=>{const q=cs.value.trim().toLowerCase();rows.forEach(r=>r.hidden=q&&!r.dataset.command.includes(q));});
})();
