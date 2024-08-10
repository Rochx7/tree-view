export const formatArray = (arr)=> {
  let format = {}
  const result = []
  
  arr.forEach((item) => {
  format[item.id] = {...item, children:[] }
  })
  
  arr.forEach((item)=>{
    if(item.parentId){
      const parent = format[item.parentId] 
      
      if(parent){
        parent.children.push(format[item.id])
      }
    return
    }
      result.push(format[item.id])
  })
return result
}