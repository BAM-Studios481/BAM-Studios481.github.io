// Single button listener
const helloBtn = document.getElementById('helloBtn');
if (helloBtn) {
  helloBtn.addEventListener('click', () => {
    alert('Hello from BAM Studios!');
  });
}

// Toggle class and update accessible state
const toggleBtn = document.getElementById('toggleBtn');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('highlight'); // example CSS class
    const pressed = toggleBtn.getAttribute('aria-pressed') === 'true';
    toggleBtn.setAttribute('aria-pressed', String(!pressed));
  });
}

// Event delegation for many buttons (recommended if you have lots)
document.addEventListener('click', (event) => {
  const btn = event.target.closest('.btn');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'save') {
    console.log('save clicked');
  } else if (action === 'delete') {
    console.log('delete clicked');
  } else if (action === 'fetch') {
    // Example fetch action tied to a button with data-action="fetch"
    (async () => {
      const originalDisabled = btn.disabled;
      const originalText = btn.textContent;
      try {
        btn.disabled = true;
        btn.textContent = 'Loading…';
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        console.log('Received', data);
        alert('Loaded data — check console for details.');
      } catch (err) {
        console.error(err);
        alert('Failed to load data');
      } finally {
        btn.disabled = originalDisabled;
        btn.textContent = originalText;
      }
    })();
  }
});
