/**
 * FOREVER US V2: QUANTUM LOVE ENGINE
 * Engineered cleanly with Vanilla ES6+
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ================= 1. CINEMATIC OS LOADER ================= */
    const bootLogs = [
        "Initializing core emotional protocols...",
        "Loading shared memories from secure storage...",
        "Searching global coordinates for Sara...",
        "Target identified: Poland (51.9194° N, 19.1451° E)",
        "Analyzing smile topography... Flawless topography confirmed.",
        "Calculating infinite love metric...",
        "ERROR: Adorableness exceeded integer limit.",
        "Overriding system architecture... Success.",
        "Welcome back, my favorite person ❤️"
    ];

    const logEl = document.getElementById('loaderLog');
    const barEl = document.getElementById('loaderBar');
    const percentEl = document.getElementById('loaderPercent');
    const loaderEl = document.getElementById('loader');

    let logIdx = 0;
    let progress = 0;

    const runLoader = setInterval(() => {
        progress += Math.floor(Math.random() * 18) + 5;
        if (progress > 100) progress = 100;

        barEl.style.width = `${progress}%`;
        percentEl.textContent = `${progress}%`;

        if (logIdx < bootLogs.length && progress >= (logIdx + 1) * (100 / bootLogs.length)) {
            const p = document.createElement('div');
            p.textContent = `> ${bootLogs[logIdx]}`;
            if (bootLogs[logIdx].includes("ERROR")) p.className = "error-log";
            logEl.appendChild(p);
            logIdx++;
        }

        if (progress === 100) {
            clearInterval(runLoader);
            setTimeout(() => {
                loaderEl.style.opacity = '0';
                loaderEl.style.visibility = 'hidden';
                triggerToast("System Booted", "Welcome to your digital home Sara ❤️");
            }, 800);
        }
    }, 150);

    /* ================= 2. LIVING BACKGROUND ENGINE ================= */
    const bgCanvas = document.getElementById('livingBgCanvas');
    const ctx = bgCanvas.getContext('2d');
    let particles = [];

    function resizeBg() {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeBg);
    resizeBg();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * bgCanvas.width;
            this.y = Math.random() * bgCanvas.height;
            this.size = Math.random() * 2.5 + 1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * -0.6 - 0.2;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.isHeart = Math.random() > 0.85;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < -20 || this.x < -20 || this.x > bgCanvas.width + 20) this.reset();
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            if (this.isHeart) {
                ctx.font = `${this.size * 6}px serif`;
                ctx.fillStyle = '#EDA6B8';
                ctx.fillText('❤', this.x, this.y);
            } else {
                ctx.fillStyle = '#D47A93';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    for (let i = 0; i < 70; i++) particles.push(new Particle());

    function animateBg() {
        ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animateBg);
    }
    animateBg();

    /* ================= 3. LUXURY CURSOR & PARALLAX ================= */
    const cursor = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        // Magnetic element physics
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
            if (dist < 80) {
                const pullX = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
                const pullY = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
                btn.style.transform = `translate(${pullX}px, ${pullY}px)`;
            } else {
                btn.style.transform = `translate(0px, 0px)`;
            }
        });
    });

    /* ================= 4. TOAST & COMPLIMENT ENGINES ================= */
    const toastBox = document.getElementById('toastContainer');
    function triggerToast(title, msg) {
        const t = document.createElement('div');
        t.className = 'luxury-toast';
        t.innerHTML = `<span class="trophy">🏆</span><div><strong>Achievement: ${title}</strong><span>${msg}</span></div>`;
        toastBox.appendChild(t);
        setTimeout(() => t.remove(), 4600);
    }

    const compliments = [
        "You look stunning today Sara ❤️",
        "Remember to drink some water cutie!",
        "Andrew is actively thinking about your smile.",
        "Definite wife material detected ✨",
        "6,000 km is nothing against our connection."
    ];
    const compEl = document.getElementById('floatingCompliment');
    setInterval(() => {
        compEl.textContent = compliments[Math.floor(Math.random() * compliments.length)];
        compEl.classList.add('show');
        setTimeout(() => compEl.classList.remove('show'), 5000);
    }, 14000);

    /* ================= 5. AI GIRLFRIEND SCANNER ================= */
    const scanBtn = document.getElementById('runScanBtn');
    const scanLine = document.getElementById('scanLine');
    const scanIdle = document.getElementById('scannerIdle');
    const scanReadout = document.getElementById('scannerReadout');

    scanBtn.addEventListener('click', () => {
        scanIdle.textContent = "Scanning biometric signatures...";
        scanLine.classList.add('active');
        scanReadout.classList.add('hidden');

        setTimeout(() => {
            scanLine.classList.remove('active');
            scanIdle.classList.add('hidden');
            scanReadout.classList.remove('hidden');
            triggerToast("Scientific Consensus", "Officially verified as the cutest girl alive.");
        }, 2500);
    });

    /* ================= 6. QUANTUM LOVE CALCULATOR ================= */
    const calcBtn = document.getElementById('calculateLoveBtn');
    const calcNum = document.getElementById('calcNumber');
    const calcFill = document.getElementById('calcFill');
    const calcText = document.getElementById('calcText');

    calcBtn.addEventListener('click', () => {
        let val = 0;
        calcBtn.disabled = true;
        const countUp = setInterval(() => {
            val += Math.floor(Math.random() * 15) + 5;
            if (val >= 100) {
                val = 100;
                clearInterval(countUp);
                calcNum.textContent = "∞ %";
                calcFill.style.width = "100%";
                calcText.textContent = "Error: Quantum overflow. Andrew's love cannot be bound by percentages.";
                calcBtn.disabled = false;
                triggerToast("Math Defeated", "Our compatibility broke the calculator.");
            } else {
                calcNum.textContent = `${val}%`;
                calcFill.style.width = `${val}%`;
            }
        }, 80);
    });

    /* ================= 7. LONG DISTANCE FLIGHT SIMULATOR ================= */
    const plane = document.getElementById('planeIcon');
    const kmEl = document.getElementById('kmCounter');
    let planeProgress = 0;

    setInterval(() => {
        planeProgress = (planeProgress + 0.2) % 100;
        plane.setAttribute('startOffset', `${planeProgress}%`);
        kmEl.textContent = Math.floor(6124 * (1 - planeProgress / 100)).toLocaleString();
    }, 50);

    /* ================= 8. ENVELOPE TYPEWRITER ================= */
    const envContainer = document.getElementById('envelopeContainer');
    const env = envContainer.querySelector('.envelope');
    const letterOutput = document.getElementById('typewriterOutput');
    const letterText = "My Dearest Sara,\n\nEvery single day spent waiting to close the distance between India and Poland is an investment into the most beautiful future I could ever fathom. You are my clarity, my comfort, and my absolute home.\n\nForever Yours,\nAndrew ❤️";

    envContainer.addEventListener('click', () => {
        if (!env.classList.contains('open')) {
            env.classList.add('open');
            let i = 0;
            letterOutput.textContent = "";
            setTimeout(() => {
                const typeInterval = setInterval(() => {
                    letterOutput.textContent += letterText.charAt(i);
                    i++;
                    if (i >= letterText.length) clearInterval(typeInterval);
                }, 40);
            }, 800);
        }
    });

    /* ================= 9. MINI GAME: CATCH THE HEARTS ================= */
    const gameCanvas = document.getElementById('miniGameCanvas');
    const gCtx = gameCanvas.getContext('2d');
    const startOverlay = document.getElementById('gameStartOverlay');
    const winOverlay = document.getElementById('gameWinOverlay');
    const scoreEl = document.getElementById('gameScore');
    const timerEl = document.getElementById('gameTimer');

    let gameHearts = [];
    let score = 0;
    let timeLeft = 25;
    let gameActive = false;
    let gameInterval, spawnInterval;

    class GameHeart {
        constructor() {
            this.x = Math.random() * (gameCanvas.width - 40) + 20;
            this.y = -30;
            this.speed = Math.random() * 3 + 2;
            this.size = 24;
        }
        update() { this.y += this.speed; }
        draw() {
            gCtx.font = `${this.size}px serif`;
            gCtx.fillText('💖', this.x, this.y);
        }
    }

    document.getElementById('startGameBtn').addEventListener('click', () => {
        startOverlay.classList.add('hidden');
        score = 0; timeLeft = 25; gameActive = true;
        scoreEl.textContent = score;
        gameHearts = [];

        spawnInterval = setInterval(() => {
            if (gameActive) gameHearts.push(new GameHeart());
        }, 600);

        gameInterval = setInterval(() => {
            timeLeft--;
            timerEl.textContent = `Time: ${timeLeft}s`;
            if (timeLeft <= 0 || score >= 15) endGame(score >= 15);
        }, 1000);

        requestAnimationFrame(gameLoop);
    });

    function gameLoop() {
        if (!gameActive) return;
        gCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        gameHearts.forEach((h, idx) => {
            h.update(); h.draw();
            if (h.y > gameCanvas.height) gameHearts.splice(idx, 1);
        });
        requestAnimationFrame(gameLoop);
    }

    gameCanvas.addEventListener('click', e => {
        if (!gameActive) return;
        const rect = gameCanvas.getBoundingClientRect();
        const clickX = (e.clientX - rect.left) * (gameCanvas.width / rect.width);
        const clickY = (e.clientY - rect.top) * (gameCanvas.height / rect.height);

        gameHearts.forEach((h, idx) => {
            if (Math.hypot(clickX - h.x, clickY - h.y) < 35) {
                gameHearts.splice(idx, 1);
                score++;
                scoreEl.textContent = score;
                if (score >= 15) endGame(true);
            }
        });
    });

    function endGame(won) {
        gameActive = false;
        clearInterval(gameInterval); clearInterval(spawnInterval);
        if (won) {
            winOverlay.classList.remove('hidden');
            triggerToast("Pro Collector", "You caught Andrew's heart 15 times over.");
        } else {
            startOverlay.classList.remove('hidden');
            startOverlay.querySelector('button span').textContent = "Try Again ❤️";
        }
    }

    document.getElementById('resetGameBtn').addEventListener('click', () => {
        winOverlay.classList.add('hidden');
        startOverlay.classList.remove('hidden');
    });

    /* ================= 10. FAKE VIRUS & AUDIO AUDIO EQUALIZER ================= */
    setTimeout(() => document.getElementById('virusModal').classList.remove('hidden'), 18000);
    document.getElementById('closeVirus').onclick = () => document.getElementById('virusModal').classList.add('hidden');
    document.getElementById('acknowledgeVirus').onclick = () => {
        document.getElementById('virusModal').classList.add('hidden');
        triggerToast("Infection Permanent", "There is no cure for being Andrew's girl.");
    };

    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggleBtn');
    const visualizerBars = document.querySelectorAll('.visualizer span');
    let isPlaying = false;
    let vizInterval;

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play().catch(() => console.log("Audio autoplay prevented"));
            musicBtn.textContent = '⏸️';
            isPlaying = true;
            vizInterval = setInterval(() => {
                visualizerBars.forEach(bar => bar.style.height = `${Math.random() * 12 + 2}px`);
            }, 120);
        } else {
            audio.pause();
            musicBtn.textContent = '🎵';
            isPlaying = false;
            clearInterval(vizInterval);
            visualizerBars.forEach(bar => bar.style.height = `3px`);
        }
    });

    document.getElementById('volumeSlider').addEventListener('input', e => audio.volume = e.target.value);

    /* ================= 11. GRAND FINALE FIREWORKS ================= */
    const fwCanvas = document.getElementById('fireworksCanvas');
    const fCtx = fwCanvas.getContext('2d');
    fwCanvas.width = window.innerWidth; fwCanvas.height = window.innerHeight;

    class Spark {
        constructor(x, y, color) {
            this.x = x; this.y = y; this.color = color;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.alpha = 1;
        }
        update() { this.x += this.vx; this.y += this.vy; this.alpha -= 0.015; }
        draw() {
            fCtx.save(); fCtx.globalAlpha = this.alpha;
            fCtx.fillStyle = this.color;
            fCtx.fillRect(this.x, this.y, 3, 3);
            fCtx.restore();
        }
    }

    let sparks = [];
    document.getElementById('secretTrigger').addEventListener('click', e => {
        const colors = ['#EDA6B8', '#D4AF37', '#FF708D', '#FFF'];
        for (let i = 0; i < 80; i++) {
            sparks.push(new Spark(e.clientX, e.clientY + window.scrollY, colors[Math.floor(Math.random() * colors.length)]));
        }
        triggerToast("Infinite Love", "Sara + Andrew forever.");
    });

    function loopFinale() {
        fCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
        sparks.forEach((s, idx) => {
            s.update(); s.draw();
            if (s.alpha <= 0) sparks.splice(idx, 1);
        });
        requestAnimationFrame(loopFinale);
    }
    loopFinale();

    /* Scroll animations */
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => obs.observe(el));
});