
import { writeFile } from 'fs/promises';
import pkg from 'inquirer';
import { Triangle, Circle, Square }  from './lib/shapes.js';

const { prompt } = pkg;

//User input to define shape and text
const questions = [
    {
        type: 'input',
        name: 'logoLETTER',
        message: 'Give me up to 3 letters for your logo?',
    },
    {
        type: 'list',
        name: 'shapeLOGO',
        message: 'What shape do you want for your logo?',
        choices: ['Triangle', 'Circle', 'Square'],
    },
];


function generateSvg(shape, letters) {
    // Define the SVG properties (e.g., width, height, colors, etc.)

    // Create the SVG content based on the selected shape
    let svgContent = '';

      switch (shape.toLowerCase()) {
          case 'triangle':
              return Triangle.generateSvg(letters);
          case 'circle':
              return Circle.generateSvg(letters);
          case 'square':
              return Square.generateSvg(letters);
          default:
              console.error('Invalid shape selected.');
              break;
      }
    return svgContent;
}

// Write SVG content to a file
async function writeSvgToFile(fileName, svgContent) {
    try {
        await writeFile(fileName, svgContent);
        console.log(`Logo file "${fileName}" created successfully!`);
    } catch (err) {
        console.error(`[ERROR] Error writing to file: ${err}`);
    }
}

// Initialize the app
async function init() {
    try {
        const answers = await prompt(questions);

        if (answers.logoLETTER.length > 3) {
            console.log(`Sorry, but I can't accept more than 3 letters. Please try again.`);
            return;
        }

        const shape = answers.shapeLOGO.toLowerCase();
        const letters = answers.logoLETTER;

        // Generate the SVG content
        const svgContent = generateSvg(shape, letters);

        // Write SVG content to a file
        await writeSvgToFile('logo.svg', svgContent);
    } catch (err) {
        console.error(`[ERROR] Error prompting user: ${err}`);
    }
}

// Function call to initialize app
init();
