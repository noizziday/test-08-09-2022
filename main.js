//! Поверхностное копирование

// let arr = ["Hello", "Bye", "Good"];
// //let NewArr = arr;
// let newArr = [...arr];
// newArr[1] = "End";

// console.log(newArr);
// console.log(arr);

//? Spread оператор используется также для поверхностного копирования

// let obj = {
//   model: "Apple",
//   memory: 128,
//   year: 2022,
//   details: {
//     color: "Space Grey",
//     camera: "FullHd",
//   },
// };
// let newObj = { ...obj };
// let newObj = JSON.stringify(obj);
// newObj = JSON.parse(newObj);
// newObj.model = "Samsung";
// newObj.details.camera = "4K";
// console.log(newObj);
// console.log(obj);
// console.log(newObj.details.camera);
// console.log(obj.details.camera);

// ? JSON.parse() и JSON.stringify()
//* JSON.stringify() преобразует переданный элемент в строку с форматом. Затем JSON.parse() преобразует его обратно в обычный формат JS. Это позволяет выполнять глубокое копирование и для вложенных объектов, чего не происходит с поверхностным (spread)

// let user1 = {
//   name: "Johnny",
//   age: 23,
//   sayInfo() {
//     console.log(`Меня зовут ${this.name}, мне ${this.age}`);
//   },
// };
// console.log(user1);
// user1.sayInfo();
// let user2 = { ...user1 };
// console.log(user2);
// user2.name = "Bob";
// user2.sayInfo();
// let date = Date();
// console.log(date);
