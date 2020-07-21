console.log("Creating User,Moderator,Admin class");

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
 }
 deleteUser(user);
 {
    users = users.filter(u =>{
        return u.email != user.email; 
    })


 let user1 = new User('Chaitanya',24,'ChaituM@gmail.com')
let mod = new Moderator('Prasad',22,'Pb@gmail.com','Moderator');
let admin = new Admin('Akshay',25,'AK47@gmail.com');
let users = [user1,mod,admin];

user1.login().addCoins().addCoins().getDetails().logout();

console.log(users);  
}
