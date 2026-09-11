/**
 * Download PNG of .frame at native size.
 * Swaps blend-mode wash for pre-baked flat wash so the PNG matches the screen
 * (html2canvas cannot render mix-blend-mode).
 */
(function () {
  function injectStyles() {
    if (document.getElementById("export-png-styles")) return;
    var style = document.createElement("style");
    style.id = "export-png-styles";
    style.textContent =
      ".export-bar{display:flex;flex-wrap:wrap;gap:0.4rem;align-items:center;margin-top:0.75rem}" +
      ".export-bar__label{font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;opacity:0.65;margin-right:0.2rem}" +
      ".export-bar button{font-family:inherit;font-size:12px;font-weight:700;padding:0.4rem 0.7rem;border-radius:var(--radius,0.5rem);border:1px solid;cursor:pointer}" +
      ".export-bar button:disabled{opacity:0.55;cursor:wait}" +
      "html[data-wash='light'] .export-bar button{background:hsl(0 0% 100%);border-color:hsl(var(--border,214.3 31.8% 91.4%));color:hsl(var(--brand-navy,214 39% 17%))}" +
      "html:not([data-wash='light']) .export-bar button{background:hsl(var(--brand-navy,214 39% 17%));border-color:hsl(var(--ink-cream,40 24% 97.5%) / 0.25);color:hsl(var(--ink-cream,40 24% 97.5%))}" +
      ".export-bar button.is-primary{background:hsl(var(--logo-orange,24.6 95% 53.1%))!important;border-color:hsl(var(--logo-orange,24.6 95% 53.1%))!important;color:hsl(var(--brand-navy-deep,220 38% 10%))!important}" +
      ".export-bar__hint{flex-basis:100%;font-size:11px;opacity:0.65;margin-top:0.15rem;line-height:1.35}";
    document.head.appendChild(style);
  }

  function slugBase() {
    var t = (document.title || "mcp-index")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    var wash = document.documentElement.getAttribute("data-wash") || "navy";
    var style = document.documentElement.getAttribute("data-style");
    return t + (style ? "-" + style : "") + "-" + wash;
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (src.indexOf("export-assets") !== -1 && window.AS_EXPORT_ASSETS) {
        resolve();
        return;
      }
      if (src.indexOf("html2canvas") !== -1 && window.html2canvas) {
        resolve();
        return;
      }
      var s = document.createElement("script");
      s.src = src;
      s.onload = function () {
        resolve();
      };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function loadDeps() {
    return loadScript("export-assets.js")
      .catch(function () {})
      .then(function () {
        if (window.html2canvas) return;
        return loadScript("html2canvas.min.js").catch(function () {
          return loadScript(
            "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"
          );
        });
      })
      .then(function () {
        if (!window.html2canvas) throw new Error("Could not load html2canvas.");
      });
  }

  function washMode() {
    return document.documentElement.getAttribute("data-wash") === "light"
      ? "light"
      : "navy";
  }

  function flattenWash(frame) {
    var wash = frame.querySelector(".wash");
    if (!wash) return { ready: Promise.resolve(), restore: function () {} };
    var prev = wash.innerHTML;
    var mode = washMode();
    var file = "wash-flat-" + mode + ".jpg";
    var src =
      (window.AS_EXPORT_ASSETS && window.AS_EXPORT_ASSETS[file]) || file;
    wash.innerHTML =
      '<img class="wash-flat" src="' +
      src +
      '" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block"/>';
    var img = wash.querySelector("img");
    var ready = img
      ? new Promise(function (resolve) {
          if (img.complete && img.naturalWidth) {
            resolve();
            return;
          }
          img.onload = resolve;
          img.onerror = resolve;
        })
      : Promise.resolve();
    return {
      ready: ready,
      restore: function () {
        wash.innerHTML = prev;
      },
    };
  }

  function triggerDownload(canvas, filename) {
    return new Promise(function (resolve, reject) {
      if (canvas.toBlob) {
        canvas.toBlob(function (blob) {
          if (!blob) {
            reject(new Error("Could not encode PNG."));
            return;
          }
          var url = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.download = filename;
          a.href = url;
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () {
            URL.revokeObjectURL(url);
          }, 1500);
          resolve();
        }, "image/png");
        return;
      }
      try {
        var a = document.createElement("a");
        a.download = filename;
        a.href = canvas.toDataURL("image/png");
        a.click();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  async function downloadPng() {
    var frame = document.querySelector(".frame");
    if (!frame) return;

    var buttons = document.querySelectorAll(".export-bar button");
    buttons.forEach(function (b) {
      b.disabled = true;
    });

    var flat = flattenWash(frame);
    try {
      await loadDeps();
      await flat.ready;
      await new Promise(function (r) {
        requestAnimationFrame(function () {
          requestAnimationFrame(r);
        });
      });

      var capture = await window.html2canvas(frame, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: null,
        logging: false,
        imageTimeout: 15000,
      });

      await triggerDownload(
        capture,
        slugBase() + "-" + capture.width + "x" + capture.height + ".png"
      );
    } catch (err) {
      var msg = err && err.message ? err.message : String(err);
      if (/insecure|tainted|security/i.test(msg)) {
        msg =
          "Export blocked. Use the PNGs in mcp-index/exports/ (Chrome-captured), or hard-refresh and retry.";
      }
      alert(msg);
    } finally {
      flat.restore();
      buttons.forEach(function (b) {
        b.disabled = false;
      });
    }
  }

  function mountBar() {
    injectStyles();
    if (document.querySelector(".export-bar")) return;

    var host =
      document.querySelector(".chooser") ||
      document.querySelector(".stage") ||
      document.body;

    var bar = document.createElement("div");
    bar.className = "export-bar";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", "Download PNG");
    bar.innerHTML =
      '<span class="export-bar__label">Download</span>' +
      '<button type="button" class="is-primary" data-export="png">Download PNG</button>' +
      '<p class="export-bar__hint">Same look as on screen. Or grab ready files from mcp-index/exports/.</p>';

    if (host.classList && host.classList.contains("chooser")) {
      host.appendChild(bar);
    } else {
      var stage = document.querySelector(".stage") || document.querySelector(".frame");
      bar.style.maxWidth = (stage && getComputedStyle(stage).maxWidth) || "1080px";
      bar.style.margin = "0 auto 1rem";
      bar.style.color = getComputedStyle(document.body).color;
      if (stage && stage.parentNode) {
        stage.parentNode.insertBefore(bar, stage);
      } else {
        document.body.insertBefore(bar, document.body.firstChild);
      }
    }

    bar.addEventListener("click", function (e) {
      if (!e.target.closest("[data-export]")) return;
      downloadPng();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountBar);
  } else {
    mountBar();
  }
})();
