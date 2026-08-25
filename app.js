const P = {
A: [
  {b:"A1",g:"A",n:"Goblet Squat",s:3,type:"weight",r:"8–10",l:"16 kg",w:"Beine und Core bei stabiler Knieachse.",c:"Breiter angenehmer Stand, langsam absenken.",v:"https://www.youtube.com/results?search_query=goblet+squat+technique"},
  {b:"A2",g:"A",n:"Chest Supported Row",s:3,type:"weight",r:"8–10",l:"6 kg",w:"Mittlerer Rücken ohne unnötige HWS-Belastung.",c:"Brust an der Bank, Nacken lang, Ellbogen Richtung Hüfte.",v:"https://www.youtube.com/results?search_query=chest+supported+dumbbell+row+technique"},
  {b:"B1",g:"B",n:"Dumbbell Bench Press",aliases:["Floor Press"],s:3,type:"weight",r:"8–10",l:"8 kg",w:"Druckkraft bei stabilem Handgelenk und kontrollierter Schulterposition.",c:"Flache Bank, halbneutraler Griff, Ellbogen ca. 30–45°, Schulterblätter sanft zurück/unten, Nacken locker.",v:"https://www.youtube.com/results?search_query=dumbbell+bench+press+neutral+grip+technique"},
  {b:"B2",g:"B",n:"Bulgarian Split Squat",s:3,type:"unilateralWeight",r:"8–10/Seite",l:"7 kg/Hand",w:"Einbeinige Kraft und Kniesicherheit.",c:"Vorderer Fuß arbeitet, sauber ausrichten. Schwächere Seite bestimmt die Steigerung.",v:"https://www.youtube.com/results?search_query=bulgarian+split+squat+technique"},
  {b:"C1",g:"C",n:"Trap-3 Raise",s:3,type:"weight",r:"10–12",l:"0,5 kg",w:"Unterer Trapez und Schulterblattkontrolle.",c:"Sehr leicht, Arm in Y-Richtung, Daumen nach oben, Schulter weg vom Ohr, HWS neutral.",v:"https://www.youtube.com/results?search_query=trap+3+raise+exercise"},
  {b:"C2",g:"C",n:"Pallof Press",s:3,type:"unilateralBand",r:"10/Seite",l:"grün/rot",w:"Anti-Rotation und Core-Stabilität.",c:"Rippen unten, Becken ruhig, kontrolliert ausstrecken.",v:"https://www.youtube.com/results?search_query=pallof+press+technique"},
  {b:"Finisher",g:"Finisher",n:"Suitcase Carry",s:3,type:"unilateralTime",r:"30 s/Seite",l:"12 kg",w:"Seitliche Rumpfstabilität.",c:"Nur eine Hantel, aufrecht bleiben, Schulter tief, nicht zur Seite kippen.",v:"https://www.youtube.com/results?search_query=suitcase+carry+technique"}
],
B: [
  {b:"A1",g:"A",n:"B-Stance RDL",s:3,type:"unilateralWeight",r:"8–10/Seite",l:"14 kg",w:"Hintere Kette mit Seitenfokus.",c:"Hinterer Fuß nur als Stütze, Hüfte nach hinten, Nacken neutral.",v:"https://www.youtube.com/results?search_query=b+stance+romanian+deadlift+technique"},
  {b:"A2",g:"A",n:"Band Pulldown",s:3,type:"band",r:"10–12",l:"schwarz + rot",w:"Lat und Rückenbreite.",c:"Ellbogen Richtung Hosentaschen, Schulterblätter tief.",v:"https://www.youtube.com/results?search_query=resistance+band+lat+pulldown+technique"},
  {b:"B1",g:"B",n:"Reverse Split Squat",s:3,type:"unilateralWeight",r:"8/Seite",l:"8 kg/Hand",w:"Einbeinige Kraft mit kontrollierter Beinachse.",c:"Kontrolliert senken, vorderes Bein arbeitet, sauber aufrichten.",v:"https://www.youtube.com/results?search_query=reverse+split+squat+technique"},
  {b:"B2",g:"B",n:"Schulterdrücken",s:3,type:"weight",r:"8–10",l:"6 kg",w:"Kontrollierte Schulterkraft.",c:"Leicht und sauber, Rippen unten, Nacken lang. Bei HWS-Reizung abbrechen.",v:"https://www.youtube.com/results?search_query=seated+dumbbell+shoulder+press+technique"},
  {b:"C1",g:"C",n:"Lateral Walks",s:3,type:"unilateralBand",r:"12/Seite",l:"blau",w:"Gluteus medius und Beinachse.",c:"Kleine kontrollierte Schritte, Bandspannung halten.",v:"https://www.youtube.com/results?search_query=banded+lateral+walk+technique"},
  {b:"C2",g:"C",n:"Reverse Crunch",s:3,type:"body",r:"10–12",l:"Körpergewicht",w:"Unterer Bauch und Beckenkontrolle.",c:"Becken einrollen, kein Schwung.",v:"https://www.youtube.com/results?search_query=reverse+crunch+proper+form"},
  {b:"Finisher",g:"Finisher",n:"Marching Carry",s:3,type:"time",r:"30–40 s",l:"14–15 kg/Hand",w:"Core, Griffkraft und Kondition.",c:"Langsam marschieren, aufrecht bleiben, Schultern tief.",v:"https://www.youtube.com/results?search_query=marching+farmer+carry+technique"}
]};

const R = [
  ["Cat Cow","8 Wiederholungen"],
  ["Wall Slides","10 Wiederholungen"],
  ["Band Pull Aparts","15 Wiederholungen"],
  ["Bird Dog","8 pro Seite"],
  ["Dead Bug","8 pro Seite"],
  ["Farmer Hold","2 × 30 Sekunden"]
];

const BAND_OPTIONS = ["","gelb","rot","grün","blau","schwarz","grün + rot","schwarz + rot","anderer"];

let S = {p:null, step:0, d:null, timerSeconds:60, timerHandle:null, flow:[]};
const $ = id => document.getElementById(id);

function D(){
  try { return JSON.parse(localStorage.getItem("PS") || '{"sessions":[]}'); }
  catch { return {sessions:[]}; }
}
function saveStore(x){ localStorage.setItem("PS", JSON.stringify(x)); home(); }
function show(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0,0);
}
function home(){
  const d=D(), a=d.sessions||[], l=a.at(-1);
  $("count").textContent=a.length;
  $("hws").textContent=l ? `${l.hws}/10` : "–";
  $("knee").textContent=l ? `${l.knee}/10` : "–";
  $("last").textContent=l ? `${l.date} · Training ${l.plan} · Energie ${l.energy}/5` : "Noch keine Einheit gespeichert.";
}

function buildFlow(plan){
  const ex=P[plan], flow=[];
  ["A","B","C"].forEach(g=>{
    const pair=ex.map((e,i)=>({e,i})).filter(x=>x.e.g===g);
    for(let round=0;round<3;round++){
      pair.forEach((x,pos)=>flow.push({kind:"exercise",index:x.i,round,group:g,pos,pairLength:pair.length}));
      if(round<2) flow.push({kind:"pause",group:g,round,nextIndex:pair[0]?.i});
    }
  });
  const fin=ex.map((e,i)=>({e,i})).find(x=>x.e.g==="Finisher");
  if(fin){
    for(let round=0;round<fin.e.s;round++){
      flow.push({kind:"exercise",index:fin.i,round,group:"Finisher",pos:0,pairLength:1});
      if(round<fin.e.s-1) flow.push({kind:"pause",group:"Finisher",round,nextIndex:fin.i});
    }
  }
  return flow;
}

function emptySet(type){
  if(type==="unilateralWeight") return {kg:"",repsL:"",rpeL:"",repsR:"",rpeR:""};
  if(type==="unilateralBand") return {band:"",repsL:"",rpeL:"",repsR:"",rpeR:""};
  if(type==="unilateralTime") return {kg:"",secL:"",rpeL:"",secR:"",rpeR:""};
  if(type==="band") return {band:"",reps:"",rpe:""};
  if(type==="body") return {reps:"",rpe:""};
  if(type==="time") return {kg:"",sec:"",rpe:""};
  return {kg:"",reps:"",rpe:""};
}

function startTraining(plan){
  S.p=plan; S.step=0; S.flow=buildFlow(plan);
  S.d={
    plan,
    date:new Date().toLocaleDateString("de-AT"),
    appVersion:"0.2",
    exercises:P[plan].map(e=>({name:e.n,sets:Array.from({length:e.s},()=>emptySet(e.type))}))
  };
  $("title").textContent=`Training ${plan}`;
  renderStep();
}

document.querySelectorAll(".start").forEach(b=>b.onclick=()=>startTraining(b.dataset.plan));

function findPrevExercise(e){
  const names=[e.n,...(e.aliases||[])];
  for(const s of (D().sessions||[]).slice().reverse()){
    const hit=s.exercises?.find(x=>names.includes(x.name));
    if(hit) return hit;
  }
  return null;
}

function setSummary(s){
  if(!s) return "";
  if(s.band) {
    if(s.repsL||s.repsR) return `${s.band} · L ${s.repsL||"–"}/R ${s.repsR||"–"} · RPE ${s.rpeL||"–"}/${s.rpeR||"–"}`;
    return `${s.band} × ${s.reps||"–"} · RPE ${s.rpe||"–"}`;
  }
  if(s.secL||s.secR) return `${s.kg||"–"} kg · L ${s.secL||"–"} s/R ${s.secR||"–"} s · RPE ${s.rpeL||"–"}/${s.rpeR||"–"}`;
  if(s.repsL||s.repsR) return `${s.kg||"–"} kg · L ${s.repsL||"–"}/R ${s.repsR||"–"} · RPE ${s.rpeL||"–"}/${s.rpeR||"–"}`;
  if(s.sec) return `${s.kg||"–"} kg × ${s.sec||"–"} s · RPE ${s.rpe||"–"}`;
  if(s.kg||s.reps||s.rpe) return `${s.kg||"–"} kg × ${s.reps||"–"} · RPE ${s.rpe||"–"}`;
  return "";
}

function previousRoundValue(e, round){
  const p=findPrevExercise(e);
  if(!p) return `Startwert: ${e.l}`;
  const s=p.sets?.[round] || p.sets?.at(-1);
  const text=setSummary(s);
  return text ? `Letztes Mal · Satz ${round+1}: ${text}` : `Startwert: ${e.l}`;
}

function input(label, field, value="", mode="decimal", cls=""){
  return `<label class="${cls}">${label}<input inputmode="${mode}" data-f="${field}" value="${value ?? ""}"></label>`;
}
function bandSelect(value=""){
  return `<label class="wide">Band/Widerstand<select data-f="band">${
    BAND_OPTIONS.map(x=>`<option value="${x}" ${x===value?"selected":""}>${x||"Auswählen"}</option>`).join("")
  }</select></label>`;
}

function renderEntry(e,set){
  if(e.type==="unilateralWeight"){
    return `<div class="entryCard">
      <div class="fieldGrid two">${input("kg/Hand","kg",set.kg)}</div>
      ${sideBlock("Links","L",set,"reps")}
      ${sideBlock("Rechts","R",set,"reps",true)}
    </div>`;
  }
  if(e.type==="unilateralBand"){
    return `<div class="entryCard">
      <div class="fieldGrid">${bandSelect(set.band)}</div>
      ${sideBlock("Links","L",set,"reps")}
      ${sideBlock("Rechts","R",set,"reps",true)}
    </div>`;
  }
  if(e.type==="unilateralTime"){
    return `<div class="entryCard">
      <div class="fieldGrid two">${input("kg","kg",set.kg)}</div>
      ${sideBlock("Links","L",set,"sec")}
      ${sideBlock("Rechts","R",set,"sec",true)}
    </div>`;
  }
  if(e.type==="band"){
    return `<div class="entryCard"><div class="fieldGrid">
      ${bandSelect(set.band)}
      ${input("Wdh.","reps",set.reps,"numeric")}
      ${input("RPE","rpe",set.rpe,"numeric")}
    </div></div>`;
  }
  if(e.type==="body"){
    return `<div class="entryCard"><div class="fieldGrid two">
      ${input("Wdh.","reps",set.reps,"numeric")}
      ${input("RPE","rpe",set.rpe,"numeric")}
    </div></div>`;
  }
  if(e.type==="time"){
    return `<div class="entryCard"><div class="fieldGrid">
      ${input("kg/Hand","kg",set.kg)}
      ${input("Sek.","sec",set.sec,"numeric")}
      ${input("RPE","rpe",set.rpe,"numeric")}
    </div></div>`;
  }
  return `<div class="entryCard"><div class="fieldGrid">
    ${input("kg","kg",set.kg)}
    ${input("Wdh.","reps",set.reps,"numeric")}
    ${input("RPE","rpe",set.rpe,"numeric")}
  </div></div>`;
}

function sideBlock(label, side, set, measure, copy=false){
  const unit=measure==="sec"?"Sek.":"Wdh.";
  const value=set[measure+side]||"";
  const rpe=set["rpe"+side]||"";
  return `<div class="sideBox">
    <div class="sideHead"><b>${label}</b>${copy?'<button class="copyBtn" type="button" id="copySide">= andere Seite</button>':""}</div>
    <div class="fieldGrid two">
      ${input(unit,measure+side,value,"numeric")}
      ${input("RPE","rpe"+side,rpe,"numeric")}
    </div>
  </div>`;
}

function bindEntry(e,round){
  const current=S.d.exercises[S.flow[S.step].index].sets[round];
  $("entry").querySelectorAll("input,select").forEach(el=>{
    el.oninput=ev=>{ current[ev.target.dataset.f]=ev.target.value; };
    el.onchange=ev=>{ current[ev.target.dataset.f]=ev.target.value; };
  });
  const copy=$("copySide");
  if(copy){
    copy.onclick=()=>{
      if(e.type==="unilateralTime"){
        current.secR=current.secL; current.rpeR=current.rpeL;
      } else {
        current.repsR=current.repsL; current.rpeR=current.rpeL;
      }
      renderStep();
    };
  }
}

function renderStep(){
  const item=S.flow[S.step];
  if(!item){ show("check"); return; }
  if(item.kind==="pause"){ renderPause(item); return; }

  const e=P[S.p][item.index];
  const set=S.d.exercises[item.index].sets[item.round];

  $("progress").textContent=e.g==="Finisher" ? "Finisher" : `Supersatz ${e.g}`;
  $("supersetLabel").textContent=e.g==="Finisher" ? "Finisher" : `Supersatz ${e.g}`;
  $("roundLabel").textContent=`Runde ${item.round+1} von ${e.s}`;
  $("block").textContent=e.b;
  $("name").textContent=e.n;
  $("why").textContent=e.w;
  $("cue").textContent=e.c;
  $("video").href=e.v;
  $("prev").textContent=previousRoundValue(e,item.round);
  $("entry").innerHTML=renderEntry(e,set);
  bindEntry(e,item.round);

  $("prevBtn").disabled=S.step===0;
  $("nextBtn").textContent=(S.step===S.flow.length-1) ? "Abschluss" : "Weiter";
  show("train");
}

function renderPause(item){
  clearInterval(S.timerHandle);
  S.timerSeconds=60;
  updateTimer(60);
  $("pauseLabel").textContent=item.group==="Finisher" ? `Finisher · Runde ${item.round+1} geschafft` : `Supersatz ${item.group} · Runde ${item.round+1} geschafft`;
  const next=P[S.p][item.nextIndex];
  $("pauseNext").textContent=next ? `Danach: ${next.n} · Runde ${item.round+2}` : "";
  show("pause");
  startTimer();
}

function updateTimer(n){
  S.timerSeconds=Math.max(0,n);
  $("timer").textContent=`${String(Math.floor(S.timerSeconds/60)).padStart(2,"0")}:${String(S.timerSeconds%60).padStart(2,"0")}`;
}
function startTimer(){
  clearInterval(S.timerHandle);
  let n=S.timerSeconds;
  S.timerHandle=setInterval(()=>{
    n-=1; updateTimer(n);
    if(n<=0){
      clearInterval(S.timerHandle);
      if(navigator.vibrate) navigator.vibrate([200,100,200]);
    }
  },1000);
}
document.querySelectorAll(".preset").forEach(b=>b.onclick=()=>{updateTimer(+b.dataset.s);startTimer();});
$("skipPause").onclick=()=>{clearInterval(S.timerHandle);S.step++;renderStep();};

$("nextBtn").onclick=()=>{S.step++;renderStep();};
$("prevBtn").onclick=()=>{
  if(S.step>0){
    S.step--;
    if(S.flow[S.step]?.kind==="pause" && S.step>0) S.step--;
    renderStep();
  }
};
$("homeBtn").onclick=()=>show("home");
$("backBtn").onclick=()=>show("train");

["hws","knee","energy"].forEach(k=>{
  $(k+"In").oninput=()=>$(k+"Out").textContent=$(k+"In").value;
});

$("save").onclick=()=>{
  S.d.hws=+$("hwsIn").value;
  S.d.knee=+$("kneeIn").value;
  S.d.energy=+$("energyIn").value;
  S.d.note=$("note").value;
  const d=D();
  d.sessions=d.sessions||[];
  d.sessions.push(S.d);
  saveStore(d);
  $("note").value="";
  show("home");
};

function exp(){
  const a=document.createElement("a");
  const b=new Blob([JSON.stringify(D(),null,2)],{type:"application/json"});
  a.href=URL.createObjectURL(b);
  a.download=`project-strong-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
$("export").onclick=exp;
$("exportTop").onclick=exp;
$("import").onchange=async e=>{
  try{
    const parsed=JSON.parse(await e.target.files[0].text());
    if(!parsed || !Array.isArray(parsed.sessions)) throw new Error("Ungültiges Backup");
    saveStore(parsed);
    alert("Backup importiert.");
  }catch{
    alert("Datei konnte nicht gelesen werden.");
  }
  e.target.value="";
};

R.forEach(([a,b])=>{
  const x=document.createElement("div");
  x.className="resetitem";
  x.innerHTML=`<b>${a}</b><div>${b}</div>`;
  $("resetList").appendChild(x);
});
$("resetStart").onclick=()=>show("reset");
$("resetBack").onclick=()=>show("home");

if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
home();
