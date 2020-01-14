export const PressButton=(val)=>{
    return(
        {
        type:val
        }
    )
}
export const saveData=(data)=>{
    
    return(dispatch)=>{
        dispatch(updateData(data))
      }
}
function updateData(data){
    return {type: "savedata", payload: data }
  }


  export const saveFireBaseData=(data)=>{
    
    return(dispatch)=>{
        dispatch(saveFirebaseData(data))
      }
}
function saveFirebaseData(data){
    return {type: "savefirebasedata", payload: data }
  }


  export const saveFireUid=(data)=>{
    console.warn("Action invoked")
      return {type: "savefirebaseuid", payload: data }
      
}
export const saveFireBasechatData=(data)=>{
  console.warn("Action invoked")
    return {type: "saveFireBasechatData", payload: data }
    
}
