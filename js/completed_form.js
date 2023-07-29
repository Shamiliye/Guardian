document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        gaming_platform: document.querySelector('#platform').value
    }

    sendForm(data);
});

async function sendForm(data) {
    const res = await fetch('./completed_db.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.status === 201) {
        alert('Thank you! Wait for updates')
    } else {
        alert('Something went wrong');
    }

    let a =1 
    let b = 21
    let c = a+b
    console.log(c);
}