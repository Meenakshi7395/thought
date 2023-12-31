var usersArray = [];

        function saveUser() {
            // Accessing input values
            var userInput = document.getElementById("Input").value;
            

            // Creating a user object
            var userObject = {
                name: userInput,
              
            };

            // Adding user object to the array
            usersArray.push(userObject);

            // Displaying user details on the card
            var userCard = document.getElementById("userCard");
            var userInputDisplay = document.getElementById("userNameDisplay");
            

            userInputDisplay.textContent = userObject.name;
            
            userCard.style.display = "block"; // Show the card

            // Log the array of user objects
            console.log(usersArray);
        }

     function submit(){
        let a  = document.getElementById("Input");
        let b = a.value;
        usersArray.push(b);
        console.log(usersArray);
        for(let x of usersArray){
            document.getElementById("para").innerText = x;
        }
       
     }