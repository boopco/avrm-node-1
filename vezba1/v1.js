const fs = require('fs');

const getData = (fname) => {
    return new Promise((success, fail)=>{
        fs.readFile(fname, 'utf8', (err, data)=>{
            if (err){
                return fail(err);
            }
            let json = JSON.parse(data);
            return success(json);
        });
    });
};
getData('persons.json')
    .then(students =>{
        let ssbn = students.sort((a,b) =>{
            if (a.ime.length >b.ime.length){
                return -1;
            } else if (a.ime.length < b.ime.length){
                return 1;
            }else {
                return 0;
            }
        })
    });


    console.log('Student so naj kratko ime e studentot:', ssbn[ssbn.length - 1].ime);