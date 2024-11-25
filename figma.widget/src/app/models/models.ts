export interface Violation {
    layerName: string;
    type: '5001' | '5002';
    layerId: string;
}

export interface GuidanceLink {
    url: string;
    name: string;
}

export interface Guidance {
    key: string,
    links: GuidanceLink[];
}

export const constants = {
    guidanceUrl: `https://guidance.clarity.design/`,
}