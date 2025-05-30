const apiURL = ""


fetch =(apiURL) 
.then(response => {
    if(!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);

    }
    return response.json(); 

})
.then(data => {
    console.log(data); 
}) 
.catch(error => {
    console.error('Error fetching data: ', error); 
}); 