// Catálogo de locação e portfólio — edite as listas abaixo para atualizar a página.
// ATENÇÃO: as especificações da linha Caterpillar são valores de referência APROXIMADOS (≈) por modelo.
// Confira com a ficha técnica de cada unidade antes de publicar. Obras do portfólio são EXEMPLOS.

// Categorias, na ordem dos botões de filtro. Cada máquina herda nome, descrição e aplicações da sua categoria
// (uma máquina pode sobrescrever qualquer um desses campos).
const CATS={
  miniescavadeiras:{label:'Miniescavadeiras', nome:'Miniescavadeira',
    descricao:'Escavadeira compacta para espaços restritos, obras urbanas e serviços dentro de galpões.',
    aplicacoes:['Redes de água e esgoto','Fundações','Paisagismo','Áreas restritas']},
  escavadeiras:{label:'Escavadeiras', nome:'Escavadeira hidráulica',
    descricao:'Escavadeira sobre esteiras para escavação, carregamento e abertura de valas, do porte médio à mineração.',
    aplicacoes:['Terraplenagem','Valas e drenagem','Mineração','Carregamento de caminhões']},
  'escavadeiras-rodas':{label:'Escavadeiras de rodas', nome:'Escavadeira de rodas',
    descricao:'Escavadeira sobre pneus, que se desloca rápido entre frentes de serviço sem carreta.',
    aplicacoes:['Obras urbanas','Manutenção de vias','Manuseio de material']},
  retroescavadeiras:{label:'Retroescavadeiras', nome:'Retroescavadeira',
    descricao:'Máquina versátil que combina carregadeira e escavadeira para obras de pequeno e médio porte.',
    aplicacoes:['Obras urbanas','Valas','Manutenção de fazendas','Carregamento leve']},
  carregadeiras:{label:'Pás carregadeiras', nome:'Pá carregadeira',
    descricao:'Carregadeira de rodas para movimentar material solto, abastecer britadores e carregar caminhões.',
    aplicacoes:['Pátios de usina','Pedreiras','Carregamento de caminhões','Mineração']},
  minicarregadeiras:{label:'Minicarregadeiras', nome:'Minicarregadeira',
    descricao:'Carregadeira compacta de rodas ou esteiras, ágil em espaços pequenos e com vários implementos.',
    aplicacoes:['Limpeza de terreno','Movimentação em galpões','Paisagismo','Obras urbanas']},
  'tratores-esteira':{label:'Tratores de esteira', nome:'Trator de esteira',
    descricao:'Trator de esteira para corte, empurre e espalhamento de material em grandes áreas.',
    aplicacoes:['Abertura de áreas','Estradas vicinais','Barragens','Mineração']},
  motoniveladoras:{label:'Motoniveladoras', nome:'Motoniveladora',
    descricao:'Motoniveladora para nivelamento, conformação de estradas e acabamento de terraplenagem.',
    aplicacoes:['Estradas de terra','Acabamento de terraplenagem','Manutenção de vias','Mineração']},
  compactadores:{label:'Compactadores', nome:'Rolo compactador',
    descricao:'Rolo para compactação de solo e asfalto em obras de terraplenagem e pavimentação.',
    aplicacoes:['Compactação de solo','Pavimentação','Aterros','Estradas']},
  'caminhoes-articulados':{label:'Caminhões articulados', nome:'Caminhão articulado',
    descricao:'Caminhão fora de estrada articulado, com tração 6x6 para terrenos moles e rampas.',
    aplicacoes:['Transporte em terraplenagem','Barragens','Mineração','Terreno acidentado']},
  'caminhoes-fora-estrada':{label:'Caminhões fora de estrada', nome:'Caminhão fora de estrada',
    descricao:'Caminhão rígido de grande porte para transporte de minério e estéril em pedreiras e minas.',
    aplicacoes:['Mineração','Pedreiras','Grandes obras']},
  telescopicos:{label:'Manipuladores telescópicos', nome:'Manipulador telescópico',
    descricao:'Manipulador com lança telescópica para elevar e posicionar cargas em altura.',
    aplicacoes:['Construção civil','Armazéns','Agro','Montagem industrial']},
  'manipuladores-materiais':{label:'Manipuladores de materiais', nome:'Manipulador de materiais',
    descricao:'Máquina com cabine elevada para movimentar sucata, toras e material a granel.',
    aplicacoes:['Sucata e reciclagem','Portos','Madeira']},
  pavimentacao:{label:'Pavimentação', nome:'Equipamento de pavimentação',
    descricao:'Equipamento para aplicação, fresagem e recuperação de pavimento asfáltico.',
    aplicacoes:['Pavimentação','Recuperação de rodovias','Obras urbanas']},
};

// Somente linha amarela Caterpillar: cat(categoria, modelo, especificações [, campos extras])
const cat=(c,modelo,specs,extra={})=>({cat:c, modelo:'Caterpillar '+modelo, specs, ...extra});
const MAQUINAS=[
  cat('miniescavadeiras','301.5',[['Peso operacional','≈ 1,6 t'],['Potência','≈ 18 hp']]),
  cat('miniescavadeiras','302.7',[['Peso operacional','≈ 2,7 t'],['Potência','≈ 24 hp']]),
  cat('miniescavadeiras','303.5',[['Peso operacional','≈ 3,5 t'],['Potência','≈ 24 hp']]),
  cat('miniescavadeiras','305 CR',[['Peso operacional','≈ 5 t'],['Potência','≈ 46 hp']]),
  cat('miniescavadeiras','306 CR',[['Peso operacional','≈ 6 t'],['Potência','≈ 55 hp']]),
  cat('miniescavadeiras','308 CR',[['Peso operacional','≈ 8,4 t'],['Potência','≈ 70 hp']]),
  cat('escavadeiras','313',[['Peso operacional','≈ 13,5 t'],['Potência','≈ 99 hp']]),
  cat('escavadeiras','316',[['Peso operacional','≈ 17 t'],['Potência','≈ 120 hp']]),
  cat('escavadeiras','320',[['Peso operacional','≈ 22 t'],['Potência','≈ 162 hp'],['Caçamba','≈ 1,2 m³'],['Esteira','Sapatas de 600 mm']],
    {fotos:['img/escavadeira-amarela-em-terreno-de-pedra.webp','img/escavadeira-em-operacao.webp','img/silhueta-de-escavadeira-no-por-do-sol.webp','img/motor-diesel.webp']}),
  cat('escavadeiras','323',[['Peso operacional','≈ 25 t'],['Potência','≈ 162 hp']]),
  cat('escavadeiras','326',[['Peso operacional','≈ 26 t'],['Potência','≈ 204 hp']]),
  cat('escavadeiras','330',[['Peso operacional','≈ 30 t'],['Potência','≈ 273 hp']]),
  cat('escavadeiras','336',[['Peso operacional','≈ 37 t'],['Potência','≈ 311 hp']]),
  cat('escavadeiras','349',[['Peso operacional','≈ 49 t'],['Potência','≈ 417 hp']]),
  cat('escavadeiras','352',[['Peso operacional','≈ 52 t'],['Potência','≈ 424 hp']]),
  cat('escavadeiras','374',[['Peso operacional','≈ 72 t'],['Potência','≈ 473 hp']]),
  cat('escavadeiras','395',[['Peso operacional','≈ 95 t'],['Potência','≈ 543 hp']]),
  cat('escavadeiras-rodas','M318',[['Peso operacional','≈ 18 t'],['Potência','≈ 173 hp']]),
  cat('retroescavadeiras','416',[['Peso operacional','≈ 7,4 t'],['Potência','≈ 70 hp']]),
  cat('retroescavadeiras','420',[['Peso operacional','≈ 8 t'],['Potência','≈ 93 hp']]),
  cat('retroescavadeiras','432',[['Peso operacional','≈ 8,5 t'],['Potência','≈ 100 hp']]),
  cat('carregadeiras','908',[['Peso operacional','≈ 6,7 t'],['Caçamba','≈ 1,1 m³']]),
  cat('carregadeiras','914',[['Peso operacional','≈ 8 t'],['Caçamba','≈ 1,4 m³']]),
  cat('carregadeiras','924',[['Peso operacional','≈ 13 t'],['Caçamba','≈ 2,1 m³']]),
  cat('carregadeiras','926',[['Peso operacional','≈ 13,5 t'],['Caçamba','≈ 2,3 m³']]),
  cat('carregadeiras','930',[['Peso operacional','≈ 14,3 t'],['Caçamba','≈ 2,5 m³']]),
  cat('carregadeiras','938',[['Peso operacional','≈ 16 t'],['Caçamba','≈ 3,1 m³']]),
  cat('carregadeiras','950',[['Peso operacional','≈ 19 t'],['Caçamba','≈ 3,4 m³']]),
  cat('carregadeiras','962',[['Peso operacional','≈ 20 t'],['Caçamba','≈ 3,8 m³']]),
  cat('carregadeiras','966',[['Peso operacional','≈ 24 t'],['Caçamba','≈ 4,2 m³']]),
  cat('carregadeiras','972',[['Peso operacional','≈ 25 t'],['Caçamba','≈ 4,7 m³']]),
  cat('carregadeiras','980',[['Peso operacional','≈ 31 t'],['Caçamba','≈ 5,4 m³']]),
  cat('carregadeiras','982',[['Peso operacional','≈ 35 t'],['Caçamba','≈ 6,1 m³']]),
  cat('carregadeiras','988',[['Peso operacional','≈ 51 t'],['Caçamba','≈ 6,7 m³']]),
  cat('carregadeiras','992',[['Peso operacional','≈ 100 t'],['Caçamba','≈ 12 m³']]),
  cat('carregadeiras','994',[['Peso operacional','≈ 200 t'],['Caçamba','≈ 19 m³']]),
  cat('minicarregadeiras','226',[['Peso operacional','≈ 2,8 t'],['Rodado','Pneus']]),
  cat('minicarregadeiras','236',[['Peso operacional','≈ 3,2 t'],['Rodado','Pneus']]),
  cat('minicarregadeiras','246',[['Peso operacional','≈ 3,6 t'],['Rodado','Pneus']]),
  cat('minicarregadeiras','262',[['Peso operacional','≈ 3,8 t'],['Rodado','Pneus']]),
  cat('minicarregadeiras','259',[['Peso operacional','≈ 4,1 t'],['Rodado','Esteiras']]),
  cat('minicarregadeiras','279',[['Peso operacional','≈ 4,6 t'],['Rodado','Esteiras']]),
  cat('minicarregadeiras','289',[['Peso operacional','≈ 4,9 t'],['Rodado','Esteiras']]),
  cat('minicarregadeiras','299',[['Peso operacional','≈ 5,4 t'],['Rodado','Esteiras']]),
  cat('tratores-esteira','D1',[['Peso operacional','≈ 8 t'],['Potência','≈ 80 hp']]),
  cat('tratores-esteira','D2',[['Peso operacional','≈ 8,6 t'],['Potência','≈ 92 hp']]),
  cat('tratores-esteira','D3',[['Peso operacional','≈ 9 t'],['Potência','≈ 104 hp']]),
  cat('tratores-esteira','D4',[['Peso operacional','≈ 13 t'],['Potência','≈ 130 hp']]),
  cat('tratores-esteira','D5',[['Peso operacional','≈ 17 t'],['Potência','≈ 170 hp']]),
  cat('tratores-esteira','D6',[['Peso operacional','≈ 23 t'],['Potência','≈ 215 hp']]),
  cat('tratores-esteira','D6 XE',[['Peso operacional','≈ 24 t'],['Potência','≈ 215 hp'],['Transmissão','Elétrica']]),
  cat('tratores-esteira','D7',[['Peso operacional','≈ 29 t'],['Potência','≈ 265 hp']]),
  cat('tratores-esteira','D8',[['Peso operacional','≈ 39 t'],['Potência','≈ 354 hp']]),
  cat('tratores-esteira','D9',[['Peso operacional','≈ 49 t'],['Potência','≈ 436 hp']]),
  cat('tratores-esteira','D10',[['Peso operacional','≈ 70 t'],['Potência','≈ 600 hp']]),
  cat('tratores-esteira','D11',[['Peso operacional','≈ 104 t'],['Potência','≈ 850 hp']]),
  cat('motoniveladoras','120',[['Peso operacional','≈ 15 t'],['Lâmina','≈ 3,7 m']]),
  cat('motoniveladoras','140',[['Peso operacional','≈ 19 t'],['Lâmina','≈ 3,7 m']]),
  cat('motoniveladoras','160',[['Peso operacional','≈ 21 t'],['Lâmina','≈ 4,3 m']]),
  cat('motoniveladoras','16',[['Peso operacional','≈ 31 t'],['Lâmina','≈ 4,9 m']]),
  cat('motoniveladoras','18',[['Peso operacional','≈ 37 t'],['Lâmina','≈ 5,5 m']]),
  cat('motoniveladoras','24',[['Peso operacional','≈ 74 t'],['Lâmina','≈ 7,3 m']]),
  cat('compactadores','CS54B',[['Peso operacional','≈ 11 t'],['Cilindro','≈ 2,1 m · solo']]),
  cat('compactadores','CS56B',[['Peso operacional','≈ 11,5 t'],['Cilindro','≈ 2,1 m · solo']]),
  cat('compactadores','CS66B',[['Peso operacional','≈ 13 t'],['Cilindro','≈ 2,1 m · solo']]),
  cat('compactadores','CS74B',[['Peso operacional','≈ 15 t'],['Cilindro','≈ 2,1 m · solo']]),
  cat('compactadores','CS79B',[['Peso operacional','≈ 18 t'],['Cilindro','≈ 2,1 m · solo']]),
  cat('compactadores','CB10',[['Peso operacional','≈ 10 t'],['Cilindro','≈ 1,7 m · asfalto']],{nome:'Rolo tandem'}),
  cat('compactadores','CW34',[['Peso operacional','≈ 10 a 27 t'],['Rodado','Pneus · asfalto']],{nome:'Rolo de pneus'}),
  cat('caminhoes-articulados','725',[['Carga útil','≈ 24 t'],['Tração','6x6']]),
  cat('caminhoes-articulados','730',[['Carga útil','≈ 28 t'],['Tração','6x6']]),
  cat('caminhoes-articulados','740',[['Carga útil','≈ 39 t'],['Tração','6x6']]),
  cat('caminhoes-articulados','745',[['Carga útil','≈ 41 t'],['Tração','6x6']]),
  cat('caminhoes-fora-estrada','770',[['Carga útil','≈ 38 t'],['Uso','Pedreira · obra']]),
  cat('caminhoes-fora-estrada','772',[['Carga útil','≈ 47 t'],['Uso','Pedreira · obra']]),
  cat('caminhoes-fora-estrada','773',[['Carga útil','≈ 55 t'],['Uso','Pedreira · mina']]),
  cat('caminhoes-fora-estrada','775',[['Carga útil','≈ 64 t'],['Uso','Pedreira · mina']]),
  cat('caminhoes-fora-estrada','777',[['Carga útil','≈ 90 t'],['Uso','Mineração']]),
  cat('caminhoes-fora-estrada','785',[['Carga útil','≈ 140 t'],['Uso','Mineração']]),
  cat('caminhoes-fora-estrada','789',[['Carga útil','≈ 180 t'],['Uso','Mineração']]),
  cat('caminhoes-fora-estrada','793',[['Carga útil','≈ 230 t'],['Uso','Mineração']]),
  cat('caminhoes-fora-estrada','795 AC',[['Carga útil','≈ 313 t'],['Tração','Elétrica']]),
  cat('caminhoes-fora-estrada','797',[['Carga útil','≈ 360 t'],['Uso','Mineração']]),
  cat('telescopicos','TH255',[['Capacidade','≈ 2,5 t'],['Altura de elevação','≈ 5,5 m']]),
  cat('telescopicos','TH357',[['Capacidade','≈ 3,5 t'],['Altura de elevação','≈ 7 m']]),
  cat('telescopicos','TH408',[['Capacidade','≈ 4 t'],['Altura de elevação','≈ 8 m']]),
  cat('telescopicos','TH514',[['Capacidade','≈ 5 t'],['Altura de elevação','≈ 14 m']]),
  cat('manipuladores-materiais','MH3022',[['Peso operacional','≈ 22 t'],['Rodado','Pneus']]),
  cat('manipuladores-materiais','MH3024',[['Peso operacional','≈ 24 t'],['Rodado','Pneus']]),
  cat('pavimentacao','AP555',[['Tipo','Vibroacabadora'],['Rodado','Esteiras']],{nome:'Vibroacabadora de asfalto'}),
  cat('pavimentacao','AP600',[['Tipo','Vibroacabadora'],['Rodado','Pneus']],{nome:'Vibroacabadora de asfalto'}),
  cat('pavimentacao','PM310',[['Tipo','Fresadora'],['Largura de corte','≈ 1 m']],{nome:'Fresadora de asfalto'}),
  cat('pavimentacao','PM620',[['Tipo','Fresadora'],['Largura de corte','≈ 2 m']],{nome:'Fresadora de asfalto'}),
  cat('pavimentacao','RM500',[['Tipo','Recicladora'],['Largura de corte','≈ 2,4 m']],{nome:'Recicladora de solo'}),
];
// completa cada máquina com os dados da categoria e agrupa na ordem dos filtros
const ORDEM=Object.keys(CATS);
MAQUINAS.forEach(m=>{ const c=CATS[m.cat]; m.nome??=c.nome; m.fotos??=[]; m.descricao??=c.descricao; m.aplicacoes??=c.aplicacoes; });
MAQUINAS.sort((a,b)=>ORDEM.indexOf(a.cat)-ORDEM.indexOf(b.cat));

const OBRAS=[
  {foto:'img/caminhonete-em-estrada-de-fazenda.webp', tag:'Agro · Paragominas - PA', titulo:'Abertura de estradas em fazenda',
   texto:'Exemplo: abertura e cascalhamento de estradas internas para escoamento da safra.', maquinas:['Trator de esteira','Motoniveladora']},
  {foto:'img/escavadeira-em-operacao.webp', tag:'Mineração · Pará', titulo:'Apoio a frente de lavra',
   texto:'Exemplo: locação mensal com mecânico de campo dedicado.', maquinas:['Escavadeira hidráulica','Pá carregadeira']},
  {foto:'img/equipe-tecnica-em-manutencao.webp', tag:'Usina · Pará', titulo:'Manutenção de pátio de usina',
   texto:'Exemplo: limpeza e movimentação de material no pátio durante a entressafra.', maquinas:['Pá carregadeira','Retroescavadeira']},
  {foto:'img/oficina.webp', tag:'Construção · Paragominas - PA', titulo:'Terraplenagem de galpão',
   texto:'Exemplo: corte, aterro e compactação para fundação de galpão industrial.', maquinas:['Escavadeira hidráulica','Trator de esteira']},
];

const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const foto=(src,alt)=>src?`<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`:`<svg class="ic" aria-hidden="true"><use href="#i-crane"/></svg>`;

const grid=document.getElementById('maq-grid');
// link direto para o WhatsApp já com a máquina na mensagem
const waLocacao=m=>'https://wa.me/5591991567936?text='+encodeURIComponent(`Olá, Almeida Tech Maq! Vim pelo site e gostaria de consultar a disponibilidade para locação: ${m.nome} (${m.modelo}).`);
const specsDl=specs=>`<dl>${specs.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
grid.innerHTML=MAQUINAS.map((m,i)=>`
  <article class="maq${m.fotos.length?'':' sem-foto'}" data-cat="${esc(m.cat)}" data-i="${i}">
    <div class="ph">${foto(m.fotos[0],m.nome+' '+m.modelo)}${m.fotos.length>1?`<span class="nfotos">${m.fotos.length} fotos</span>`:''}</div>
    <div class="in">
      <span class="tag">${esc(CATS[m.cat].label)}</span>
      <h3>${esc(m.nome)}</h3><p class="modelo">${esc(m.modelo)}</p>
      ${specsDl(m.specs.slice(0,2))}
      <div class="maq-btns">
        <button class="btn btn-outline maq-ver" aria-haspopup="dialog">Ver detalhes</button>
        <a class="btn btn-red maq-wa" href="${waLocacao(m)}" target="_blank" rel="noopener">Consultar</a>
      </div>
    </div>
  </article>`).join('')+'<p class="maq-vazio" hidden>Nenhuma máquina nesta categoria no momento. Fale com a gente pelo WhatsApp.</p>';

// detalhe da máquina: abre ao clicar em qualquer parte do card (menos no botão Consultar)
const ficha=document.getElementById('ficha'), fFoto=document.getElementById('f-foto'), fThumbs=document.getElementById('f-thumbs');
let atual=null, fi=0;
const mostrarFoto=n=>{
  const f=atual.fotos; if(!f.length) return;
  fi=(n+f.length)%f.length;
  fFoto.innerHTML=`<img src="${esc(f[fi])}" alt="${esc(atual.nome+' '+atual.modelo+' — foto '+(fi+1)+' de '+f.length)}">`;
  document.getElementById('f-cont').textContent=`${fi+1} / ${f.length}`;
  fThumbs.querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-current',j===fi));
};
const abrirFicha=m=>{
  atual=m;
  document.getElementById('f-tag').textContent=CATS[m.cat].label;
  document.getElementById('f-nome').textContent=m.nome;
  document.getElementById('f-modelo').textContent=m.modelo;
  document.getElementById('f-desc').textContent=m.descricao;
  document.getElementById('f-specs').innerHTML=specsDl(m.specs);
  document.getElementById('f-apl').innerHTML=m.aplicacoes.map(a=>`<li>${esc(a)}</li>`).join('');
  document.getElementById('f-quote').href=waLocacao(m);
  ficha.classList.toggle('sem-foto',!m.fotos.length);
  ficha.classList.toggle('uma-foto',m.fotos.length<2);
  fFoto.innerHTML=m.fotos.length?'':foto('',m.nome);
  fThumbs.innerHTML=m.fotos.map((f,j)=>`<button type="button" aria-label="Foto ${j+1}"><img src="${esc(f)}" alt="" loading="lazy"></button>`).join('');
  fThumbs.querySelectorAll('button').forEach((b,j)=>b.addEventListener('click',()=>mostrarFoto(j)));
  mostrarFoto(0);
  ficha.showModal(); document.body.style.overflow='hidden';
};
grid.addEventListener('click',e=>{
  const card=e.target.closest('.maq'); if(!card||e.target.closest('.maq-wa')) return;
  abrirFicha(MAQUINAS[card.dataset.i]);
});
document.getElementById('f-prev').addEventListener('click',()=>mostrarFoto(fi-1));
document.getElementById('f-next').addEventListener('click',()=>mostrarFoto(fi+1));
ficha.addEventListener('keydown',e=>{ if(e.key==='ArrowLeft') mostrarFoto(fi-1); if(e.key==='ArrowRight') mostrarFoto(fi+1); });
// arrastar para o lado troca a foto no celular
let x0=null;
fFoto.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
fFoto.addEventListener('touchend',e=>{ if(x0===null) return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>40) mostrarFoto(fi+(dx<0?1:-1)); x0=null; });
const fecharFicha=()=>ficha.close();
document.getElementById('f-x').addEventListener('click',fecharFicha);
ficha.addEventListener('click',e=>{ if(e.target===ficha) fecharFicha(); });
ficha.addEventListener('close',()=>{ document.body.style.overflow=''; });

document.getElementById('port-grid').innerHTML=OBRAS.map(o=>`
  <article class="obra">
    <div class="ph">${foto(o.foto,o.titulo)}</div>
    <div class="in"><span class="tag">${esc(o.tag)}</span><h3>${esc(o.titulo)}</h3><p>${esc(o.texto)}</p>
      <ul>${o.maquinas.map(n=>`<li>${esc(n)}</li>`).join('')}</ul></div>
  </article>`).join('');

// filtro por categoria: um botão por categoria que tem máquinas, com a contagem
// (também aceita ?cat=escavadeiras vindo da página inicial)
const filtros=document.getElementById('filtros');
const conta=c=>MAQUINAS.filter(m=>m.cat===c).length;
filtros.insertAdjacentHTML('beforeend',`<button class="chip" data-cat="todas" aria-pressed="true"><i></i>Todas (${MAQUINAS.length})</button>`+
  ORDEM.filter(conta).map(c=>`<button class="chip" data-cat="${c}" aria-pressed="false"><i></i>${esc(CATS[c].label)} (${conta(c)})</button>`).join(''));
const chips=[...filtros.querySelectorAll('.chip')];

// paginação: 12 máquinas por página, com a opção de ver todas de uma vez
const POR_PAG=12, paginas=document.getElementById('paginas');
let catAtual='todas', pag=1, verTodas=false;
// números das páginas, com reticências quando são muitas: 1 2 3 4 … 8 · 1 … 4 5 6 … 8 · 1 … 5 6 7 8
// no celular cabem menos botões: 1 2 3 … 8 · 1 … 4 … 8
const estreito=matchMedia('(max-width:480px)');
const numeros=(n,total)=>{
  const raio=estreito.matches?0:1, borda=estreito.matches?3:5;
  if(total<=borda+2) return [...Array(total)].map((_,i)=>i+1);
  let ini=Math.max(2,Math.min(n-raio,total-borda+1)), fim=Math.min(total-1,Math.max(n+raio,borda));
  if(ini===3) ini=2; if(fim===total-2) fim=total-1; // reticências nunca escondem uma página só
  return [1,...(ini>2?['…']:[]),...[...Array(fim-ini+1)].map((_,i)=>ini+i),...(fim<total-1?['…']:[]),total];
};
const mostrar=()=>{
  const cards=[...grid.querySelectorAll('.maq')], ok=cards.filter(c=>catAtual==='todas'||c.dataset.cat===catAtual);
  const total=Math.max(1,Math.ceil(ok.length/POR_PAG)); pag=Math.min(pag,total);
  const ini=verTodas?0:(pag-1)*POR_PAG, fim=verTodas?ok.length:Math.min(ini+POR_PAG,ok.length);
  cards.forEach(c=>c.hidden=true); ok.slice(ini,fim).forEach(c=>c.hidden=false);
  grid.querySelector('.maq-vazio').hidden=ok.length>0;
  const dividir=ok.length>POR_PAG;
  paginas.hidden=!ok.length;
  paginas.innerHTML=`<p class="pag-info">Mostrando ${ok.length?ini+1:0}–${fim} de ${ok.length} máquinas</p>`+
    (dividir&&!verTodas?`<div class="pag-nums">
      <button type="button" class="pag-seta" data-pag="${pag-1}" ${pag===1?'disabled':''} aria-label="Página anterior">‹</button>
      ${numeros(pag,total).map(i=>i==='…'?'<span aria-hidden="true">…</span>':`<button type="button" data-pag="${i}" aria-label="Página ${i}"${i===pag?' aria-current="page"':''}>${i}</button>`).join('')}
      <button type="button" class="pag-seta" data-pag="${pag+1}" ${pag===total?'disabled':''} aria-label="Próxima página">›</button></div>`:'')+
    (dividir?`<button type="button" class="pag-modo btn btn-outline">${verTodas?'Ver em páginas':`Ver todas (${ok.length})`}</button>`:'');
};
// volta para o topo do catálogo ao trocar de página, para o cliente começar pela primeira máquina
const subir=()=>document.getElementById('catalogo').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
paginas.addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b||b.disabled) return;
  if(b.classList.contains('pag-modo')){ verTodas=!verTodas; pag=1; mostrar(); paginas.querySelector('.pag-modo').focus({preventScroll:true}); if(!verTodas) subir(); return; }
  pag=+b.dataset.pag; mostrar(); subir();
  // quem navega pelo teclado continua na primeira máquina da nova página
  grid.querySelector('.maq:not([hidden]) .maq-ver')?.focus({preventScroll:true});
});

estreito.addEventListener('change',()=>mostrar());

const filtrar=cat=>{
  chips.forEach(c=>c.setAttribute('aria-pressed',c.dataset.cat===cat));
  catAtual=cat; pag=1; mostrar();
  // no celular os filtros rolam de lado: deixa o escolhido à vista
  const ativo=chips.find(c=>c.dataset.cat===cat); if(ativo) filtros.scrollLeft=ativo.offsetLeft-filtros.offsetLeft-16;
};
chips.forEach(c=>c.addEventListener('click',()=>filtrar(c.dataset.cat)));
const inicial=new URLSearchParams(location.search).get('cat');
filtrar(chips.some(c=>c.dataset.cat===inicial)?inicial:'todas');
