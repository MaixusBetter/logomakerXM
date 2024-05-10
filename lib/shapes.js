const svgWidth = 200;
const svgHeight = 200;
const fillColor = '#FF0000'; 

//triangle SVG code
export class Triangle {
    static generateSvg(letters) {
        let svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
            <polygon points="100,10 190,190 10,190" fill="${fillColor}" />
            <!-- Add any other SVG elements you want -->
            <text x="45" y="150" font-family="Palatino" font-size="60" fill="white">${letters}</text>
        </svg>
        `;
        return svgContent;
    }
}

//Circle SVG Code
export class Circle {
    static generateSvg(letters) {
        let svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
            <circle cx="100" cy="100" r="90" fill="${fillColor}" />
            <!-- Add any other SVG elements you want -->
            <text x="10" y="140" font-family="Arial" font-size="100" fill="white">${letters}</text>
        </svg>
        `;
        return svgContent;
    }
}

//Square SVG Code
export class Square {
    static generateSvg(letters) {
        let svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
            <rect x="10" y="10" width="180" height="180" fill="${fillColor}" />
            <!-- Add any other SVG elements you want -->
            <text x="30" y="120" font-family="Verdana" font-size="70" fill="white">${letters}</text>
        </svg>
        `;
        return svgContent;
    }
}

//Class exporter
export default { Triangle, Circle, Square };
