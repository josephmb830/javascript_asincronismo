//app para guardar datos en API
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Xenobot",
    "price": 1000,
    "description": "Made from embryonic cells derived from the African clawed frog, Xenopus laevis",
    "categoryId": 8,
    "images": [
        "https://cnnespanol.cnn.com/wp-content/uploads/2020/01/descarga-2-4.jpeg?quality=100&strip=info"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));