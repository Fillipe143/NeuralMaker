import { NeuralNetwork } from "../src/index";

const network = new NeuralNetwork({
    inputLayersNumber: 1,
    hiddenLayersNumber: 0,
    outputLayersNumber: 2
});

console.log(network);