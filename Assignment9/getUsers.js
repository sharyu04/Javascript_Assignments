let users;
const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users")
    let responseBody = await response.json()
    users = responseBody.users
    renderTable(users)
}

function sortByName(){
    console.log("In sortByName")
   users.sort((a,b)=>{
        if(a.firstName>b.firstName)
           return 1;
       if(a.firstName<b.firstName)
           return -1;
       return 0;
   }) 
    renderTable(users)
}

function search(){
    let str = document.getElementById("filter").value
    let filteredUsers = []
    users.map(user => {
        let vals = Object.values(user)
        if(vals.includes(str)){
            filteredUsers.push(user)
        }
    })
    renderTable(filteredUsers)
}

function getAllUsers(){
    renderTable(users)
}

const renderTable = (users) => {

    document.getElementById("table").innerHTML = ""
    var newTable = document.createElement("Table");
    var tableHead = newTable.createTHead();
    var headRow = tableHead.insertRow();
    headRow.id = "head"

    var newHeadName = headRow.insertCell();
    var nameHeading = document.createTextNode("Name")
    newHeadName.appendChild(nameHeading);

    var newHeadEmail = headRow.insertCell();
    var emailHeading = document.createTextNode("Email")
    newHeadEmail.appendChild(emailHeading);

    var newHeadUsername = headRow.insertCell();
    var usernameHeading = document.createTextNode("Username")
    newHeadUsername.appendChild(usernameHeading);

    var tableRef = newTable.createTBody();

    users.forEach((user, i) => {
        if (i > 11)
            return
        var newRow = tableRef.insertRow();

        var newCellName = newRow.insertCell()
        var name = document.createTextNode(`${user.firstName} ${user.lastName}`)
        newCellName.appendChild(name)

        var newCellEmail = newRow.insertCell()
        var email = document.createTextNode(`${user.email}`)
        newCellEmail.appendChild(email)

        var newCellUsername = newRow.insertCell()
        var username = document.createTextNode(`${user.username}`)
        newCellUsername.appendChild(username)
    })

    document.getElementById("table").append(newTable)


}
