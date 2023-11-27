const nameInput = document.getElementById("formGroupExampleInput");
const surnameInput = document.getElementById("formGroupExampleInput2");
const ageInput = document.getElementById("formGroupExampleInput3");
const emailInput = document.getElementById("formGroupExampleInput4");
const formSubmit = document.getElementById("form");
const products = document.getElementById("products")


function axiosPost(x) {
  x.preventDefault();
  axios.post("https://655c84d425b76d9884fd7251.mockapi.io/nihad", {
      name: nameInput.value,
      surname: surnameInput.value,
      age: ageInput.value,
      email: emailInput.value,
    })
    .then((res) => {
      console.log(res.data);
      form.reset();
    });
}

form.addEventListener("submit", axiosPost);




// axios.get("https://655c84d425b76d9884fd7251.mockapi.io/nihad")
// .then((res) => {
//       db = res.data;
//       db.map(item => {
//         let div = document.createElement("div")
//         div.innerHTML = `
//             <p>${item.name}</p>
//             <p>${item.surname} $</p>
//             <p>${item.age} $</p>
//             <p>${item.studentID} $</p>
//         `;
//         products.append(div)
//       })
//     });