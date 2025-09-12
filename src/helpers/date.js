import { parse, formatISO }  from 'date-fns'

export function convertToISO(strDate){   
    const newDate= parse(strDate, 'dd/MM/yyyy', new Date()) 
    // console.log(formatISO(newDate))
    // console.log(newDate)
    
 return formatISO(newDate)

}