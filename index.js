function placeOrder(item)
{
    console.log("Order placed for: " + item);
    return new Promise((resolve, reject) =>{
        if(!item){
            reject(new Error("No item specified"));
        } else{
            setTimeout(()=>{
                resolve(`Your order ${item}`)
            }, Math.floor(Math.random() * 5000));
        }
    })
}

placeOrder("bugger").then(result=>{
    console.log(result);
    return placeOrder("fries");
}).then(result=>{
    console.log(result);
    return placeOrder("Drink");
}).then(result=>{
    console.log(result);
    return placeOrder("All orders are complate");
}).catch(error=>{
    console.log("An error occured: ", error);
})

Promise.all([placeOrder("salad"), placeOrder("ice creame")])
    .then(result => {
        console.log("Group order ready: ", result);
    })
    .catch (error =>{
        console.error("A group order failed: ", error);
    })

Promise.race([placeOrder("caffee"), placeOrder("tea")])
    .then(firstReady=>{
        console.log("First beverage ready: ", firstReady);
    })
    .catch(error => {
        console.error("A beverage order failed", error);
    })

// async await
async function manageOrder() {
    try {
        let burger = await placeOrder("bugger1");
        console.log(burger);
        let fries = await placeOrder("Fries");
        console.log(fries);
        let drink = await placeOrder("drink1");
        console.log(drink);
        let grounps = await Promise.all([placeOrder("salad"), placeOrder("ice creame")]);
        let first = await Promise.race([placeOrder("Caffee"), placeOrder("Tea")]);
        console.log(grounps);
        console.log(first);
    } catch (error) {
        console.error("An error occured ", error);
    }
}
// console.log("test=====> ", placeOrder("test"));
manageOrder();