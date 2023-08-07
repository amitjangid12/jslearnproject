// {
//     const day = 'Sunday';

//     switch (day) {
//       case 'Monday':
//       case 'Tuesday':
//       case 'Wednesday':
//       case 'Thursday':
//       case 'Friday':
//         console.log('It is a weekday');
//         break; // Exit the switch statement
//       case 'Saturday':
//       case 'Sunday':
//         console.log('It is a weekend');
//         break; // Exit the switch statement
//       default:
//         console.log('Invalid day');
//     }



//     for (let i = 0; i < 10; i++) {
//         if (i === 5) {
//           break; // Exit the loop when i reaches 5
//         }
//         // console.log(i);
//       }



//     function fetApi() {
//         let bkName = document.getElementById('bkname');
//         let auth = document.getElementById('auth');
//         const postData = {
//             bookName: bkName.value,
//             author: auth.value,
//             discription: auth.value
//         }
//         if (!bkName.value || !auth.value) {
//             alert('Please fill all fields')
//         } else {

//             fetch('http://localhost:4400/product', {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(postData)
//             })
//                 .then(r => (r.json()))
//                 .then(d => console.log(d))
//                 .catch(error => console.error(error));

//         }
//     }

//     let debounceTimeout;

// // function debounce(func, delay) {
// //     console.log('debounce');
// // //   clearTimeout(debounceTimeout);
// //   debounceTimeout = setTimeout(func, delay);
// // }

//      function fetchdata(delay) {
//         clearTimeout(debounceTimeout);
//         debounceTimeout = setTimeout(()=>(

//             fetch('http://localhost:4400/product')
//             .then(r => r.json())
//             .then(d => {
//                 const searchValue= document.getElementById("search").value
//                 const filtered = d.filter(i=> i.bookName.toUpperCase().includes(searchValue.toUpperCase()))
//                 console.log(filtered);
//                 if(filtered.length > 0){
//                     console.log('if');
//                 const bookList = filtered.map(i=>`<li key=${i.id}>` + i.bookName + '</li>')
//                 document.getElementById('dj').innerHTML =  bookList.join('') 

//                 document.getElementById('disD').innerHTML = 'Filtered data : '+ filtered.length
//                 console.log(filtered.length);
//             }
//             else{
//                 console.log('not match');
//                 document.getElementById('disD').innerHTML = ''
//                 document.getElementById('dj').innerHTML = searchValue + ' result not found'
//             }
//             })
//             .catch(er => console.log('kk', er))
//         ), delay);



//     }
// fetchdata(500)

//     function fun2() {
//         let bkName = document.getElementById('bkname');
//         let auth = document.getElementById('auth');
//         const postData = {
//             name: bkName.value,
//             age: auth.value,
//         }
//         if (!bkName.value || !auth.value) {
//             alert('fill all fields')
//         } else {

//             fetch('http://localhost:2000/users', {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(postData)
//             })
//                 .then(r => r.json())
//                 .then(d => console.log(d))
//             bkName.value = ''
//             auth.value = ''
//         }
//     }

//     function funGet() {
//         console.log('get');
//         const show = document.getElementById('ajd')
//         // show.style.display=''
//         fetch('http://localhost:2000/users')
//             .then(res => res.json())
//             .then(r => r.map(i => show.innerHTML += '<div> name : ' + i.name + '</div> ' + '<div> age &nbsp;&nbsp; : ' + i.age + '</div>'))
//             .catch(err => console.log(err))
//     }
//     funGet()


//     // // function table() {
//     // //     let tableInput = document.getElementById("table-input").value;
//     // //     console.log(tableInput);
//     // //     let tablePrint = document.getElementById("table");
//     // //     // print 1-10
//     // //     for (let i = 1; i <= 10; i++) {
//     // //         console.log(i);
//     // //         tablePrint.innerHTML += tableInput + ' * ' + i + ' = ' + tableInput * i + '<br>';
//     // //     }
//     // // }
//     // // function pyramid1() {
//     // //     let pyramidInput = document.getElementById("pyramid-input").value;

//     // //     let pyramidPrint = document.getElementById("pyramid");

//     // //     for(let i = 1; i <= 5;i++){
//     // //         console.log(i);
//     // //         // for(let k =1; k<=5-i;k++){
//     // //         //     pyramidPrint.innerHTML +='&#160;'
//     // //         // }

//     // //         for(let j = 1; j <= i;j++){
//     // //             console.log(j);
//     // //             pyramidPrint.innerHTML += pyramidInput;
//     // //         }

//     // //         pyramidPrint.innerHTML += "<br>"
//     // //     }


//     // // }

//     // // function pyramid2() {
//     // //     let pyramidInput = document.getElementById("pyramid-input").value;

//     // //     let pyramidPrint = document.getElementById("pyramid");


//     // //         for (let i = 5; i >= 1; i--) {

//     // //             // for (let index = 5; index > i; index--) {

//     // //             //     pyramidPrint.innerHTML += '&nbsp;'
//     // //             // }
//     // //             for (let j = 1; j <= i; j++) {

//     // //                 pyramidPrint.innerHTML += pyramidInput;

//     // //             }

//     // //             pyramidPrint.innerHTML += "<br>"
//     // //         }


//     // // }

//     // // function alphabets() {

//     // //     let alphabetPrint = document.getElementById("table");

//     // //     let alphabetInput = document.getElementById("alphabet-input").value;
//     // //     let alphabet = /[^a-zA-Z]/g;

//     // //     let alphabetOnly = alphabetInput.replace(alphabet, '')

//     // //     // let numberSymbol = alphabetInput.replace(alphabetOnly, '')
//     // //     console.log({ alphabetOnly,alphabetInput });
//     // //     alphabetPrint.innerHTML = alphabetOnly

//     // // }

//     // // function fullName(){
//     // //     let firstName = document.getElementById("first-name").value;
//     // //     let middleName = document.getElementById("middle-name").value;
//     // //     let lastName = document.getElementById("last-name").value;
//     // //     let fullName = document.getElementById("name");

//     // //     console.log({firstName,middleName,lastName});
//     // //     fullName.innerHTML +=firstName + ' ' + middleName + ' ' + lastName;

//     // // }




//     //----------------
//     // function oddEven() {

//     //     let odd = document.getElementById("odd");
//     //     let even = document.getElementById("even");
//     //     odd.innerHTML = 'Odd: '
//     //     even.innerHTML = 'Even: '
//     //     let oddEvenInput = document.getElementById("odd-even-input");
//     //     let inputValue = oddEvenInput.value.split(',')
//     //     for (let i = 0; i < inputValue.length; i++) {
//     //         (BigInt(inputValue[i].replace(/\s/g, '')) % BigInt(2) == 0) ? (even.innerHTML += inputValue[i] + ' ') : (odd.innerHTML += (inputValue[i]) + ' ');
//     //     }
//     // }

//     // function numberDisplay() {
//     //     let showTimes = document.getElementById("times-show");
//     //     let numberCount = document.getElementById("number-show")
//     //     let numberValue = numberCount.value.split(',')
//     //     let count = {};
//     //     showTimes.innerHTML = ''
//     //     let numberFilter = numberValue.filter(number => number.replace(/\s/g, ''))
//     //     console.log(numberFilter);
//     //     for (let i = 0; i < numberFilter.length; i++) {

//     //         let value = numberFilter[i].trim()
//     //         count[value] >= 0 ? count[value]++ : count[value] = 1;
//     //     }
//     //     for (let key in count) {
//     //         showTimes.innerHTML += key + ' = ' + count[key] + '<br>'
//     //     }
//     // }

//     // let display = document.getElementById("user-details");
//     // let people = [
//     //     { firstName: "ajay", lastName: "varma", age: 25, test: "varma", num: 7 },
//     //     { firstName: "vivek", lastName: "varma", age: 29 },
//     //     { firstName: "sanju", lastName: "sharma", age: 34 }
//     // ];

//     // let keys = Object.keys(people[0]);
//     // let select = document.getElementById("dropdown");

//     // for (let i = 0; i < keys.length; i++) {
//     //     let option = document.createElement("option");
//     //     option.textContent = keys[i];
//     //     select.append(option);
//     // }

//     // select.onchange = function () {
//     //     display.innerHTML = "";
//     //     for (let i = 0; i < people.length; i++) {
//     //         let user = people[i];
//     //         let userSelect = select.value;
//     //         (userSelect in user) ? (display.innerHTML += user[userSelect] + " ") : (display.innerHTML += '' + ' ')
//     //     }
//     // }

//     //----------------






//     // {
//     //     let display = document.getElementById("user-details");

//     //     let arr = [45, 45, 6, 45, 23.8, 6, 634, 3, 634, 4, 4, 3,45]
//     //     let arr1=[78,3839,2,5,3]
//     //     arr1.slice(0,arr1.length)
//     //     console.log(arr1);
//     //     let comb=arr.concat(arr1,arr,arr1).join('////////')
//     //     console.log(comb);
//     //     arr[arr.length]=7987798
//     //     let result = [...new Set([...arr])];
//     //     let ar = Array.from(new Set(arr));
//     //     console.log(ar);
//     //     // let filterr = arr.filter((c,i,a)=> a.indexOf(c)==i)
//     //     console.log(result);
//     //     display.innerHTML += result
//     //     // console.log(arr);


//     // }
//     {
//         //     const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//         // const isEven = (value) => value % 2 === 0;
//         // const isOdd = (value) => !isEven(value);
//         // const isPrime = (value) => {
//         //   for (let i = 2, s = Math.sqrt(value); i <= s; i++) {
//         //       if (value % i === 0) return false;
//         //       console.log({i,s});
//         //   }

//         //   return value > 1;
//         // };
//         // console.log(Math.sqrt(5));
//         // const even = input.filter(isEven);
//         // const odd = input.filter(isOdd);
//         // const prime = input.filter(isPrime);

//         // console.log({ input, even, odd, prime });
//         // }
//         // {
//         // let arr = ["John", "Smith", "amit", "nemi", "out", "chand"]
//         // let newArr=arr.map(el=>el.charAt(0).toUpperCase()+ el.slice(1))
//         // document.write(newArr)
//         // let array=[]
//         // for(let i=0;i<arr.length;i++){
//         //     let arrN=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
//         //     // console.log(arrN);
//         //     array.push(arrN)
//         // }
//         // console.log(array);
//         // }
//     }
//     {
//         // let arr = [
//         //     { id: 1, n: 'a' },
//         //     { id: 2, n: 'd' },
//         //     { id: 3, n: 'a' },
//         //     { id: 2, n: 'e' },
//         //     { id: 1, n: 'a' }
//         // ]
//         // let unionArr = [];

//         // for (let i = 0; i < arr.length; i++) {
//         //     let found = false;

//         //     for (let j = 0; j < unionArr.length; j++) {
//         //         if (arr[i].id === unionArr[j].id) {
//         //             found = true;
//         //             break;
//         //         }
//         //     }

//         //     if (!found) {
//         //         unionArr.push(arr[i]);
//         //     }
//         // }

//         // console.log(unionArr);
//         // let ner = [...new Set(arr.map(el => el.id))]
//         // console.log(ner);
//     }

//     {

//         // Setup
//         // const myArray = [];
//         // let number = 100
//         // // Only change code below this line
//         // for(let i=2,s = Math.sqrt(number); i<=s; i++){
//         //     if(number%i===0){
//         //         console.log(number);

//         //         return false;
//         //     }
//         //     console.log(number>1);
//         // myArray.push(number)
//         //     return number>1
//         // }
//         //     console.log(myArray);
//     }
//     {

//         // let myArr=[]
//         // let count = 0
//         // for (let j = 2; j <= 50; j++) {
//         //     for (let i = 1; i <= j; i++) {
//         //         if (j % i == 0) {
//         //             count++
//         //         }

//         //     }

//         //     if (count == 2) {
//         //         document.write(j+ ', ')
//         //         // console.log(j/19);
//         //         myArr.push(j)
//         //     }
//         //     count = 0
//         // }
//         // console.log(myArr.length);
//         //=====




//         // let arr = [3, 56, 7, 832, 23,32];
//         // let i = 0;
//         // do{
//         //     console.log('do start');
//         // document.write(arr[i]*2+' ')
//         // console.log('do start 1');

//         // i++
//         // console.log('do start i++ bad');

//         // }
//         // while(i<arr.length)
//         // console.log('while bad');

//     }
//     // {
//     //     let show=document.getElementById("dj")
//     //     let data = fetch('http://localhost:4400/product')
//     //     data.then(res=>res.json())
//     //     .then(val=> val.map(ele=>{
//     //         show.innerHTML+="<img style='width:200px; height:150px' src='" +ele.photo+"'>" + ' '
//     //     }))

//     // }

// //     {
// //         let display = document.getElementById('dj')
// //         function he() {
// //             let my = 'aj'
// //             display.innerText = my
// //         } he()
// //         function heChange() {
// //             my = 'ajangid'
// //             display.innerText = my
// //         }

// //     }
// //     {
// //         let sum = 0
// //         function cal(num) {
// //             for (let i = 0; i <= num; i++) {
// //                 sum += i

// //             }
// //             console.log(sum);
// //         }


// //         function momois(fun) {
// //             let cache = {}
// //             return function (...args) {
// //                 let n = args[0]
// //                 if (n in cache) {
// //                     console.log(cache);
// //                     return cache[n]
// //                 } else {
// //                     let result = fun(n)
// //                     cache[n] = result
// //                     console.log('result first');

// //                     return result
// //                 }
// //             }
// //         }
// //         console.time()
// //         const show = momois(cal)
// //         show(5)
// //         console.timeEnd()
// //         console.time()
// //         // const show= momois(cal)
// //         show(5)
// //         console.timeEnd()
// //         // }
// //     }
// //     // {
// //     //     let val = 100;
// //     //     function timeCount() {
// //     //         // console.log('jk');
// //     //         for (var i = 0; i < val; i++) {
// //     //             function time(i){
// //     //             console.log('adada');
// //     //             setTimeout(() => {
// //     //                 console.log(i);
// //     //             }, i * 1000)
// //     //         }

// //     //          time(i)
// //     //         }
// //     //     }timeCount()

// //     // }
// //     {
// //         let arNum = [26, 23, 30, 24, 15, 16, 19, 48, 50, 0, 45]
// //         // let arSort=arNum.sort((a,b)=>a-b)
// //         let n = 50
// //         for (let i = 0; i < arNum.length; i++) {
// //             for (let j = i + 1; j < arNum.length; j++) {
// //                 for (let k = i + 2; k < arNum.length; k++) {
// //                     let num1 = arNum[i]
// //                     let num2 = arNum[j]
// //                     let num3 = arNum[k]
// //                     if (num1 + num2 + num3 == n) {
// //                         console.log(num1 + ' + ' + num2 + ' + ' + num3 + ' = ' + parseInt(num1 + num2 + num3))
// //                     }
// //                 }
// //             }
// //         }
// //     }
// //     {
// //         let str = 'tensil'
// //         let ana = 'listen'

// //         let strSort = str.split('').sort()
// //         let anaSort = ana.split('').sort()
// //         console.log(strSort.join(''));
// //         if (strSort.join('') === anaSort.join('')) {
// //             console.log('this is anagram ')
// //         } else {
// //             console.log('no anagram find');
// //         }

// //     }
// //     {
// //         let str = 20455402
// //         console.log();
// //         let strNum = str.toString()
// //         console.log(strNum.length);
// //         // let strSort = str.split('')
// //         let string = ''
// //         // let strSortRev= str.split('').reverse()
// //         for (let i = strNum.length - 1; i >= 0; i--) {
// //             console.log(strNum[i]);
// //             string += strNum[i]
// //         }

// //         if (strNum === string) {
// //             console.log('this is same ')
// //         } else {
// //             console.log('no find');
// //         }
// //         // console.log(strSort);

// //     }
// //     {
// //         let num = 512
// //         let reversed = 0;
// //         let org = num;

// //         while (num > 0) {
// //             let digit = num % 10;
// //             reversed = (reversed * 10) + digit
// //             num = Math.floor(num / 10);
// //         }

// //         let condition = org === reversed ? 'is palindrom: ' + org : 'not';

// //         console.log(condition)

// //     }
// //     {
// //         let no = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 12, 15, 16, 17, 18]
// //         // let s =11
// //         let t = 0
// //         // let ts=0
// //         for (let i = 0; i < no.length; i++) {
// //             t += no[i]
// //         }
// //         // for(let i=0;i<=s;i++){
// //         //     ts+=i
// //         // }
// //         let sum = ((no.length + 1) * (no.length + 2)) / 2;
// //         console.log('missing number in no array: ' + (sum - t));
// //         console.log(t);
// //     }
// //     {
// //         let o1 = { a: 3, b: 7, c: 89 }
// //         let o2 = { a: 78 }
// //         let o3 = { as: 67 }
// //         let o4 = { c: 67 }
// //         let o5 = { asdf: 67 }

// //         Object.assign(o1, o2, o3, o4, o5)
// //         console.log(o1);
// //         let asignO = { ...o1, ...o2, ...o3, ...o4, ...o5 }
// //         console.log(asignO);
// //     }
// //     {
// //         const obj = {
// //             name: "John",
// //             age: 30,
// //             city: "New York",
// //             country: "USA"
// //         };

// //         const filteredObj = {};
// //         const allowedProps = ["name", "age"];

// //         Object.keys(obj).forEach((key) => {
// //             if (allowedProps.includes(key)) {
// //                 filteredObj[key] = obj[key];
// //                 console.log(filteredObj); // { name: "John", age: 30 }
// //             }
// //             else {
// //                 console.log(filteredObj[key] = obj[key])
// //             }
// //         });


// //     }
// //     {
// //         const person = { name: 'John', age: 30, location: 'New York' };
// //         const { name: pna, age: personAge, location: personLocation } = person;
// //         console.log(pna, personAge, personLocation);

// //     }
// //     {
// //         const numbers = [1, 2, 3, 4];
// //         const [a, , c, d] = numbers;
// //         console.log(a, c, d);

// //     }



// //     {
// //         let vovel = 'aeiou'

// //         let sentence = 'this is code is that the'
// //         let count = 0
// //         for (let i = 0; i < vovel.length; i++) {
// //             for (let j = 0; j < sentence.length; j++) {
// //                 if (vovel[i] == sentence[j]) {
// //                     count++
// //                 }
// //             }
// //         }
// //         console.log(count);
// //     }
// //     {
// //         let count = 0
// //         let vovel = 'aeiou'

// //         let sentence = 'this is aacode is that the'
// //         for (let i = 0; i < sentence.length; i++) {
// //             if (vovel.includes(sentence[i])) {
// //                 count++
// //             }
// //         }
// //         console.log(count);
// //     }
// //     function funnRedu() {
// //         let valInput = document.getElementById("reduc")
// //         let vala = valInput.value.split(',')
// //         // console.log(vala);
// //         let val = vala.reduce((a, c) => { return Math.min(a, c) }, 1)
// //         console.log(val);

// //     }
// }

// Get references to the input and image elements
// const imageUpload = document.getElementById('imageUpload');
// const previewImage = document.getElementById('previewImage');

// // Add an event listener to the input field
// imageUpload.addEventListener('change', function () {
//   // Check if a file is selected
//   if (imageUpload.files && imageUpload.files[0]) {
//     // Create a FileReader object
//     const reader = new FileReader();

//     // Set the image source when the FileReader finishes loading the file
//     reader.onload = function (e) {
//       previewImage.src = e.target.result;
//     };

//     // Read the selected file as a Data URL
//     reader.readAsDataURL(imageUpload.files[0]);
//   }
// });
// Get reference to the form and input elements


// const form = document.getElementById('registrationForm');
// const imageUpload = document.getElementById('imageUpload');
// const previewImage = document.getElementById('previewImage');
// // Add submit event listener to the form
// function resetForm() {
//   form.reset();
//   previewImage.src = '#';
//   previewImage.style.display = 'none';
// }
// // function handleInput(event){
// // event.preventDefault()
// function handleImg(ee,er){
// console.log(ee);
//   // const file = event.target.files[0];
//   if (!ee) {
//     alert('select image')
//   }
//   else if(ee){
//     console.log('file upload');
//     const reader = new FileReader();
//     reader.onload = function(e) {
//       previewImage.src = e.target.result;
//       previewImage.style.display = 'block';
//     };
//     reader.readAsDataURL(er);
//   }
// }

// function handleInput(){
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;

//   if (name.trim() === '') {
//     alert('Please enter your name.');
//     return false;
//   }

//   if (email.trim() === '') {
//     alert('Please enter your email.');
//     return false;
//   }

//   return true; // Return true if all validations pass
// }
// // imageUpload.addEventListener('change', function(event) {
// // });

// form.addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the default form submission
// console.log(event);
//   // Get form data


//   // Perform form validation

//     // alert('Please fill in all fields')
//      if(!handleInput()&& !handleImg()){
//       console.log('else if');

//       resetForm()

//     }
//     // handleInput()
//     // handleImg()


// });



// Get reference to the form and input elements
const form = document.getElementById('registrationForm');
const imageUpload = document.getElementById('imageUpload');
const previewImage = document.getElementById('previewImage');
const errorContainer = document.getElementById('errorContainer');

// Function to reset the form elements
function resetForm() {
  form.reset();
  previewImage.src = '#';
  previewImage.style.display = 'none';
  errorContainer.innerHTML = ''; // Clear error messages
}

// Function to display error message
function displayError(message) {
  const errorElement = document.createElement('p');
  errorElement.innerText = message;
  errorContainer.appendChild(errorElement);
}

// Function to validate the form inputs
function validateForm() {
  // Clear previous error messages
  errorContainer.innerHTML = '';

  // Perform validation for each input field
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const image = imageUpload.files[0];
  if (name.trim() === '') {
    displayError('Please enter your name.');
    return false;
  }

  if (email.trim() === '') {
    displayError('Please enter your email.');
    return false;
  }

  if (!image) {
    displayError('Please select an image.');
    return false;
  }

  // Additional validation logic for the image, if needed

  return true; // Return true if all validations pass
}

// function handleImageUpload(event) {
//   const file = event.target.files[0];

//   if (file) {
//     // Display the preview image
//     const reader = new FileReader();
//     reader.onload = function() {
//       previewImage.src = reader.result;
//       previewImage.style.display = 'block';
//     };
//     reader.readAsDataURL(file);
//   } else {
//     // Reset the preview image
//     previewImage.src = '#';
//     previewImage.style.display = 'none';
//   }
// }

// imageUpload.addEventListener('change', function(event){
//   const file = event.target.files[0];

//   if (file) {
//     // Display the preview image
//     const reader = new FileReader();
//     reader.onload = function() {
//       previewImage.src = reader.result;
//       previewImage.style.display = 'block';
//     };
//     reader.readAsDataURL(file);
//   } else {
//     // Reset the preview image
//     previewImage.src = '#';
//     previewImage.style.display = 'none';
//   }
// })

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   if (!validateForm()) {
//     return; // Exit if validation fails
//   }
//   resetForm();
// });

{
  const userName = document.getElementById('userName');
  const emailId = document.getElementById('emailId');

  const submitButton = document.getElementById('sub');
  submitButton.addEventListener('mouseover', (buton) => {
    console.log('mouser-over', buton);
    if (!userName.value || !emailId.value) {
      console.log('if');
      buton.target.classList.toggle('move')
      submitButton.style.backgroundColor = 'red'
    } else if (userName.value || emailId.value) {
      console.log('esle');

      buton.target.classList.add('stop')
      submitButton.style.backgroundColor = 'blue'

    }
  })
}