
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
const menu=document.querySelector('.menu'), nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'))}
const counters=document.querySelectorAll('[data-count]');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.count;let n=0,step=Math.max(1,Math.ceil(target/60));const t=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(t)}el.textContent=n.toLocaleString()+ (el.dataset.suffix||'')},18);obs.unobserve(el)})},{threshold:.45});
counters.forEach(c=>obs.observe(c));
