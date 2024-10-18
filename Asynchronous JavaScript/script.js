
///syncronous js
///JS run top to bottom like 1 by 1 (single thread)
console.log(" I ");

console.log(" eat ");

console.log(" ice cream ");

console.log(" with a ");

console.log(" spoon ");

///Asyncronous js
// it work using setTimeout 

console.log(" I ");

console.log(" eat ");

setTimeout(()=>{console.log(" ice cream ");
},4000)

console.log(" with a ");

console.log(" spoon ");


///callback function
///callback is calling a function inside another function as an argument is callback


///This example of regular function
function one() {
  console.log(" step 1 ");
}

function two() {
  console.log(" step 2 ");
}


two();
one();


/// callback simple example

function one(call_two) {
    call_two();
  console.log(" step 1 complete. please call step 2 ");


}


function two() {
  console.log(" step 2 ");
}
one(two);

///callback example of ice-cream business using arrow function
///Forming relationship within a function using callback
///Storoom = backend, kitchen = frontend (example)

let stocks = {
  Fruits: ["strawberry", "grapes", "banaba", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => { 
   
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();

  }, 2000);
};

let production = () => { 

  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("the machine was started");
         
          setTimeout(() => {
          console.log(`ice-cream was placed on ${stocks.holder[0]}`);
            
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppins`);
              
              setTimeout(() => {
                console.log("Serve the ice cream");


              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);


};

order(0, production);

///look at the hell, see? its callback Hell
///callback make relationship to parent,childeren, grantchildern, gran gran children, gran gran gran children ....bala bla bal like this
/// To avoid this callback hell, we have promises! so,lets jump to promises exploration

///Promises are so neat and clean struacture

let stocks = {
  Fruits: ["strawberry", "grapes", "banaba", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
  
    if (is_shop_open) {
       
      setTimeout(() => {
        resolve(work())
      }, time);
     
    } else {
      reject(console.log("our shop is close"))
    }


  });
};


order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

  ///Promises chaining

  .then(() => {
  
    return order(0, () =>
      console.log("Production has started"));
  })
  
  
  .then(() => {
    return order(2000, () =>
      console.log("the fruit was chopped"));
  })
  
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
      
    });
    
  })

  .then(() => {
    return order(1000, () =>
      console.log("Start the machine"));
  })

  .then(() => {
    return order(2000, () => {
      console.log(` ice cream placed on ${stocks.holder[0]}`);
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} was selected`);
    });
  })

  .then(() => {
    return order(1000, () =>
      console.log("ice cream was served"));
  })


  ///Error Handling
  .catch(() => {
    console.log("Customer left");
  })

  ///Finally handelar

  .finally(() => {
    console.log("day ended, shop is closed");
  });

  

///Asyns,Await
let stocks = {
  Fruits: ["strawberry", "grapes", "banaba", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;


let order = () => {
  return new Promise((resolve, reject) => {
    
    if(true) { 
      resolve()
    }
    else {
      reject()
    }
  } )
}

order()
  //when resolve this will work
  .then()
  .then()
  .then()
  ///when rejected this will work
  .catch()
  ///this will work anyway
  .finally()
 


async function order() {
  try {
    await abc;

   }
  catch (error) {
    console.log("abc does not exist", error)
  }
  
  finally {
    console.log("runs code anyway")
  }
  
}

order()
  .then(() => {
    console.log("jddsdhsjdhsjd")
  });



///example
  
let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which toppings would you like? "));
      
    }, 3000);
  });
};

async function Kitchen() {
  console.log(" A ")
  console.log(" B ")
  console.log(" C ")


  await toppings_choice()
  console.log(" D ")
  console.log(" E ")
  
}

Kitchen()
console.log("doing the dishes ")
console.log("cleaning the tables ")
console.log("taking other orders ")



 ///example another of ice cream


function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms)
    }
    else {
      reject(console, log("shop is closed"));
    }
  });
}


async function Kitchen() {
  try { 
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`)

    await time(0)
    console.log("start the production")

    await time(2000)
    console.log("cut the food")


    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)


    await time(1000)
    console.log("start the machine")

    await time(2000)
    console.log(`${stocks.toppings[0]} was selected`)

    await time(3000)
    console.log(`${stocks.toppings[0]} was selected`)
    

     await time(2000)
     console.log("serve the ice cream")




  }
  catch (error) {
    console.log("customer left",error)
   }
  finally {
    console.log("day ended, shop is closed")
   }
  
}

Kitchen();