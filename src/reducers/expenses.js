
const expenseReducerDefault = [];

export default  (state = expenseReducerDefault, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((i) => (i.id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((i)=> {
                if(i.id === action.id){
                    return {
                        ...i,
                        ...action.updates
                    }
                }else {
                    return i;
                }
            })
        default:
            return state;
    }

};