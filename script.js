const modal=document.getElementById('MODAL');
const TITLE=document.getElementById('TITLE');
const TEXT=document.getElementById('TEXT');
const OPENMODAL=(TITLE,TEXT)=>{
  TITLE.textContent=TITLE;
  TEXT.textContent=TEXT;
  modal.classList.add('OPEN')
};
const CLOSEMODAL=()=>modal.classList.remove('OPEN');

const PROFILE=document.getElementById('PROFILE_SHOW');
const OPENLIST=()=>PROFILE.classList.add('OPEN');
const CLOSELIST=()=>PROFILE.classList.remove('OPEN');



document.getElementById('LOGIN_SHOW').addEventListener('click',()=>OPENMODAL('Bienvenue sur Hwayji','La connexion par numéro de téléphone sera utilisée dans la version connectée.'));
document.getElementById('CLOSE').addEventListener('click',CLOSEMODAL);
modal.addEventListener('click',e=>{if(e.target===modal)CLOSEMODAL()});

document.getElementById('PROFILE').addEventListener('click', ()=>OPENLIST());
document.getElementById('CLOSE').addEventListener('click',CLOSELIST);
PROFILE.addEventListener('click',e=>{if(e.target===PROFILE)CLOSELIST()});

document.getElementById('REGISTER').addEventListener('click',()=>{
  TITLE.textContent='Créé votre compte';
  document.getElementById('USERNAME').style.display='flex';
  document.getElementById('MDP').style.display='none';
  document.getElementById('REGISTER').style.display='none';
});
















const searchPanel=document.getElementById('searchPanel');
document.getElementById('searchToggle').addEventListener('click',()=>searchPanel.classList.add('OPEN'));
document.getElementById('closeSearch').addEventListener('click',()=>searchPanel.classList.remove('OPEN'));
document.getElementById('searchInput').addEventListener('input',e=>{
  const q=e.target.value.toLowerCase().trim();
  document.querySelectorAll('.product').forEach(p=>p.style.display=p.innerText.toLowerCase().includes(q)?'':'none');
});

document.querySelectorAll('.heart').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('liked');btn.textContent=btn.classList.contains('liked')?'♥':'♡'}));

function filterProducts(category){
  document.querySelectorAll('.product').forEach(p=>p.style.display=(category==='Tous'||p.dataset.category===category)?'':'none');
  document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===category));
  document.querySelectorAll('.category').forEach(b=>b.classList.toggle('active',b.dataset.cat===category));
}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>filterProducts(b.dataset.filter)));
document.querySelectorAll('.category').forEach(b=>b.addEventListener('click',()=>filterProducts(b.dataset.cat)));
