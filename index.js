/* ============ DATA ============ */
const sectors = ['GOVERNMENT', 'DEVELOPERS', 'MINING & ENERGY', 'EDUCATION', 'HEALTHCARE', 'HOSPITALITY', 'NGOs & DISASTER RESPONSE', 'COMMUNITIES', 'INVESTORS & DFIs'];
const pillars = [
  { t: 'Faster', d: 'Parallel factory production and site preparation compress programme time where the system permits.', i: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { t: 'Smarter', d: 'Digital design, repeatable components, quality control and integrated energy and water options.', i: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { t: 'Scalable', d: 'From a single building to schools, clinics, workforce villages and mass-housing programmes.', i: 'M4 21V7l8-4 8 4v14M4 21h16M9 21v-6h6v6' },
  { t: 'Local Impact', d: 'Designed to support local assembly, skills transfer, jobs and enterprise participation.', i: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a3 3 0 11-3-3' },
  { t: 'Evidence-Led', d: 'Technical documents, approvals, project data and verified credentials for professional review.', i: 'M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z' }
];
const solutions = [
  {
    cat: 'Housing', t: 'Affordable & Social Housing',
    d: 'Repeatable, dignified housing systems for human-settlements programmes.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    features: ['Factory-controlled quality & QA checkpoints', 'Parallel site works for faster programme delivery', 'Configurable unit typologies (1–3 bed)', 'Local assembly & skills-transfer options', 'Compliance pathways: rational design / Agrément'],
    apps: 'Human settlements, municipal programmes, developer-led affordable estates, social housing institutions.',
    delivery: 'Typical programme compression where system permits. Foundations and bulk services run in parallel with factory production.'
  },
  {
    cat: 'Housing', t: 'Residential Estates & Smart Homes',
    d: 'Design-led smart homes with solar, battery and water-ready packages.',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop',
    features: ['Solar PV + battery packages', 'Smart metering & remote monitoring ready', 'Water harvesting options', 'Premium finishes and thermal envelopes', 'Estate-scale infrastructure coordination'],
    apps: 'Gated estates, lifestyle developments, private residential clusters.',
    delivery: 'Turnkey or supply-&-assembly. Smart systems commissioned at handover.'
  },
  {
    cat: 'Housing', t: 'Student Accommodation',
    d: 'High-density bed provision with communal living and utility integration.',
    img: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=900&auto=format&fit=crop',
    features: ['High-density bed layouts', 'Communal kitchens, study & laundry cores', 'Utility metering per cluster', 'Phased delivery for academic calendars', 'Security & access-control ready'],
    apps: 'Universities, TVET colleges, private student housing operators.',
    delivery: 'Phased handovers aligned to intake dates. Rapid envelope closure.'
  },
  {
    cat: 'Public', t: 'Schools & Classrooms',
    d: 'Rapid education infrastructure, expandable in delivery phases.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=900&auto=format&fit=crop',
    features: ['Classroom, admin and ablution modules', 'Expandable in phases', 'Natural light & ventilation tuned for climate', 'Local crew assembly', 'Aligned to education infrastructure standards'],
    apps: 'Provincial education departments, NGOs, private schools.',
    delivery: 'Fast classroom blocks; foundations parallel to factory production.'
  },
  {
    cat: 'Public', t: 'Clinics & Healthcare',
    d: 'Modular clinics, wards and staff accommodation for health districts.',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=900&auto=format&fit=crop',
    features: ['Clinic, ward and staff-housing modules', 'Infection-control friendly finishes', 'MEP integration for medical equipment', 'Remote-site logistics capability', 'Staff accommodation packages'],
    apps: 'District health services, mining health, NGO clinics.',
    delivery: 'Turnkey clinics with commissioning support.'
  },
  {
    cat: 'Industrial', t: 'Mining & Workforce Camps',
    d: 'Remote-ready villages: accommodation, ablutions, kitchens, clinics, offices.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=900&auto=format&fit=crop',
    features: ['Containerised / flat-pack logistics', 'Self-sufficient water & power options', 'Ablutions, kitchens, clinics, offices', 'Durable envelopes for harsh climates', 'Demountable / relocatable options'],
    apps: 'Mines, energy projects, construction camps, remote infrastructure.',
    delivery: 'Remote logistics specialisation; rapid camp establishment.'
  },
  {
    cat: 'Hospitality', t: 'Hotels, Lodges & Tourism',
    d: 'Eco-units and hospitality modules with premium finishes.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop',
    features: ['Premium interior packages', 'Solar + water harvesting', 'Low-impact site assembly', 'Scalable room keys', 'Design-led exteriors'],
    apps: 'Eco-lodges, boutique hotels, resort expansions.',
    delivery: 'Phased room keys; minimal site disruption.'
  },
  {
    cat: 'Public', t: 'Emergency & Transitional Housing',
    d: 'Rapid-response deployable units for disaster and humanitarian needs.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=900&auto=format&fit=crop',
    features: ['Rapid deploy units', 'Stackable / transportable', 'Basic services packages', 'Transitional to permanent pathways', 'Humanitarian logistics ready'],
    apps: 'Disaster response, transitional settlements, temporary workforce.',
    delivery: 'Stocked modules for rapid mobilisation.'
  },
  {
    cat: 'Industrial', t: 'Modular Offices & Facilities',
    d: 'Offices, change houses, public and community buildings.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
    features: ['Offices, change houses, community halls', 'MEP ready', 'Expandable footprints', 'Professional finishes', 'Quick site assembly'],
    apps: 'Corporate sites, mines, municipalities, community facilities.',
    delivery: 'Fast office / facility blocks with parallel foundations.'
  },
  {
    cat: 'Housing', t: 'Service & Bathroom Pods',
    d: 'Factory-finished wet-area pods for quality-controlled installation.',
    img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=900&auto=format&fit=crop',
    features: ['Factory-finished wet areas', 'Leak-tested before despatch', 'Plug-in to main structure', 'Consistent quality control', 'Reduced on-site wet trades'],
    apps: 'Housing, student residences, hotels, camps.',
    delivery: 'Pods delivered and connected during assembly phase.'
  }
];
const steps = [
  ['Discover', 'Structured project brief: site, scale, sector, services, budget band and delivery date.'],
  ['Feasibility', 'Site, logistics, utilities and regulatory scan producing a scored development opportunity.'],
  ['Design & Engineering', 'Digital design, kit-of-parts configuration and engineering sign-off for the chosen system.'],
  ['Approvals', 'Municipal submissions aligned to applicable SANS routes, rational design or Agrément scope.'],
  ['Factory Production', 'Quality-controlled off-site manufacturing with documented QA checkpoints and traceability.'],
  ['Site Works', 'Foundations and infrastructure interfaces prepared in parallel with factory production.'],
  ['Delivery & Assembly', 'Transport logistics, craned assembly and envelope closure with local crews.'],
  ['Commissioning', 'MEP fit-off, smart-system activation, snag resolution and handover documentation.'],
  ['Aftercare', 'Warranties, maintenance cycles, remote monitoring and responsive support.']
];
const projects = [
  { t: 'Riverside Affordable Housing', loc: 'Gauteng, South Africa', sec: 'Mass Housing', meta: '420 units · Turnkey', status: 'In Delivery', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop', tag: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30' },
  { t: 'Karoo Workforce Village', loc: 'Northern Cape, South Africa', sec: 'Mining & Energy', meta: '240 beds · Camp + clinic', status: 'Completed', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop', tag: 'bg-azure-400/15 text-azure-400 border-azure-400/30' },
  { t: 'Savanna Eco-Lodge', loc: 'Limpopo, South Africa', sec: 'Hospitality', meta: '28 keys · Solar + water', status: 'Concept', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop', tag: 'bg-gold-400/15 text-gold-300 border-gold-400/30' },
  { t: 'Coastal Student Residence', loc: 'Western Cape, South Africa', sec: 'Education', meta: '600 beds · Phased', status: 'Feasibility', img: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=900&auto=format&fit=crop', tag: 'bg-purple-400/15 text-purple-300 border-purple-400/30' }
];
const govItems = [
  ['Human Settlements', 'Mass housing, serviced sites and rapid programme delivery.'],
  ['Education & Health', 'Schools, clinics and community health infrastructure.'],
  ['Disaster Response', 'Emergency and transitional housing deployment.'],
  ['Local Jobs & SMMEs', 'Skills transfer, assembly localisation and enterprise participation.'],
  ['Compliance Register', 'CSD · CIDB · NHBRC · Agrément — verified & dated.'],
  ['Secure Document Room', 'Tender packs and evidence via controlled access.']
];
const techItems = [
  ['Solar PV + Battery', 'Energy-independent packages sized per unit or estate.', 'M12 3v2m0 14v2M5.6 5.6l1.4 1.4m9.9 9.9l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m9.9-9.9l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z'],
  ['Smart Metering', 'Energy and water monitoring with remote dashboards.', 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'],
  ['Water Harvesting', 'Rainwater capture and efficient fixtures as standard options.', 'M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z'],
  ['Thermal Performance', 'Insulated envelopes and glazing tuned for African climates.', 'M3 12h18M3 8h18M3 16h18M7 4v16'],
  ['EV Charging Ready', 'Pre-wired charging infrastructure for modern estates.', 'M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z'],
  ['Remote Monitoring', 'IoT oversight for institutional estates and camps.', 'M3 5h18v10H3zM8 19h8m-4-4v4']
];
const badges = ['CSD Registered Supplier', 'CIDB Grading (verified scope)', 'NHBRC Enrolment', 'Agrément SA Certified Systems', 'SANS Design Basis', 'B-BBEE Certificate', 'SACAP / ECSA Professionals', 'POPIA Compliant'];
const faqs = [
  ['Are your systems approved for South African building regulations?', 'Non-standardised systems are supported through rational design or Agrément South Africa certification, depending on the system and regulatory route. Every claim on this site links to a current, verifiable certificate or professional sign-off — we never say "SABS approved" without precise evidence.'],
  ['How fast can you deliver a mass-housing programme?', 'Programme time depends on scale, site readiness and approvals. Because factory production runs in parallel with site preparation, our systems can compress total programme time significantly versus conventional sequential construction — feasibility quantifies this for your specific project.'],
  ['Do you work with government procurement processes?', 'Yes. We maintain a public-sector capability portal with a tender/RFQ desk, verified registrations (CSD, CIDB, NHBRC where applicable), and a secure document room for SCM and technical evaluation teams.'],
  ['Can you deliver in remote mining locations?', 'Our modular systems are designed for remote logistics: flat-pack or containerised transport, craned assembly, durable envelopes, and integrated water, power and ablution solutions for fully self-sufficient camps.'],
  ['Do you provide pricing online?', 'Early-phase total-cost estimates can mislead because land, foundations, infrastructure, logistics and finishes materially affect cost. Our estimator produces a structured feasibility brief — a preliminary range only once a robust cost model exists for your project, with assumptions stated clearly.']
];

/* ============ EMAIL CONFIG ============ */
/* Create a free form at https://formspree.io → set recipient to mdzeshh@gmail.com
   then paste your form endpoint below (e.g. https://formspree.io/f/xpwnabcd) */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkjgpkwr';

async function sendToEmail(payload) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      _replyto: payload.email || payload.from_email,
      _subject: payload.subject || 'Africa Smart website enquiry'
    })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Send failed');
  }
  return res.json();
}

/* ============ SOLUTION PANEL + ENQUIRE SHEET ============ */
let currentSolution = null;

function openSolPanel(sol) {
  currentSolution = sol;
  document.getElementById('solPanelCat').textContent = sol.cat.toUpperCase();
  document.getElementById('solPanelImg').src = sol.img;
  document.getElementById('solPanelImg').alt = sol.t;
  document.getElementById('solPanelTitle').textContent = sol.t;
  document.getElementById('solPanelDesc').textContent = sol.d;
  document.getElementById('solPanelFeatures').innerHTML = (sol.features || []).map(f =>
    `<li class="flex gap-2"><span class="text-gold-400 shrink-0">✓</span><span>${f}</span></li>`
  ).join('');
  document.getElementById('solPanelApps').textContent = sol.apps || '';
  document.getElementById('solPanelDelivery').textContent = sol.delivery || '';
  document.getElementById('solOverlay').classList.add('open');
  document.getElementById('solPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSolPanel() {
  document.getElementById('solOverlay').classList.remove('open');
  document.getElementById('solPanel').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('solPanelClose').addEventListener('click', closeSolPanel);
document.getElementById('solOverlay').addEventListener('click', closeSolPanel);

function openEnquireSheet(solutionName) {
  document.getElementById('enquireSolution').value = solutionName || '';
  document.getElementById('enquireTitle').textContent = solutionName
    ? `Enquire: ${solutionName}` : 'Solution enquiry';
  // reset states
  document.getElementById('enquireForm').reset();
  document.getElementById('enquireSolution').value = solutionName || '';
  showEqState('idle');
  document.getElementById('enquireOverlay').classList.add('open');
  document.getElementById('enquireSheet').classList.add('open');
}
function closeEnquireSheet() {
  document.getElementById('enquireOverlay').classList.remove('open');
  document.getElementById('enquireSheet').classList.remove('open');
}
function showEqState(state) {
  ['eqIdle', 'eqLoading', 'eqSuccess', 'eqError'].forEach(id => {
    document.getElementById(id).classList.toggle('hidden', id !== 'eq' + state.charAt(0).toUpperCase() + state.slice(1));
  });
}
document.getElementById('solEnquireBtn').addEventListener('click', () => {
  openEnquireSheet(currentSolution ? currentSolution.t : '');
});
document.getElementById('enquireClose').addEventListener('click', closeEnquireSheet);
document.getElementById('enquireOverlay').addEventListener('click', closeEnquireSheet);
document.getElementById('eqSuccessClose').addEventListener('click', closeEnquireSheet);
document.getElementById('eqRetry').addEventListener('click', () => showEqState('idle'));

document.getElementById('enquireForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('eqName');
  const email = document.getElementById('eqEmail');
  if (!name.value.trim()) { name.focus(); name.style.borderColor = '#f87171'; return; }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) { email.focus(); email.style.borderColor = '#f87171'; return; }
  name.style.borderColor = ''; email.style.borderColor = '';

  showEqState('loading');
  try {
    await sendToEmail({
      subject: `Solution enquiry: ${document.getElementById('enquireSolution').value || 'General'}`,
      name: name.value.trim(),
      email: email.value.trim(),
      phone: document.getElementById('eqPhone').value.trim(),
      solution: document.getElementById('enquireSolution').value,
      message: document.getElementById('eqNotes').value.trim(),
      form_type: 'Solution Enquiry'
    });
    showEqState('success');
  } catch (err) {
    console.error(err);
    showEqState('error');
  }
});

/* Make solution cards open the panel */
/* After you render solGrid, attach clicks: */
function bindSolCards() {
  document.querySelectorAll('.sol-card').forEach((card, idx) => {
    card.addEventListener('click', () => openSolPanel(solutions[idx]));
  });
}
/* Call bindSolCards() right after you set solGrid.innerHTML */

/* ============ RENDER ============ */
const ico = (p, c = 'w-6 h-6') => `<svg class="${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${p}"/></svg>`;

document.getElementById('marqueeA').innerHTML = sectors.map(s => `<span class="text-slate-400">${s}</span><span class="text-gold-500">✦</span>`).join('');
document.getElementById('marqueeB').innerHTML = document.getElementById('marqueeA').innerHTML;

document.getElementById('pillarGrid').innerHTML = pillars.map((p, i) => `
      <div class="reveal card-hover glass rounded-2xl p-6 border border-white/10">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-azure-500/25 to-gold-500/25 flex items-center justify-center text-gold-400 mb-5">${ico(p.i)}</div>
        <div class="text-xs font-semibold tracking-widest text-azure-400 mb-2">0${i + 1}</div>
        <h3 class="font-display font-bold text-white text-lg mb-2">${p.t}</h3>
        <p class="text-slate-400 text-sm leading-relaxed">${p.d}</p>
      </div>`).join('');

const cats = ['All', 'Housing', 'Public', 'Industrial', 'Hospitality'];
document.getElementById('solTabs').innerHTML = cats.map((c, i) => `<button data-cat="${c}" class="sol-tab ${i === 0 ? 'bg-gold-500 text-navy-900 font-bold' : 'bg-white/5 text-slate-300 hover:bg-white/10'} rounded-full px-5 py-2 text-sm transition">${c}</button>`).join('');
document.getElementById('solGrid').innerHTML = solutions.map(s => `
      <article class="sol-card reveal group relative rounded-2xl overflow-hidden border border-white/10 bg-navy-800/50 card-hover cursor-pointer">
        <div class="h-48 overflow-hidden relative">
          <img loading="lazy" src="${s.img}" alt="${s.t}" class="sol-img w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent"></div>
          <span class="absolute top-3 left-3 text-[10px] font-bold tracking-widest bg-navy-950/70 backdrop-blur px-3 py-1.5 rounded-full text-azure-400 border border-azure-400/30">${s.cat.toUpperCase()}</span>
        </div>
        <div class="p-6 flex items-start justify-between gap-4">
          <div>
            <h3 class="font-display font-bold text-white text-lg leading-snug">${s.t}</h3>
            <p class="text-slate-400 text-sm mt-2 leading-relaxed">${s.d}</p>
          </div>
          <span class="sol-arrow shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-slate-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </article>`).join('');

bindSolCards();

document.querySelectorAll('.sol-tab').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.sol-tab').forEach(b => { b.className = 'sol-tab bg-white/5 text-slate-300 hover:bg-white/10 rounded-full px-5 py-2 text-sm transition'; });
  btn.className = 'sol-tab bg-gold-500 text-navy-900 font-bold rounded-full px-5 py-2 text-sm transition';
  const cat = btn.dataset.cat;
  document.querySelectorAll('.sol-card').forEach(card => {
    const match = cat === 'All' || card.querySelector('span').textContent.toLowerCase().includes(cat.toLowerCase());
    gsap.to(card, { opacity: match ? 1 : 0.12, scale: match ? 1 : 0.96, duration: .45, ease: 'power2.out' });
    card.style.pointerEvents = match ? 'auto' : 'none';
  });
}));

const stepIcons = ['M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z', 'M9 17v-6a2 2 0 012-2h8m0 0l-3-3m3 3l-3 3M5 21a2 2 0 110-4 2 2 0 010 4z', 'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6', 'M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z', 'M10.3 4.3a1.7 1.7 0 013.4 0l1.2 3.5 3.5 1.2a1.7 1.7 0 010 3.4l-3.5 1.2-1.2 3.5a1.7 1.7 0 01-3.4 0l-1.2-3.5-3.5-1.2a1.7 1.7 0 010-3.4l3.5-1.2 1.2-3.5z', 'M3 21h18M6 21V8l6-4 6 4v13M10 21v-4h4v4', 'M20 6L9 17l-5-5', 'M9 12l2 2 4-4M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'];
document.getElementById('stepsGrid').innerHTML = steps.map((s, i) => `
      <button class="step-card flex flex-col items-center gap-3 group" data-i="${i}">
        <span class="step-dot w-[4.5rem] h-[4.5rem] rounded-2xl glass flex items-center justify-center text-azure-400 group-hover:text-gold-400 group-hover:border-gold-500/50 relative z-10">${ico(stepIcons[i], 'w-6 h-6')}</span>
        <span class="text-[11px] font-semibold tracking-wider text-slate-400 group-hover:text-white text-center leading-tight">${s[0].toUpperCase()}</span>
      </button>`).join('');

function setStep(i) {
  const cards = document.querySelectorAll('.step-card');
  cards.forEach((c, j) => c.classList.toggle('active', j === i));
  document.getElementById('stepNum').textContent = String(i + 1).padStart(2, '0');
  document.getElementById('stepTitle').textContent = steps[i][0];
  document.getElementById('stepDesc').textContent = steps[i][1];
  gsap.fromTo('#stepDetail', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .5, ease: 'power2.out' });
}
document.querySelectorAll('.step-card').forEach(c => c.addEventListener('click', () => setStep(+c.dataset.i)));
setStep(0);

document.getElementById('projGrid').innerHTML = projects.map(p => `
      <article class="proj-card reveal card-hover rounded-2xl overflow-hidden border border-white/10 bg-navy-800/50 group">
        <div class="h-56 overflow-hidden relative">
          <img loading="lazy" src="${p.img}" alt="${p.t}" class="proj-img w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent"></div>
          <span class="absolute top-3 right-3 text-[10px] font-bold tracking-widest border px-3 py-1.5 rounded-full backdrop-blur ${p.tag}">${p.status.toUpperCase()}</span>
          <div class="absolute bottom-3 left-4 right-4">
            <div class="text-[10px] tracking-widest text-gold-400 font-bold mb-1">${p.sec.toUpperCase()}</div>
            <h3 class="font-display font-bold text-white leading-snug">${p.t}</h3>
          </div>
        </div>
        <div class="p-5 flex items-center justify-between text-sm">
          <div>
            <div class="text-slate-400 text-xs">${p.loc}</div>
            <div class="text-slate-200 font-medium mt-1">${p.meta}</div>
          </div>
          <svg class="text-gold-500 group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </div>
      </article>`).join('');

document.getElementById('govGrid').innerHTML = govItems.map(g => `
      <div class="glass rounded-2xl p-5 border border-white/10 card-hover">
        <div class="w-9 h-9 rounded-lg bg-gold-500/15 text-gold-400 flex items-center justify-center mb-3">${ico('M5 13l4 4L19 7', 'w-5 h-5')}</div>
        <div class="font-display font-bold text-white text-sm mb-1">${g[0]}</div>
        <div class="text-slate-400 text-xs leading-relaxed">${g[1]}</div>
      </div>`).join('');

document.getElementById('techGrid').innerHTML = techItems.map(t => `
      <div class="reveal card-hover glass rounded-2xl p-6 border border-white/10 flex gap-4">
        <div class="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-azure-500/25 to-teal2/25 flex items-center justify-center text-azure-400">${ico(t[2])}</div>
        <div>
          <h3 class="font-display font-bold text-white">${t[0]}</h3>
          <p class="text-slate-400 text-sm mt-1.5 leading-relaxed">${t[1]}</p>
        </div>
      </div>`).join('');

document.getElementById('badgeRow').innerHTML = badges.map(b => `
      <span class="glass rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide text-slate-300 border border-white/10 hover:border-gold-500/50 transition cursor-default">${b}</span>`).join('');

document.getElementById('faqList').innerHTML = faqs.map(f => `
      <div class="faq-item reveal glass rounded-2xl border border-white/10 overflow-hidden">
        <button class="faq-head w-full flex items-center justify-between gap-4 p-6 text-left">
          <span class="font-display font-semibold text-white">${f[0]}</span>
          <span class="faq-plus shrink-0 text-slate-400 text-2xl leading-none font-light">+</span>
        </button>
        <div class="faq-body"><div class="overflow-hidden"><p class="px-6 pb-6 text-slate-400 text-sm leading-relaxed">${f[1]}</p></div></div>
      </div>`).join('');
document.querySelectorAll('.faq-head').forEach(h => h.addEventListener('click', () => {
  const item = h.parentElement, was = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!was) item.classList.add('open');
}));

/* ============ CHIPS ============ */
document.querySelectorAll('#projTypeChips,#siteChips').forEach(group => {
  group.addEventListener('click', e => {
    if (!e.target.classList.contains('chip')) return;
    group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected')); e.target.classList.add('selected');
  });
});
document.querySelectorAll('#svcChips,#smartChips,#budgetChips').forEach(group => {
  group.addEventListener('click', e => { if (!e.target.classList.contains('chip')) return; e.target.classList.toggle('selected'); });
});

/* ============ MULTI-STEP FORM ============ */
let curStep = 1;
const totalSteps = 4;
const bar = document.getElementById('progressBar');
function renderBar() {
  bar.innerHTML = Array.from({ length: totalSteps }, (_, i) => `
        <div class="flex-1 h-1.5 rounded-full ${i < curStep ? 'bg-gradient-to-r from-gold-400 to-gold-600' : 'bg-white/10'} transition-all duration-500"></div>`).join('')
    + `<div class="text-xs font-semibold text-slate-400 ml-3 w-12 text-right">${Math.min(curStep, totalSteps)}/${totalSteps}</div>`;
}
function showStep(n) {
  curStep = n;
  document.querySelectorAll('.fstep').forEach(s => s.classList.toggle('active', +s.dataset.step === n));
  document.getElementById('backBtn').classList.toggle('invisible', n === 1 || n > totalSteps);
  document.getElementById('formControls').style.display = n > totalSteps ? 'none' : 'flex';
  document.getElementById('nextBtn').textContent = n === totalSteps ? 'Submit Brief ✦' : 'Continue →';
  renderBar();
  if (n === 5) {
    const type = document.querySelector('#projTypeChips .selected').dataset.v;
    document.getElementById('routedTeam').textContent =
      /mining/i.test(type) ? 'Industrial & Remote Projects team' :
        /school|clinic/i.test(type) ? 'Institutional Projects desk' :
          /housing|student|hotel/i.test(type) ? 'Strategic Projects team' : 'Commercial team';
  }
}

// document.getElementById('nextBtn').addEventListener('click', () => {
//   if (curStep === 4) {
//     const name = document.getElementById('fName'), email = document.getElementById('fEmail');
//     if (!name.value.trim()) { name.focus(); name.style.borderColor = '#f87171'; return; }
//     if (!/^\S+@\S+\.\S+$/.test(email.value)) { email.focus(); email.style.borderColor = '#f87171'; return; }
//   }
//   showStep(curStep < totalSteps ? curStep + 1 : 5);
// });

document.getElementById('nextBtn').addEventListener('click', async () => {
  if (curStep === 4) {
    const name = document.getElementById('fName');
    const email = document.getElementById('fEmail');
    if (!name.value.trim()) { name.focus(); name.style.borderColor = '#f87171'; return; }
    if (!/^\S+@\S+\.\S+$/.test(email.value)) { email.focus(); email.style.borderColor = '#f87171'; return; }
    name.style.borderColor = ''; email.style.borderColor = '';

    // Collect form data
    const getSelected = (sel) => [...document.querySelectorAll(sel + ' .chip.selected')].map(c => c.dataset.v).join(', ') || '—';
    const formEl = document.getElementById('feasForm');
    const inputs = formEl.querySelectorAll('input:not([type=checkbox]):not([type=file]), select');
    const vals = {};
    inputs.forEach((inp, i) => { vals['field_' + i] = inp.value; });

    const payload = {
      subject: 'Africa Smart — Project Feasibility Brief',
      form_type: 'Feasibility Study Request',
      name: name.value.trim(),
      email: email.value.trim(),
      phone: formEl.querySelector('input[type=tel]')?.value || '',
      organisation: formEl.querySelectorAll('input[type=text]')[1]?.value || '',
      project_type: getSelected('#projTypeChips'),
      country: formEl.querySelector('select')?.value || '',
      region: formEl.querySelectorAll('input[type=text]')[0]?.value || '',
      site_status: getSelected('#siteChips'),
      units: formEl.querySelector('input[type=number]')?.value || '',
      floor_area: formEl.querySelectorAll('input[type=number]')[1]?.value || '',
      services: getSelected('#svcChips'),
      smart_options: getSelected('#smartChips'),
      budget: getSelected('#budgetChips'),
      target_date: formEl.querySelector('input[type=month]')?.value || '',
      delivery_model: formEl.querySelectorAll('select')[1]?.value || '',
      message: `Feasibility brief submitted via website.`
    };

    // Spinner on button
    const btn = document.getElementById('nextBtn');
    const original = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner" style="border-color:rgba(10,25,48,.25);border-top-color:#0A1930;vertical-align:middle;margin-right:8px"></span> Sending…`;

    try {
      await sendToEmail(payload);
      showStep(5); // success view
    } catch (err) {
      console.error(err);
      btn.innerHTML = 'Send failed — Retry';
      btn.disabled = false;
      setTimeout(() => { btn.innerHTML = original; }, 3000);
      return;
    }
    btn.disabled = false;
    btn.innerHTML = original;
    return;
  }
  showStep(curStep < totalSteps ? curStep + 1 : 5);
});

document.getElementById('backBtn').addEventListener('click', () => showStep(Math.max(1, curStep - 1)));
renderBar();
document.getElementById('fileInput').addEventListener('change', e => {
  const n = e.target.files.length;
  document.getElementById('fileLabel').textContent = n ? `${n} file(s) attached ✓` : 'Drop files here or click to browse';
});

/* ============ NAV ============ */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('nav-scrolled', scrollY > 40), { passive: true });
document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('mobileMenu').classList.toggle('hidden'));
document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden')));

/* ============ ANIMATIONS ============ */
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.hero-el', { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 });
gsap.utils.toArray('.reveal').forEach((el, i) => {
  gsap.fromTo(el, { opacity: 0, y: 40 }, {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' }, delay: (i % 4) * 0.07
  });
});
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count;
  ScrollTrigger.create({
    trigger: el, start: 'top 92%', once: true, onEnter: () => {
      gsap.to({ v: 0 }, { v: target, duration: 1.8, ease: 'power2.out', onUpdate: function () { el.textContent = Math.round(this.targets()[0].v); } });
    }
  });
});
gsap.to('header > img', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: 'header', start: 'top top', end: 'bottom top', scrub: true } });