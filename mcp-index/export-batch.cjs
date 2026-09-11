/**
 * Bake composited wash backgrounds (no mix-blend-mode) for faithful PNG export,
 * then export all cards via Chrome element.screenshot (matches on-screen look).
 */
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const ROOT = __dirname;
const OUT = path.join(ROOT, "exports");

const JOBS = [
  { file: "cycle-12-time-to-first-result.html", slug: "cycle-12-time-to-first-result-navy", wash: "navy" },
  {
    file: "server-scorecard.html",
    slug: "server-scorecard-matrix-navy",
    wash: "navy",
    style: "matrix",
  },
  {
    file: "server-scorecard.html",
    slug: "server-scorecard-threshold-navy",
    wash: "navy",
    style: "threshold",
  },
  {
    file: "server-scorecard.html",
    slug: "server-scorecard-poster-navy",
    wash: "navy",
    style: "poster",
  },
  {
    file: "server-scorecard.html",
    slug: "server-scorecard-matrix-light",
    wash: "light",
    style: "matrix",
  },
  {
    file: "server-scorecard.html",
    slug: "server-scorecard-threshold-light",
    wash: "light",
    style: "threshold",
  },
  {
    file: "server-scorecard.html",
    slug: "server-scorecard-poster-light",
    wash: "light",
    style: "poster",
  },
  { file: "server-comparison.html", slug: "server-comparison-navy", wash: "navy" },
  { file: "server-comparison.html", slug: "server-comparison-light", wash: "light" },
  {
    file: "infographic-styles.html",
    slug: "infographic-bars-navy",
    wash: "navy",
    style: "bars",
  },
  {
    file: "infographic-styles.html",
    slug: "infographic-threshold-navy",
    wash: "navy",
    style: "threshold",
  },
  {
    file: "infographic-styles.html",
    slug: "infographic-poster-navy",
    wash: "navy",
    style: "poster",
  },
  {
    file: "infographic-styles.html",
    slug: "infographic-bars-light",
    wash: "light",
    style: "bars",
  },
  {
    file: "infographic-styles.html",
    slug: "infographic-threshold-light",
    wash: "light",
    style: "threshold",
  },
  {
    file: "infographic-styles.html",
    slug: "infographic-poster-light",
    wash: "light",
    style: "poster",
  },
  {
    file: "semgrep-scorecard.html",
    slug: "semgrep-scorecard-matrix-navy",
    wash: "navy",
    style: "matrix",
  },
  {
    file: "semgrep-scorecard.html",
    slug: "semgrep-scorecard-threshold-navy",
    wash: "navy",
    style: "threshold",
  },
  {
    file: "semgrep-scorecard.html",
    slug: "semgrep-scorecard-poster-navy",
    wash: "navy",
    style: "poster",
  },
  {
    file: "semgrep-scorecard.html",
    slug: "semgrep-scorecard-matrix-light",
    wash: "light",
    style: "matrix",
  },
  {
    file: "semgrep-scorecard.html",
    slug: "semgrep-scorecard-threshold-light",
    wash: "light",
    style: "threshold",
  },
  {
    file: "semgrep-scorecard.html",
    slug: "semgrep-scorecard-poster-light",
    wash: "light",
    style: "poster",
  },
];

async function bakeWashes(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });

  for (const mode of ["navy", "light"]) {
    const html = `<!DOCTYPE html><html data-wash="${mode}"><head>
<meta charset="UTF-8"/>
<style>
:root{--brand-navy:214 39% 17%;--brand-navy-deep:220 38% 10%;--surface-cream:40 33% 97%;--radius:0.5rem}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1200px;height:800px;overflow:hidden}
.wash{position:absolute;inset:0}
.wash__base{position:absolute;inset:0}
.wash__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.08) rotate(-2deg);opacity:0.92}
.wash__veil{position:absolute;inset:0}
html[data-wash="navy"] .wash__base{background:hsl(var(--brand-navy))}
html[data-wash="navy"] .wash__img{mix-blend-mode:soft-light}
html[data-wash="navy"] .wash__img--2{display:block;transform:scale(1.12) rotate(1.5deg);opacity:0.45;mix-blend-mode:overlay}
html[data-wash="navy"] .wash__veil{background:linear-gradient(180deg,hsl(var(--brand-navy)/0.12) 0%,transparent 30%,transparent 55%,hsl(var(--brand-navy-deep)/0.88) 100%),linear-gradient(90deg,hsl(var(--brand-navy-deep)/0.45) 0%,transparent 40%,transparent 70%,hsl(var(--brand-navy-deep)/0.3) 100%)}
html[data-wash="light"] .wash__base{background:hsl(var(--surface-cream))}
html[data-wash="light"] .wash__img{mix-blend-mode:multiply;opacity:0.95}
html[data-wash="light"] .wash__img--2{display:none}
html[data-wash="light"] .wash__veil{background:linear-gradient(180deg,hsl(var(--surface-cream)/0.15) 0%,transparent 28%,transparent 62%,hsl(var(--surface-cream)/0.55) 100%),linear-gradient(90deg,hsl(var(--surface-cream)/0.3) 0%,transparent 40%,transparent 70%,hsl(var(--surface-cream)/0.2) 100%)}
</style></head><body>
<div class="wash" id="w">
  <div class="wash__base"></div>
  <img class="wash__img" src="hero-wash-site.jpg"/>
  <img class="wash__img wash__img--2" src="hero-wash-site.jpg"/>
  <div class="wash__veil"></div>
</div>
</body></html>`;

    const tmp = path.join(ROOT, `_bake-wash-${mode}.html`);
    fs.writeFileSync(tmp, html);
    await page.goto("file://" + tmp, { waitUntil: "networkidle0" });
    await page.waitForSelector(".wash__img");
    await new Promise((r) => setTimeout(r, 300));
    const el = await page.$("#w");
    const outPath = path.join(ROOT, `wash-flat-${mode}.jpg`);
    await el.screenshot({ path: outPath, type: "jpeg", quality: 92 });
    fs.unlinkSync(tmp);
    console.log("baked", outPath);
  }
  await page.close();
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const f of fs.readdirSync(OUT)) {
    if (f.endsWith(".png") && !f.startsWith(".")) {
      fs.unlinkSync(path.join(OUT, f));
    }
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--hide-scrollbars", "--allow-file-access-from-files"],
  });

  await bakeWashes(browser);

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1800, deviceScaleFactor: 2 });

  let n = 0;
  for (const job of JOBS) {
    const url = "file://" + path.join(ROOT, job.file);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    await page.evaluateHandle("document.fonts.ready");

    if (job.wash || job.style) {
      await page.evaluate(
        ({ wash, style }) => {
          const root = document.documentElement;
          if (wash) {
            root.setAttribute("data-wash", wash);
            document.querySelectorAll("[data-wash-btn]").forEach((b) => {
              b.classList.toggle("is-on", b.dataset.washBtn === wash);
            });
          }
          if (style) {
            root.setAttribute("data-style", style);
            document.querySelectorAll("[data-style-btn]").forEach((b) => {
              b.classList.toggle("is-on", b.dataset.styleBtn === style);
            });
          }
        },
        { wash: job.wash || null, style: job.style || null }
      );
    }

    // Flatten wash for pixel-perfect capture (Chrome composites blend modes;
    // then we also ensure export path doesn't need html2canvas).
    await page.evaluate(() => {
      const frame = document.querySelector(".frame");
      const wash = frame && frame.querySelector(".wash");
      if (!wash) return;
      const mode =
        document.documentElement.getAttribute("data-wash") === "light"
          ? "light"
          : "navy";
      wash.innerHTML =
        '<img class="wash-flat" src="wash-flat-' +
        mode +
        '.jpg" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block"/>';
    });

    await new Promise((r) => setTimeout(r, 250));
    await page.waitForSelector(".frame");

    // Hide export chrome if any leaked into frame (it shouldn't)
    const el = await page.$(".frame");
    const box = await el.boundingBox();
    const name = `${job.slug}.png`;
    const filePath = path.join(OUT, name);
    await el.screenshot({ path: filePath, type: "png" });
    n += 1;
    console.log(
      "wrote",
      name,
      box ? Math.round(box.width) + "x" + Math.round(box.height) + " css @" + "2x" : ""
    );
  }

  fs.writeFileSync(
    path.join(OUT, "README.txt"),
    [
      "AgentStatus MCP Index — share PNGs",
      "",
      "Captured with Chrome (matches on-screen navy/light wash).",
      "Re-export: node export-batch.cjs",
      "",
    ].join("\n")
  );

  await browser.close();
  console.log("Done:", n, "PNGs →", OUT);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
