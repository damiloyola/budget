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
const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate = () =>({
    type:'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (date) => ({
    type:'SET_START_DATE',
    date
});

//SET_END_DATE
const setEndDate = (date) => ({
    type:'SET_END_DATE',
    date
});



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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                 sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.date
            };
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
const rentTwo = store.dispatch(addExpense({description: 'coffe', amount: 200}));
store.dispatch(removeExpense(rentOne.expense.id));
store.dispatch(editExpense(rentTwo.expense.id,{amount:500, description:'cafe'}));

store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(1000));
store.dispatch(setEndDate(1200));

