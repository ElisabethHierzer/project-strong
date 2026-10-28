const PLAN = {
A: {
  groups: [
    {
      id:"A", title:"Supersatz A",
      exercises:[
        {code:"A1",name:"Heel-Elevated Goblet Squat",type:"weight",reps:"8–10",start:"17 kg",why:"Quadrizeps, Core und skispezifische Bremskraft.",cue:"Fersen leicht erhöht. 3 Sekunden kontrolliert absenken, stabil hochdrücken.",video:"https://www.youtube.com/results?search_query=heel+elevated+goblet+squat+technique"},
        {code:"A2",name:"Chest Supported Row",type:"weight",reps:"10–12",start:"6 kg",why:"Mittlerer Rücken mit wenig unnötiger HWS-Belastung.",cue:"Brust an der Bank, Nacken lang, Ellbogen Richtung Hüfte.",video:"https://www.youtube.com/results?search_query=chest+supported+dumbbell+row+technique"}
      ]
    },
    {
      id:"B", title:"Supersatz B",
      exercises:[
        {code:"B1",name:"Bulgarian Split Squat",type:"unilateralWeight",reps:"8/Seite",start:"7 kg/Hand",why:"Einbeinige Kraft, Beinachse und Bremskontrolle.",cue:"3 Sekunden absenken. Vorderes Bein arbeitet, Knie sauber führen.",video:"https://www.youtube.com/results?search_query=bulgarian+split+squat+technique"},
        {code:"B2",name:"Dumbbell Bench Press",type:"weight",reps:"8–10",start:"8 kg",why:"Druckkraft bei stabilem Handgelenk und kontrollierter Schulterposition.",cue:"Halbneutraler Griff, Ellbogen ca. 30–45°, Schulterblätter sanft zurück/unten.",video:"https://www.youtube.com/results?search_query=dumbbell+bench+press+neutral+grip+technique"}
      ]
    },
    {
      id:"C", title:"Supersatz C",
      exercises:[
        {code:"C1",name:"Single-Leg Sit-to-Stand",type:"unilateralBody",reps:"6–8/Seite",start:"Körpergewicht",why:"Einbeinige Bremskraft und Kniekontrolle für die Skisaison.",cue:"Von der Bank auf einem Bein kontrolliert aufstehen und wieder absetzen. 3 Sekunden langsam absenken, Becken stabil halten. Bei Bedarf den freien Fuß leicht zur Unterstützung aufsetzen.",video:"https://www.youtube.com/results?search_query=single+leg+sit+to+stand+bench+technique"},
        {code:"C2",name:"Pallof Press",type:"unilateralBand",reps:"10–12/Seite",start:"Band nach Gefühl",why:"Anti-Rotation und stabile Körpermitte.",cue:"Rippen unten, Becken ruhig, kontrolliert ausstrecken.",video:"https://www.youtube.com/results?search_query=pallof+press+technique"}
      ]
    }
  ],
  finisher:{
    title:"Ski Finisher A · 6 Minuten",
    exercises:[
      {name:"Wall Sit",cue:"30 Sek. halten · Rücken stabil · gleichmäßig atmen"},
      {name:"Zügiges Marching",cue:"30 Sek. · Arme aktiv mitnehmen"},
      {name:"Wall Sit",cue:"30 Sek. halten"},
      {name:"Zügiges Marching",cue:"30 Sek."}
    ],
    rounds:3
  }
},
B: {
  groups: [
    {
      id:"A", title:"Supersatz A",
      exercises:[
        {code:"A1",name:"B-Stance RDL",type:"unilateralWeight",reps:"8–10/Seite",start:"14 kg",why:"Hintere Kette mit Seitenfokus und Hüftkontrolle.",cue:"Hinterer Fuß nur als Stütze, Hüfte zurück, Nacken neutral.",video:"https://www.youtube.com/results?search_query=b+stance+romanian+deadlift+technique"},
        {code:"A2",name:"Band Pulldown",type:"band",reps:"10–12",start:"Band nach Gefühl",why:"Lat und Schulterblattkontrolle.",cue:"Ellbogen Richtung Hosentaschen, Schultern weg von den Ohren.",video:"https://www.youtube.com/results?search_query=resistance+band+lat+pulldown+technique"}
      ]
    },
    {
      id:"B", title:"Supersatz B",
      exercises:[
        {code:"B1",name:"Lateral Lunge",type:"unilateralWeight",reps:"8/Seite",start:"leicht starten",why:"Seitliche Kraft und Belastbarkeit für Richtungswechsel am Ski.",cue:"Hüfte nach hinten, belastetes Knie stabil über dem Fuß.",video:"https://www.youtube.com/results?search_query=lateral+lunge+technique"},
        {code:"B2",name:"Half-Kneeling One-Arm Band Row",type:"unilateralBand",reps:"10/Seite",start:"Band nach Gefühl",why:"Rücken, Core und Schulterblattkontrolle.",cue:"Halbkniestand stabil, nicht rotieren, Ellbogen kontrolliert zurückziehen.",video:"https://www.youtube.com/results?search_query=half+kneeling+one+arm+band+row"}
      ]
    },
    {
      id:"C", title:"Supersatz C",
      exercises:[
        {code:"C1",name:"Single-Leg Calf Raise",type:"unilateralBody",reps:"12–15/Seite",start:"Körpergewicht",why:"Wadenkraft und Fuß-/Sprunggelenkstabilität.",cue:"Langsam hoch und tief, oben kurz halten, nicht ausweichen.",video:"https://www.youtube.com/results?search_query=single+leg+calf+raise+technique"},
        {code:"C2",name:"Dead Bug mit Bandzug",type:"band",reps:"8/Seite",start:"leichtes Band",why:"Core-Stabilität bei Zugspannung.",cue:"Lendenwirbelsäule kontrolliert, Rippen unten, langsam arbeiten.",video:"https://www.youtube.com/results?search_query=dead+bug+resistance+band+pulldown"}
      ]
    }
  ],
  finisher:{
    title:"Ski Finisher B · 6 Minuten",
    exercises:[
      {name:"Skater Step ohne Sprung",cue:"30 Sek. · seitlich von Bein zu Bein · kontrolliert"},
      {name:"Fast Feet",cue:"30 Sek. · kleine schnelle Schritte am Platz"},
      {name:"Skater Step ohne Sprung",cue:"30 Sek."},
      {name:"Fast Feet",cue:"30 Sek."}
    ],
    rounds:3
  }
}};

const RESET = [
  ["Cat Cow","8 Wiederholungen"],
  ["Wall Slides","10 Wiederholungen"],
  ["Band Pull Aparts","15 Wiederholungen"],
  ["Bird Dog","8 pro Seite"],
  ["Dead Bug","8 pro Seite"],
  ["Farmer Hold","2 × 30 Sekunden"]
];

const BANDS = ["gelb","rot","grün","blau","schwarz"];

let STATE = {
  plan:null, group:0, session:null,
  restSeconds:60, restHandle:null,
  finIndex:0, finRound:0, finSeconds:30, finHandle:null, finRunning:false,
  audioCtx:null
};
const $ = id => document.getElementById(id);

function ensureAudio(){
  try{
    if(!STATE.audioCtx){
      const AC = window.AudioContext || window.webkitAudioContext;
      if(AC) STATE.audioCtx = new AC();
    }
    if(STATE.audioCtx?.state === "suspended") STATE.audioCtx.resume();
  }catch{}
}
function beep(freq=880,duration=0.12,volume=0.14){
  try{
    ensureAudio();
    if(!STATE.audioCtx) return;
    const ctx=STATE.audioCtx;
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.type="sine";
    osc.frequency.value=freq;
    gain.gain.value=volume;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now=ctx.currentTime;
    osc.start(now);
    gain.gain.exponentialRampToValueAtTime(0.001,now+duration);
    osc.stop(now+duration);
  }catch{}
}
function intervalSignal(){
  beep(980,0.10,0.16);
  if(navigator.vibrate) navigator.vibrate(90);
}
function finishSignal(){
  beep(880,0.12,0.16);
  setTimeout(()=>beep(1175,0.16,0.18),150);
  setTimeout(()=>beep(1568,0.22,0.20),330);
  if(navigator.vibrate) navigator.vibrate([180,80,180]);
}

function store(){
  try { return JSON.parse(localStorage.getItem("PS") || '{"sessions":[]}'); }
  catch { return {sessions:[]}; }
}
function writeStore(data){ localStorage.setItem("PS",JSON.stringify(data)); refreshHome(); }
function show(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0,0);
}
function refreshHome(){
  const d=store(), a=d.sessions||[], last=a.at(-1);
  $("count").textContent=a.length;
  $("hws").textContent=last?.hws!=null ? `${last.hws}/10` : "–";
  $("knee").textContent=last?.knee!=null ? `${last.knee}/10` : "–";
  $("last").textContent=last ? `${last.date} · Training ${last.plan} · Energie ${last.energy}/5` : "Noch keine Einheit gespeichert.";
}

function blankSet(type){
  if(type==="unilateralWeight") return {kg:"",repsL:"",repsR:"",rpe:""};
  if(type==="unilateralBody") return {repsL:"",repsR:"",rpe:""};
  if(type==="unilateralBand") return {bands:[],repsL:"",repsR:"",rpe:""};
  if(type==="band") return {bands:[],reps:"",rpe:""};
  return {kg:"",reps:"",rpe:""};
}

function startTraining(plan){
  STATE.plan=plan; STATE.group=0;
  STATE.session={
    plan, block:"Ski Ready", appVersion:"0.3",
    date:new Date().toLocaleDateString("de-AT"),
    groups: PLAN[plan].groups.map(g=>({
      id:g.id,
      exercises:g.exercises.map(e=>({name:e.name,code:e.code,type:e.type,sets:Array.from({length:3},()=>blankSet(e.type))}))
    })),
    finisher:{completed:false}
  };
  $("title").textContent=`Training ${plan}`;
  renderGroup();
}

document.querySelectorAll(".start").forEach(b=>b.onclick=()=>startTraining(b.dataset.plan));

function previousExercise(name){
  const sessions=(store().sessions||[]).slice().reverse();
  for(const s of sessions){
    if(s.groups){
      for(const g of s.groups){
        const e=g.exercises?.find(x=>x.name===name);
        if(e) return e;
      }
    }
    if(s.exercises){
      const e=s.exercises.find(x=>x.name===name);
      if(e) return e;
    }
  }
  return null;
}

function formatPrev(e){
  const p=previousExercise(e.name);
  if(!p?.sets?.length) return `Start: ${e.start}`;
  const s=p.sets[0]||{};
  let parts=[];
  if(s.kg) parts.push(`${s.kg} kg`);
  if(s.bands?.length) parts.push(s.bands.join(" + "));
  if(s.reps) parts.push(`${s.reps} Wdh.`);
  if(s.repsL||s.repsR) parts.push(`L ${s.repsL||"–"} / R ${s.repsR||"–"}`);
  return parts.length ? `Letztes Mal: ${parts.join(" · ")}` : `Start: ${e.start}`;
}

function input(label,field,val="",mode="decimal",extra=""){
  return `<label class="${extra}">${label}<input inputmode="${mode}" data-field="${field}" value="${val??""}"></label>`;
}

function bandChooser(exIndex, setIndex, selected=[]){
  return `<div class="bandWrap">
    <span>Bandfarbe(n) – mehrere möglich</span>
    <div class="bandChoices">
      ${BANDS.map(b=>`<label class="bandChip">
        <input type="checkbox" data-band="${b}" data-ex="${exIndex}" data-set="${setIndex}" ${selected.includes(b)?"checked":""}>
        <span>${b}</span>
      </label>`).join("")}
    </div>
  </div>`;
}

function setRow(e,set,si){
  const num=si+1;
  if(e.type==="weight"){
    return `<div class="setRow"><div class="setNo">${num}</div>
      ${input("kg","kg",set.kg)}
      ${input("Wdh.","reps",set.reps,"numeric")}
      ${input("RPE","rpe",set.rpe,"numeric")}
    </div>`;
  }
  if(e.type==="unilateralWeight"){
    return `<div class="setRow uni"><div class="setNo">${num}</div>
      ${input("kg/Hand","kg",set.kg)}
      ${input("Wdh. L","repsL",set.repsL,"numeric")}
      ${input("Wdh. R","repsR",set.repsR,"numeric","rightCol")}
      ${input("RPE","rpe",set.rpe,"numeric","rightCol")}
    </div>`;
  }
  if(e.type==="unilateralBody"){
    return `<div class="setRow"><div class="setNo">${num}</div>
      ${input("Wdh. L","repsL",set.repsL,"numeric")}
      ${input("Wdh. R","repsR",set.repsR,"numeric")}
      ${input("RPE","rpe",set.rpe,"numeric")}
    </div>`;
  }
  if(e.type==="band"){
    return `${bandChooser("",si,set.bands||[])}
      <div class="setRow"><div class="setNo">${num}</div>
      <div></div>${input("Wdh.","reps",set.reps,"numeric")}${input("RPE","rpe",set.rpe,"numeric")}</div>`;
  }
  if(e.type==="unilateralBand"){
    return `${bandChooser("",si,set.bands||[])}
      <div class="setRow"><div class="setNo">${num}</div>
      ${input("Wdh. L","repsL",set.repsL,"numeric")}
      ${input("Wdh. R","repsR",set.repsR,"numeric")}
      ${input("RPE","rpe",set.rpe,"numeric")}</div>`;
  }
  return "";
}

function exerciseCard(e, exIndex, data){
  return `<div class="exerciseCard" data-ex="${exIndex}">
    <div class="exHead">
      <div><small>${e.code}</small><h2>${e.name}</h2></div>
      <a href="${e.video}" target="_blank" rel="noopener">Video</a>
    </div>
    <p class="muted">${e.why}</p>
    <p class="cue">${e.cue}</p>
    <p class="muted">${formatPrev(e)}</p>
    <div class="setTable">
      ${data.sets.map((s,i)=>`<div class="setWrap" data-set="${i}">${setRow(e,s,i)}</div>`).join("")}
    </div>
  </div>`;
}

function renderGroup(){
  const g=PLAN[STATE.plan].groups[STATE.group];
  const gd=STATE.session.groups[STATE.group];
  $("progress").textContent=`${STATE.group+1} von ${PLAN[STATE.plan].groups.length}`;
  $("groupTitle").textContent=g.title;
  $("pair").innerHTML=g.exercises.map((e,i)=>exerciseCard(e,i,gd.exercises[i])).join("");
  bindGroupInputs();
  $("prevGroup").disabled=STATE.group===0;
  $("nextGroup").textContent=STATE.group===PLAN[STATE.plan].groups.length-1 ? "Zum Finisher 🔥" : "Weiter";
  show("train");
}

function copySet1(exData, e, field, oldValue, newValue){
  if(!["kg","reps","repsL","repsR"].includes(field)) return;
  for(let i=1;i<3;i++){
    const target=exData.sets[i];
    if(target[field]==="" || target[field]===oldValue) target[field]=newValue;
  }
}

function copyBandsFromSet1(exData, oldBands, newBands){
  for(let i=1;i<3;i++){
    const t=exData.sets[i];
    const same = JSON.stringify(t.bands||[])===JSON.stringify(oldBands||[]);
    if(!t.bands?.length || same) t.bands=[...newBands];
  }
}

function bindGroupInputs(){
  const gd=STATE.session.groups[STATE.group];
  const g=PLAN[STATE.plan].groups[STATE.group];

  document.querySelectorAll(".exerciseCard").forEach(card=>{
    const exIndex=+card.dataset.ex;
    const exData=gd.exercises[exIndex];
    const e=g.exercises[exIndex];

    card.querySelectorAll(".setWrap").forEach(wrap=>{
      const si=+wrap.dataset.set;
      const set=exData.sets[si];

      wrap.querySelectorAll("input[data-field]").forEach(el=>{
        el.oninput=()=>{
          const f=el.dataset.field, old=set[f]||"";
          set[f]=el.value;
          if(si===0) copySet1(exData,e,f,old,el.value);
          if(si===0) renderGroup();
        };
      });

      wrap.querySelectorAll("input[data-band]").forEach(cb=>{
        cb.onchange=()=>{
          const old=[...(set.bands||[])];
          set.bands=BANDS.filter(b=>wrap.querySelector(`input[data-band="${b}"]`)?.checked);
          if(si===0){
            copyBandsFromSet1(exData,old,set.bands);
            renderGroup();
          }
        };
      });
    });
  });
}

$("prevGroup").onclick=()=>{ if(STATE.group>0){STATE.group--;renderGroup();} };
$("nextGroup").onclick=()=>{
  if(STATE.group < PLAN[STATE.plan].groups.length-1){ STATE.group++; renderGroup(); }
  else openFinisher();
};
$("homeBtn").onclick=()=>show("home");

// Rest timer
function updateRest(n){
  STATE.restSeconds=Math.max(0,n);
  $("restTimer").textContent=`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`;
}
function startRest(){
  clearInterval(STATE.restHandle);
  let n=STATE.restSeconds;
  STATE.restHandle=setInterval(()=>{
    n--; updateRest(n);
    if(n<=0){clearInterval(STATE.restHandle); if(navigator.vibrate) navigator.vibrate([150,80,150]);}
  },1000);
}
document.querySelectorAll(".restPreset").forEach(b=>b.onclick=()=>{updateRest(+b.dataset.s);startRest();});
$("restStart").onclick=()=>startRest();

// Finisher
function openFinisher(){
  clearInterval(STATE.finHandle);
  STATE.finIndex=0; STATE.finRound=0; STATE.finSeconds=30; STATE.finRunning=false;
  $("finisherName").textContent=PLAN[STATE.plan].finisher.title;
  renderFinisher();
  show("finisher");
}
function renderFinisher(){
  const f=PLAN[STATE.plan].finisher;
  const e=f.exercises[STATE.finIndex];
  $("finRound").textContent=`Runde ${STATE.finRound+1} von ${f.rounds}`;
  $("finStep").textContent=`${STATE.finIndex+1} von ${f.exercises.length}`;
  $("finExercise").textContent=e.name;
  $("finCue").textContent=e.cue;
  $("finTimer").textContent=`00:${String(STATE.finSeconds).padStart(2,"0")}`;
  $("finList").innerHTML=f.exercises.map((x,i)=>`<div class="finListItem ${i===STATE.finIndex?"active":""}">${i+1}. ${x.name}</div>`).join("");
}
function nextFinisherStep(){
  const f=PLAN[STATE.plan].finisher;
  STATE.finSeconds=30;
  if(STATE.finIndex < f.exercises.length-1){
    STATE.finIndex++;
    intervalSignal();
  } else{
    STATE.finIndex=0;
    if(STATE.finRound < f.rounds-1){
      STATE.finRound++;
      intervalSignal();
    } else{
      clearInterval(STATE.finHandle); STATE.finRunning=false;
      STATE.session.finisher.completed=true;
      finishSignal();
      $("finExercise").textContent="Finisher geschafft 🔥";
      $("finCue").textContent="6 Minuten erledigt.";
      $("finTimer").textContent="00:00";
      return;
    }
  }
  renderFinisher();
}
function startFinisher(){
  if(STATE.finRunning) return;
  ensureAudio();
  STATE.finRunning=true;
  STATE.finHandle=setInterval(()=>{
    STATE.finSeconds--;
    $("finTimer").textContent=`00:${String(Math.max(0,STATE.finSeconds)).padStart(2,"0")}`;
    if(STATE.finSeconds<=0){ nextFinisherStep(); }
  },1000);
}
$("finStart").onclick=startFinisher;
$("finPause").onclick=()=>{clearInterval(STATE.finHandle);STATE.finRunning=false;};
$("finReset").onclick=openFinisher;
$("finSkip").onclick=()=>{clearInterval(STATE.finHandle);STATE.finRunning=false;nextFinisherStep();};
$("finisherBack").onclick=()=>{STATE.group=PLAN[STATE.plan].groups.length-1;renderGroup();};
$("toCheck").onclick=()=>show("check");
$("backBtn").onclick=openFinisher;

// Check/save
["hws","knee","energy"].forEach(k=>{
  $(k+"In").oninput=()=>$(k+"Out").textContent=$(k+"In").value;
});
$("save").onclick=()=>{
  STATE.session.hws=+$("hwsIn").value;
  STATE.session.knee=+$("kneeIn").value;
  STATE.session.energy=+$("energyIn").value;
  STATE.session.note=$("note").value;
  const d=store(); d.sessions=d.sessions||[]; d.sessions.push(STATE.session);
  writeStore(d);
  $("note").value="";
  show("home");
};

// Backup
function exportData(){
  const a=document.createElement("a");
  const blob=new Blob([JSON.stringify(store(),null,2)],{type:"application/json"});
  a.href=URL.createObjectURL(blob);
  a.download=`project-strong-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
$("export").onclick=exportData; $("exportTop").onclick=exportData;
$("import").onchange=async e=>{
  try{
    const parsed=JSON.parse(await e.target.files[0].text());
    if(!parsed || !Array.isArray(parsed.sessions)) throw new Error();
    writeStore(parsed); alert("Backup importiert.");
  }catch{ alert("Datei konnte nicht gelesen werden."); }
  e.target.value="";
};

// Reset
RESET.forEach(([a,b])=>{
  const x=document.createElement("div"); x.className="resetitem"; x.innerHTML=`<b>${a}</b><div>${b}</div>`; $("resetList").appendChild(x);
});
$("resetStart").onclick=()=>show("reset"); $("resetBack").onclick=()=>show("home");

if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
refreshHome();
