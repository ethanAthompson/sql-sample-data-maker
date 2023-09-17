// Author: Ethan Thompson
// Description: A shortcut for making multiple inserts

async function fetchNames(url, arr, amount) {
  const res = await fetch(url);
  const data = await res.json();
  
  for (let i = 0; i < amount; i++) {
    let reqNames = data.data[i]
    
    arr.push(reqNames)
  }
  
  return arr
  
}

function rndValFromArr(arr) {
    return Math.floor(Math.random() * arr.length)
}


class StringMaker {

  // each creates a random list of the given args
  constructor() {
    this.amount = 0;
    this.order = [];
  }
  
  async first_name_female(amount) {
    let arr = [];
    const names = await fetchNames("https://www.randomlists.com/data/names-female.json", arr, amount)
    
    return names;
          
  }

 async first_name_male(amount) {
    let arr = [];
    const names = await fetchNames("https://www.randomlists.com/data/names-male.json", arr, amount)
    
    return names;
  }

  async last_name(amount) {
    let arr = [];
    const names = await fetchNames("https://www.randomlists.com/data/names-surnames.json", arr, amount)

    return names;
  }

  // age appleis for the rest of the methods
  age(amount, order) {
    function randItem() {
      return order[rndValFromArr(order)]  
    }
    
    const arr = Array.from({length: amount}, randItem).reverse();

    return arr    
  }

  // gender(amount, order) {
  //   function randItem() {
  //     return order[rndValFromArr(order)]  
  //   }
    
  //   const arr = Array.from({length: amount}, randItem).reverse();
    
  //   return arr 
    
  // }


  class_year(amount, order) {
    function randItem() {
      return order[rndValFromArr(order)]  
    }
    
    const arr = Array.from({length: amount}, randItem).reverse();
    
    return arr 
    
  }

  
  shop(amount, order) {
    function randItem() {
      return order[rndValFromArr(order)]  
    }
    
    const arr = Array.from({length: amount}, randItem).reverse();
    
    return arr 

    
  }
  
  sport1(amount, order) {
    function randItem() {
      return order[rndValFromArr(order)]  
    }
    
    const arr = Array.from({length: amount}, randItem).reverse();
    
    return arr 
    
  }


  sport2(amount, order) {
    function randItem() {
      return order[rndValFromArr(order)]  
    }
    
    const arr = Array.from({length: amount}, randItem).reverse();
    
    return arr 
    
  }


  sport3(amount, order) {
    function randItem() {
      return order[rndValFromArr(order)]  
    }
    
    const arr = Array.from({length: amount}, randItem).reverse();
    
    return arr 
    
  }
  
}


const smr = new StringMaker()

async function CreateInsertData() {
  
  var female_names = await smr.first_name_female(100);
  var male_names = await smr.first_name_male(100)
  var last_names = await smr.last_name(100)
  var ages = await smr.age(100, ["13", "14", "15", "16", "17" ,"18"]) //fix
  // var genders = await smr.gender(100, ["male", "female"])
  var class_years = await smr.class_year(100, ["Freshman", "Sophomore", "Junior", "Senior"])
  var shops = await smr.shop(100, ["AC", "AU", "CA", "CU", "IT", "PH", "EL", "EM", "HC", "SA"])
  var sport1 = await smr.sport1(100, ["Football", "Volleyball", "XC", "Basketball", "Baseball", "Softball", "Track"])
  var sport2 = await smr.sport2(100, ["Volleyball", "XC", "Football", "Baseball", "Track", "Softball", "Basketball"])
  var sport3 = await smr.sport3(100, ["Softball", "Football", "Track", "XC", "Basketball", "Baseball", "Volleyball"])

  // prints out a student in f -> m -> f -> m
  for (let i = 0; i < 100; i++) {
    let female_student = `("${female_names[i]}", "${last_names[i]}", "${ages[i]}", "female", "${class_years[i]}", "${shops[i]}", "${sport1[i]}", "${sport2[i]}", "${sport3[i]}"),`   
    let male_student = `("${male_names[i]}", "${last_names[i]}", "${ages[i]}", "male", "${class_years[i]}", "${shops[i]}", "${sport1[i]}", "${sport2[i]}", "${sport3[i]}"),`   

    if (i === 99) {
      console.log(`("${male_names[i]}", "${last_names[i]}", "${ages[i]}", "male", "${class_years[i]}", "${shops[i]}", "${sport1[i]}", "${sport2[i]}", "${sport3[i]}");`)      
    } else console.log(i % 2 === 0 ? female_student : male_student)      
    
  }

}


CreateInsertData()

