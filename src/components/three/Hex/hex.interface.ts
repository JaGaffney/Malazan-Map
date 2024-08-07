export interface IPoint {
    x: number;
    y: number;
    c?: number;
}
interface ITerrain {
    [key: string]: IPoint[];
}
export interface IWorld {
    [key: string]: ITerrain;
}
