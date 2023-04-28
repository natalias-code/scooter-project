class User {
  //encapsulated to protect users acccount
  #loggedIn = false; 
  // User code here
  constructor(username,password,age)
  {  
      this.username = username;
      this.password = password;
      this.age = age;  
  }
 
  //the list of registeredUsers would be passed in from the application itself
  registerUser(username, password, age, registeredUsers) {
    //check if users of age
    if (age < 18) {
      console.log("User must be 18 or older to register.");
      return false;
    }
    //check if user is exists
    else if (registeredUsers.find(user => user.username === username)) {
      console.log("User is already registered.");
      return false;
    }
    //if above are both false, go ahead and create a userr
    else {
      const user = new User(username, password, age);
      registeredUsers.push(user);
      console.log("User registered successfully.");
      return user;
    }
  }
  // the method called on submit form button to validate input password
  login(password)
  {
      if(password === this.password)
      {
         this.#loggedIn = true;
         console.log("Logged in successfully!");
      }
      else
      { 
        console.log("Incorrect password. Please try again");
      }
  }
  //would be called on click event 
  logout()
  {
     this.#loggedIn = false;
     console.log("Logged out successfully.");
  }


}

module.exports = User
