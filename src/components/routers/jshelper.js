

export const ReducerFunction=(state,action)=>{

    switch(action.type){
        case "INCREASE_AGE":
            return {...state,age:state.age+1}
        case "DECRESE_AGE":
            return {...state,age:state.age>0 ? state.age-1:0}
    }

}
export const Decreament={
   type:"DECRESE_AGE"
}

const INCREASE="INCREASE_AGE"
 export const Increament={
    type:"INCREASE_AGE"
}
export const initializations={
    name:"vamshi",
    age:0
}

export const Dispaches=()=>{
    dipatch=({
        type:"INCREASE_AGE",
        payload:1
    })
}


