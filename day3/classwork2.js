// let st = 1;
// let row = 5
// let sp = row*2-2;
// for (var i = 1; i <= row; i++)  {
//     let str = "";
//     for (var k = 1; k <= sp; k++) {
//         str += ' ';
//     }
//     for(var j = 1; j < 2*i ; j++) {
//         str += j + ' ';
//     }
//     console.log(str);
//     sp-=2;
// }


// let row = 9;
// let sp = row/2 ;
// let col = 1;

// for (let i = 1; i <= row; i++) {
//     let str="";
//     for (let k = 0; k < sp; k++) {
//         str+= '  ';
//     }
//     for (let j = 1; j <= col; j++) {
//         str+= j + " ";
//     }
//     console.log(str);
//     if ( i < row/ 2) {
//         sp--;
//         col++
//     } else {
//         sp++;
//         col--;
//     }
// }


// let row = 9;
// let col = 1;
// for (let i = 1; i <= row; i++) {
//     let str= "";
//     for (let j = col; j >= 1; j--) {
//         str += j + " ";
//     }
//     console.log(str);
//     if (i < row/2) {
//         col++;
//     } else {
//         col--;
//     }
// }


// let row = 5;
// let col = 9;
// let sp = 0;

// for (let i = 1; i <=row; i++) {
//     let str="";
//     for (let k = 0; k < sp; k++) {
//         str+= '  ';
//     }
//     for (let j = 1; j <= col; j++) {
//         str+= j +' ';
//     }
//     console.log(str);
//     sp++;
//     col-=2;
// }

// const arr = [1,2,3];
// let l = arr.pop()
// arr.push(1);
// console.log(l);
// let m = arr.shift();
// arr.unshift(3);
// console.log(m);
// console.log(arr);

// const arr = [1,2,3, {firstName: 'Ashu', lastName: 'kumar'}];
// const str = arr.toString();
// const arr1= arr.join('|');
// console.log(str);
// console.log(arr);
// console.log(arr1);


// let user = {};
// user.name = "John"; 
// user.surname = "Smith"; 
// user.name = "Pete"; 
// delete user.name; 


// function isEmpty(obj) {
//     return Object.keys(obj).length === 0; 
//   }
//   let schedule = {};
//   alert(isEmpty(schedule)); 
//   schedule["8:30"] = "get up";
//   alert(isEmpty(schedule)); 

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   let sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
  

// let calculator = {
//     read() {
//       this.a = +prompt("Enter a:", 0); 
//       this.b = +prompt("Enter b:", 0); 
//     },
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b; 
//     }
//   };
  
//   calculator.read(); 
//   alert(calculator.sum()); 
//   alert(calculator.mul()); 



// let arr = [1,2,3,4,5,6];
// const push = arr.unshift(50);
// console.log(arr);
// console.log(push)

// let arr = [2,4,6,8];
// const arr1 = arr.some(function (val) {
// return val & 1});

// // console.log(arr);
// arr[0] = 99;
// console.log(arr1);
// console.log(arr);


// let obj = {
//     name: "object",
//     age: 30
// }

// function sum() {
//     // console.log( 3+5);
//     return 3+5;
// }

// let arr= [true, "ashu", 800, null, undefined, obj, sum()];
// console.log(arr);


// let arr = [10,200,3000,400,50000,600,70,80,9];
// // let splice = arr.slice(0,9);

// // console.log(splice);
// // console.log(arr);
// console.log(arr.sort(function(a,b) {
//    return a-b;
// }));
// let a = "Ashutosh";
// let b = 'when you get job';
// let c=  `tell me looser`;

// let d = `${a} ${b} ${c}Complete your pending videos atleast`;
// // console.log(d[3]);
// let i = 0;
// while (i <d.length) {
//    console.log(d.toLowerCase(i));
//    i++;
// }


// let a = "The Ashutosh";
// let b = "do";
// let c = "nothing";
// let d = `${a} ${b} ${c}`;
// let search = "Ashutosh";
// let replace= "Richa";
// console.log(d.replace(search, replace));


  
// let arr = [10,20,50,80,50,90];
// let slice = arr.splice(1,3)
// // console.log(slice);
// console.log(arr);

// let a = "Batch not going well i want to quit this batch";
// let b = "i dont want to study anuymore"
// let c = `${a} ${b}`
// console.log(c.replace("not","geekster"));