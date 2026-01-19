(function () {
    const params = new URLSearchParams(window.location.search);
    const next = params.get("unlock");

    if (next) {
        // Normal browser fallback
        window.location.replace(next);
    }
})();
