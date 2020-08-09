export interface Search {
    text: string
}

// L'objet sera augmenté selon les parametres (tags, prix)

export const SET_SEARCH = "SET_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

interface SetSearchAction {
    type: typeof SET_SEARCH,
    payload: Search
}

interface ClearSearchAction {
    type: typeof CLEAR_SEARCH
}

export interface SearchState {
    text: string
}

export type SearchActionsTypes = SetSearchAction | ClearSearchAction