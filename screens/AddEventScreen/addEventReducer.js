export const initialState = {
    title: '',
    description: '',
    image: '',
    location: ''
}

export const addEventReducer = (state, action) => {
    switch (action.type){
        case "ADD_TITLE":
            return {...state, title: action.payload};
        case "ADD_DESCRIPTION":
            return {...state, description: action.payload};
        case "ADD_IMAGE":
            return {...state, image: action.payload};
        case "SET_LOCATION":
            return {...state, location: action.payload};
        case "CLEAN_REDUCER":
            return initialState;
        default: 
            return state;
    };
}

export const addTitle = (title) => ({
    type: "ADD_TITLE",
    payload: title,
})
export const addDescription = (description) => ({
    type: "ADD_DESCRIPTION",
    payload: description,
})
export const addImage = (image) => ({
    type: "ADD_IMAGE",
    payload: image,
})
export const setLocation = (location) => ({
    type: "SET_LOCATION",
    payload: location,
})
export const cleanReducer = () => ({
    type: "CLEAN_REDUCER",
})
