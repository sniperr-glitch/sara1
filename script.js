document.addEventListener('DOMContentLoaded', () => {

    /* ================= 1. THE "SIMP_MODE.EXE" LOADER ================= */
    const bootLogs = [
        "Connecting to Saatvik's central nervous system...",
        "Scanning internal thoughts... 99% Sara detected.",
        "Checking Saatvik's dignity levels... [0.00% - DOWN BAD]",
        "Loading Sara's camera roll... WARNING: High heat hazard.",
        "Running 'Act Normal Around Her' script... FAILED.",
        "Overriding cool-guy protocols...",
        "Engaging Simp_Mode_v2.js... Success.",
        "Welcome to Saatvik's brain Sara ❤️"
    ];

    const logEl = document.getElementById('loaderLog');
    const barEl = document.getElementById('loaderBar');
    const percentEl = document.getElementById('loaderPercent');
    const loaderEl = document.getElementById('loader');

    let logIdx = 0, progress = 0;

    const runLoader = setInterval(() => {
        progress += Math.floor(Math.random() * 20) + 6;
        if (progress > 100) progress = 100;

        barEl.style.width = `${progress}%`;
        percentEl.textContent = `${progress}%`;

        if (logIdx < bootLogs.length && progress >= (logIdx + 1) * (100 / bootLogs.length)) {
            const p = document.createElement('div');
            p.textContent = `> ${bootLogs[logIdx]}`;
            if (bootLogs[logIdx].includes("DOWN BAD") || bootLogs[logIdx].includes("FAILED")) p.className = "simp-red";
            else if (bootLogs[logIdx].includes("Success")) p.className = "simp-green";
            logEl.appendChild(p);
            logIdx++;
        }

        if (progress === 100) {
            clearInterval(runLoader);
            setTimeout(() => {
                loaderEl.style.opacity = '0';
                loaderEl.style.visibility = 'hidden';
                showToast("System Breached", "Sara officially owns this server ❤️");
            }, 900);
        }
    }, 140);

    /* ================= 2. CANVAS BACKGROUND ================= */
    const bgCanvas = document.getElementById('livingBgCanvas');
    const ctx = bgCanvas.getContext('2d');
    let particles = [];

    function resizeBg() { bgCanvas.width = window.innerWidth; bgCanvas.height = window.innerHeight; }
    window.addEventListener('resize', resizeBg); resizeBg();

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * bgCanvas.width;
            this.y = Math.random() * bgCanvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * -0.7 - 0.2;
            this.opacity = Math.random() * 0.45 + 0.15;
            this.isHeart = Math.random() > 0.82;
        }
        update() {
            this.y += this.speedY;
            if (this.y < -20) { this.y = bgCanvas.height + 20; this.x = Math.random() * bgCanvas.width; }
        }
        draw() {
            ctx.save(); ctx.globalAlpha = this.opacity;
            if (this.isHeart) {
                ctx.font = `${this.size * 5}px serif`; ctx.fillStyle = '#FF7096';
                ctx.fillText('❤', this.x, this.y);
            } else {
                ctx.fillStyle = '#E895AB'; ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.restore();
        }
    }
    for (let i = 0; i < 55; i++) particles.push(new Particle());

    function animateBg() {
        ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animateBg);
    }
    animateBg();

    /* ================= 3. CURSOR & MAGNETIC PHYSICS ================= */
    const cursor = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`;
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
            if (dist < 75) {
                btn.style.transform = `translate(${(e.clientX - (rect.left + rect.width / 2)) * 0.25}px, ${(e.clientY - (rect.top + rect.height / 2)) * 0.25}px)`;
            } else btn.style.transform = `translate(0px, 0px)`;
        });
    });

    /* ================= 4. TOASTS & FAKE iMESSAGES ================= */
    const toastBox = document.getElementById('toastContainer');
    function showToast(title, msg) {
        const t = document.createElement('div');
        t.style.cssText = 'background:#2B1E21;color:white;padding:14px 20px;border-radius:14px;border-left:4px solid #FF4D7D;box-shadow:0 10px 30px rgba(0,0,0,0.2);font-size:13px;pointer-events:none;animation:slideIn .4s forwards';
        t.innerHTML = `<strong style="color:#FF7096;display:block;margin-bottom:2px">🏆 ${title}</strong><span>${msg}</span>`;
        toastBox.appendChild(t);
        setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 4000);
    }

    const fakeTexts = [
        "stop looking so pretty it's distracting my workflow",
        "i'm looking at flights to poland rn don't test me",
        "quick reminder that you have my whole heart",
        "are you free to be my wife later or are you busy",
        "putting you on my taxes as a dependent (my happiness depends on u)"
    ];
    const imsgEl = document.getElementById('imessageToast');
    const imsgTxt = document.getElementById('imessageText');

    setInterval(() => {
        imsgTxt.textContent = fakeTexts[Math.floor(Math.random() * fakeTexts.length)];
        imsgEl.classList.remove('hidden');
        setTimeout(() => imsgEl.classList.add('show'), 100);
        setTimeout(() => {
            imsgEl.classList.remove('show');
            setTimeout(() => imsgEl.classList.add('hidden'), 500);
        }, 5500);
    }, 13000);

    /* ================= 5. COURT TRIAL SCANNER ================= */
    const scanBtn = document.getElementById('runScanBtn');
    const scanLine = document.getElementById('scanLine');
    const scanIdle = document.getElementById('scannerIdle');
    const scanReadout = document.getElementById('scannerReadout');

    scanBtn.addEventListener('click', () => {
        scanIdle.querySelector('p').textContent = "Cross-examining the defendant...";
        scanLine.classList.add('active'); scanReadout.classList.add('hidden');
        setTimeout(() => {
            scanLine.classList.remove('active'); scanIdle.classList.add('hidden');
            scanReadout.classList.remove('hidden');
            showToast("Verdict In", "Sara sentenced to infinite cuddles.");
        }, 2200);
    });

    /* ================= 6. RIGGED LOVE CALCULATOR ================= */
    const calcBtn = document.getElementById('calculateLoveBtn');
    const calcNum = document.getElementById('calcNumber');
    const calcFill = document.getElementById('calcFill');
    const calcText = document.getElementById('calcText');

    calcBtn.addEventListener('click', () => {
        let val = 0; calcBtn.disabled = true;
        const countUp = setInterval(() => {
            val += Math.floor(Math.random() * 18) + 8;
            if (val >= 100) {
                clearInterval(countUp);
                calcNum.textContent = "999 %"; calcFill.style.width = "100%";
                calcText.textContent = "ERROR: Logic broken. The universe rigged this match.";
                calcBtn.disabled = false;
                showToast("Math Broken", "Saatvik fell first, but fell way harder.");
            } else { calcNum.textContent = `${val}%`; calcFill.style.width = `${val}%`; }
        }, 70);
    });

    /* ================= 7. FLIGHT SIMULATOR ================= */
    const plane = document.getElementById('planeIcon');
    const flightTxt = document.getElementById('flightStatusText');
    const statuses = ["Bribing pilots to fly faster...", "Calculating mid-air hug trajectory...", "Cruising over international simp-zone...", "Preparing landing gear for forehead kisses..."];
    let planeProg = 0, statIdx = 0;

    setInterval(() => {
        planeProg = (planeProg + 0.25) % 100;
        plane.setAttribute('startOffset', `${planeProg}%`);
        if (Math.floor(planeProg) % 25 === 0) {
            flightTxt.textContent = statuses[statIdx % statuses.length];
            statIdx++;
        }
    }, 50);

    /* ================= 8. ENVELOPE (THE SINCERE PUNCHLINE) ================= */
    const envContainer = document.getElementById('envelopeContainer');
    const env = envContainer.querySelector('.envelope');
    const letterOutput = document.getElementById('typewriterOutput');
    const letterText = "Okay Sara, real talk for a second.\n\nBehind all the stupid jokes and the teasing, the honest truth is that meeting you changed the entire trajectory of my life. Having someone like you exist on the same planet as me feels like an unfair cheat code.\n\nNo amount of kilometers between India and Poland will ever make me hesitate. I'd choose you in every room, in every country, across every lifetime.\n\nYours always,\nSaatvik ❤️";

    envContainer.addEventListener('click', () => {
        if (!env.classList.contains('open')) {
            env.classList.add('open');
            let i = 0; letterOutput.textContent = "";
            setTimeout(() => {
                const typeInt = setInterval(() => {
                    letterOutput.textContent += letterText.charAt(i); i++;
                    if (i >= letterText.length) clearInterval(typeInt);
                }, 42);
            }, 750);
        }
    });

    /* ================= 9. FAKE VIRUS & AUDIO ================= */
    setTimeout(() => document.getElementById('virusModal').classList.remove('hidden'), 16000);
    document.getElementById('closeVirus').onclick = () => document.getElementById('virusModal').classList.add('hidden');
    document.getElementById('acknowledgeVirus').onclick = () => {
        document.getElementById('virusModal').classList.add('hidden');
        showToast("Ransom Paid", "Saatvik is waiting for that text message.");
    };

    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggleBtn');
    const vizBars = document.querySelectorAll('.visualizer span');
    let playing = false, vizInt;

    musicBtn.addEventListener('click', () => {
        if (!playing) {
            audio.play().catch(() => console.log("User interaction required for audio"));
            musicBtn.textContent = '⏸️'; playing = true;
            vizInt = setInterval(() => vizBars.forEach(b => b.style.height = `${Math.random() * 11 + 3}px`), 110);
        } else {
            audio.pause(); musicBtn.textContent = '🎵'; playing = false;
            clearInterval(vizInt); vizBars.forEach(b => b.style.height = '3px');
        }
    });
    document.getElementById('volumeSlider').addEventListener('input', e => audio.volume = e.target.value);

    /* ================= 10. FINALE FIREWORKS ================= */
    const fwCanvas = document.getElementById('fireworksCanvas');
    const fCtx = fwCanvas.getContext('2d');
    fwCanvas.width = window.innerWidth; fwCanvas.height = window.innerHeight;

    class Spark {
        constructor(x, y, c) {
            this.x = x; this.y = y; this.c = c;
            const a = Math.random() * Math.PI * 2, s = Math.random() * 5 + 1;
            this.vx = Math.cos(a) * s; this.vy = Math.sin(a) * s; this.alpha = 1;
        }
        update() { this.x += this.vx; this.y += this.vy; this.alpha -= 0.02; }
        draw() {
            fCtx.save(); fCtx.globalAlpha = this.alpha; fCtx.fillStyle = this.c;
            fCtx.fillRect(this.x, this.y, 3.5, 3.5); fCtx.restore();
        }
    }
    let sparks = [];
    document.getElementById('secretTrigger').addEventListener('click', e => {
        ['#FF4D7D', '#FFD166', '#FF95AB', '#FFF'].forEach(c => {
            for (let i = 0; i < 25; i++) sparks.push(new Spark(e.clientX, e.clientY + window.scrollY, c));
        });
        showToast("Infinite Simp", "Saatvik ❤️ Sara.");
    });

    function loopFw() {
        fCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
        sparks.forEach((s, idx) => { s.update(); s.draw(); if (s.alpha <= 0) sparks.splice(idx, 1); });
        requestAnimationFrame(loopFw);
    }
    loopFw();

    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => obs.observe(el));
});
