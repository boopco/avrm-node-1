const append = (fname, data) => {
    return new Promise((success, fail) => {
        fs.appendFile(fname, data, (err) => {
            if(err){
                return fail(err);
            }
            var myJSON = JSON.stringify(data); 
            return success(myJSON);
        });
    });
};

const read = (fname) => {
    return new Promise((success, fail) => {
        fs.readFile(fname, 'utf8', (err, data) => {
            if(err){
                
                return fail(err);
            }
            let json = JSON.parse(data);
            return success(data);
        });
    });
};
// route handler
const index = (req, res) => {
    res.send('ok');
}

const pero = (req, res) => {
    res.send('HI Pero!');
}

module.exports = {
    index,
    post
};