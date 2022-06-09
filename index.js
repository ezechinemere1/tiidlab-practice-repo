const url = "http://jsonplaceholder.typicode.com/users";

//2. fetch users from the API url
function fetchUsers(){
    //make user of the broser fetch API
    fetch(url).then((Response) => Response.json()).then(data=> {
        
        // 2.2 passing the data to the renderUsers function
        renderUsers(data);
    });
}


//3. Render the users in the DOM
 function renderUsers(userData){
    
     console.log(userData);
     const ul = document.getElementById("user-list-container")
     console.log(ul);

     //3.1 render an li tag for each of the users
     userData.forEach((user, index) => {
         console.log(user, index + 1);
         const li = document.createElement('li');
         li.innerHTML= `
         <span>${index + 1}</span>
         <span>${user.name}</span>
         <span></span>
         <span class="username">${user.username}</span>

         `;

         // append the current user li tag to the Ul tag
         ul.appendChild(li);
     });
 }
 //4. Add a search function to the Dom
 function searchusersByUsername(){
     const input = document.getElementById('search');
     const ul = document.getElementById('user-list-container');
     const inputValue = input.value.toUpperCase();
     const userlist =  ul.querySelectorAll('li'); //array of all the li tags[]

     //loop through all the users and render the ones the match users search
     for(let i = 0; i < userlist.length; i++){
         const usernameSpanTag = userlist[i].querySelector('.username');
         const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
         const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1

         if(isMatch){
             userlist[i].style.display = 'block'

         }else{
             userlist[i].style.display = 'none'
         }
     }

 }


 // calling the fetch function  
 fetchUsers();