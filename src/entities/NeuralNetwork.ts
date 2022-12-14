import NeuralNetworkSettings from "./NeuralNetworkSettings";

class NeuralNetwork {
    settings: NeuralNetworkSettings;
    weights: number[][];

    constructor(settings: NeuralNetworkSettings, weights?: number[][]) {
        this.settings = settings;
        this.weights = weights || [];
    }
}

export default NeuralNetwork;