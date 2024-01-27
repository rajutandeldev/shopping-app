// import React,{createContext,useReducer,useContext} from 'react'

// const UserContext = createContext('');

// const initialState = {
//     username:"raju",
//     count:0
// }

// const reducer = (state,action)=>{
//     console.log(action,state)
//     switch(action.type){
//         case 'increase_count': return {...state,count:action.value.count}
//         case 'change_name': return {...state,username:action.value.username};
//         default:return state;
//     }
// };

// const UserProvider = ({children})=>{
//     const [state,dispatch] = useReducer(reducer,initialState);
//     return <UserContext.Provider value = {{state,dispatch}}>
//         {children}
//     </UserContext.Provider>
// }

// const useUserContext = () =>{
//     const context = useContext(UserContext);
//     if(!context){
//         throw new Error('context failed');
        
//     }
//     return context;
// }

// export {UserProvider,useUserContext} 