// Zero-dependency Web Audio API synthesizer — cyber/tech sound palette
// All sounds are procedurally generated, no external files needed

class AudioManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientNode: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying = false;

  constructor() {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('portfolio_audio_muted') : null;
    this.isMuted = saved ? saved === 'true' : false;
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx?.state === 'suspended') this.ctx.resume();
  }

  // ─── Mute toggle ──────────────────────────────────────────
  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('portfolio_audio_muted', String(this.isMuted));
    if (!this.isMuted) {
      this.playClick();
      this.startAmbient();
    } else {
      this.stopAmbient();
    }
    return this.isMuted;
  }

  public getIsMuted() { return this.isMuted; }

  // ─── Helper: make a quick envelope node ───────────────────
  private makeOsc(type: OscillatorType, freq: number, startGain: number, duration: number, freqEnd?: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, now + duration);

    gain.gain.setValueAtTime(startGain, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.01);
  }

  // ─── 1. Hover — subtle rising blip ───────────────────────
  public playHover() {
    if (this.isMuted) return;
    try {
      this.initContext();
      this.makeOsc('sine', 520, 0.018, 0.07, 1040);
    } catch { /* silently ignore */ }
  }

  // ─── 2. Click — sharp cyber tap ──────────────────────────
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      // Short noise burst + pitched tap
      this.makeOsc('square', 800, 0.04, 0.06, 200);
      this.makeOsc('sine',   400, 0.03, 0.08, 180);
    } catch { /* silently ignore */ }
  }

  // ─── 3. Success — rising chord arpeggio ──────────────────
  public playSuccess() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5-E5-G5-C6
      const now   = this.ctx.currentTime;
      notes.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc  = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.09);
        gain.gain.setValueAtTime(0.045, now + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.09 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + 0.55);
      });
    } catch { /* silently ignore */ }
  }

  // ─── 4. Terminal keypress — mechanical tick ───────────────
  public playKey() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const pitch = 900 + Math.random() * 600;
      this.makeOsc('square', pitch, 0.015, 0.025);
    } catch { /* silently ignore */ }
  }

  // ─── 5. Morph / transition sweep ─────────────────────────
  public playMorph() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      this.makeOsc('sawtooth', 180, 0.03, 0.28, 1400);
      this.makeOsc('sine',     440, 0.02, 0.28, 880);
    } catch { /* silently ignore */ }
  }

  // ─── 6. Sci-fi whoosh (navigation / section entry) ────────
  public playWhoosh() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now  = this.ctx.currentTime;
      // White noise burst via buffer
      const bufLen = this.ctx.sampleRate * 0.18;
      const buf    = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
      const data   = buf.getChannelData(0);
      for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;

      const noise = this.ctx.createBufferSource();
      noise.buffer = buf;

      const filter = this.ctx.createBiquadFilter();
      filter.type            = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 0.1);
      filter.frequency.exponentialRampToValueAtTime(400,  now + 0.18);
      filter.Q.value = 1.5;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
      noise.stop(now + 0.2);

      // Accompanying pitched tone
      this.makeOsc('sine', 260, 0.025, 0.18, 520);
    } catch { /* silently ignore */ }
  }

  // ─── 7. Boot / page load sequence ────────────────────────
  public playBoot() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Rising power-on sweep
      const osc1  = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(60, now);
      osc1.frequency.exponentialRampToValueAtTime(480, now + 0.5);
      gain1.gain.setValueAtTime(0.0001, now);
      gain1.gain.linearRampToValueAtTime(0.06, now + 0.1);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now); osc1.stop(now + 0.55);

      // Confirmation ping after sweep
      const osc2  = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.55);
      osc2.frequency.exponentialRampToValueAtTime(1320, now + 0.7);
      gain2.gain.setValueAtTime(0.05, now + 0.55);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.75);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.55); osc2.stop(now + 0.8);

      // Start ambient after boot
      setTimeout(() => this.startAmbient(), 900);
    } catch { /* silently ignore */ }
  }

  // ─── 8. Notification / badge ping ────────────────────────
  public playPing() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      this.makeOsc('sine',     1047, 0.04, 0.35, 1568);
      this.makeOsc('triangle', 1047, 0.02, 0.35, 1047);
    } catch { /* silently ignore */ }
  }

  // ─── 9. Scroll tick — very subtle ─────────────────────────
  public playScrollTick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      this.makeOsc('sine', 660, 0.008, 0.04, 440);
    } catch { /* silently ignore */ }
  }

  // ─── 10. Ambient hum — looping low-freq drone ────────────
  public startAmbient() {
    if (this.isMuted || this.isAmbientPlaying) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      this.isAmbientPlaying = true;

      // Sub-bass drone
      this.ambientNode = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();

      this.ambientNode.type = 'sine';
      this.ambientNode.frequency.setValueAtTime(55, this.ctx.currentTime); // A1

      // Slowly oscillate the gain for a "breathing" effect
      const now = this.ctx.currentTime;
      this.ambientGain.gain.setValueAtTime(0.0001, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.022, now + 3);

      // Low-pass filter so it doesn't feel piercing
      const lpf = this.ctx.createBiquadFilter();
      lpf.type            = 'lowpass';
      lpf.frequency.value = 120;

      this.ambientNode.connect(lpf);
      lpf.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);
      this.ambientNode.start();
    } catch { /* silently ignore */ }
  }

  public stopAmbient() {
    try {
      if (this.ambientGain && this.ctx) {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      }
      setTimeout(() => {
        try { this.ambientNode?.stop(); } catch { /* ok */ }
        this.ambientNode    = null;
        this.ambientGain    = null;
        this.isAmbientPlaying = false;
      }, 1100);
    } catch { /* silently ignore */ }
  }
}

export const audio = new AudioManager();
