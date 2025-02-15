// script.js
const data = {
    sections: [
        {
            title: "¿Qué es la libertad de trabajo?",
            content: "Según el Artículo 5 de la Constitución Mexicana, la libertad de trabajo es el derecho de toda persona a dedicarse a la profesión, industria, comercio o trabajo que le acomode, siendo lícitos.",
            imageId: 1
        },
        {
            title: "¿Qué profesiones y trabajos puedo elegir?",
            content: "En México puedes elegir entre una amplia gama de profesiones: médicos, abogados, ingenieros, profesores, artistas, empresarios, y muchas más opciones.",
            imageId: 2
        },
        {
            title: "Limitaciones a la libertad de trabajo",
            content: "Existen limitaciones legales como: necesidad de títulos profesionales, restricciones por edad, certificaciones específicas, y consideraciones de seguridad nacional.",
            imageId: 3
        },
        {
            title: "¿Por qué existen estas limitaciones?",
            content: "Las limitaciones existen para proteger a la sociedad, garantizar la calidad de los servicios profesionales y salvaguardar los derechos de los trabajadores.",
            imageId: 4
        },
        {
            title: "Reflexionemos",
            content: "¿Cómo afectan estas limitaciones a tu elección profesional? ¿Son necesarias todas las restricciones actuales?",
            imageId: 5
        }
    ]
};

function createInfografia() {
    const container = d3.select("#infografia");

    const sections = container.selectAll(".section")
        .data(data.sections)
        .enter()
        .append("div")
        .attr("class", "section");

    sections.append("h2")
        .attr("class", "title")
        .text(d => d.title);

    const content = sections.append("div")
        .attr("class", "content");

    content.append("div")
        .attr("class", "image-container")
        .append("img")
        .attr("src", d => `imagen${d.imageId}.jpg`)
        .attr("alt", d => d.title);

    content.append("div")
        .attr("class", "text-content")
        .text(d => d.content);
}

// Iniciar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", createInfografia);