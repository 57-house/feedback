const host = "https://demo.57-house.org"
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("token") == null) {
        sessionStorage.setItem("cinqSeptToken",urlParams.get("token"))
    } 
    let xhr = new XMLHttpRequest();
    getSitesList(xhr)
}


function getSitesList(xhr) {
    xmlRequest(xhr, `https://www.demo.57-house.org/api/feedback-get-user-websites`, "", "GET", (result) => {
        console.log(result)
    })
}



function xmlRequest(xhr, url, data, method, callback) {
    xhr.open(method, url, true);
    xhr.setRequestHeader('Authorization', 'bearer db6f0bedfc27500a2dde42bb15ffd9564c2da8bfe36b909ee867bebd1ba819f5');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('accept', 'bearer application/json');
    xhr.onload = (result) => {
        callback(result)
    }
    xhr.send();
}