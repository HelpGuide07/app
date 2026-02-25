function getQueryParams() {
    return new URLSearchParams(window.location.search).toString();
}

function openApp() {
    const query = getQueryParams();

    // Deep link if app is already installed
    let deeplink = "dhamakaentertainment://open";
    if (query) deeplink += "?" + query;

    // Play Store fallback
    let playStore = "https://www.mobtrk.link/view.php?id=5543673&pub=880550";

    if (query) {
        const referrer = encodeURIComponent(query); // encode all params
        playStore += `&referrer=${referrer}`;
    }

    // Try deep link first
    window.location = deeplink;

    // Fallback to Play Store
    setTimeout(function () {
        window.location = playStore;
    }, 1200);
}
