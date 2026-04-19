// ============================================================
// MICIULINA WORKOUT — app.js v2.1
// By Bandicoot
// ============================================================

const DAYS_TEMPLATE = [
  {
    key: 'lun', name: 'LUN', fullName: 'Lunedì', mandatory: true,
    focus: 'Petto / Tricipiti / Spalle',
    exercises: [
      { name: 'Flessioni (riscaldamento)', sets: '2x15', muscles: ['petto'],
        info: 'Mani larghe quanto le spalle, corpo dritto come un\'asse. Scendi lentamente finché il petto sfiora il pavimento, poi spingi su. Espira nella fase di salita.' },
      { name: 'Croci con manubri', sets: '4x12', muscles: ['petto'],
        info: 'Sdraiato sulla panca piana, manubri sopra il petto con gomiti leggermente piegati. Apri le braccia ad arco verso il basso finché senti lo stretching al petto, poi chiudi risalendo. Immagina di abbracciare un albero.' },
      { name: 'Press manubri panca inclinata', sets: '4x10', muscles: ['petto', 'spalle'],
        info: 'Panca inclinata a 30-45°. Spingi i manubri verso l\'alto e leggermente verso il centro. Lavora la parte alta del petto. Scendi controllato.' },
      { name: 'Alzate laterali', sets: '4x12', muscles: ['spalle'],
        info: 'In piedi, manubri lungo i fianchi. Solleva le braccia lateralmente fino all\'altezza delle spalle, gomiti leggermente piegati. Scendi lentamente. Non usare il rimbalzo!' },
      { name: 'Alzate frontali', sets: '3x12', muscles: ['spalle'],
        info: 'In piedi, manubri davanti alle cosce. Solleva un manubrio alla volta in avanti fino all\'altezza delle spalle, braccio quasi teso. Alterna i lati.' },
      { name: 'French press manubri', sets: '4x10', muscles: ['tricipiti'],
        info: 'Sdraiato sulla panca, manubri tesi verso il soffitto. Piega solo i gomiti abbassando i manubri verso le orecchie. I gomiti devono restare FERMI e vicini alla testa. Risali lentamente.' },
      { name: 'Dip su panca', sets: '3x12', muscles: ['tricipiti'],
        info: 'Mani appoggiate sul bordo della panca dietro di te, gambe stese. Scendi piegando i gomiti fino a 90°, poi spingi su. Tieni la schiena vicina alla panca.' },
    ]
  },
  {
    key: 'mar', name: 'MAR', fullName: 'Martedì', mandatory: false,
    focus: 'Mobilità + Core leggero',
    exercises: [
      { name: 'Camminata veloce / Jogging', sets: '20-30 min', muscles: ['cardio'],
        info: 'Passo sostenuto all\'aria aperta o sul tapis roulant. Non serve correre — basta tenere un ritmo che ti faccia parlare a fatica. Perfetto per recupero attivo.' },
      { name: 'Cat-Cow stretch', sets: '3x10', muscles: ['schiena', 'mobilità'],
        info: 'A quattro zampe. Inspira abbassando la pancia verso il pavimento e alzando la testa (cow). Espira inarcando la schiena verso il soffitto e abbassando la testa (cat). Lento e controllato.' },
      { name: 'Hip flexor stretch', sets: '3x30 sec per lato', muscles: ['flessori anca'],
        info: 'In affondo con un ginocchio a terra. Spingi il fianco in avanti finché senti uno stretching davanti alla coscia della gamba posteriore. Tieni 30 secondi per lato.' },
      { name: 'Plank', sets: '3x45 sec', muscles: ['core'],
        info: 'Appoggio su avambracci e punte dei piedi. Corpo dritto, glutei stretti, addome contratto. Non lasciare che i fianchi scendano. Respira normalmente.' },
      { name: 'Rotazioni busto con manubrio', sets: '3x15 per lato', muscles: ['core', 'obliqui'],
        info: 'Seduto a terra o su panca, gambe piegate, busto inclinato a 45°. Tieni un manubrio leggero con entrambe le mani e ruota il busto da un lato all\'altro.' },
    ]
  },
  {
    key: 'mer', name: 'MER', fullName: 'Mercoledì', mandatory: true,
    focus: 'Schiena / Bicipiti / Addominali',
    exercises: [
      { name: 'Rematore con manubrio', sets: '4x12 per lato', muscles: ['schiena'],
        info: 'Un ginocchio e una mano sulla panca — schiena orizzontale e dritta. Con l\'altro braccio tieni il manubrio che pende verso il basso. Tira il gomito verso il soffitto come se avviassi un motorino. Scendi lentamente.' },
      { name: 'Pullover con manubrio', sets: '3x12', muscles: ['schiena', 'petto'],
        info: 'Sdraiato sulla panca, tieni un manubrio con entrambe le mani sopra il petto. Abbassa il manubrio lentamente dietro la testa tenendo le braccia quasi tese, finché senti tirare sotto le ascelle. Risali controllato.' },
      { name: 'Bird dog', sets: '3x12 per lato', muscles: ['schiena bassa', 'core'],
        info: 'A quattro zampe sul tappetino. Estendi contemporaneamente il braccio destro in avanti e la gamba sinistra indietro. Tieni 2 secondi, poi cambia lato. Non far ruotare il bacino!' },
      { name: 'Curl alternati manubri', sets: '3x12 per lato', muscles: ['bicipiti'],
        info: 'In piedi, un manubrio per mano. Porta un manubrio verso la spalla ruotando il polso verso l\'alto. Scendi lentamente. Niente oscillazione del busto — i gomiti restano fermi sui fianchi.' },
      { name: 'Curl a martello', sets: '3x10 per lato', muscles: ['bicipiti', 'avambracci'],
        info: 'Come il curl normale ma con il polso neutro (pollice verso l\'alto) per tutto il movimento. Lavora il brachiale e l\'avambraccio oltre al bicipite.' },
      { name: 'Crunch classico', sets: '3x20', muscles: ['addominali'],
        info: 'Sdraiato, ginocchia piegate. Mani leggere dietro la testa — non tirare il collo! Spingi il mento verso il petto e solleva le spalle dal pavimento espirando. Scendi lentamente.' },
      { name: 'Sollevamento gambe', sets: '3x15', muscles: ['addominali inferiori'],
        info: 'Sdraiato, schiena piatta a terra. Solleva le gambe tese fino a 90° espirando, poi abbassa lentamente senza toccare terra. La fase di discesa è quella che conta di più!' },
      { name: 'Plank', sets: '3x40 sec', muscles: ['core'],
        info: 'Appoggio su avambracci e punte dei piedi. Corpo dritto, glutei stretti, addome contratto. Respira normalmente e tieni duro!' },
    ]
  },
  {
    key: 'gio', name: 'GIO', fullName: 'Giovedì', mandatory: false,
    focus: 'Stretching + Recupero attivo',
    exercises: [
      { name: 'Foam rolling gambe', sets: '5 min', muscles: ['recupero'],
        info: 'Se hai un foam roller, rotola lentamente su quadricipiti, femorali e polpacci. Altrimenti fai un massaggio manuale. Scioglie i nodi muscolari dopo il venerdì di gambe.' },
      { name: 'Stretching petto e spalle', sets: '3x30 sec per lato', muscles: ['petto', 'spalle'],
        info: 'Appoggia il braccio contro una porta o un muro a 90° e ruota il busto dall\'altra parte finché senti tirare al petto. Tieni 30 secondi per lato.' },
      { name: 'Stretching ischio-crurali', sets: '3x30 sec', muscles: ['femorali'],
        info: 'Sdraiato a terra, solleva una gamba tesa verso il soffitto tenendola con le mani. Porta il piede verso di te finché senti tirare nel retro della coscia. Mantieni 30 secondi per lato.' },
      { name: 'Respirazione diaframmatica', sets: '5 min', muscles: ['recupero', 'core'],
        info: 'Sdraiato a terra, mani sull\'addome. Inspira gonfiando la pancia (non il petto) per 4 secondi. Espira lentamente per 6 secondi. Riduce il cortisolo e migliora il recupero.' },
      { name: 'Camminata leggera', sets: '15-20 min', muscles: ['cardio leggero'],
        info: 'Una passeggiata rilassata — non serve fare sport! Serve solo muovere le gambe e favorire il flusso sanguigno nei muscoli stanchi.' },
    ]
  },
  {
    key: 'ven', name: 'VEN', fullName: 'Venerdì', mandatory: true,
    focus: 'Gambe / Glutei / Cardio',
    exercises: [
      { name: 'Goblet squat', sets: '4x15', muscles: ['gambe', 'glutei'],
        info: 'Tieni un manubrio verticale con entrambe le mani davanti al petto (come un calice). Scendi in squat mantenendo la schiena dritta e le ginocchia in linea con i piedi. Spingi su dai talloni.' },
      { name: 'Affondi alternati', sets: '3x12 per lato', muscles: ['gambe', 'glutei'],
        info: 'In piedi, fai un passo lungo in avanti e scendi con il ginocchio posteriore quasi a terra. La gamba anteriore forma 90°. Spingi col tallone per tornare su e alterna le gambe.' },
      { name: 'Stacco rumeno manubri', sets: '4x12', muscles: ['femorali', 'glutei'],
        info: 'In piedi, manubri davanti alle cosce. Schiena DRITTA e rigida — non si arrotona mai! Scendi lentamente abbassando i manubri lungo le gambe finché senti tirare nel retro delle cosce. Risali spingendo i fianchi in avanti.' },
      { name: 'Calf raises', sets: '3x20', muscles: ['polpacci'],
        info: 'In piedi, manubri lungo i fianchi. Sali sulle punte dei piedi il più in alto possibile. Tieni 1-2 secondi in cima e scendi lentamente. Prova su un gradino per maggior escursione!' },
      { name: 'Ponte glutei', sets: '3x20', muscles: ['glutei', 'femorali'],
        info: 'Sdraiato a terra, ginocchia piegate, piedi a terra. Spingi i fianchi verso l\'alto stringendo i glutei. Tieni 2 secondi in alto e scendi lentamente. Per renderlo più difficile, metti un manubrio sul bacino.' },
      { name: 'Plank laterale', sets: '3x30 sec per lato', muscles: ['core', 'obliqui'],
        info: 'Sdraiato su un fianco, appoggio sul gomito (sotto la spalla). Corpo dritto, fianchi in alto. Se il fianco crolla, metti il piede inferiore a terra davanti come stabilizzatore — versione facilitata legittima!' },
      { name: 'Cyclette / Tapis roulant', sets: '20 min', muscles: ['cardio'],
        info: 'Intensità moderata — dovresti riuscire a parlare ma con un po\' di fatica. Questo cardio dopo i pesi massimizza il consumo di grassi quando le riserve di glicogeno sono basse.' },
    ]
  },
  {
    key: 'sab', name: 'SAB', fullName: 'Sabato', mandatory: false,
    focus: 'Allenamento libero / Attività outdoor',
    exercises: [
      { name: 'Corsa o camminata veloce', sets: '30-45 min', muscles: ['cardio'],
        info: 'Esci all\'aperto! Una bella corsa o camminata veloce. Varia il ritmo: 2 min veloci, 1 min lento.' },
      { name: 'Circuito corpo libero', sets: '3 giri', muscles: ['corpo completo'],
        info: '10 flessioni + 15 squat + 10 affondi per lato + 20 sec plank. Riposa 60 sec tra un giro e l\'altro. Veloce ed efficace — finisci in 20 minuti.' },
      { name: 'Stretching completo', sets: '15-20 min', muscles: ['flessibilità'],
        info: 'Dedica del tempo a tutte le catene muscolari: petto, schiena, gambe, spalle, flessori dell\'anca. Tieni ogni posizione 30-45 secondi.' },
      { name: 'Sport / Attività a piacere', sets: 'Quanto vuoi', muscles: ['divertimento'],
        info: 'Nuoto, calcetto con gli amici, bici, escursione... Qualsiasi attività che ti piace vale! Il movimento piacevole è quello che dura nel tempo.' },
    ]
  },
  {
    key: 'dom', name: 'DOM', fullName: 'Domenica', mandatory: false,
    focus: 'Riposo / Recupero',
    exercises: [
      { name: 'Riposo completo', sets: 'Tutta la giornata', muscles: ['recupero'],
        info: 'Il muscolo cresce quando riposi, non quando ti alleni! La domenica è sacra. Mangia bene, dormi, goditi la giornata. Niente sensi di colpa.' },
      { name: 'Camminata leggera (facoltativa)', sets: '20-30 min', muscles: ['recupero attivo'],
        info: 'Solo se ti va — una passeggiata tranquilla favorisce il recupero senza stressare i muscoli. Ma se preferisci stare sul divano, va benissimo uguale!' },
      { name: 'Preparazione settimana prossima', sets: '5 min', muscles: ['mentale'],
        info: 'Guarda lo storico nella app, pensa ai pesi da aumentare la settimana prossima. La pianificazione è metà del lavoro!' },
    ]
  },
];

// ============================================================
// STORAGE HELPERS
// ============================================================
const Store = {
  get: (k, def = null) => { try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : def; } catch(e) { return def; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {} },
};

// ============================================================
// STATE
// ============================================================
let currentDayIdx = 0;
let completedExercises = {};
let timerInterval = null, timerSeconds = 60, timerTotal = 60, timerRunning = false;
let clockRAF = null;
let calYear = new Date().getFullYear(), calMonth = new Date().getMonth();
let selectedCalDate = null;
let DAYS = [];

// ============================================================
// INIT
// ============================================================
function init() {
  loadSchedules();
  checkOnboarding();
  buildWeekScroll();
  populateLogSelect();
  renderSettings();
  const today = new Date().getDay();
  const dayMap = { 1:0, 2:1, 3:2, 4:3, 5:4, 6:5, 0:6 };
  switchDay(dayMap[today] !== undefined ? dayMap[today] : 0);
  updateTimerDisplay();
  startClockDraw();
}

// ============================================================
// SCHEDULES
// ============================================================
function loadSchedules() {
  const saved = Store.get('mw_schedules', null);
  if (!saved) {
    // First time — save Claudio's original schedule
    const claudio = {
      id: 'claudio_v1',
      name: 'Scheda Claudio v1',
      original: true,
      createdAt: new Date().toISOString(),
      days: JSON.parse(JSON.stringify(DAYS_TEMPLATE))
    };
    Store.set('mw_schedules', [claudio]);
    Store.set('mw_active_schedule', 'claudio_v1');
  }
  const schedules = Store.get('mw_schedules', []);
  const activeId = Store.get('mw_active_schedule', schedules[0]?.id);
  const active = schedules.find(s => s.id === activeId) || schedules[0];
  DAYS = active ? active.days : JSON.parse(JSON.stringify(DAYS_TEMPLATE));
}

// ============================================================
// ONBOARDING
// ============================================================
function checkOnboarding() {
  const name = Store.get('mw_username', null);
  if (!name) showOnboarding();
  else updateLogoName(name);
}

function showOnboarding() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'onboarding';
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-title">// INIZIALIZZAZIONE</div>
      <div class="modal-sub">Benvenuto nel sistema.<br>Come ti chiami, atleta?</div>
      <input class="modal-input" id="onboarding-name" placeholder="Il tuo nome..." maxlength="20" />
      <button class="modal-btn" onclick="completeOnboarding()">// AVVIA SISTEMA</button>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => document.getElementById('onboarding-name')?.focus(), 300);
  document.getElementById('onboarding-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') completeOnboarding();
  });
}

function completeOnboarding() {
  const name = document.getElementById('onboarding-name')?.value.trim();
  if (!name) return;
  Store.set('mw_username', name);
  updateLogoName(name);
  document.getElementById('onboarding')?.remove();
}

function updateLogoName(name) {
  const el = document.getElementById('logo-name');
  if (el) el.textContent = name.toUpperCase();
}

// ============================================================
// WEEK SCROLL
// ============================================================
function buildWeekScroll() {
  const scroll = document.getElementById('week-scroll');
  if (!scroll) return;
  scroll.innerHTML = '';
  DAYS.forEach((day, i) => {
    const btn = document.createElement('div');
    btn.className = 'day-btn ' + (day.mandatory ? 'mandatory' : 'optional') + (i === currentDayIdx ? ' active' : '');
    btn.id = 'day-btn-' + i;
    btn.innerHTML = `<span class="day-num">${day.name}</span><span class="day-tag">${day.mandatory ? 'OBB' : 'FAC'}</span>`;
    btn.onclick = () => switchDay(i);
    scroll.appendChild(btn);
  });
}

function populateLogSelect() {
  const logDay = document.getElementById('log-day');
  if (!logDay) return;
  logDay.innerHTML = DAYS.map((d, i) =>
    `<option value="${i}">${d.fullName} — ${d.focus}</option>`
  ).join('');
}

// ============================================================
// DAY SWITCHING
// ============================================================
function switchDay(idx) {
  currentDayIdx = idx;
  completedExercises = {};
  document.querySelectorAll('.day-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.getElementById('current-day-badge').textContent = DAYS[idx].fullName.toUpperCase();
  if (document.getElementById('log-day')) document.getElementById('log-day').value = idx;
  renderExercises();
}

// ============================================================
// EXERCISES
// ============================================================
const NON_WEIGHT_MUSCLES = ['cardio', 'recupero', 'flessibilità', 'divertimento', 'mentale', 'recupero attivo', 'cardio leggero'];

function renderExercises() {
  const day = DAYS[currentDayIdx];
  const weights = Store.get('mw_weights', {});
  const list = document.getElementById('exercise-list');
  if (!list) return;
  list.innerHTML = '';

  if (!day.mandatory) {
    const banner = document.createElement('div');
    banner.style.cssText = 'background:rgba(0,245,255,0.05);border:1px solid rgba(0,245,255,0.2);border-radius:4px;padding:10px 12px;margin-bottom:12px;font-size:12px;color:var(--cyan);line-height:1.6;';
    banner.innerHTML = `<strong>// GIORNO FACOLTATIVO</strong><br>Allenamento complementare — fallo se hai voglia, saltalo senza sensi di colpa!`;
    list.appendChild(banner);
  }

  day.exercises.forEach((ex, i) => {
    const key = currentDayIdx + '_' + i;
    const done = completedExercises[key];
    const wKey = currentDayIdx + '_' + ex.name;
    const wData = weights[wKey];
    const isNonWeight = ex.muscles.some(m => NON_WEIGHT_MUSCLES.includes(m));
    const muscleHtml = ex.muscles.map(m => `<span class="muscle-tag">${m}</span>`).join('');

    const card = document.createElement('div');
    card.className = 'exercise-card' + (done ? ' done' : '');
    card.innerHTML = `
      <div class="ex-header">
        <div class="ex-check ${done ? 'checked' : ''}" onclick="toggleDone(${i})">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="ex-info">
          <div class="ex-name">${ex.name}</div>
          <div class="ex-sets">${ex.sets}</div>
          <div>${muscleHtml}</div>
        </div>
        <div class="ex-actions">
          <button class="ex-info-btn" onclick="toggleInfo(${i}, event)">?</button>
          ${!isNonWeight ? `<button class="ex-weight-btn ${wData ? 'has-weight' : ''}" onclick="toggleWeight(${i}, event)">${wData ? wData.current + 'kg' : '+kg'}</button>` : ''}
        </div>
      </div>
      <div class="ex-info-panel" id="ex-info-${i}">
        <strong>Come si fa:</strong><br>${ex.info}
      </div>
      ${!isNonWeight ? `
      <div class="ex-detail" id="ex-detail-${i}">
        <div class="weight-row">
          <input type="number" class="weight-input" id="weight-input-${i}" placeholder="kg" step="0.5" value="${wData ? wData.current : ''}" />
          <span class="weight-label">kg oggi</span>
          <button class="save-btn" onclick="saveWeight(${i})">SALVA</button>
        </div>
        ${wData && wData.prev ? `<div class="weight-prev">La scorsa volta: <span>${wData.prev} kg</span></div>` : ''}
      </div>` : ''}
    `;
    list.appendChild(card);
  });
  updateProgress();
}

function toggleDone(i) {
  const key = currentDayIdx + '_' + i;
  completedExercises[key] = !completedExercises[key];
  renderExercises();
}

function toggleInfo(i, e) {
  e.stopPropagation();
  const panel = document.getElementById('ex-info-' + i);
  const isOpen = panel.classList.contains('open');
  document.querySelectorAll('.ex-info-panel').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.ex-detail').forEach(d => d.classList.remove('open'));
  if (!isOpen) panel.classList.add('open');
}

function toggleWeight(i, e) {
  e.stopPropagation();
  const detail = document.getElementById('ex-detail-' + i);
  const isOpen = detail.classList.contains('open');
  document.querySelectorAll('.ex-detail').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.ex-info-panel').forEach(p => p.classList.remove('open'));
  if (!isOpen) {
    detail.classList.add('open');
    setTimeout(() => document.getElementById('weight-input-' + i)?.focus(), 50);
  }
}

function saveWeight(i) {
  const input = document.getElementById('weight-input-' + i);
  const val = parseFloat(input.value);
  if (isNaN(val)) return;
  const weights = Store.get('mw_weights', {});
  const wKey = currentDayIdx + '_' + DAYS[currentDayIdx].exercises[i].name;
  const prev = weights[wKey] ? weights[wKey].current : null;
  weights[wKey] = { current: val, prev };
  Store.set('mw_weights', weights);
  renderExercises();
}

function updateProgress() {
  const total = DAYS[currentDayIdx].exercises.length;
  const done = Object.values(completedExercises).filter(Boolean).length;
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('progress-text').textContent = done + ' / ' + total + ' esercizi';
  document.getElementById('progress-pct').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';
}

// ============================================================
// VIEW SWITCHING
// ============================================================
function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('nav-' + view)?.classList.add('active');
  if (view === 'history') renderHistory();
  if (view === 'calendar') renderCalendar();
  if (view === 'settings') renderSettings();
  if (view === 'timer') startClockDraw();
  else stopClockDraw();
}

// ============================================================
// ANALOG CLOCK
// ============================================================
function startClockDraw() {
  if (clockRAF) cancelAnimationFrame(clockRAF);
  drawClock();
}
function stopClockDraw() {
  if (clockRAF) { cancelAnimationFrame(clockRAF); clockRAF = null; }
}
function drawClock() {
  const canvas = document.getElementById('analogClock');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 90, cy = 90, r = 82;
  const progress = timerTotal > 0 ? timerSeconds / timerTotal : 1;
  const angle = (1 - progress) * Math.PI * 2 - Math.PI / 2;

  ctx.clearRect(0, 0, 180, 180);
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = '#04000A'; ctx.fill();

  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
    const isMajor = i % 5 === 0;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * (r-2), cy + Math.sin(a) * (r-2));
    ctx.lineTo(cx + Math.cos(a) * (isMajor ? r-12 : r-7), cy + Math.sin(a) * (isMajor ? r-12 : r-7));
    ctx.strokeStyle = isMajor ? '#FF0097' : 'rgba(255,0,151,0.3)';
    ctx.lineWidth = isMajor ? 2 : 1;
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, r-16, -Math.PI/2, angle);
  ctx.strokeStyle = timerRunning ? '#00F5FF' : '#FF0097';
  ctx.lineWidth = 6;
  ctx.shadowColor = timerRunning ? '#00F5FF' : '#FF0097';
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + Math.cos(angle) * (r-22), cy + Math.sin(angle) * (r-22));
  ctx.strokeStyle = '#FF0097';
  ctx.lineWidth = 3;
  ctx.shadowColor = '#FF0097';
  ctx.shadowBlur = 8;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI*2);
  ctx.fillStyle = '#FF0097'; ctx.shadowColor = '#FF0097'; ctx.shadowBlur = 6;
  ctx.fill(); ctx.shadowBlur = 0;

  clockRAF = requestAnimationFrame(drawClock);
}

// ============================================================
// TIMER
// ============================================================
function setTimer(secs) {
  if (timerRunning) { clearInterval(timerInterval); timerRunning = false; document.getElementById('timer-start-btn').textContent = 'AVVIA'; }
  timerSeconds = secs; timerTotal = secs;
  updateTimerDisplay();
}
function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  const el = document.getElementById('timer-display');
  if (el) el.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}
function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval); timerRunning = false;
    document.getElementById('timer-start-btn').textContent = 'AVVIA';
  } else {
    if (timerSeconds <= 0) timerSeconds = timerTotal;
    timerRunning = true;
    document.getElementById('timer-start-btn').textContent = 'PAUSA';
    timerInterval = setInterval(() => {
      timerSeconds--; updateTimerDisplay();
      if (timerSeconds <= 0) {
        clearInterval(timerInterval); timerRunning = false;
        document.getElementById('timer-start-btn').textContent = 'AVVIA';
        const d = document.getElementById('timer-display');
        if (d) { d.style.color = 'var(--green)'; d.style.textShadow = '0 0 15px var(--green)'; }
        setTimeout(() => {
          if (d) { d.style.color = 'var(--pink)'; d.style.textShadow = '0 0 15px var(--pink), 0 0 30px rgba(255,0,151,0.4)'; }
          timerSeconds = timerTotal; updateTimerDisplay();
        }, 2000);
      }
    }, 1000);
  }
}
function resetTimer() {
  clearInterval(timerInterval); timerRunning = false; timerSeconds = timerTotal;
  document.getElementById('timer-start-btn').textContent = 'AVVIA';
  updateTimerDisplay();
}

// ============================================================
// SESSION LOG
// ============================================================
function saveSession() {
  const dayIdx = parseInt(document.getElementById('log-day').value);
  const calories = parseInt(document.getElementById('log-calories').value) || 0;
  const duration = parseInt(document.getElementById('log-duration').value) || 0;
  const location = document.getElementById('log-location').value || '';
  const notes = document.getElementById('log-notes').value || '';

  if (!calories && !duration) { alert('Inserisci almeno calorie o durata!'); return; }

  const history = Store.get('mw_history', []);
  const now = new Date();
  const dateKey = now.toISOString().split('T')[0];
  history.unshift({
    id: Date.now(),
    dateKey,
    date: now.toLocaleDateString('it-IT', { weekday:'long', day:'numeric', month:'long', year:'numeric' }),
    dayIdx, dayName: DAYS[dayIdx].fullName, focus: DAYS[dayIdx].focus,
    mandatory: DAYS[dayIdx].mandatory,
    calories, duration, location, notes
  });
  Store.set('mw_history', history);
  document.getElementById('log-calories').value = '';
  document.getElementById('log-duration').value = '';
  document.getElementById('log-location').value = '';
  document.getElementById('log-notes').value = '';
  alert('// SESSIONE SALVATA');
  switchView('history');
}

// ============================================================
// HISTORY
// ============================================================
function renderHistory() {
  const history = Store.get('mw_history', []);
  const list = document.getElementById('history-list');
  if (!list) return;
  if (!history.length) {
    list.innerHTML = '<div class="empty-state"><span>📡</span>Nessuna sessione registrata ancora.<br>Completa un allenamento e salvalo!</div>';
    return;
  }
  list.innerHTML = history.map(h => `
    <div class="history-item">
      <div class="history-date">${h.date} ${h.mandatory ? '★' : '◇'}</div>
      <div class="history-day ${h.mandatory ? 'mandatory-day' : 'optional-day'}">${h.dayName} — ${h.focus}</div>
      <div class="history-stats">
        ${h.calories ? `<div class="history-stat">CAL: <span>${h.calories}</span></div>` : ''}
        ${h.duration ? `<div class="history-stat">MIN: <span>${h.duration}</span></div>` : ''}
      </div>
      ${h.location ? `<div class="history-location">📍 ${h.location}</div>` : ''}
      ${h.notes ? `<div class="history-notes">${h.notes}</div>` : ''}
    </div>
  `).join('');
}

// ============================================================
// CALENDAR
// ============================================================
const MONTH_NAMES = ['GENNAIO','FEBBRAIO','MARZO','APRILE','MAGGIO','GIUGNO','LUGLIO','AGOSTO','SETTEMBRE','OTTOBRE','NOVEMBRE','DICEMBRE'];
const DAY_NAMES = ['LUN','MAR','MER','GIO','VEN','SAB','DOM'];

function renderCalendar() {
  const history = Store.get('mw_history', []);
  const sessionMap = {};
  history.forEach(h => {
    if (!sessionMap[h.dateKey]) sessionMap[h.dateKey] = [];
    sessionMap[h.dateKey].push(h);
  });

  document.getElementById('cal-month-label').textContent = MONTH_NAMES[calMonth] + ' ' + calYear;

  const firstDay = new Date(calYear, calMonth, 1);
  const lastDay = new Date(calYear, calMonth + 1, 0);
  let startDow = firstDay.getDay(); // 0=sun
  startDow = startDow === 0 ? 6 : startDow - 1; // convert to mon=0

  const today = new Date();
  const todayKey = today.toISOString().split('T')[0];

  const grid = document.getElementById('cal-grid-days');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 0; i < startDow; i++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell empty';
    cell.textContent = '';
    grid.appendChild(cell);
  }

  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateKey = calYear + '-' + String(calMonth+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    const sessions = sessionMap[dateKey] || [];
    const hasMandatory = sessions.some(s => s.mandatory);
    const hasOptional = sessions.some(s => !s.mandatory);

    const cell = document.createElement('div');
    let cls = 'cal-cell';
    if (hasMandatory) cls += ' has-mandatory';
    else if (hasOptional) cls += ' has-optional';
    if (dateKey === todayKey) cls += ' today';
    cell.className = cls;
    cell.textContent = d;

    if (sessions.length > 0) {
      cell.onclick = () => showCalDetail(dateKey, sessions);
    }
    grid.appendChild(cell);
  }

  // hide detail if open
  const det = document.getElementById('cal-detail');
  if (det) { det.classList.remove('open'); det.innerHTML = ''; }
}

function showCalDetail(dateKey, sessions) {
  selectedCalDate = dateKey;
  const det = document.getElementById('cal-detail');
  if (!det) return;
  const d = new Date(dateKey + 'T12:00:00');
  det.innerHTML = `
    <div class="cal-detail-date">${d.toLocaleDateString('it-IT', { weekday:'long', day:'numeric', month:'long' }).toUpperCase()}</div>
    ${sessions.map(s => `
      <div class="cal-detail-item">
        <div class="cal-detail-day">${s.dayName} — ${s.focus}</div>
        <div class="cal-detail-stats">
          ${s.calories ? `CAL: <span>${s.calories}</span>  ` : ''}
          ${s.duration ? `MIN: <span>${s.duration}</span>` : ''}
        </div>
        ${s.location ? `<div class="cal-detail-location">📍 ${s.location}</div>` : ''}
        ${s.notes ? `<div class="cal-detail-notes">${s.notes}</div>` : ''}
      </div>
    `).join('')}
  `;
  det.classList.add('open');
}

function calPrev() { calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCalendar(); }
function calNext() { calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCalendar(); }

// ============================================================
// SETTINGS
// ============================================================
function renderSettings() {
  const name = Store.get('mw_username', '');
  const nameInput = document.getElementById('settings-name');
  if (nameInput) nameInput.value = name;
  renderLocationList();
  renderScheduleList();
}

function saveName() {
  const name = document.getElementById('settings-name')?.value.trim();
  if (!name) return;
  Store.set('mw_username', name);
  updateLogoName(name);
  alert('// NOME AGGIORNATO');
}

function renderLocationList() {
  const locs = Store.get('mw_locations', ['Casa', 'Palestra Vanzago']);
  const list = document.getElementById('location-list');
  if (!list) return;
  list.innerHTML = locs.map((loc, i) => `
    <div class="location-item">
      <span>${loc}</span>
      <button class="location-del" onclick="deleteLocation(${i})">✕</button>
    </div>
  `).join('');

  // also update log location select
  const sel = document.getElementById('log-location');
  if (sel) {
    sel.innerHTML = `<option value="">📍 Dove ti sei allenato?</option>` +
      locs.map(l => `<option value="${l}">${l}</option>`).join('');
  }
}

function addLocation() {
  const input = document.getElementById('new-location');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  const locs = Store.get('mw_locations', ['Casa', 'Palestra Vanzago']);
  if (!locs.includes(val)) { locs.push(val); Store.set('mw_locations', locs); }
  input.value = '';
  renderLocationList();
}

function deleteLocation(i) {
  const locs = Store.get('mw_locations', []);
  locs.splice(i, 1);
  Store.set('mw_locations', locs);
  renderLocationList();
}

function renderScheduleList() {
  const schedules = Store.get('mw_schedules', []);
  const activeId = Store.get('mw_active_schedule', '');
  const list = document.getElementById('schedule-list');
  if (!list) return;
  list.innerHTML = schedules.map(s => `
    <div class="scheda-item">
      <div>
        <div class="scheda-name">${s.name} ${s.id === activeId ? '✓' : ''}</div>
        <div class="scheda-meta">${new Date(s.createdAt).toLocaleDateString('it-IT')}</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center;">
        <span class="scheda-badge ${s.original ? 'original' : 'custom'}">${s.original ? 'ORIGINALE' : 'CUSTOM'}</span>
        ${s.id !== activeId ? `<button class="settings-btn" onclick="activateSchedule('${s.id}')">USA</button>` : ''}
        ${!s.original ? `<button class="settings-btn danger" onclick="deleteSchedule('${s.id}')">DEL</button>` : ''}
      </div>
    </div>
  `).join('');
}

function activateSchedule(id) {
  Store.set('mw_active_schedule', id);
  loadSchedules();
  buildWeekScroll();
  populateLogSelect();
  switchDay(0);
  renderSettings();
  alert('// SCHEDA ATTIVATA');
}

function deleteSchedule(id) {
  if (!confirm('Eliminare questa scheda?')) return;
  const schedules = Store.get('mw_schedules', []).filter(s => s.id !== id);
  Store.set('mw_schedules', schedules);
  const activeId = Store.get('mw_active_schedule', '');
  if (activeId === id && schedules.length > 0) {
    Store.set('mw_active_schedule', schedules[0].id);
    loadSchedules(); buildWeekScroll(); populateLogSelect(); switchDay(0);
  }
  renderSettings();
}

function createCustomSchedule() {
  const name = document.getElementById('new-schedule-name')?.value.trim();
  if (!name) { alert('Inserisci un nome per la scheda!'); return; }
  const schedules = Store.get('mw_schedules', []);
  const newSched = {
    id: 'custom_' + Date.now(),
    name,
    original: false,
    createdAt: new Date().toISOString(),
    days: JSON.parse(JSON.stringify(DAYS_TEMPLATE))
  };
  schedules.push(newSched);
  Store.set('mw_schedules', schedules);
  document.getElementById('new-schedule-name').value = '';
  renderSettings();
  alert('// SCHEDA CREATA — attivala per usarla!');
}

// ============================================================
// START
// ============================================================
window.addEventListener('DOMContentLoaded', init);
