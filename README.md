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

  
