import { wineData } from "./data"

 type wineList = {
    'Alcohol': number,
    "Malic Acid":  number,
    "Ash": number,
    "Alcalinity of ash": number,
    "Magnesium": number,
    "Total phenols": number,
    "Flavanoids": number,
    "Nonflavanoid phenols":  number,
    "Proanthocyanins":  number,
    "Color intensity": number,
    "Hue": number,
    "OD280/OD315 of diluted wines": number,
    "Unknown": number
}

const getList = (filterValue:number , key:string)=>{
    const alcholData = [...wineData]
    const flavanoidsData = alcholData.filter((list: any) =>{
        return list["Alcohol"] === filterValue   
    })
    const flavanoidsCount = flavanoidsData.map((item:any)=>{
        return item[key]
    })
    return flavanoidsCount

}
// Mode Method
function mode(array:any) {
    // create an object to store the frequency of each value
    let frequency:any = {};
    // loop through the array and increment the frequency of each value
    for (let i = 0; i < array.length; i++) {
      var value = array[i];
      frequency[value] = (frequency[value] || 0) + 1;
    }
    // create a variable to store the mode and its frequency
    var mode = null;
    var maxFrequency = 0;
    // loop through the frequency object and find the value with the highest frequency
    for (let value in frequency) {
      var currentFrequency = frequency[value];
      if (currentFrequency > maxFrequency) {
        mode = value;
        maxFrequency = currentFrequency;
      }
    }
    
    return Number(mode);
  }
  
//  Median Method
const median = (arr:any) => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b); 
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };





//  Get Mean , Median Value
export const getValuses = (windeId:number , key:string)=>{
    const flavanoidsCount = getList(windeId , key)
     
    const sumValue = flavanoidsCount.reduce((acc , currentVal)=>{
        return Number(acc) + Number(currentVal)
    }  , 0)
    const meanData = sumValue / flavanoidsCount.length
    const medianData =  median(flavanoidsCount) 
    const modeData = mode(flavanoidsCount)

     const meanValue  = meanData.toFixed(2)
     const medianValue = medianData.toFixed(2)
     const modeValue = modeData.toFixed(2)

    return {meanValue , medianValue , modeValue}

}


function findWineClasses (array:any) {
    // create an empty array to store the unique values
    let unique = [];
    // loop through the original array
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      if (unique.indexOf (value) === -1) {
        unique.push (value);
      }
    }
    // return the unique array
    return unique;
  }

// Get Wine classes
export const getClasess  = ()=>{
    const alcholData = [...wineData]
    const flavanoidsData = alcholData.map((list: any) =>{
        return list["Alcohol"]    
    })
   
  const alcholClasses = findWineClasses(flavanoidsData)

  const tableData = alcholClasses.map((item:number)=> getValuses(item , "Flavanoids"))
  return {tableData , alcholClasses}
}

// Get Gamma Method

export const GammaValue = ()=>{
    const alcholData = [...wineData]
    alcholData.map((list:any)=>{
        list.gamma = (list.Ash * list.Hue) / list.Magnesium
        return list
    })
    
    const flavanoidsData = alcholData.map((list: any) =>{
        return list["Alcohol"]    
    })
   
  const alcholClasses = findWineClasses(flavanoidsData)

  const gammaTableData = alcholClasses.map((item:number)=> getValuses(item , "gamma"))
  return {gammaTableData }
 

}

