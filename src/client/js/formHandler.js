const postData = async (url = "", data = {}) => {
    console.log('Analyzing now:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Received data:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article-url').value

    if(Client.checkURL(formText)) {
        console.log("::: Form Submitted :::")
        postData('http://localhost:8081/new', {url: formText})

        .then(function (res) {
        // document.getElementById("text").innerHTML = `Text:  ${res.text}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById("score").innerHTML = `score: ${res.score_tag}`;

        })
    } else {
        alert('Invalid URL!!!')
    }
}

export { handleSubmit }

