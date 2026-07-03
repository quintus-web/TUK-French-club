// ── TUK FRENCH CLUB CMS ──────────────────────────────────────────────────────
// All site content lives here. Edit via admin.html or directly in localStorage.
// Keys: tfc_events, tfc_team, tfc_episodes, tfc_articles, tfc_recaps, tfc_settings

const CMS_KEYS = {
  events:   'tfc_events',
  team:     'tfc_team',
  episodes: 'tfc_episodes',
  articles: 'tfc_articles',
  recaps:   'tfc_recaps',
  settings: 'tfc_settings',
};

// ── DEFAULT DATA ─────────────────────────────────────────────────────────────

const DEFAULTS = {
  settings: {
    clubName: 'Le Club Français · TUK',
    tagline: 'Liberté, Égalité, Fraternité',
    email: 'clubfrancaisdetuk@gmail.com',
    instagram: 'https://instagram.com/tuk_french_club',
    whatsappGroup: 'https://chat.whatsapp.com/Ef3S9g04tGQ6Nw1RYVuvDr',
    whatsappChannel: 'https://whatsapp.com/channel/0029VaTw3vf89ingMPYKcb2w',
    meetingTime: 'Fridays, 4:00 PM — 6:00 PM — French Resource Center',
    foundedYear: '2018',
    memberCount: '120+',
    eventsPerYear: '24+',
    yearsRunning: '6',
    heroQuote: '"La langue est la maison de l\'être." — Heidegger',
  },

  events: [
    { id: 1, date: 'Every Friday · 4:00 PM', title: 'Cercle de Conversation', desc: 'Our weekly conversation circle — practice your spoken French in a relaxed, supportive setting. All levels welcome.', tags: ['Weekly', 'Free entry'], color: 'blue' },
    { id: 2, date: '14 July · Annual', title: 'Bastille Day Fête', desc: "Celebrate France's national day with food, music, poetry readings, and a French film screening. Our biggest event of the year.", tags: ['Annual', 'Open to all'], color: 'red' },
    { id: 3, date: 'Monthly · First Friday', title: 'Ciné-club Français', desc: 'Monthly French film screening with subtitles, followed by a group discussion in French and English.', tags: ['Monthly', 'Film & discussion'], color: 'mixed' },
    { id: 4, date: 'Every Term', title: 'French Language Workshop', desc: 'Intensive grammar, pronunciation, and writing workshops — perfect for students preparing for DELF/DALF exams.', tags: ['Workshop', 'Certification prep'], color: 'blue' },
    { id: 5, date: 'March · Cultural Month', title: 'Semaine de la Francophonie', desc: 'A week-long celebration of the French-speaking world — featuring speakers, music, dance, and interactive cultural displays.', tags: ['Cultural week', 'Campus-wide'], color: 'red' },
    { id: 6, date: 'Bi-monthly', title: 'Podcast Recording Sessions', desc: 'Join our student media team to record episodes for the club podcast. No experience needed — just enthusiasm and a voice.', tags: ['Media', 'Creative'], color: 'mixed' },
  ],

  team: [
    { id: 1, name: 'Hopekings Indeje', role: 'Events Coordinator', desc: "Grâce à mon sens de l'organisation et à ma spontanéité, je contribue activement à la réussite des activités et projets du club.", level: 'Intermediate · B1', photo: 'assets/profiles/coordinator.jpeg' },
    { id: 2, name: 'Maurine Muthike', role: 'Secretary', desc: 'Handles official club correspondence, meeting minutes, and registration rosters.', level: 'Intermediate · B1', photo: 'assets/profiles/secretary.jpeg' },
    { id: 3, name: 'Benedict Lenapunya', role: 'Assistant Secretary', desc: 'Maintains membership archives, student outreach programs, and certifications records.', level: 'Intermediate · B1', photo: 'assets/profiles/Assistant Secretary.jpeg' },
    { id: 4, name: 'Bob Muna', role: 'Debate', desc: 'Leads grammar workshops and curates specific preparation tracks for DELF-DALF testing.', level: 'Native-level · C2', photo: 'assets/profiles/Debate.jpeg' },
    { id: 5, name: 'MaryJoy Nderitu', role: 'Social Media', desc: 'Creates immersive visual content, micro-vlogs, and handles live event reporting.', level: 'Intermediate · A2', photo: 'assets/profiles/Social Media.jpeg' },
    { id: 6, name: 'Chloe Wanjiru', role: 'Assistant Social Media Manager', desc: "Passionate about building community and exploring French culture. Thrilled to contribute to the club's growth!", level: 'Intermediate · B1', photo: 'assets/profiles/Assistant Social Media.jpeg' },
  ],

  episodes: [
    { id: 1, ep: 'EP. 01', runtime: '28 min', title: 'Explore the interconnection between French and Tourism', summary: 'The founding members explore what the French language means for engineering, tech, and international career opportunities within East Africa.', youtubeId: 'zxTrkkd8QXc', youtubeUrl: 'https://youtu.be/zxTrkkd8QXc' },
    { id: 2, ep: 'EP. 02', runtime: '29 min', title: 'Pourquoi le Français ? — Why French in Kenya?', summary: 'The founding members explore what the French language means for engineering, tech, and international career opportunities within East Africa.', youtubeId: 'mKUdMYTFEWY', youtubeUrl: 'https://youtu.be/mKUdMYTFEWY' },
    { id: 3, ep: 'EP. 03', runtime: '34 min', title: "L'Afrique Francophone — The French-speaking Africa", summary: "Exploring Kenya's relationships with francophone neighbours and why French matters for East Africans.", youtubeId: 'p6Jvxd1VJd8', youtubeUrl: 'https://youtu.be/p6Jvxd1VJd8' },
    { id: 4, ep: 'EP. 04', runtime: '22 min', title: 'Recettes & Souvenirs — Food and French memory', summary: 'Students share their favourite French recipes and the cultural memories attached to food and cooking.', youtubeId: 'Jurz2CP9Fj4', youtubeUrl: 'https://youtu.be/Jurz2CP9Fj4' },
    { id: 5, ep: 'EP. 05', runtime: '41 min', title: 'Carrières Francophones — French for your career', summary: 'Alumni share how French opened doors at the AU, EU, diplomatic missions, and international NGOs.', youtubeId: 'tZv-bfa0W-s', youtubeUrl: 'https://youtu.be/tZv-bfa0W-s' },
    { id: 6, ep: 'EP. 06', runtime: '37 min', title: 'La Musique Française — from Brel to Stromae', summary: 'A musical journey through French-language music — from classic chansons to contemporary Afropop crossovers.', youtubeId: 'mKUdMYTFEWY', youtubeUrl: 'https://youtu.be/mKUdMYTFEWY' },
  ],

  articles: [
    { id: 1, featured: true, category: 'Culture · Language', title: "Why French is Africa's language of the future", body: "With over 30 African nations speaking French and the continent's population set to double by 2050, French is becoming one of the most strategically important languages for young Kenyans.", authorInitials: 'AP', authorName: 'Amina Patel', date: 'May 10, 2025', readTime: '8 min read', badge: 'Featured', imgUrl: 'https://picsum.photos/seed/paris1/700/500', badgeClass: 'badge-blue' },
    { id: 2, featured: false, category: 'Language Tips', title: '10 French phrases every Kenyan student should know', body: 'From the classroom to the boardroom — practical phrases that will immediately make you sound more fluent and confident.', authorInitials: 'LW', authorName: 'Lilian Wambua', date: 'Apr 22, 2025', readTime: '5 min read', imgUrl: 'https://picsum.photos/seed/french2/600/400', badgeClass: 'badge-red', avatarClass: 'red' },
    { id: 3, featured: false, category: 'Culture', title: 'Bastille Day in Nairobi — a recap of our biggest celebration yet', body: 'How 200 students came together to celebrate France\'s national day with food, music, and a whole lot of joie de vivre.', authorInitials: 'FK', authorName: 'Fatima Kariuki', date: 'Jul 16, 2024', readTime: '4 min read', imgUrl: 'https://picsum.photos/seed/bastille3/600/400', badgeClass: 'badge-blue', avatarClass: 'dark' },
    { id: 4, featured: false, category: 'Certification', title: 'How I passed DELF B2 in 4 months while studying engineering', body: 'James Ochieng shares his honest study strategy, the resources he used, and what he wished he knew before taking the exam.', authorInitials: 'JO', authorName: 'James Ochieng', date: 'Mar 5, 2025', readTime: '6 min read', imgUrl: 'https://picsum.photos/seed/delf4/600/400', badgeClass: 'badge-dark', avatarClass: 'blue' },
    { id: 5, featured: false, category: 'Food & Culture', title: 'Crêpes, cassoulet et café — our French cuisine night in photos', body: 'A picture essay from our most delicious event yet — students cooking and sharing traditional French recipes from scratch.', authorInitials: 'SI', authorName: 'Sophie Irungu', date: 'Feb 28, 2025', readTime: '3 min read', imgUrl: 'https://picsum.photos/seed/food5/600/400', badgeClass: 'badge-red', avatarClass: 'dark' },
    { id: 6, featured: false, category: 'Francophonie', title: "Rwanda's French comeback — what it means for East Africa", body: 'After a decade of English-only policy, Rwanda rejoined La Francophonie in 2024. We explore what this shift means for the region.', authorInitials: 'DN', authorName: 'David Njoroge', date: 'Jan 14, 2025', readTime: '5 min read', imgUrl: 'https://picsum.photos/seed/rwandaf6/600/400', badgeClass: 'badge-blue', avatarClass: 'red' },
  ],

  recaps: [
    { id: 1, featured: true, category: 'Event Recap · Annual', title: 'Bastille Day Fête 2024 — in pictures and words', body: "Over 200 students, staff, and guests gathered for our grandest celebration yet. Here's the full story of an unforgettable evening of French culture, food, and community in Nairobi.", authorInitials: 'FK', authorName: 'Fatima Kariuki', date: 'July 16, 2024', readTime: '5 min read', imgUrl: 'https://picsum.photos/seed/recap-bastille/700/500', badge: 'Latest Recap', avatarClass: 'red' },
    { id: 2, featured: false, category: 'Cultural Week', title: 'Semaine de la Francophonie 2024 — a week to remember', body: 'Highlights from five days of talks, music, food, and French language activities that lit up the TUK campus.', authorInitials: 'SI', authorName: 'Sophie Irungu', date: 'Mar 25, 2024', imgUrl: 'https://picsum.photos/seed/recap-franco/600/400', badgeClass: 'badge-blue', avatarClass: 'dark' },
    { id: 3, featured: false, category: 'Ciné-club', title: 'Ciné-club April — Les Intouchables screening recap', body: 'Our biggest film night yet drew 80 students for a viewing and lively post-film discussion in French and English.', authorInitials: 'EM', authorName: 'Emmanuel Mutua', date: 'Apr 8, 2024', imgUrl: 'https://picsum.photos/seed/recap-film/600/400', badgeClass: 'badge-dark', avatarClass: 'blue' },
    { id: 4, featured: false, category: 'Workshop', title: 'DELF prep workshop — what our students said', body: 'Testimonials and key takeaways from the March intensive DELF/DALF preparation workshop held over a full weekend.', authorInitials: 'LW', authorName: 'Lilian Wambua', date: 'Mar 12, 2024', imgUrl: 'https://picsum.photos/seed/recap-delf/600/400', badgeClass: 'badge-red', avatarClass: 'red' },
  ],
};

// ── DATA ACCESS ───────────────────────────────────────────────────────────────

function cmsGet(key) {
  try {
    const raw = localStorage.getItem(CMS_KEYS[key]);
    return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULTS[key]));
  } catch { return JSON.parse(JSON.stringify(DEFAULTS[key])); }
}

function cmsSet(key, data) {
  localStorage.setItem(CMS_KEYS[key], JSON.stringify(data));
}

function cmsReset(key) {
  localStorage.removeItem(CMS_KEYS[key]);
}

function cmsResetAll() {
  Object.values(CMS_KEYS).forEach(k => localStorage.removeItem(k));
}

// ── RENDER HELPERS ────────────────────────────────────────────────────────────

function renderEvents() {
  const events = cmsGet('events');
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  grid.innerHTML = events.map(e => `
    <div class="event-card">
      <div class="event-card-top ${e.color}"></div>
      <div class="event-card-body">
        <div class="event-date">${e.date}</div>
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <div class="event-meta">${e.tags.map((t, i) => `<span class="event-tag${i === 0 && e.color === 'red' ? ' red' : ''}">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

function renderTeam() {
  const team = cmsGet('team');
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  grid.innerHTML = team.map(m => `
    <div class="member-card">
      <div class="member-avatar-container"><img src="${m.photo}" alt="${m.name}" class="member-avatar-img" loading="lazy"></div>
      <h4>${m.name}</h4>
      <div class="role">${m.role}</div>
      <p class="member-desc">${m.desc}</p>
      <span class="level">${m.level}</span>
    </div>`).join('');
}

function renderEpisodes(containerId) {
  const episodes = cmsGet('episodes');
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = episodes.map(ep => `
    <div class="episode-card">
      <div class="ep-video-frame">
        <iframe src="https://www.youtube.com/embed/${ep.youtubeId}" title="${ep.title}" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="ep-details-pane">
        <div>
          <div class="ep-meta-header">
            <span class="ep-tag-pill">${ep.ep}</span>
            <span class="ep-runtime">${ep.runtime}</span>
          </div>
          <h3>${ep.title}</h3>
          <p class="ep-summary-text">${ep.summary}</p>
        </div>
        <div class="ep-action-btn-row">
          <a href="${ep.youtubeUrl}" target="_blank" class="ep-youtube-link">Open on YouTube App →</a>
        </div>
      </div>
    </div>`).join('');
}

function renderArticles() {
  const articles = cmsGet('articles');
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  const featuredEl = document.getElementById('articlesFeatured');
  if (featuredEl && featured) {
    featuredEl.innerHTML = `
      <div class="pub-featured-img">
        <img src="${featured.imgUrl}" alt="${featured.title}">
        <span class="img-badge">${featured.badge || 'Featured'}</span>
      </div>
      <div class="pub-featured-body">
        <span class="pub-cat">${featured.category}</span>
        <h2>${featured.title}</h2>
        <p>${featured.body}</p>
        <div class="pub-meta">
          <div class="pub-author-av blue">${featured.authorInitials}</div>
          <div class="pub-meta-text"><strong>${featured.authorName}</strong><span>${featured.date} · ${featured.readTime}</span></div>
        </div>
        <a href="#" class="pub-read-link">Read full article →</a>
      </div>`;
  }

  const gridEl = document.getElementById('articlesGrid');
  if (gridEl) {
    gridEl.innerHTML = rest.map(a => `
      <div class="pub-card">
        <div class="pub-card-img">
          <img src="${a.imgUrl}" alt="${a.title}" loading="lazy">
          <span class="pub-cat-badge ${a.badgeClass}">${a.category}</span>
        </div>
        <div class="pub-card-body">
          <h3>${a.title}</h3>
          <p>${a.body}</p>
          <div class="pub-card-footer">
            <div class="pub-card-author"><div class="mini-av ${a.avatarClass || 'blue'}">${a.authorInitials}</div><span>${a.authorName}</span></div>
            <span class="pub-date">${a.date}</span>
          </div>
        </div>
      </div>`).join('');
  }
}

function renderRecaps() {
  const recaps = cmsGet('recaps');
  const featured = recaps.find(r => r.featured);
  const rest = recaps.filter(r => !r.featured);

  const featuredEl = document.getElementById('recapsFeatured');
  if (featuredEl && featured) {
    featuredEl.innerHTML = `
      <div class="pub-featured-img">
        <img src="${featured.imgUrl}" alt="${featured.title}">
        <span class="img-badge">${featured.badge || 'Latest Recap'}</span>
      </div>
      <div class="pub-featured-body">
        <span class="pub-cat">${featured.category}</span>
        <h2>${featured.title}</h2>
        <p>${featured.body}</p>
        <div class="pub-meta">
          <div class="pub-author-av ${featured.avatarClass || 'red'}">${featured.authorInitials}</div>
          <div class="pub-meta-text"><strong>${featured.authorName}</strong><span>${featured.date} · ${featured.readTime}</span></div>
        </div>
        <a href="#" class="pub-read-link">Read full recap →</a>
      </div>`;
  }

  const gridEl = document.getElementById('recapsGrid');
  if (gridEl) {
    gridEl.innerHTML = rest.map(r => `
      <div class="pub-card">
        <div class="pub-card-img">
          <img src="${r.imgUrl}" alt="${r.title}" loading="lazy">
          <span class="pub-cat-badge ${r.badgeClass}">${r.category}</span>
        </div>
        <div class="pub-card-body">
          <h3>${r.title}</h3>
          <p>${r.body}</p>
          <div class="pub-card-footer">
            <div class="pub-card-author"><div class="mini-av ${r.avatarClass || 'blue'}">${r.authorInitials}</div><span>${r.authorName}</span></div>
            <span class="pub-date">${r.date}</span>
          </div>
        </div>
      </div>`).join('');
  }
}

function renderSettings() {
  const s = cmsGet('settings');
  document.querySelectorAll('[data-cms]').forEach(el => {
    const key = el.dataset.cms;
    if (s[key] !== undefined) {
      if (el.tagName === 'A') el.href = s[key];
      else el.textContent = s[key];
    }
  });
  // Hero stats
  const statMemberCount = document.getElementById('statMemberCount');
  const statYears = document.getElementById('statYears');
  const statEvents = document.getElementById('statEventsPerYear');
  if (statMemberCount) statMemberCount.textContent = s.memberCount;
  if (statYears) statYears.textContent = s.yearsRunning;
  if (statEvents) statEvents.textContent = s.eventsPerYear;
}

// ── INIT (called on index.html load) ─────────────────────────────────────────

function cmsInit() {
  renderSettings();
  renderEvents();
  renderTeam();
  renderEpisodes('podcastGrid');
  renderEpisodes('epGrid');
  renderArticles();
  renderRecaps();
}
