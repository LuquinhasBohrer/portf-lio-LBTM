const tsParticles = require("tsparticles-engine");

tsParticles
    .loadJSON("tsparticles", "presets/default.json")
    .then(container => {
        console.log("callback - tsparticles config loaded");
    })
    .catch(error => {
        console.error(error);
    });

    // eslint-disable-next-line no-undef
    export default testefooter;