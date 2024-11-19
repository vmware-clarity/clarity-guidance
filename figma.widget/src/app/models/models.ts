export interface Violation {
    layerName: string;
    type: '5001' | '5002';
    layerId: string;
    guidanceUrl: `https://guidance.clarity.design/`;
}