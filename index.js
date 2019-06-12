var questions = [
    '¿Hay algo que en realidad se pueda experimentar objetivamente?',
    '¿Tenemos libre albedrío?',
    '¿Por qué hay algo en vez de nada?',
    '¿Te tienes que quejar?',
    '¿Hoy por fin vas a ser mejor?',
];

window.onload = function () {
    document.getElementById('quote').textContent = questions[ Math.floor(Math.random() * questions.length) ];
};