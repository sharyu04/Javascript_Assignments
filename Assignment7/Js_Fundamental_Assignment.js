let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
}, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
}];

function mapBy(users, key1) {
    let resObj = {}
    users.map((obj) => {
        resObj[obj[key1]] = obj
    })
    return resObj
}
console.log("resObj: ", mapBy(users, "first_name"))

users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender": "Male",
}, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    "gender": "Female"
}, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    "gender": "Male"
}, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    "gender": "Female"
}];

function groupBy(users, key) {
    let resObj = {}
    let keyArr = []
    users.forEach((user) => {
        if (keyArr.includes(user[key])) {
            resObj[user[key]].push(user)
        }
        else {
            resObj[user[key]] = []
            resObj[user[key]].push(user)
            keyArr.push(user[key])
        }
    });
    return resObj;
}
console.log("groupBy gender", groupBy(users, "gender"));

function sort(users, key1, order) {
    if (key1 !== "id" && key1 !== "first_name" && key1 != "gender" && key1 != "date_of_birth" && key1 != "email") {
        return "Invalid input"
    }
    switch (key1) {
        case "id":
            switch (order) {
                case "asc":
                    users.sort((a, b) => {
                        return a[key1] - b[key1]
                    })
                    return users;
                case "desc":
                    users.sort((a, b) => b[key1] - a[key1])
                    return users
                default:
                    return ("Invalid input")
            }

        case "date_of_birth":
            switch (order) {
                case "asc":
                    users.sort((a, b) => {
                        return new Date(a[key1]) - new Date(b[key1])
                    })
                    return users
                case "desc":
                    users.sort((a, b) => new Date(b[key1]) - new Date(a[key1]))
                    return users
                default:
                    return ("Invalid input")
            }

        default:
            switch (order) {
                case "asc":
                    users.sort((a, b) => {
                        let x = a[key1].toLowerCase();
                        let y = b[key1].toLowerCase();
                        if (x > y) { return 1; }
                        if (x < y) { return -1; }
                        return 0;
                    })
                    return users
                case "desc":
                    users.sort((a, b) => {
                        let x = a[key1].toLowerCase();
                        let y = b[key1].toLowerCase();
                        if (x < y) { return 1; }
                        if (x > y) { return -1; }
                        return 0;
                    })
                    return users
                default:
                    return ("Invalid input")
            }

    }
    return users
}
console.log("sort by id: ", sort(users, "id", "desc"))
console.log("sort by first_name: ", sort(users, "first_name", "asc"))
console.log("sort by x: ", sort(users, "x", "asc"))

let userNames = [{
    "id": 1,
    "first_name": "Nicki",
}, {
    "id": 2,
    "first_name": "Raychel",
}, {
    "id": 3,
    "first_name": "Demetris",
}, {
    "id": 4,
    "first_name": "Amata",
}]
let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
}, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
}, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
}, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
}]

function mergeById(userNames, userEmails){
    userNames.sort((a,b)=>a.id-b.id)
    userEmails.sort((a,b)=>a.id-b.id)
    let resArr = []
    let i=0,j=0;
    while(i<userNames.length && j<userEmails.length){
        if(userNames[i].id === userEmails[j].id){
            let obj = {}
            obj.id = userNames[i].id
            obj.first_name = userNames[i].first_name
            obj.email = userEmails[j].email
            resArr.push(obj)
            i++;
            j++;
        }
        else if(userNames[i].id<userEmails[j].id){
            i++;
        }
        else{
            j++;
        }
    }
    return resArr
 }
console.log("mergeById: ",mergeById(userNames,userEmails))

let stringArr = ["one","two","one","three","two","four"]
function filterArray(stringArr){
    let resArr = []
    stringArr.forEach((str)=>{
        if (!resArr.includes(str)){
           resArr.push(str)
        }
    })
    return resArr
}
console.log("filterArray: ",filterArray(stringArr))
