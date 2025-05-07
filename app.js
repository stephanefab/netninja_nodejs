const express = require("express");
const app = express();

const path = (filename) => {
    return require('path').join(__dirname, 'views/'+filename+'.html');
}

app.get('/', (req, res) => {
    res.sendFile(path('index'));
});
app.get('/about', (req, res) => {
    res.sendFile(path('about'));
});
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
app.get('/contact', (req, res) => {
    res.sendFile(path('contact'));
});
app.get('/profil', (req, res) => {
    res.sendFile(path('profil'));
});

app.use((req, res) => {
    res.status(404).sendFile(path(404));
});
app.listen(5500, () => {
 console.log("Server is running on port 5500");
});