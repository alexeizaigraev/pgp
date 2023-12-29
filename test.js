const db = require('./queries/db')
const tryCatchWrapper = require('./utils/trycatchwrapper')

const f0 = async function() {
    let data = await db.any('SELECT * FROM users');
    console.log(data)
} 

const f1 = async function() {
    let ff = await db.any('SELECT * FROM users where id = $1', 1);
    const callApi = async () => {
        const { error, data } = await wrapper(ff);
        if (!error) {
          console.info(data);
          return;
        }
        console.error(error);
      }
    //console.log(data[0])
}

f1()


// db.any('select * from users where id = $1', [1])
//   .then(data => {
//       console.log('DATA:', data); // print data;
//   })
//   .catch(error => {
//       console.log('ERROR:', error); // print the error;
//   });
