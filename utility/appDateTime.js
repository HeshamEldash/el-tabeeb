const toDate = (dateTimeObj)=>{
    return dateTimeObj.toISOString().split('T')[0]
}


export default {toDate}