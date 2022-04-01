// Every time a new user registers, keep a count of number of registered users.
//At any given point of time if we do User.registeredUsers , should be able to get the value .

class User {
  static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }
  registeredUser() {
    console.log(User.count);
  }
  register() {
    console.log(this.username, "is now registered");
  }
}

class Member extends User {
  constructor(username, email, password, memberpackage, freeTrialDate) {
    super(username, email, password);
    this.package = memberpackage;
    let today = new Date();
    const packageActivateTillYear = today.getFullYear();
    const packageActivateTillMonth = today.getMonth();
    const packageActivateTillDay = today.getDay();
    this.packageActivateTillDate = new Date(
      packageActivateTillYear,
      packageActivateTillMonth +1,
      packageActivateTillDay
    );
  }
  renewMembership() {
    const packageActivateTillYear = this.packageActivateTillDate.getFullYear();
    const packageActivateTillMonth = this.packageActivateTillDate.getMonth();
    const packageActivateTillDay = this.packageActivateTillDate.getDay();
    this.packageActivateTillDate = new Date(
      packageActivateTillYear + 1,
      packageActivateTillMonth,
      packageActivateTillDay
    );
  }
  packageActivateTill() {
    console.log(
      this.username +
        " is subscribed to " +
        this.package +
        " uptill " +
        this.packageActivateTillDate
    );
  }
}

let bob = new Member("bob", "bob@gmail.com", "12345", "Standared");
//bob.register();

//bob.registeredUser();

bob.packageActivateTill();
bob.renewMembership();
