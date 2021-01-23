setInterval(() => {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const {phone, name, email, location, gender, dob, picture} = data.results[0];
        const fullName = `${name.title} ${name.first} ${name.last}`;
        const address = `${location.state}, ${location.city}, ${location.country}.`;
        const age = dob.age;
        const image = picture.large;

        console.log(user, phone, email, address, gender, age);
        document.getElementById('image').src = image;
        document.getElementById('fullName').innerText = `${fullName}`;
        document.getElementById('gender-age').innerText = `${gender}`;
        document.getElementById('age').innerText = `${age} Years Old`;
        document.getElementById('email').innerText = `E-mail-> ${email}`;
        document.getElementById('phone').innerText = `Phone-> ${phone}`;
        document.getElementById('address').innerText = `Address-> ${address}`;
    })

}, 5000);