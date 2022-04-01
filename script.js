// sort by count bit

// //let arr = [13, 12, 5, 19];
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//let n = arr.length;

// get count of set bit
//for (var i = 0; i < n; i++) {
//var temp = a[i];
//   var count = 0;
//   while (temp) {
// 2's comp. of temp
//     temp = temp & (temp - 1); // gives rightmost set bit
//     count++;
//   }
//   console.log(count);
//}

// insertion sort
// for (var i = 1; i < n; i++) {
//   var temp = a[i];
//   var j = i - 1;
//   while (i > 0 && a[j] > temp) {
//     a[j + 1] = a[j];
//     j--;
//   }
//   a[j + 1] = temp;
// }
// console.log(a);

// const sortBit = (num) => {
//   function getBitCount(num) {
//     for (var i = 0; i < n; i++) {
//       var temp = arr[i];
//       var count = 0;
//       while (temp) {
//         // 2's comp. of temp
//         temp = temp & (temp - 1); // gives rightmost set bit
//         count++;
//       }
//     }
//     return count;
//   }

//   function insertionSort(arr) {
//     for (var i = 1; i < arr.length; i++) {
//       let index = i;
//       while (index > 0) {
//         if (getBitCount(arr[index]) < getBitCount(arr[index + 1])) {
//           let temp1 = arr[index];
//           (arr[index] = arr[index - 1]), (arr[index - 1] = temp1);
//           index--;
//         } else if (
//           getBitCount(
//             arr[index] ==
//               getBitCount(arr[index - 1] && arr[index] < arr[index - 1])
//           )
//         ) {
//           let temp1 = arr[index];
//           (arr[index] = arr[index - 1]), (arr[index - 1] = temp1);
//           index--;
//         } else {
//           index--;
//         }
//       }
//     }
//     return arr;
//   }

//   return insertionSort(arr);
// };

// console.log(sortBit(arr));
// // --------------------------
// const sortBit = (num) => {
//   function getBitCount(num) {
//     for (var i = 0; i < n; i++) {
//       var temp = arr[i];
//       var count = 0;
//       while (temp) {
//         // 2's comp. of temp
//         temp = temp & (temp - 1); // gives rightmost set bit
//         count++;
//       }
//     }
//     return count;
//   }

//   function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let index = i;
//       while (index > 0) {
//         if (getBitCount(arr[index]) < getBitCount(arr[index - 1])) {
//           let tmp = arr[index];
//           (arr[index] = arr[index - 1]), (arr[index - 1] = tmp);
//           index--;
//         } else if (
//           getBitCount(arr[index]) == getBitCount(arr[index - 1]) &&
//           arr[index] < arr[index - 1]
//         ) {
//           let tmp = arr[index];
//           (arr[index] = arr[index - 1]), (arr[index - 1] = tmp);
//           index--;
//         } else {
//           index--;
//         }
//       }
//     }
//     return arr;
//   }

//   return insertionSort(arr);
// };

// console.log(sortBit(arr));

// divide without operator

// var dividend = 39;
// var diviser = 8;

// // 8n - n
// //--------
// //   8
// // 39 / 8 = 8 X 4 + 7

// var n = 5;
// //let val = ((n << 3) - n) >> 3;

// if
// let val = dividend >> 3
// console.log(val);

// -------------------------

//     let output = 0
//     let newDD = Math.abs(dividend)
//     let newDV = Math.abs(divisor)
//     while(newDD >= newDV){
//         newDD -= newDV;
//         output += 1;
//     }

//     if ((dividend < 0 && divisor >= 0) || (divisor < 0 && dividend >= 0)){
//         output = -output;
//     }

//     return output;

// // Constructor Function
// class Student {
//   constructor(name, roll_no) {
//     // let this = {}
//     this.name = name;
//     this.roll_no = roll_no;
//   }
// }
// let student = new Student("John", 2);

// console.log(student);

//Write a program to print the area and perimeter
//of a triangle object having sides of 3, 4 and 5 units
// by creating a class named 'Triangle' and having
//two functions calculate_area and calculate_perimeter
// and two constructors(default- all sides as 0 and
// parameterized constructor where you assign (3,4,5)) .
// class Triangle {
//   constructor(s1, s2, s3) {
//     this.s1 = s1;
//     this.s2 = s2;
//     this.s3 = s3;
//   }
//   calculate_area() {
//     let sp = (this.s1 + this.s2 + this.s3) / 2;
//     let area = Math.sqrt(sp * (sp - this.s1) * (sp - this.s2) * (sp - this.s3));
//     return area;
//   }
//   calculate_perimeter() {
//     let perimeter = this.s1 + this.s2 + this.s3;
//     return perimeter;
//   }
// }

// let triangle1 = new Triangle(3, 4, 5);
// let area1 = triangle1.calculate_area();
// let perimeter1 = triangle1.calculate_perimeter();
// console.log(area1);
// console.log(perimeter1);

// Write a program that would print the information
//(name, year of joining, salary, address) of three
//employees by creating a class named 'Employee' and
//inside the class there is a function print_details
// printing all the details of the employee .The output
//should be as follows:

// Name          Year of joining            Address

//  Robert            1994                64C- WallsStreat

//  Sam               2000                68D- WallsStreat

//  John              1999                26B- WallsStreat

// class Employee {
//   constructor(name, year_of_joining, salary, address) {
//     this.name = name;
//     this.year_of_joining = year_of_joining;
//     this.address = address;
//     this.salary = salary;
//   }

//   print_details() {
//     console.log(
//       `${this.name}          ${this.year_of_joining}              ${this.address}`
//     );
//   }
// }
// console.log(`Name        Year of Joinning      Address`);

// let employee1 = new Employee("Robert", 1994, 20000, "64C- WallsStreet");
// let employee2 = new Employee("Sam", 2000, 28000, "68D- WallsStreet");
// let employee3 = new Employee("John", 1999, 32000, "26B- WallsStreet");

// employee1.print_details();
// employee2.print_details();
// employee3.print_details();

//Write a program by creating an 'Employee' class having the
//following methods and print the final salary.
// 1 - 'getInfo()' which takes the salary, number of hours
// of work per day of employee as parameter
// 2 - 'AddSal()' which adds $10 to salary of the employee
// if it is less than $500.
// 3 - 'AddWork()' which adds $5 to salary of employee
// if the number of hours of work per day is more than 6 hours.

// class Employee {
//   getInfo(salary, no_of_hrs) {
//     this.salary = salary;
//     this.no_of_hrs = no_of_hrs;
//   }

//   AddSal() {
//     if (this.salary < 500) {
//       return (this.salary += 10);
//     } else return this.salary;
//   }
//   AddWork() {
//     if (this.no_of_hrs > 6) {
//       return (this.salary += 5);
//     } else return this.salary;
//   }
// }

// let employee1 = new Employee();
// employee1.getInfo(600, 2);
// employee1.AddSal();
// console.log(employee1.AddWork());

// count no. of object

// class count_objects {
//   static noOfObject = 0;
//   constructor() {
//     count_objects.noOfObject += 1;
//   }

//   count_objects() {}
//   count_objects(intValue) {}
//   count_objects(stringChar) {}
//   count_objects(booleanValue) {}
// }

// let test1 = new count_objects();
// let test2 = new count_objects(5);
// let test3 = new count_objects("hello");
// let test4 = new count_objects(true);

// console.log(count_objects.noOfObject);

//Create a class "PARENT" with a method that prints
//"This is parent class" and its Child class "CHILD"
//with a method that prints "This is child class".
//Now, create an object for each of the class and call
// 1 - method of parent class by object of parent class
// 2 - method of child class by object of child class
// 3 - method of parent class by object of child class

// class PARENT {
//   constructor() {
//     console.log("This is parent class");
//   }
// }
// class CHILD {
//   constructor() {
//     super.PARENT;
//     console.log("This is child class");
//   }
// }
// let obj1 = new PARENT();
// let obj2 = new CHILD();
// let obj3 = new PARENT();
// PARENT.obj1;
// CHILD.obj2;
// CHILD.obj3;

// ---------------------------------------------------------
//Create a class named 'Member' having the following members:
//Data Attributes
//1 - Name
//2 - Age
//3 - Phone number
//4 - Address
//5 - Salary
//It also has a method named 'printSalary' which prints the salary of the members.
//Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' and 'Manager'
//classes have data members 'specialization' and 'department' respectively. Now, assign name, age,
//phone number, address and salary to an employee and manager by making an object of both of these classes
//and print the same.

// class Member {
//   Member(names, age, phone_num, address, salary) {
//     this.names = names;
//     this.age = age;
//     this.phone_num = phone_num;
//     this.address = address;
//     this.salary = salary;
//   }
//   printSalary() {
//     console.log(this.salary);
//   }
// }
// class Employee extends Member {
//   constructor(names, age, phone_num, address, salary, specialization) {
//     super(names, age, phone_num, address, salary);
//     this.specialization = specialization;
//   }
// }
// class Manager extends Member {
//   constructor(names, age, phone_num, address, salary, department) {
//     super(names, age, phone_num, address, salary);
//     this.department = department;
//   }
// }
// let employee1 = new Employee();
// employee1.names = "kiran";
// employee1.phone_num = "9754547457";
// employee1.address = "kalyan";
// employee1.salary = 5000;
// employee1.specialization = "c++";

// let manager1 = new Manager();
// manager1.names = "kiron";
// manager1.phone_num = "9874547457";
// manager1.address = "mumbai";
// manager1.salary = 15000;
// manager1.department = "IT Dept";

// employee1.printSalary();
// manager1.printSalary();

//Create a class named 'Shape' with a method to print
//"This is This is shape". Then create two other classes
//named 'Rectangle', 'Circle' inheriting the Shape class,
//both having a method to print "This is rectangular shape"
//and "This is circular shape" respectively. Create a subclass
//'Square' of 'Rectangle' having a method to print
//"Square is a rectangle". Now call the method of 'Shape'
//and 'Rectangle' class by the object of 'Square' class.

// class Shape {
//   print_shape() {
//     console.log("This is shape");
//   }
// }
// // Reactangle is subclass of shape class
// class Rectangle extends Shape {
//   print_rect() {
//     console.log("This is rectangular Shape");
//   }
// }

// // Circle is subclass of shape class
// class Circle extends Shape {
//   print_circle() {
//     console.log("This is circular Shape");
//   }
// }

// // Square is subclass of reactangle class
// class Square extends Rectangle {
//   print_rect() {
//     console.log("Square is rectangle");
//   }
// }

// let square1 = new Square();
// square1.print_shape();
// square1.print_rect();

// // This is shape
// // Square is rectangle

// // binary search

// let arr1 = [-1, 5, 8, 9, 15, 19];
// let n1 = arr1.length;
// let key1 = 15;

// const binarySearch = (arr, n, key) => {
//   let left = 0;
//   let right = n - 1;
//   let mid;

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);

//     if (key == arr[mid]) {
//       return mid;
//     }
//     if (key > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

// let example1 = binarySearch(arr1, n1, key1);

// console.log(example1);

//find peak element

// let arr1 = [1, 9, 7, 100, 1, 50];
// let l = 0;
// let r = arr1.length - 1;

// const findPeakElm = (nums) => {
//   while (l < r) {
//     let mid = Math.floor((l + r) / 2);
//     if (nums[mid] > nums[mid + 1]) {
//       r = mid;
//     } else {
//       l = mid + 1;
//     }
//   }
//   return l;
// };
// console.log(findPeakElm(arr1));

// search in rotated sorted array

// const searchElm = (nums, target) => {
//   let start = 0;
//   let end = nums.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (nums[mid] == target) {
//       return mid;
//     }
//     if (nums[start] <= nums[mid]) {
//       if (nums[start] <= target && target <= nums[mid]) {
//         end = mid - 1;
//       } else {
//         start = mid - 1;
//       }
//     } else {
//       if (nums[mid] <= target && target <= nums[end]) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
//   }
//   return -1;
// };
// let nums1 = [4, 5, 6, 7, 0, 1, 2];
// let target1 = 0;
// console.log(searchElm(nums1, target1));

// const searchElm = (nums, target) => {
//     let start = 0;
//     let end = nums.length - 1;
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (nums[mid] == target) {
//         return mid;
//       }
//       if (nums[start] <= nums[mid]) {
//         if (nums[start] <= target && target <= nums[mid]) {
//           end = mid - 1;
//         } else {
//           start = mid - 1;
//         }
//       } else {
//         if (nums[mid] <= target && target <= nums[end]) {
//           start = mid + 1;
//         } else {
//           end = mid - 1;
//         }
//       }
//     }
//     return -1;
//   };
//   let nums1 = [4, 5, 6, 7, 0, 1, 2];
//   let target1 = 0;
//   console.log(searchElm(nums1, target1));

// // map
// var mymap = new Map();
// mymap.set(1, "uno");
// mymap.set(2, "tuno");
// mymap.set(3, "thriuno");
// mymap.set(4, "foruno");
// mymap.set(5, "fivruno");

// console.log(mymap);

// for (var [key, value] of mymap) {
//   console.log(`key is ${value} `);
// }

// mymap.forEach((value) => console.log(value));
// mymap.delete(2);
// console.log(mymap);

//stack data structure
// class Stack {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//     this.minstack = [];
//   }
//   // Add element to top of stack
//   push(element) {
//     this.items[this.count] = element;
//     this.items[this.count] = this.minstack;
//     this.count += 1;
//     console.log(`${element} added to ${this.count}`);
//     return this.count - 1;
//   }

//   // remove top element to stack
//   // return undefined if empty
//   pop() {
//     if (this.count == 0) return undefined;
//     let deleteItem = this.items[this.count - 1];
//     this.count -= 1;
//     console.log(`${deleteItem} removed`);
//     return deleteItem;
//   }
//   // check top element in stack
//   peek() {
//     let peek = this.items[this.count - 1];
//     console.log(peek);
//     console.log(this.items);
//     console.log(this.count);
//     return peek;
//   }
//   // check if stack is empty or not
//   isEmpty() {
//     console.log(this.count == 0 ? "stack is empty" : "Stack is not empty");
//     return this.count == 0;
//   }
//   // check size of stack
//   size() {
//     console.log(this.count, "element in stack");
//     return this.count;
//   }
//   // print element in stack
//   print() {
//     let str = "";
//     for (let i = 0; i < this.count; i++) {
//       str = str + this.items[i] + " ";
//     }
//     console.log(str);
//   }
//   // clear stack
//   clear() {
//     this.items = [];
//     this.count = 0;
//     console.log("stack cleared");
//     return this.items;
//   }
// }

// const stack = new Stack();

// stack.push(100);
// stack.push(200);
// stack.push(300);
// // stack.pop();
// stack.peek();
// stack.isEmpty();
// stack.size();
// stack.print();
// stack.clear();

// stack.isEmpty();
// stack.size();

//Queue

// class Queue {
//   constructor() {
//     this.elements = [];
//   }

//   // add element back
//   enqueue(e) {
//     this.elements.push(e);
//   }

//   // remove element front
//   dequeue() {
//     this.elements.shift();
//   }

//   // check if empty
//   isEmpty() {
//     return this.elements.length == 0;
//   }

//   // peek
//   // front element
//   get_first_element() {
//     return !this.isEmpty() ? this.elements[0] : undefined;
//   }

//   // last element
//   get_last_element() {
//     return !this.isEmpty()
//       ? this.elements[this.elements.length - 1]
//       : undefined;
//   }
//   // size
//   size() {
//     return this.elements.length;
//   }

//   // check if full
//   isFull() {
//     return this.elements.length != 0;
//   }
// }

// let q = new Queue();
// q.enqueue(100);
// q.enqueue(200);
// q.enqueue(300);
// q.enqueue(400);
// q.enqueue(500);
// console.log(q);
// q.dequeue();
// console.log(q);
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
// console.log(q);
// console.log(q.get_first_element());
// console.log(q.get_last_element());
// console.log(q.isFull());

// nearest left smaller element

//let nums = [1, 4, 5, 4, 1, 2, 4, 6];
//         [-1, 1,4, 1, -1, 1, 2, 4]

// for loop for traverse array element
// for (i=1;i<=nums.length+1;i++)

// if peek < nums[i]      // peek = []
// i = 1 >> 1 < 1 >> -1   // peek = [1]
// i = 2 >>  1 < 4 >>

// linked list
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   // insert first element
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }
//   // insert at last node
//   insertLast(data) {
//     let node = new Node(data);
//     let current;
//     // if empty, make head
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }
//   // insert at index
//   insertATIndex(data, index) {
//     // if index is out of range
//     if (index > 0 && index > this.size) {
//       return;
//     }
//     // if first index
//     if (index === 0) {
//       this.head = new Node(data, this.head);
//       return;
//     }
//     const node = new Node(data);
//     let current, previous;
//     // set current to first
//     current = this.head;
//     let count = 0;
//     while (count < index) {
//       previous = current; // node before index
//       count++;
//       current = current.next; //node after index
//     }
//     node.next = current;
//     previous.next = node;

//     this.size++;
//   }

//   // get at index
//   getAt(index) {
//     let current = this.head;
//     let count = 0;
//     while (current) {
//       if (count == index) {
//         console.log(current.data);
//       }
//       count++;
//       current = current.next;
//     }
//     return null;
//   }
//   // remove at index
//   removeAt(index) {
//     //if (index > 0 && index > this.size) {
//     //return;
//     //}

//     let current = this.head;
//     let previous;
//     let count = 0;

//     // Remove first
//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       while (count < index) {
//         count++;
//         previous = current;

//         current = current.next;
//         console.log(current);
//       }

//       previous.next = current.next;
//     }
//     console.log(previous.next);

//     this.size--;
//   }
//   // clear list
//   // print list
//   printList() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current == current.next;
//     }
//   }
// }

// const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);

// //ll.insertLast(400);
// //ll.getAt(1);
// //ll.removeAt(2);
// ll.printList();

// leetcode 2
// let carry = 0;
// var addTwoNumbers = function (l1, l2) {
//   if (!l1 && !l2 && carry === 0) {
//     return null;
//   }
//   let x = l1 ? l1.val : 0;
//   let y = l2 ? l2.val : 0;
//   let nextL1 = l1 ? l1.next : null;
//   let nextL2 = l2 ? l2.next : null;

//   let sum = x + y + carry;

//   carry = Math.floor(sum / 10);
//   sum = sum % 10;

//   return {
//     val: sum,
//     next: addTwoNumbers(nextL1, nextL2),
//   };
// };

// leetcode 19

// var removeNthFromEnd = function (head, n) {
//   if (head.next === null) {
//     return head.next;
//   }
//   let len = 0;
//   for (let i = head; i.next !== null; i = i.next) {
//     len++;
//   }
//   if (len == n - 1) {
//     return head.next;
//   }
//   let res = head;
//   for (let i = 0; i < len - n; i++) {
//     res = res.next;
//   }
//   res.next = res.next.next;
//   return head;
// };

// removeNthFromEnd([1, 2, 3, 4, 5], 2);

// leetcode 142
// if (head == null || head.next == null) return null;

// let first = head;
// let second = head;

// while (second != null && second.next != null) {
//   first = first.next;
//   second = second.next.next;
//   if (first == second) break;
// }

// if (second == null || second.next == null) return null;

// first = head;

// while (first != second) {
//   first = first.next;
//   second = second.next;
// }

// return first;
// var sum = 0;
// var n = 5;
// for (var i = 0; i < 10; i = i + 2) {
//   if (i == n) {
//     break;
//   }
//   sum = sum + i;
// }
//console.log(sum);

// // Write a program to convert the following
// //program in bold into its recursive format.

// const sumOfNumbers = (num) => {
//   // base case
//   if (num > 10) {
//     return 0;
//   } else {
//     var sum = num + sumOfNumbers(num + 2); // 5 + 7 + 9 = 21
//     console.log("Sum is ", sum);
//     return sum;
//   }
// };
// var num = 5;
// //console.log(sumOfNumbers(num));

// -------- Stack Sequence ---------//
// const count = (i) => {
//   if (i > 5) {
//     //Print the stack sequence
//     return 0;
//   } else {
//     sum = i + 2 + count(i + 1);
//     i = 1; // 1 + 2 + count(1+1) = 22 + 3 = 25
//     i = 2; // 2 + 2 + count(2+1) = 18 + 4 = 22
//     i = 3; // 3 + 2 + count(3+1) = 13 + 5 = 18
//     i = 4; // 4 + 2 + count(4+1) = 7 + 5 = 13
//     i = 5; // 5 + 2 + count(5+1) = 7
//     console.log(sum);
//     return sum;
//   }
// };
// var i = 1;
// var fun = count(i);
// console.log(fun);

// const count = (i) => {
//   if (i > 5) {
//     return 0;
//   } else {
//     sum = i * count(i + 1);
//       i = 1; // 1 X count(1+1) = 0 X 1 = 0
//       i = 2; // 2 X count(2+1) = 0 X 2 = 0
//       i = 3; // 3 X count(3+1) = 0 X 3 = 0
//       i = 4; // 4 X count(4+1) = 0 X 4 = 0
//       i = 5; // 5 X count(5+1) = 0 X 5 = 0
//       return 0
//     console.log(sum);
//     return sum;
//   }
// };
// var i = 1;
// var fun = count(i);
// console.log(fun);

// const count = (i) => {
//   if (i == 5) {
//     return 0;
//   } else {
//     sum = i + count(i + 3);
//     // i = 1; // 1 + count(1+3) =
//     // i = 4; // 4 + count(4+3) =
//     // i = 7; // 7 + count(7+3) =
//     // return 0;
//     console.log(sum);
//     return sum;
//   }
// };
// var i = 1;
// var fun = count(i);
// console.log(fun);

// const count = (i) => {
//   if (i == 6) {
//     return;
//   } else {
//     console.log(i);
//     // i = 1 prints 1 (1 + 1)
//     // i = 2 prints 2 (2 + 1)
//     // i = 3 prints 3 (3 + 1)
//     // i = 4 prints 4 (4 + 1)
//     // i = 5 prints 5 (5 + 1)
//     // i = 6 return function
//     count(i + 1);
//   }
// };
// var i = 1;
// var fun = count(i);

// const count = (i) => {
//   if (i == 6) {
//     return;
//   } else {
//     console.log(i);
//     count(i + 1);
//     console.log(i);
//   }
// };
// var i = 1;
// var fun = count(i);

//----------------------------------------------//
//Write a question to to take an input n and
//print all the multiples of 5 less than n in a recursive way.
// example input n=30
// output 1 5 10 15 20 25
//(Note 1 is there and how will you
//ensure that you print it since it is not a part of series)

// const multiplesOfFive = (n) => {
//   // base case
//   if (n % 5 != 0 || n == 0) {
//     return;
//   } else {
//     console.log(n);
//     multiplesOfFive(n - 5);
//   }
// };
// var n = 80;
// var fun = multiplesOfFive(n);
//console.log(fun);

//-------------------------------------------//
// Write a function which will take the input
// n from the user and return back
// an integer which will contain the sum of n natural number .
// Example input n=5
// return 1+2+3+4+5 = 15 will be returned back from the function

// var sum = 0;
// const sumOfDigits = (n) => {
//   // base case
//   if (n == 0) {
//     return;
//   } else {
//     sum = sum + n;
//     sumOfDigits(n - 1);
//   }
// };
// var n = 5;
// var fun = sumOfDigits(n);
// console.log(sum);
// 1

// Write a program to write a function
// factorial which takes an input n and prints
//  the factorial of the number in a recursive way

// var sum = 1;
// const factorialOfNum = (n) => {
//   // base case
//   if (n == 0) {
//     return;
//   } else {
//     sum = sum * n;
//     factorialOfNum(n - 1);
//   }
// };
// var n = 5;
// var fun = factorialOfNum(n);
// console.log(sum);

// The Fibonacci numbers, commonly denoted F(n) form a sequence,
// called the Fibonacci sequence, such that each number is the
// sum of the two preceding ones, starting from 0 and 1. That is,

// const fibonacciNumber = (n) => {
//   // base case
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
//   }
// };
// var n = 4;
// var fun = fibonacciNumber(n);
// console.log(fun);

// 1 2 3 4
//
// F(n) = F(n - 1) + F(n - 2)
// f(4) = f(4-1) + f(4 - 2)
// f(4) = f(3) + f(2)
// f(4) = (3- 1) + (2 - 1)
// f(4) = 2 + 1
// f(4) = 3

// Example:-
// Permutation for abc
// abc,acb, bac, bca, cab ,cba

// var permute = function (nums) {
//   let res = [];
//   helper(nums, res);
//   //console.log(res);
//   return res;
// };
// let arr = "ab";
// permute(arr);

// function helper(nums, res, current = []) {
//   if (!nums.length) {
//     res.push(current);
//     return;
//   }
//   for (let i = 0, len = nums.length; i < len; i++) {
//     /**
//      * For permutation I am not updating nums array
//      *  just picking (i)th item
//      * from the nums array and add it to the current
//      * array so that we get all possible values.
//      */
//     console.log(...nums.slice(0, i));
//     console.log(...nums.slice(i + 1));
//     //console.log(res);
//     //console.log(...current);
//     //console.log(nums[i]);
//     helper([...nums.slice(0, i), ...nums.slice(i + 1)], res, [
//       ...current,
//       nums[i],
//     ]);
//   }
// }

// const getPer = (array) => {
//   let foundPermutation = [];
//   function perem(subArr, currentArr) {
//     // base
//     if (subArr.length === 0) {
//       foundPermutation.push(currentArr);
//     }
//     for (let i = 0; i < subArr.length; i++) {
//       const newSubarray = subArr.slice(0, i).concat(subArr(i + 1));
//       const newCurrentPerm = currentArr.concat(subArr[i]);
//       perem(newSubarray, newCurrentPerm);
//     }
//   }
//   perem(array, []);
//   console.log(foundPermutation);
// };

// // getPer(["abc"]);
// let str = "let";
// let permutation = (str, result) => {
//   if (str.length == 0) {
//     console.log(result);
//   }
//   for (let i = 0; i < str.length; i++) {
//     let rest = str.substring(0, i) + str.substring(i + 1);
//     permutation(rest, result + str[i]);
//   }
// };
// permutation(str, "");

//-------------------------------------//
// Javascript code to print all possible
// subsequences for given array using
// // recursion

// // Recursive function to print all
// // possible subsequences for given array
// function printSubsequences(arr, index, path) {
//   // Print the subsequence when reach
//   // the leaf of recursion tree
//   if (index == arr.length) {
//     // Condition to avoid printing
//     // empty subsequence
//     if (path.length > 0) console.log(path);
//   } else {
//     // Subsequence without including
//     // the element at current index
//     printSubsequences(arr, index + 1, path);

//     path.push(arr[index]);

//     // Subsequence including the element
//     // at current index
//     printSubsequences(arr, index + 1, path);

//     // Backtrack to remove the recently
//     // inserted element
//     path.pop();
//   }
//   return;
// }

// // Driver code
// let arr = [1, 2, 3];

// // Auxiliary space to store each path
// let path = new Array();

// printSubsequences(arr, 0, path);

// var array = [3,12,8,2,19,6,18];

// const sum = (arr, i=0)=> {
//   if(i === arr.length) return arr;
//   if(arr[i+1] < arr[i]){
//     const x = arr[i+1];
//     arr[i+1] = arr[i];
//     arr[i] = x;
//   }
//   return sum(arr,i+1);
// }

// console.log(sum(array))

//----------Count Matches-----------//
//var numberOfMatches = function (n) {
//let matches = 0,current = n;
//while(current > 1){
// if(current % 2 === 0){
//   matches += current/2;
// current = current/2
//}else{
//  matches += (current-1)/2;
//current = (current-1)/2 + 1 ;
//}
//}
//return matches;

//   const iter = (num, acc) => {
//     if (num === 1) return acc;
//     if (num % 2 === 0) {
//       return iter(num / 2, acc + num / 2);
//     }
//     return iter((num - 1) / 2 + 1, acc + (num - 1) / 2);
//   };

//   return iter(n, 0);
// };

// console.log(numberOfMatches(6));
// var countVowelStrings = function (n) {
//   let output = 1;

//   for (let i = 1; i <= 4; i++) {
//     output *= n + i;
//     console.log(n, i, output);
//     // outut = 1 * 1 + 1 = 2
//     // outut = 2 * 1 + 2 = 4
//     // outut = 4 * 1 + 3 = 10
//     // outut = 10 * 1 + 4 = 14
//     // (n+4)! / n!4!
//     // n+4 * n+3 * n+2 * n+1 / 4!
//   }
//   return output / 24;
// };
// console.log(countVowelStrings(1));

//---------numTilePossibilities----------//

// var numTilePossibilities = function (tiles) {
//   solve(tiles);
//   return result.length;
// };

// const solve = (tiles) => {
//   for (let i = 0; i <= tiles.length - 1; i++) {
//     if (flag[i] != 1) {
//       // add letter in str
//       str.push(tiles[i]);
//       // set flag to 1
//       flag[i] = 1;
//       // insert str in result
//       result.push(str);
//       // call solve() function
//       solve(tiles);
//       // unset flag to 0
//       flag[i] = 0;
//       // remove the last letter
//       str.pop();
//     }
//   }
// };

// let tiles = "AAB";
// let str = [];
// let flag = new Map();
// let result = [];

// let fun = numTilePossibilities(tiles);

// console.log(fun);

// var generateParenthesis = function (n) {
//   const result = [];

//   function helper(open, close, string) {
//     if (close === n && open === n) result.push(string);

//     if (close < open) {
//       helper(open, close + 1, string + ")");
//     }
//     if (open < n) {
//       helper(open + 1, close, string + "(");
//     }
//   }

//   helper(0, 0, "");

//   return result;
// };

// let fun = generateParenthesis(3);

// console.log(fun);

// var partition = function (s) {
//   const res = []; // for store palindrome
//   const path = []; // indivisual list of palindrom string

//   const helper = (s, i, j) => {
//     // base case
//     // if last partition store all
//     // palindrom in res
//     if (i === s.length) {
//       res.push([...path]);
//       return;
//     }
//     //
//     for (let index = j; index <= s.length; ++index) {
//       if (isPalindrome(s, i, index)) {
//         // check partition
//         // index to i is palindrome or not
//         path.push(s.slice(i, index));
//         //console.log(path);
//         helper(s, index, index + 1);
//         path.pop();
//       }
//     }
//   };

//   const isPalindrome = (s, i, j) => {
//     //palindrome function start from 0 till last index
//     while (i < j - 1) {
//       if (s[i] !== s[j - 1]) {
//         return false;
//       }
//       ++i;
//       --j;
//     }
//     return true;
//   };

//   helper(s, 0, 1);
//   return res;
// };

// let fun = partition("abb");

// console.log(fun);

//========== User's Code Starts Here ==========

//* Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
// function TreeNode(val, left, right) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// }

// var levelOrder = function (root) {
//   if (!root) return [];
//   const results = [];
//   const queue = [root];

//   while (queue.length) {
//     const current_level_length = queue.length;
//     const current_level_values = [];

//     for (let i = 0; i < current_level_length; i++) {
//       const node = queue.shift();
//       // shift() method removes the first element from an array
//       ///and returns that removed element
//       current_level_values.push(node.val);

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     results.push(current_level_values);
//   }
//   return results;
// };

// const inorder = (root) => {
//   const nodes = [];
//   if (root) {
//     inorder(root.left);
//     nodes.push(root.val);
//     inorder(root.right);
//   }
//   return nodes;
// };

// var arr = [5, 1, 2, 3, 4, 5];
// var fun = inorder(arr);
// console.log(fun);

//-----------Binary Tree-------------//
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(data) {
//     let node = new Node(data);
//     if (this.root == null) {
//       this.root = node;
//     } else {
//       this.insertNode(this.root, node);
//     }
//   }
//   insertNode(root, newNode) {
//     if (newNode.data < root.data) {
//       if (root.left == null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else if (newNode.data > root.data) {
//       if (root.right == null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }
//   getRootNode() {
//     return this.root;
//   }

//   // traversal
//   preorder(root) {
//     // P L R
//     if (root != null) {
//       console.log(root.data);
//       this.preorder(root.left);
//       this.preorder(root.right);
//     }
//   }
//   inorder(root) {
//     // L P R
//     if (root != null) {
//       this.inorder(root.left);
//       console.log(root.data);
//       this.inorder(root.right);
//     }
//   }
//   postorder(root) {
//     // L R P
//     if (root != null) {
//       this.postorder(root.left);
//       this.postorder(root.right);
//       console.log(root.data);
//     }
//   }
// }

// let bst = new BinarySearchTree();
// bst.insert(3);
// bst.insert(5);
// bst.insert(1);
// bst.insert(6);
// bst.insert(4);

// let root = bst.getRootNode();
// console.log("Preorder");
// bst.preorder(root);
// console.log("Inorder");
// bst.inorder(root);
// console.log("Postorder");
// bst.postorder(root);

// print all till n except 5
// function findnum(n) {
//   var num = 1;

//   while (num <= n) {
//     num++;
//     if (num % 5 == 0) {
//       continue;
//     }
//     console.log(num);
//   }
// }
// let n = 16;

// findnum(n);

// find digits of
// function printDigits(n) {
//   var num;

//   while (n > 0) {
//     num = n % 10; // to get last digits
//     console.log(num);
//     n = parseInt(n / 10); // to get remaining digits
//   }
// }b
// let n = 153;

// printDigits(n);

// armstrong number

// function armstrong_num(n) {
//   let sum = 0;
//   let temp = n;
//   while (n > 0) {
//     var digit = n % 10;
//     sum = sum + digit ** 3;
//     n = parseInt(n / 10);
//   }
//   if (sum == temp) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// let n = 1553;6666
// armstrong_num(n);

// reverse number

// function rev_num(n) {
//   var rev = 0;
//   var lastnum;
//   while (n > 0) {
//     lastnum = n % 10; // last digit - 9 // 6 // 5
//     rev = rev * 10 + lastnum; // 0 * 9 = 9 // 90 + 6 = 96 // 960+5=965
//     n = parseInt(n / 10); // 56 // 5 // 0
//   }
//   console.log(rev);
// }

// rev_num(569);

// print series 1,27,81,125,216..n(including n)

// var n = 216
// for (var num = 1; num ** 3 <= n; num++) {
//   console.log(num ** 3);
// }

// // except 4
// var n = 10;
// for (var num = 1; num <= n; num++) {
//   if (num % 2 == 0) {
//     if (num % 4 == 0) {
//       continue;
//     }
//     console.log(num);
//   }
// }

// break the loop at m

// let n = 10;
// let m = 5;
// for (var num = 1; num <= n; num++) {
//   if (num === m) {
//     break;
//   }
//   console.log(num);
// }

// pattern 1
// var string = "";

// for (var i = 0; i < 5; i++) { // i =0 // i = 1
//   for (var j = 0; j <= 4-i; j++) { //5 // 4//3//2//1
//     string = string + "*"; // 5 star
//   }
//   string = string + "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (var i = 0; i < n; i++) {
//   for (var j = 0; j <= n - i - 1; j++) {
//     string = string + "*";
//   }
//   string = string + "\n";
// }
// for (var i = 1; i <= n; i++) {
//   //1 //2
//   for (var j = 1; j <= i; j++) {
//     //1 //2
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";

// for (var i = 1; i < n + 1; i++) {
//   for (var j = 0; j <= i - 1; j++) {
//     string += "*";
//   }
//   for (var j = 1; j < n - i + 1; j++) {
//     string += " ";
//   }
//   for (var j = 0; j <= i - 1; j++) {
//     string += "*";
//   }
//   for (var j = 0; j < n - i + 1; j++) {
//     string += " ";
//   }
//   string += "\n";
// }
// console.log(string);

// return max in array
// let arr = [5, 7, 16, 9, 8];

// let max = arr[0];
// let i = arr.length;

// // while (i--) {
// //   max = arr[i] > max ? arr[i] : max;
// // }
// for (var j = 0; j < i; j++) {
//   if (max < arr[j]) {
//     max = arr[j];
//   }
// }

// console.log(max);

//Write a program to store first n prime
//numbers in an array . After storing return the array.
