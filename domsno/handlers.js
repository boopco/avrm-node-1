const fs = require('fs');
// route handler
const index = (req, res) => {
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

    const post = (req, res) => {
    //     const read = (fname) => {
    //         return new Promise((success, fail) => {
    //             fs.readFile(fname, 'utf8', (err, data) => {
    //                 if(err){
    //                     return fail(err);
    //                 }
    //                 let json = JSON.parse(data);
    //                 return success(json);
    //             });       
    //         });
    //     };
        
    
    //  let file2 = 'students.json';
    
    // read(file2)
    //     .then((data) => {
    //         res.send(data);
    //     })
    //     .then((data) =>{
    //         return append(file2, `${req.body.ime} ${req.body.prezime}`);
    //     })
        
    //     .then ((data)=>{
    //         return read(file2)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
            
        }
        
    

module.exports = {
    index,
    post
};