export const ADD_CHARACHTER = 'ADD_CHARACHTER';
export const DEL_CHARACHTER = 'DEL_CHARACHTER';
export function addCharachterById(id){
    const action={
        type:ADD_CHARACHTER,
        id:id
    }
    return action;
}

export function delCharachterByid(id){
    const action={
        type:DEL_CHARACHTER,
        id:id
    }
    return action;
}