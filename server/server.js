const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const pathPublic = path.join(__dirname,'..', 'public');
app.use(express.static(pathPublic));
app.get('*',(req, res) => {
    res.sendFile(path.join(pathPublic,'index.html'))
});
app.listen(PORT, () => {
    console.log('Server is running');

});