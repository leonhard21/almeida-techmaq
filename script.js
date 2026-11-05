document.documentElement.classList.add('js');
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
// header sólido ao rolar
const nav=$('#nav'); const onScroll=()=>nav.classList.toggle('solid',scrollY>40); addEventListener('scroll',onScroll,{passive:true}); onScroll();
// dropdown serviços
const dd=$('.has-dd'), ddb=dd.querySelector('button');
const setDD=o=>{dd.classList.toggle('open',o); ddb.setAttribute('aria-expanded',o)};
dd.addEventListener('mouseenter',()=>setDD(true)); dd.addEventListener('mouseleave',()=>setDD(false));
ddb.addEventListener('click',e=>{e.stopPropagation(); if(matchMedia('(hover:hover)').matches && dd.matches(':hover')) setDD(true); else setDD(!dd.classList.contains('open'))});
document.addEventListener('click',e=>{ if(!dd.contains(e.target)) setDD(false)});
dd.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setDD(false)));
// menu mobile
const mob=$('#mobile'), bur=$('#burger');
// voltar=true: também desfaz a entrada no histórico criada ao abrir (botão "voltar" do celular)
const setMob=(o,voltar=true)=>{ if(o===mob.classList.contains('open')) return;
  mob.classList.toggle('open',o); bur.setAttribute('aria-expanded',o); bur.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');
  $('#burger-ic').setAttribute('href',o?'#i-x':'#i-menu'); nav.classList.toggle('menu-aberto',o); document.body.style.overflow=o?'hidden':'';
  if(o) history.pushState({camada:'menu'},''); else if(voltar&&history.state?.camada==='menu') history.back(); };
bur.addEventListener('click',()=>setMob(!mob.classList.contains('open')));
// ao escolher um link a página já navega: só fecha o menu
mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMob(false,false)));
// menu ativo conforme a seção
const map={inicio:'inicio',servicos:'servicos',sobre:'sobre',linhas:'linhas',mecanica:'servicos',diagnostico:'servicos',pecas:'servicos',infra:'infra',contato:'contato'};
const spy=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ const k=map[e.target.id]; $$('[data-spy]').forEach(a=>a.classList.toggle('on',a.dataset.spy===k)); } }),{rootMargin:'-45% 0px -50% 0px'});
Object.keys(map).forEach(id=>{const el=document.getElementById(id); if(el) spy.observe(el)});
// revelar ao rolar (apenas o que está abaixo da dobra)
const rv=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.remove('pre'); rv.unobserve(e.target);} }),{rootMargin:'0px 0px -8% 0px'});
$$('.reveal').forEach(el=>{ if(el.getBoundingClientRect().top>innerHeight){ el.classList.add('pre'); rv.observe(el);} });
// filtro de segmentos (só na página inicial)
const lines=$('#lines');
if(lines) $$('.linhas .chip').forEach(c=>c.addEventListener('click',()=>{
  const on=c.getAttribute('aria-pressed')!=='true';
  $$('.linhas .chip').forEach(x=>x.setAttribute('aria-pressed','false'));
  lines.classList.remove('filtering'); $$('.line').forEach(l=>l.classList.remove('hit'));
  if(on){ c.setAttribute('aria-pressed','true'); const t=c.dataset.line; if(t!=='all'){ lines.classList.add('filtering'); $$('.line').forEach(l=>l.classList.toggle('hit',l.dataset.id===t)); } }
}));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
// tela de diagnóstico ao vivo (só na página inicial)
if($('#log')){
const fmt=n=>n.toLocaleString('pt-BR');
const G={rail:[1640,1580,1700,'',2100],temp:[91,88,94,'',120],rpm:[1850,1780,1920,'',2600],load:[64,58,72,'',100]};
let t=42*60+17;
const LOG=[['› Leitura de módulos ............. OK',''],['› SPN 636 FMI 2 · intermitência sensor (histórico)','w'],['› Chicote principal .............. verificado',''],['› Relatório técnico .............. gerado ✓','']];
const log=$('#log'); let li=0;
const addLog=()=>{ if(li>=LOG.length){ log.innerHTML=''; li=0; } const d=document.createElement('div'); d.textContent=LOG[li][0]; if(LOG[li][1]) d.className='w'; log.appendChild(d); li++; };
if(reduce){ LOG.forEach(()=>addLog()); } else {
  addLog(); setInterval(addLog,1600);
  setInterval(()=>{ t++; const h=String(Math.floor(t/3600)).padStart(2,'0'),m=String(Math.floor(t%3600/60)).padStart(2,'0'),s=String(t%60).padStart(2,'0'); $('#clock').textContent=`${h}:${m}:${s}`;
    for(const [k,[base,lo,hi,_,max]] of Object.entries(G)){ const v=Math.round(lo+Math.random()*(hi-lo)); document.querySelector(`[data-g="${k}"]`).textContent=fmt(v); document.querySelector(`[data-b="${k}"]`).style.width=(v/max*100).toFixed(0)+'%'; } },1000);
}
}
// copiar
const copy=async(btn,txt)=>{ try{ await navigator.clipboard.writeText(txt); btn.textContent='Copiado'; btn.classList.add('ok'); }catch(e){ const r=document.createRange(); const b=btn.closest('.d')?.querySelector('b')||$('#msg'); r.selectNodeContents(b); const s=getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent='Selecionado: Ctrl+C'; } setTimeout(()=>{btn.textContent=btn.dataset.label||'Copiar'; btn.classList.remove('ok')},2000); };
$$('.copy[data-copy]').forEach(b=>b.addEventListener('click',()=>copy(b,b.dataset.copy)));
// modal orçamento → WhatsApp (DDI 55 + DDD 91 + número)
const WA='5591991567936';
// <dialog>: o navegador cuida do foco preso, do Esc e de devolver o foco ao botão que abriu
const modal=$('#modal'), qf=$('#qf'), done=$('#done');
// data-serv / data-msg no botão pré-preenchem o formulário
const open=e=>{ e&&e.preventDefault();
  const b=e&&e.currentTarget; if(b&&b.dataset){ if(b.dataset.serv) $('#q-serv').value=b.dataset.serv; if(b.dataset.msg) $('#q-msg').value=b.dataset.msg; }
  done.hidden=true; qf.hidden=false; modal.showModal(); document.body.style.overflow='hidden'; };
const close=()=>modal.close();
modal.addEventListener('close',()=>{ document.body.style.overflow=''; });
$$('[data-quote]').forEach(b=>b.addEventListener('click',open));
$('#mx').addEventListener('click',close);
// clique no fundo escurecido (fora da caixa) fecha
modal.addEventListener('click',e=>{ const r=modal.getBoundingClientRect(); if(e.target===modal&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)) close(); });
addEventListener('keydown',e=>{ if(e.key==='Escape'){ setDD(false); setMob(false); } });
// janelas (<dialog>) abertas ganham uma entrada no histórico: o "voltar" do celular fecha a janela em vez de sair da página
$$('dialog').forEach(d=>new MutationObserver(()=>{
  if(d.open) history.pushState({camada:d.id},''); else if(history.state?.camada===d.id) history.back();
}).observe(d,{attributes:true,attributeFilter:['open']}));
addEventListener('popstate',()=>{ $$('dialog[open]').forEach(d=>d.close()); setMob(false,false); });
qf.addEventListener('submit',e=>{ e.preventDefault();
  const linha=qf.querySelector('input[name=linha]:checked').value;
  const txt=`Olá, Almeida Tech Maq! Gostaria de um orçamento.\nNome: ${$('#q-nome').value}\nLinha: ${linha}\nServiço: ${$('#q-serv').value}\n${$('#q-msg').value?'Detalhes: '+$('#q-msg').value:''}`.trim();
  const url=`https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;
  $('#msg').textContent=txt; $('#wlink').href=url; qf.hidden=true; done.hidden=false;
  window.open(url,'_blank','noopener'); });
$('#cmsg').dataset.label='Copiar mensagem'; $('#cmsg').addEventListener('click',e=>copy(e.currentTarget,$('#msg').textContent));
$('#again').addEventListener('click',()=>{ done.hidden=true; qf.hidden=false; });
$('#top').addEventListener('click',()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'}));
