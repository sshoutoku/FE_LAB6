const container = document.querySelector('.persons');

const addButton = document.querySelector('#search-btn');

addButton.addEventListener('click', async () => {
    const {picture, cell, city, postcode, email} = await getPerson();
    const userContainer = document.createElement('div');
    userContainer.classList.add('person');
    userContainer.innerHTML = `<img src="${picture["large"]}" alt="person">
                               <div class="info">
                                   <p><span class="bold">Cell:</span> ${cell}</p>
                                   <p><span class="bold">City:</span> ${city}</p>
                                   <p><span class="bold">Postcode:</span> ${postcode}</p>
                                   <p><span class="bold">Email:</span> ${email}</p>
                               </div>`;
    container.appendChild(userContainer);
})

const getPerson = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const {results} = await response.json();
    return {
        picture: results[0]["picture"],
        cell: results[0]["cell"],
        city: results[0]["location"]["city"],
        postcode: results[0]["location"]["postcode"],
        email: results[0]["email"]
    };
}