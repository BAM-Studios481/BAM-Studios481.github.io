# BAM-Studios
This is the new and not-really improved website for BAM studios, we're supposed to be making games and stuff but who cares.
Please go to gabe-games.github.io for some awesome games and stuff...




<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BAM-studios481</title>
  <link rel="stylesheet" href="style.css">

  <!-- Pixel + Y2K fonts (authentic, non-AI) -->
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
</head>
// Smooth scroll + placeholder creation for buttons/links.
//
// Usage:
// - For anchor links: <a href="#about">About</a>
// - Or use data-target on buttons: <button data-target="#about">About</button>
//
// Behavior:
// - If the target element exists, smooth-scrolls to it.
// - If the target doesn't exist, creates a placeholder <section id="..."> and scrolls there.
// - External links (href starting with http, mailto, etc.) are ignored.

(function () {
  'use strict';

  function createPlaceholder(id) {
    const section = document.createElement('section');
    section.id = id;
    section.className = 'placeholder';
    section.innerHTML = '<h2>Coming soon</h2><p>Content for #' + id + ' will be added here.</p>';
    // Append near the bottom but before the footer if possible
    const footer = document.querySelector('footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
    return section;
  }

  function handleClick(event) {
    const el = event.target.closest('a, button');
    if (!el) return;

    // Prefer data-target attribute for buttons:
    const dataTarget = el.getAttribute('data-target');
    // For anchor tags, get href if it's a hash link:
    const href = el.getAttribute('href');

    let targetSelector = null;

    if (dataTarget && dataTarget.trim()) {
      targetSelector = dataTarget.trim();
    } else if (href && href.trim().startsWith('#') && href.trim() !== '#') {
      targetSelector = href.trim();
    } else {
      // Not a scroll-target we care about
      return;
    }

    // Prevent default if it's a page-internal scroll
    event.preventDefault();

    const id = targetSelector.startsWith('#') ? targetSelector.slice(1) : targetSelector;
    let targetEl = document.getElementById(id);

    if (!targetEl) {
      // Create a placeholder so the site doesn't break
      targetEl = createPlaceholder(id);
    }

    // Smooth scroll to it
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Optionally update the URL hash without adding history entry
    try {
      history.replaceState && history.replaceState(null, '', '#' + id);
    } catch (e) {
      // ignore
    }
  }

  // Delegate: one listener for the whole document
  document.addEventListener('click', handleClick, false);

  // Optional: also handle direct hash navigation on page load (if user opened with #hash)
  document.addEventListener('DOMContentLoaded', function () {
    const hash = location.hash;
    if (hash && hash.length > 1) {
      const id = hash.slice(1);
      const el = document.getElementById(id) || createPlaceholder(id);
      setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
    }
  });
})();
<body>

  <div class="page-wrapper">

    <header class="header">
      <h1 class="site-title">★ BAM‑studios481 ★</h1>
      

    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Projects</a>
      <a href="#">Gallery</a>
      <a href="#">Contact</a>
    </nav>

    <section class="content">
      <h2>Welcome to the BAM-studios website, art, animations, videos, photographs, and games of course will be shown here
      ***THIS IS A WORK IN PROGRESS***</h2>
      <p>
       
      </p>

      <button class="y2k-btn">Enter</button>
    </section>
thx for visiting ig
    <footer class="footer">
      <p>© 2001–2026 BAM‑studios481</p>
    </footer>

  
