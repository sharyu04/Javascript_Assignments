const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users")
    let responseBody = await response.json()

    responseBody.users.forEach((user, i) => {
        if(i>11)
            break;
        document.getElementById("userTable").append(
            `<tr>
                <td>${user.firstName} ${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
            </tr>`
        )
    })      

}



