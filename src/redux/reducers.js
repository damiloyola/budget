import {createStore, combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';


//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
    ) => ({
        type:'ADD_EXPENSE',
        expense: {
            id:uuidv4(),
            description,
            note,
            amount,
            createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE



//expense reducer

const expenseReducerDefault = [];

const expenseReducer = (state = expenseReducerDefault, action) => {
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

//filter reducer

const filterReducerDefault = {
    text : '',
    sortBy:'date',
    startDate : undefined,
    endDate : undefined
}

const filterReducer = (state = filterReducerDefault, action) =>{
    switch(action.type){
        default:
            return state;
    }
};

//store creation

const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer
        })
    );



store.subscribe(()=> {console.log(store.getState())});
const rentOne = store.dispatch(addExpense({description: 'rent', amount: 100}));
store.dispatch(removeExpense({id : rentOne.expense.id}))

