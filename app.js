(function(){
'use strict';

/* Oferty z agora-nieruchomosciplock.pl (stan 06.11.2026) */
var OFERTY=[
 {id:'1404',typ:'dom',tr:'sprzedaz',t:'Dom w stylu glamour z ogrodem',lok:'gm. Stara Biała, powiat płocki',okol:1,cena:2299000,stara:2599000,m2:198,par:['198 m²','działka 1767 m²','rok budowy 2020'],n:6,ll:[52.611,19.650]},
 {id:'1448',typ:'dom',tr:'sprzedaz',t:'Duży dom skąpany w zieleni',lok:'Cekanowo, gm. Słupno',okol:1,cena:1999000,m2:172,par:['172 m²','działka 4066 m²','kominek'],n:5,ll:[52.5212,19.8328]},
 {id:'1395',typ:'mieszkanie',tr:'wynajem',t:'2 pokoje na ogrodzonym osiedlu, umeblowane',lok:'Płock, ul. Saperska',cena:2600,m2:50,par:['50 m²','2 pokoje','balkon'],n:5,ll:[52.5395,19.7290]},
 {id:'1437',typ:'mieszkanie',tr:'sprzedaz',t:'3 pokoje w ocieplonym bloku',lok:'Płock, os. Kochanowskiego',cena:415000,stara:435000,m2:58,par:['58 m²','3 pokoje','3 piętro'],n:4,ll:[52.5500,19.7020]},
 {id:'1460',typ:'dom',tr:'sprzedaz',t:'Dom z pompą ciepła i fotowoltaiką',lok:'Dobrzyków, gm. Gąbin',okol:1,cena:899000,m2:205,par:['205 m²','działka 868 m²','5 pokoi'],n:5,ll:[52.4696,19.7486]},
 {id:'1459',typ:'lokal',tr:'wynajem',t:'Lokal biurowy z balkonem przy głównej ulicy',lok:'Płock, Centrum, ul. Królewiecka',cena:2500,plus:'+ opłaty',m2:100,par:['100 m²','3 pokoje + kuchnia','1 piętro'],n:5,ll:[52.5482,19.6952]},
 {id:'1418',typ:'dzialka',tr:'sprzedaz',t:'Działka budowlana przy lesie',lok:'Płock, os. Góry, ul. Podleśna',cena:399000,m2:1751,par:['1751 m²','budowlana, MPZP'],n:4,tylko:1,ll:[52.5790,19.6690]},
 {id:'1436',typ:'obiekt',tr:'wynajem',t:'Hala z biurami, teren ogrodzony',lok:'Płock, ul. Zglenickiego',cena:12000,plus:'netto',m2:400,par:['400 m²','30 zł/m² netto','monitoring'],n:4,tylko:1,ll:[52.5900,19.6450]},
 {id:'1447',typ:'dom',tr:'sprzedaz',t:'Parterowy dom z poddaszem do aranżacji',lok:'Bielsk, powiat płocki',okol:1,cena:1099000,m2:149,par:['149 m²','działka 910 m²','3 sypialnie'],n:4,tylko:1,ll:[52.6713,19.8049]},
 {id:'999',typ:'mieszkanie',tr:'wynajem',t:'Apartamenty w kamienicy przy Ratuszu',lok:'Płock, Stare Miasto',cena:2400,od:1,m2:37,par:['37-78 m²','2-3 pokoje','klimatyzacja'],n:5,ll:[52.5466,19.6878]},
 {id:'1122',typ:'dzialka',tr:'sprzedaz',t:'Działka z widokiem na Wisłę',lok:'gm. Brudzeń Duży',okol:1,cena:169000,stara:179000,m2:3067,par:['3067 m²','warunki zabudowy','prąd, woda'],n:2,ll:[52.6675,19.5039]},
 {id:'1224',typ:'dom',tr:'wynajem',t:'Elegancki dom z ogrodem',lok:'Słupno k. Płocka',okol:1,cena:8000,plus:'+ opłaty',m2:136,par:['136 m²','działka 900 m²','garaż'],n:6,ll:[52.4997,19.8444]},
 {id:'1369',typ:'mieszkanie',tr:'sprzedaz',t:'3 pokoje na nowym osiedlu ZEN',lok:'Płock, Podolszyce Płn., ul. Urodzajna',cena:610638,m2:66,par:['65,66 m²','3 pokoje','rynek pierwotny'],n:3,ll:[52.5650,19.7330]},
 {id:'1088',typ:'lokal',tr:'wynajem',t:'Lokal w centrum handlowym, przy parkingu',lok:'Płock, Centrum, ul. Nowy Rynek',cena:4000,plus:'netto',m2:110,par:['110 m²','1 piętro','parking'],n:4,ll:[52.5447,19.6975]},
 {id:'868',typ:'obiekt',tr:'sprzedaz',t:'Zabytkowy młyn do adaptacji',lok:'Białotarsk, gm. Gostynin',okol:1,cena:159000,m2:584,par:['584 m²','działka 900 m²','nowy dach'],n:4,tylko:1,ll:[52.4421,19.3153]},
 {id:'1438',typ:'obiekt',tr:'sprzedaz',t:'Budynek produkcyjno-magazynowy',lok:'Maszewo Duże, gm. Stara Biała',okol:1,cena:969000,stara:999000,m2:508,par:['508 m²','działka 1850 m²','3 fazy, gaz'],n:4,ll:[52.5772,19.6340]}
];
var BIURO=[52.54511,19.70084];

function zl(v){return String(v).replace(/\B(?=(\d{3})+(?!\d))/g,' ')+' zł'}
function cenaTxt(o){
  var s=(o.od?'od ':'')+zl(o.cena);
  if(o.tr==='wynajem') s+='<small> /mies.'+(o.plus?' '+o.plus:'')+'</small>';
  if(o.stara) s+='<s>'+zl(o.stara)+'</s>';
  return s;
}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

/* ---------- karty ---------- */
var karty=document.getElementById('karty');
var STR='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
var html='';
OFERTY.forEach(function(o,i){
  var imgs='';
  for(var k=1;k<=o.n;k++){
    imgs+='<img src="img/o'+o.id+'-'+k+'-720.webp" alt="'+esc(o.t)+', zdjęcie '+k+'" width="720" height="540" loading="lazy" draggable="false">';
  }
  html+='<article class="karta" id="of'+o.id+'" data-i="'+i+'">'+
   '<div class="gal" aria-roledescription="galeria" aria-label="Zdjęcia: '+esc(o.t)+'">'+
    '<div class="gal-tor" tabindex="0">'+imgs+'</div>'+
    (o.n>1?'<button class="gal-str l" type="button" aria-label="Poprzednie zdjęcie" disabled>'+STR+'</button><button class="gal-str p" type="button" aria-label="Następne zdjęcie" style="transform:translateY(-50%) scaleX(-1)">'+STR+'</button>':'')+
    '<span class="gal-n"><span class="gal-akt">1</span>/'+o.n+'</span>'+
    '<div class="etyk"><span class="'+(o.tr==='wynajem'?'wyn':'')+'">'+(o.tr==='wynajem'?'Wynajem':'Sprzedaż')+'</span>'+(o.tylko?'<span class="tylko">Tylko u nas</span>':'')+'</div>'+
   '</div>'+
   '<div class="karta-b">'+
    '<p class="cena">'+cenaTxt(o)+'</p>'+
    '<h3>'+esc(o.t)+'</h3>'+
    '<p class="lok">'+esc(o.lok)+'</p>'+
    '<ul class="par">'+o.par.map(function(p){return '<li>'+esc(p)+'</li>'}).join('')+'</ul>'+
    '<button class="karta-pyt" type="button" data-pyt="Proszę o informacje o ofercie: '+esc(o.t)+', '+esc(o.lok)+'. ">Zapytaj o tę ofertę</button>'+
   '</div></article>';
});
karty.innerHTML=html;

/* galerie: swipe palcem (natywnie), przeciąganie myszą, strzałki, licznik */
Array.prototype.forEach.call(document.querySelectorAll('.gal'),function(g){
  var tor=g.querySelector('.gal-tor'),akt=g.querySelector('.gal-akt'),l=g.querySelector('.gal-str.l'),p=g.querySelector('.gal-str.p');
  var n=tor.children.length;
  function idx(){return Math.round(tor.scrollLeft/Math.max(1,tor.clientWidth))}
  function upd(){var i=idx();akt.textContent=i+1;if(l){l.disabled=i<=0;p.disabled=i>=n-1}}
  function idz(i){i=Math.max(0,Math.min(n-1,i));tor.scrollTo({left:i*tor.clientWidth,behavior:'smooth'})}
  tor.addEventListener('scroll',function(){window.requestAnimationFrame(upd)},{passive:true});
  if(l){l.addEventListener('click',function(){idz(idx()-1)});p.addEventListener('click',function(){idz(idx()+1)})}
  tor.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();idz(idx()+1)}if(e.key==='ArrowLeft'){e.preventDefault();idz(idx()-1)}});
  var x0=0,s0=0,ciag=false,ruch=0;
  tor.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||e.button!==0)return;ciag=true;ruch=0;x0=e.clientX;s0=tor.scrollLeft;tor.classList.add('ciagnie');tor.setPointerCapture(e.pointerId)});
  tor.addEventListener('pointermove',function(e){if(!ciag)return;var dx=e.clientX-x0;ruch=Math.max(ruch,Math.abs(dx));tor.scrollLeft=s0-dx});
  function koniec(e){if(!ciag)return;ciag=false;tor.classList.remove('ciagnie');var dx=e.clientX-x0;var i=Math.round(s0/tor.clientWidth);if(dx<-40)i++;else if(dx>40)i--;idz(i)}
  tor.addEventListener('pointerup',koniec);tor.addEventListener('pointercancel',koniec);
  tor.addEventListener('click',function(e){if(ruch>6){e.preventDefault();e.stopPropagation()}},true);
});

/* ---------- filtry + wyszukiwarka ---------- */
var stan={tr:'',typ:'',lok:'',cena:0,m2:0},rozwin=false;
var licz=document.getElementById('licznik'),brak=document.getElementById('brak'),wiecej=document.getElementById('wiecej');
function limit(){return window.innerWidth<=600?4:(window.innerWidth<=1240?6:8)}
function pasuje(o){
  if(stan.tr&&o.tr!==stan.tr)return false;
  if(stan.typ&&o.typ!==stan.typ)return false;
  if(stan.lok==='plock'&&o.okol)return false;
  if(stan.lok==='okolice'&&!o.okol)return false;
  if(stan.cena&&o.cena>stan.cena)return false;
  if(stan.m2&&o.m2<stan.m2)return false;
  return true;
}
function pokaz(){
  var w=0,lim=limit(),el=karty.children;
  OFERTY.forEach(function(o,i){var ok=pasuje(o);if(ok)w++;el[i].hidden=!ok||(!rozwin&&w>lim)});
  licz.textContent=w===1?'1 oferta':(w%10>=2&&w%10<=4&&(w%100<10||w%100>=20)?w+' oferty':w+' ofert');
  brak.hidden=w>0;
  wiecej.parentNode.hidden=rozwin||w<=lim;
  wiecej.textContent='Pokaż wszystkie oferty ('+w+')';
  Array.prototype.forEach.call(document.querySelectorAll('#filtry button'),function(b){b.classList.toggle('on',(stan[b.dataset.f]||'')===b.dataset.v)});
}
document.getElementById('filtry').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  stan[b.dataset.f]=b.dataset.v;pokaz();
});
wiecej.addEventListener('click',function(){rozwin=true;pokaz()});
var resizeT;window.addEventListener('resize',function(){clearTimeout(resizeT);resizeT=setTimeout(pokaz,150)});

var form=document.getElementById('szukaj'),cenaSel=document.getElementById('cenaDo');
var CENY={sprzedaz:[200000,400000,600000,1000000,2000000],wynajem:[2500,4000,8000,15000]};
function cenyOpcje(){
  var tr=form.tr.value,o='<option value="0">Dowolna</option>';
  CENY[tr].forEach(function(c){o+='<option value="'+c+'">'+(c>=1000000?(c/1000000).toLocaleString('pl-PL')+' mln zł':zl(c))+'</option>'});
  cenaSel.innerHTML=o;
}
cenyOpcje();
Array.prototype.forEach.call(form.tr,function(r){r.addEventListener('change',cenyOpcje)});
form.addEventListener('submit',function(e){
  e.preventDefault();
  stan.tr=form.tr.value;stan.typ=form.typ.value;stan.lok=form.lok.value;
  stan.cena=+cenaSel.value||0;stan.m2=+form.m2.value||0;rozwin=false;pokaz();
  document.getElementById('oferty').scrollIntoView({behavior:'smooth'});
});
pokaz();

/* ---------- hero: slajdy z ofertami ---------- */
var sl=document.querySelectorAll('.slajd'),kr=document.querySelectorAll('.kropki button'),hi=0,timer;
var podpis=document.getElementById('slajdPodpis'),pTxt=document.getElementById('slajdTxt'),pCena=document.getElementById('slajdCena');
function oferta(id){for(var i=0;i<OFERTY.length;i++)if(OFERTY[i].id===id)return OFERTY[i]}
function slajd(i){
  hi=(i+sl.length)%sl.length;
  Array.prototype.forEach.call(sl,function(s,k){s.classList.toggle('on',k===hi)});
  Array.prototype.forEach.call(kr,function(s,k){s.classList.toggle('on',k===hi)});
  var o=oferta(sl[hi].dataset.oferta);pTxt.textContent=o.t+', '+o.lok;pCena.textContent=zl(o.cena);
}
function start(){clearInterval(timer);if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(function(){slajd(hi+1)},6500)}
Array.prototype.forEach.call(kr,function(b,k){b.addEventListener('click',function(){slajd(k);start()})});
slajd(0);start();
podpis.addEventListener('click',function(e){
  e.preventDefault();var id=sl[hi].dataset.oferta;
  stan={tr:'',typ:'',lok:'',cena:0,m2:0};rozwin=true;pokaz();
  var k=document.getElementById('of'+id);k.scrollIntoView({behavior:'smooth',block:'center'});
  k.classList.add('blysk');setTimeout(function(){k.classList.remove('blysk')},2200);
});
var hf=document.getElementById('slajdy'),tx0=null;
hf.addEventListener('touchstart',function(e){tx0=e.touches[0].clientX},{passive:true});
hf.addEventListener('touchend',function(e){if(tx0===null)return;var d=e.changedTouches[0].clientX-tx0;if(Math.abs(d)>45){slajd(hi+(d<0?1:-1));start()}tx0=null},{passive:true});

/* ---------- menu mobilne ---------- */
var burger=document.getElementById('burger'),menu=document.getElementById('menu');
function zamknij(){menu.classList.remove('otw');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Otwórz menu');document.body.style.overflow=''}
burger.addEventListener('click',function(){
  var o=!menu.classList.contains('otw');menu.classList.toggle('otw',o);burger.setAttribute('aria-expanded',o);
  burger.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');document.body.style.overflow=o?'hidden':'';
});
menu.addEventListener('click',function(e){if(e.target.closest('a'))zamknij()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')zamknij()});

/* ---------- pasek mobilny po przewinięciu za hero ---------- */
var pasek=document.getElementById('mobPasek');
if('IntersectionObserver' in window){
  new IntersectionObserver(function(en){var v=!en[0].isIntersecting;pasek.classList.toggle('widac',v);pasek.setAttribute('aria-hidden',!v);Array.prototype.forEach.call(pasek.querySelectorAll('a'),function(a){a.tabIndex=v?0:-1})},{threshold:0}).observe(document.querySelector('.szukaj'));
}

/* ---------- "zapytaj o ofertę" -> formularz kontaktowy ---------- */
var wiad=document.getElementById('wiad');
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-pyt]');if(!b)return;
  e.preventDefault();wiad.value=b.dataset.pyt;
  document.getElementById('kontakt').scrollIntoView({behavior:'smooth'});
  setTimeout(function(){wiad.focus({preventScroll:true});wiad.setSelectionRange(wiad.value.length,wiad.value.length)},700);
});

/* ---------- formularze pokazowe (bez wysyłki) ---------- */
Array.prototype.forEach.call(document.querySelectorAll('.formularz'),function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var info=f.querySelector('.f-info'),zle=[];
    Array.prototype.forEach.call(f.querySelectorAll('[required]'),function(p){
      var ok=p.type==='checkbox'?p.checked:p.value.trim().length>1;
      p.classList.toggle('bl',!ok);if(!ok)zle.push(p);
    });
    if(zle.length){info.className='f-info zle';info.textContent='Uzupełnij zaznaczone pola i zaznacz zgodę.';zle[0].focus();return}
    info.className='f-info ok';
    info.textContent='Dziękujemy! To wersja pokazowa strony - na docelowej wiadomość trafi prosto do biura.';
  });
});

var pl=document.querySelector('.plik input'),plT=document.getElementById('plikTxt');
if(pl)pl.addEventListener('change',function(){var n=pl.files.length;plT.textContent=n?('Wybrano zdjęć: '+n):'Dodaj zdjęcia z telefonu lub komputera'});

/* ---------- mapy (Leaflet + OpenStreetMap) ---------- */
function mapy(){
  if(!window.L)return;
  var ikOf=L.divIcon({className:'pin-wrap',html:'<div class="pin-oferta"></div>',iconSize:[22,16],iconAnchor:[11,16],popupAnchor:[0,-14]});
  var znak='<svg viewBox="-1 -2 91 33"><g fill="none"><path d="M0 25 L34.3 1.8 L60 21" stroke="#999" stroke-width="5"/><path d="M47 16 L62.7 4.5 L88.5 23.5" stroke="#fff" stroke-width="9"/><path d="M47 16 L62.7 4.5 L88.5 23.5" stroke="#999" stroke-width="5"/></g><path d="M21.5 30 L38.7 16.2 L56 30Z" fill="#34C6F5"/></svg>';
  var ikB=L.divIcon({className:'pin-wrap',html:'<div class="pin-biuro">'+znak+'</div>',iconSize:[56,34],iconAnchor:[28,34],popupAnchor:[0,-30]});
  var kafle='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',atr='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  var m1=L.map('mapaOfert',{scrollWheelZoom:false,zoomControl:true});
  L.tileLayer(kafle,{maxZoom:18,attribution:atr}).addTo(m1);
  var gr=[];
  OFERTY.forEach(function(o){
    gr.push(o.ll);
    L.marker(o.ll,{icon:ikOf,title:o.t}).addTo(m1).bindPopup('<b>'+esc(o.t)+'</b><br>'+esc(o.lok)+'<br>'+(o.od?'od ':'')+zl(o.cena)+(o.tr==='wynajem'?' /mies.':''));
  });
  L.marker(BIURO,{icon:ikB,title:'Biuro AGORA'}).addTo(m1).bindPopup('<b>Biuro AGORA</b><br>ul. Padlewskiego 3 lok. 7');
  gr.push(BIURO);
  m1.fitBounds(gr,{padding:[30,30]});
  var m2=L.map('mapaBiuro',{scrollWheelZoom:false}).setView(BIURO,16);
  L.tileLayer(kafle,{maxZoom:19,attribution:atr}).addTo(m2);
  L.marker(BIURO,{icon:ikB,title:'Biuro AGORA'}).addTo(m2).bindPopup('<b>AGORA Nieruchomości</b><br>ul. Padlewskiego 3 lok. 7 (parter)');
}
if('IntersectionObserver' in window){
  var mo=new IntersectionObserver(function(en){if(en.some(function(x){return x.isIntersecting})){mo.disconnect();mapy()}},{rootMargin:'400px'});
  mo.observe(document.getElementById('obszar'));mo.observe(document.getElementById('kontakt'));
}else{window.addEventListener('load',mapy)}
})();
