const fs = require('fs');
//route handler
const index = (req, res) =>{
        const read = (fname) => {
        return new Promise((success, fail) => {
            fs.readFile(fname, 'utf8', (err, data) => {
                if(err){
                    return fail(err);
                }
                let json = JSON.parse(data);
                return success(json);
            });       
        });
    };

let file2 = 'students.json';

read(file2)
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        console.error(err);
    });
}

const post = (req, res) =>{
    const read = (fname) => {
        return new Promise((success, fail) => {
            fs.readFile(fname, 'utf8', (err, data) => {
                if(err){
                    return fail(err);
                }
                let json = JSON.parse(data);
                return success(json);
            });       
        });
    };
    const append = (fname, data) => {
        return new Promise((success, fail) => {
            fs.appendFile(fname, data, (err) => {
                if(err){
                    return fail(err);
                }
                var myJSON = JSON.stringify(fname);
                return success(myJSON);
            });
        });
    };
    

let file2 = 'students.json';
    
read(file2)
    .then((data) => {
        res.send(data);
    })
    .then ((data) =>{
        let prati = dodadi `${req.body.ime} ${req.body.prezime}`;
        return append(file2, dodadi);
    })
    
    .then((data)=>{
        res.send(data)
    })
    .catch(err => {
        console.error(err);
    });
}



module.exports = {
    index,
    post
};