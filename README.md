# BAM-Studios481.github.io
This is the new and not-really improved website for BAM studios, we're supposed to be making games and stuff but who cares.
Please go to gabe-games.github.io for some awesome games and stuff...



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BAM-studios481</title>
  <link rel="stylesheet" href="style.css">

  <!-- Pixel + Y2K fonts (authentic, non-AI) -->
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>

  <div class="page-wrapper">

    <header class="header">
      <h1 class="site-title">★ BAM‑studios481 ★</h1>
      <p class="tagline">retro future • chrome dreams • neon nostalgia</p>
    </header>

    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Projects</a>
      <a href="#">Gallery</a>
      <a href="#">Contact</a>
    </nav>

    <section class="content">
      <h2>Welcome to the Y2K Zone</h2>
      <p>
        Step into a world of glossy gradients, pixel fonts, and early‑internet energy.
        This layout is inspired by real 2000–2004 web aesthetics — no AI art, no modern
        minimalism, just pure retro charm.
      </p>

      <button class="y2k-btn">Enter</button>
    </section>

    <footer class="footer">
      <p>© 2001–2026 BAM‑studios481</p>
    </footer>

  </div>

</body>
</html>
/* Background: soft chrome + neon gradient */
body {
  background: radial-gradient(circle at top, #e0e8ff, #b7c2ff, #8fa0ff);
  margin: 0;
  padding: 0;
  font-family: 'Orbitron', sans-serif;
  color: #1a1a1a;
}

/* Main container */
.page-wrapper {
  width: 850px;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.65);
  border: 3px solid #ffffff;
  border-radius: 25px;
  box-shadow: 0 0 35px rgba(0,0,0,0.25);
  padding: 25px;
}

/* Header */
.site-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 32px;
  text-align: center;
  background: linear-gradient(90deg, #ff66ff, #66ccff);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 10px rgba(255,255,255,0.9);
}

.tagline {
  text-align: center;
  margin-top: -10px;
  font-size: 14px;
  color: #333;
}

/* Navigation */
.nav {
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
}

.nav a {
  padding: 10px 25px;
  background: linear-gradient(180deg, #ffffff, #dcdcdc);
  border: 2px solid #fff;
  border-radius: 30px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}

.nav a:hover {
  background: linear-gradient(180deg, #ffccff, #ff99ff);
}

/* Content */
.content {
  text-align: center;
  padding: 20px;
}

.content h2 {
  font-size: 26px;
  margin-bottom: 10px;
  text-shadow: 0 0 8px rgba(255,255,255,0.8);
}

/* Y2K button */
.y2k-btn {
  padding: 15px 45px;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  background: linear-gradient(180deg, #66ccff, #3399ff);
  color: white;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
}

.y2k-btn:hover {
  background: linear-gradient(180deg, #ff66ff, #cc33ff);
}

/* Footer */
.footer {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
}
