// Links to the storefront root (logo, footer) open it in the docs' language.
// logo.href is global in docs.json, so this can't be set per language there.
// Docs and storefront share locale codes.
(function () {
  function localize(event) {
    var link = event.target.closest && event.target.closest('a[href^="https://moonup.gg"]');
    if (!link) return;
    var url = new URL(link.href);
    var lang = document.documentElement.lang;
    if (url.pathname !== "/" || !lang) return;
    url.pathname = "/" + lang;
    link.href = url.toString();
  }
  // Capture phase: href is rewritten before the browser follows it.
  document.addEventListener("click", localize, true);
  document.addEventListener("auxclick", localize, true);
})();
