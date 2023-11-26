import { Hechizos } from "./interfaces/schema";

export interface AppState {
    readonly hechizos: Hechizos[]
    readonly favHec: Hechizos[]
}