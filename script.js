let urlParams = {};

for (let param of window.location.href.replace(/.*\?/gi, "").split("&")) {
    param = param.split("=");

    if (param.length > 2) {
        console.warn(`URL param '${param[0]}' using invalid format`);
    } else if (param.length === 1 || param.length === 2) {
        urlParams[param[0]] = param[1] || true;
    }
}

const cipherTypeSelect = document.querySelector('[name="cipher-type"]');

const cipherTypes = ["ceasar", "affine", "vigenere", "polybius_square"];
/*{
    ceasar: "Ceasar",
    affine: "Affine",
    vigenere: "Vigenere",
    polybius_square: "Polybius Square",
};//*/

const settings = {
    cCipher: "",
    set currentCipher(newCipher) {
        if (this.currentCipher === newCipher) return;
        // if (!(newCipher in cipherTypes)) return; // For object
        if (!cipherTypes.includes(newCipher)) return; // For array

        cipherTypeSelect.children[cipherTypes.indexOf(newCipher)].setAttribute("selected", "");

        this.cCipher = newCipher;
    },
    ceasar: {},
    affine: {},
    vigenere: {},
    polybius_square: {},
};

// if (urlParams["cipher"] in cipherTypes) {
if (cipherTypes.includes(urlParams["cipher"])) {
    settings.currentCipher = urlParams["cipher"];
} else {
    console.warn("URL param 'cipher' has invalid argument\nDefaulting to ceasar");
    settings.currentCipher = "ceasar";
}
