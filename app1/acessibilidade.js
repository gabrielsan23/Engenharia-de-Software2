import { DaltonizerTypes, SVGDaltonizer } from "./SVGDaltonizer.mjs";

const seletor = document.getElementById("tipoDaltonismo");
const chave = "tipoDaltonismoOrcamento";

const tipos = {
    normal: null,
    protanopia: DaltonizerTypes.PROTANOMALY,
    deuteranopia: DaltonizerTypes.DEUTERANOMALY,
    tritanopia: DaltonizerTypes.TRITANOMALY
};

let filtroAtual = null;

function aplicarFiltro(tipo) {
    // Remove o filtro anterior
    if (filtroAtual) {
        filtroAtual.svg.remove();
        filtroAtual = null;
    }

    // Restaura as cores originais
    document.documentElement.style.filter = "";

    if (tipos[tipo] === null || tipos[tipo] === undefined) {
        return;
    }

    // Simula o daltonismo usando o modelo de Machado
    const resultado = SVGDaltonizer.makeCVDSimulatorFilter(
        tipos[tipo],
        1,
        true
    );

    const id = "filtroDaltonismoAtivo";
    resultado.filter.setAttribute("id", id);

    resultado.svg.setAttribute("aria-hidden", "true");
    resultado.svg.style.position = "absolute";
    resultado.svg.style.width = "0";
    resultado.svg.style.height = "0";
    resultado.svg.style.overflow = "hidden";

    document.body.appendChild(resultado.svg);

    document.documentElement.style.filter = `url(#${id})`;

    filtroAtual = resultado;
}

if (seletor) {
    const salvo = localStorage.getItem(chave);

    if (salvo && Object.prototype.hasOwnProperty.call(tipos, salvo)) {
        seletor.value = salvo;
    }

    seletor.addEventListener("change", () => {
        localStorage.setItem(chave, seletor.value);
        aplicarFiltro(seletor.value);
    });

    aplicarFiltro(seletor.value);
}