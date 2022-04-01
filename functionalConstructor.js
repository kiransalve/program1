// Contructor Function
function Student(f_name, l_name, roll_num, sex, dob, age) {
  this.f_name = f_name;
  this.l_name = l_name;
  this.roll_num = roll_num;
  this.sex = sex;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.f_name} ${this.l_name}`;
  };
}

// Instanstiate object
const student1 = new Student("kiran", "salve", 22, "male", "20-11-1994", 27);
const student2 = new Student("karan", "salve", 56, "male", "11-1-1996", 25);

// function for eligiblity
Student.prototype.findEligible = function findEligible(minAge) {
  if (this.age >= minAge) {
    console.log(this.f_name, "is eligible");
  } else {
    console.log(this.f_name, "is not eligible");
  }
};

student1.findEligible(student1.f_name, 30);

// Contructor Function
class Student {
  constructor(f_name, l_name, roll_num, sex, dob, age) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.roll_num = roll_num;
    this.sex = sex;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.f_name} ${this.l_name}`;
  }
}

// Instanstiate object
const student1 = new Student("kiran", "salve", 22, "male", "20-11-1994", 27);
const student2 = new Student("karan", "salve", 56, "male", "11-1-1996", 25);

// function for eligiblity
Student.prototype.findEligible = function findEligible(minAge) {
  if (this.age >= minAge) {
    console.log(this.f_name, "is eligible");
  } else {
    console.log(this.f_name, "is not eligible");
  }
};

student1.findEligible(student1.f_name, 30);
