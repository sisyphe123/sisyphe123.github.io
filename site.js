(() => {
  const profile = window.PROFILE || {};
  if (profile.name) {
    document.querySelectorAll('[data-name]').forEach(el => { el.textContent = profile.name; });
    document.title = `${profile.name} | Personal Homepage`;
  }
  if (profile.institution) {
    const el = document.getElementById('institution');
    el.textContent = profile.institution;
    el.hidden = false;
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email || '')) {
    const el = document.getElementById('contact');
    el.href = `mailto:${profile.email}`;
    el.replaceChildren();
    const label = document.createElement('span');
    label.className = 'link-label';
    label.textContent = 'EMAIL';
    el.append(label, document.createTextNode(profile.email));
    el.hidden = false;
  }
  if (/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$/.test(profile.githubUsername || '')) {
    const el = document.getElementById('github');
    el.href = `https://github.com/${profile.githubUsername}`;
    el.replaceChildren();
    const label = document.createElement('span');
    label.className = 'link-label';
    label.textContent = 'GITHUB';
    el.append(label, document.createTextNode(`${profile.githubUsername} ↗`));
    el.hidden = false;
  }
})();
