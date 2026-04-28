// ── Sparkles
const c = document.getElementById('pts');
for(let i=0;i<80;i++){
  const p=document.createElement('div');p.className='pt';
  const sz=1.5+Math.random()*3;
  p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;--d:${2+Math.random()*5}s;--dl:${Math.random()*7}s;`;
  c.appendChild(p);
}

// ── Live clock (Telugu days)
const te_days=['ఆదివారం','సోమవారం','మంగళవారం','బుధవారం','గురువారం','శుక్రవారం','శనివారం'];
const te_months=['జనవరి','ఫిబ్రవరి','మార్చి','ఏప్రిల్','మే','జూన్','జూలై','ఆగస్టు','సెప్టెంబర్','అక్టోబర్','నవంబర్','డిసెంబర్'];

function updateClock(){
  const now=new Date();
  const h=String(now.getHours()).padStart(2,'0');
  const m=String(now.getMinutes()).padStart(2,'0');
  const s=String(now.getSeconds()).padStart(2,'0');
  const d=now.getDate();
  const mo=te_months[now.getMonth()];
  const y=now.getFullYear();
  const dy=te_days[now.getDay()];
  document.getElementById('ct').textContent=`${h}:${m}:${s}`;
  document.getElementById('cd').textContent=`${d} ${mo} ${y}`;
  document.getElementById('cdy').textContent=dy;
}
updateClock();
setInterval(updateClock,1000);
