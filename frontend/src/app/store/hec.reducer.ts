import { UPDATE, createReducer, on } from "@ngrx/store"
import { addFavHec, delFavHec } from "./hec.action"
import { Hechizos } from "../interfaces/schema"

const SavedHecLocalStorage = localStorage.getItem('favHec') //

const SavedHecInitstate : Hechizos[] = SavedHecLocalStorage ? JSON.parse(SavedHecLocalStorage) : []

export const SavedHecReducer = createReducer(
    SavedHecInitstate,
    on(addFavHec, (state, { hec }) => {
        const updatedState = [...state, hec] //aqui guardamos al estado anterior y al nuevo
        localStorage.setItem('favHec', JSON.stringify(updatedState))
        
        return updatedState
    }),
    
    on(delFavHec, (state, { _id }) => {
        const del = state.filter(del => del._id !== _id)
        
        localStorage.setItem('favHec',JSON.stringify(del))

        return del
    })
)