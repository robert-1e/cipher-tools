let urlParams = {};

for (let param of window.location.href.replace(/.*\?/gi, "").split("&")) {
    param = param.split("=");

    if (param.length > 2) {
        console.warn(`URL param '${param[0]}' using invalid format`);
    } else if (param.length === 1 || param.length === 2) {
        urlParams[param[0]] = param[1] || true;
    }
}

const cipherTypes = ["ceasar", "affine", "vigenere", "polybius-square"];

const settings = {
    currentCipher: "",
    set currentCipher(newCipher) {
        if (this.currentCipher === newCipher) return;
        if (!(newCipher in cipherTypes)) return;

        this.currentCipher = newCipher;
    },
    ceasar: {},
};

if (urlParams["cipher"] in cipherTypes) {
    settings.currentCipher = urlParams["cipher"];
} else {
    console.warn("URL param 'cipher' has invalid argument\nDefaulting to Ceasar");
    settings.currentCipher = "ceasar";
}
