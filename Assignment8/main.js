// 1.
const func = async () => {
    console.log("Printing before")
    setTimeout(() => {
        console.log("Printing after")
    }, 3000)
}
func()

//2.
const fetchData = () => {
    const data = fetch("https://reqres.in/api/users")
    data.then(response => {
        return response.json()
    }).then(response => {
        console.log(response)
    });
}
fetchData()

// 3.
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

// when promise resolves, it prints := Response in then block:  Test Resolve
// when promise rejects, it prints := Error caught in testAsyncFunction:  Test Reject, Response in then block:  undefined 


// 4. 
const testAsyncFunction1 = () => {
    return Promise.reject('Test static reject');
};
testAsyncFunction1()
    .then((res) => {
        console.log('Response in then block', res);
    })
    .catch((err) => console.log('Error in catch block', err));

//output := Error in catch block Test static reject

// 5.
const testAsyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction', err);
        throw new Error('Forced error');
    });
};
testAsyncFunction2()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

// output := Error in catch block:  Error: Forced error

// 6.
const delayedResolve = async () => {
    return new Promise(async (resolve, reject) => {
        await fetch("https://reqres.in/api/users").then(data => {
            console.log("Data fetched")
            setTimeout(() => {
                resolve("Resolved")
            }, 2000)
            return data.json
        }).catch(err => {
            reject("Error occured")
        })
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}
delayedResolve()
