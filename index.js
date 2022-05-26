// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//User Peratama
const favoriteColorUserPertama = new Set();
favoriteColorUserPertama.add('Yellow');
favoriteColorUserPertama.add('Pink');
favoriteColorUserPertama.add('White');
favoriteColorUserPertama.add('Purple');

const favoriteRestaurantUserPertama = new Set();
favoriteRestaurantUserPertama.add('Bento');
favoriteRestaurantUserPertama.add('Sushi');
favoriteRestaurantUserPertama.add('Pancake');
favoriteRestaurantUserPertama.add('Eggy');
favoriteRestaurantUserPertama.add('Tempura');
favoriteRestaurantUserPertama.add('Bento');
favoriteRestaurantUserPertama.add('Eggy');
favoriteRestaurantUserPertama.add('Padang');
favoriteRestaurantUserPertama.add('Tteok');
favoriteRestaurantUserPertama.add('Sushi');
favoriteRestaurantUserPertama.add('Sushi');

const sdUserPertama = {
    name: 'SD 01', 
    city: 'Jakarta', 
    graduate: 2016
};

const smpUserPertama = {
    name: 'SMP 02', 
    city: 'Jakarta', 
    graduate: 2019
}

const smaUserPertama = {
    name: 'SMA 03', 
    city: 'Tangerang'
}

const educationUserPertama = [];
educationUserPertama.push(sdUserPertama);
educationUserPertama.push(smpUserPertama);
educationUserPertama.push(smaUserPertama);

//user kedua
const favoriteColorUserKedua = new Set();
favoriteColorUserKedua.add('Blue');
favoriteColorUserKedua.add('Black');
favoriteColorUserKedua.add('Grey');

const favoriteRestaurantUserKedua = new Set();
favoriteRestaurantUserKedua.add('Tempura');
favoriteRestaurantUserKedua.add('Bento');
favoriteRestaurantUserKedua.add('Eggy');
favoriteRestaurantUserKedua.add('Sushi');
favoriteRestaurantUserKedua.add('Pancake');
favoriteRestaurantUserKedua.add('Padang');
favoriteRestaurantUserKedua.add('Katsu');
favoriteRestaurantUserKedua.add('Geprek');
favoriteRestaurantUserKedua.add('Pancake');
favoriteRestaurantUserKedua.add('Eggy');

const sdUserKedua = {
    name: 'SD 02', 
    city: 'Jakarta', 
    graduate: 2010
};

const smpUserKedua = {
    name: 'SMP 03', 
    city: 'Bogor', 
    graduate: 2013
}

const smaUserKedua = {
    name: 'SMA 01', 
    city: 'Surabaya', 
    graduate: 2016
}

const universitasUserKedua = {
    name: 'Universitas Maju', 
    city: 'Tangerang'
}

const educationUserKedua = [];
educationUserKedua.push(sdUserKedua);
educationUserKedua.push(smpUserKedua);
educationUserKedua.push(smaUserKedua);
educationUserKedua.push(universitasUserKedua);


const firstUser = {};
firstUser.name =  'Monica';
firstUser.gender =  'Female';
firstUser.age =  17;
firstUser.email =  'monica@dingdong.com';
firstUser.favoriteColor =  favoriteColorUserPertama;
firstUser.isHavePet =  'Yes';
firstUser.education =  educationUserPertama;
firstUser.favoriteRestaurant =  favoriteRestaurantUserPertama;

const secondUser = {};
secondUser.name =  'Wendy';
secondUser.gender =  'Male';
secondUser.age =  23;
secondUser.email =  'wendy@dingdong.com';
secondUser.favoriteColor =  favoriteColorUserKedua;
secondUser.isHavePet =  'No';
secondUser.education = educationUserKedua;
secondUser.favoriteRestaurant = favoriteRestaurantUserKedua;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};