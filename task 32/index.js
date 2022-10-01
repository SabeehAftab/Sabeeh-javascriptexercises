const current_users=["admin","anwar","david","eric","emily"]
const new_users=["messi","salah","ali","eric","emily"]

function findCommonElement(current_users, new_users) {
	
	
	for(let i = 0; i < current_users.length; i++) {
		
		// Loop for array2
		for(let j = 0; j < new_users.length; j++) {
			
			if(current_users[i] === new_users[j]) {
			
			
				console.log("Already used, enter a new username.")
			}
        
		}
	}
	
	
	
}

document.write(findCommonElement(current_users, new_users))
			
