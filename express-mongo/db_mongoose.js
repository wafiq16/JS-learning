const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Wafiq16:Kamaluddin123@ciheras.qmxsf.mongodb.net/cobacoba?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('koneksi berhasil');
    } else {
        console.log(err);
        console.log('Koneksi gagal');
    }
});
module.exports = mongoose;

// 'mongodb+srv://Wafiq16:@Wqarba123@' +
//   'ciheras-shard-00-00-clv3h.mongodb.net:27017,' +
//   'ciheras-shard-00-01-clv3h.mongodb.net:27017,' +
//   'ciheras-shard-00-02-clv3h.mongodb.net:27017/cobacoba' +
//   'ssl=true';