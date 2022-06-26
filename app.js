const express = require("express");
const path = require("path"); // klasör yolunu tam olarak her işletim sisteminde alabilmek için.
const ejs = require("ejs");
const app = express();
console.log(path.resolve(__dirname));

// Ejs, html şablonlarıyla, servis tarafımızdan gelen verileri birleştirebilmemizi sağlayan javascript kütüphanesidir.
app.set("view engine", "ejs");
//Eğer views klasörün değilde bizim tanımladığımız klasörüün altındaki dosyalara baksın ejs istersek diye kendi yolumuzu belirtebiliriz.
//app.set("views", path.resolve(__dirname, "yeni_klasor_adi"));

const kisilerDizisi = [
  { ad: "yakup1", id: 1 },
  { ad: "yakup2", id: 2 },
  { ad: "yakup3", id: 3 },
  { ad: "yakup4", id: 4 },
];
const dersAdi = "NodeJS with EJS";
const yas = 27;
const renkler = ["krımızı", "mavi", "gri", "siyah", "mor"];
const site = "<h1>Bu Tire ile yapılan EJS</h1>";
//general get
app.get("/", (reqeust, response) => {
  //path.resolve(__dirname) aslında bize şuanda bu klaöürün tam yolunu veririr. C:\Users\Yakup KAYA\Desktop\NodeJS-ProjectCategory
  //...sonuna eklenen "index.html ise o path yolunu bulduktan sonra sonuna verilen ikinci argümanı ekleme demektir."
  //response.sendFile(path.resolve(__dirname, "index.html"));
  response.render("index.ejs", {
    kisiler: kisilerDizisi,
    ders: dersAdi,
    yas,
    renkler,
    site,
  }); // artık buraya kendi verilerimi ekleyebilirim.
});

app.listen(3000, (_) => console.log("Server is initiliazed on 3000 port"));
