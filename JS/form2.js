const usernameInput = document.getElementById('formGroupExampleInput')
const emailInput = document.getElementById('formGroupExampleInput2')
const passwordInput = document.getElementById('formGroupExampleInput3')
const addressInput = document.getElementById('formGroupExampleInput4')
const countryInput = document.getElementById('formGroupExampleInput5')
const submitform = document.getElementById('form')


function axiosPost(x) {
    x.preventDefault();
    axios.post("https://655c84d425b76d9884fd7251.mockapi.io/nihad", {
        username:usernameInput.value,
        email:emailInput.value,
        password: passwordInput.value,
        address: addressInput.value,
        country: countryInput.value
      })
      .then((res) => {
        console.log(res.data);
        form.reset();
      });
  }
  
  form.addEventListener("submit", axiosPost); 