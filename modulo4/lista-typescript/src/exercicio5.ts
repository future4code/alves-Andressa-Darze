const usersArray = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type users = {
    name: string,
    email: string,
    role: string
}

function adminUsers (usersList: users[]) : string[] {
    const adminList = usersList.filter((user) => {
       return (user.role === "admin" ? user.email : false)
    }).map((user) => {
        return user.email
    })

    return adminList
}

console.log(adminUsers(usersArray))