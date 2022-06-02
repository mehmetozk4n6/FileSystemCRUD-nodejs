const fs = require("fs");

const writefile = () =>
  fs.writeFile(
    "example.json",
    '{"name": "Employee 1 Name", "salary": 2000} ',
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU.");
      readfile();
    }
  );

const readfile = () =>
  fs.readFile("example.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("DOSYA OKUNDU");
    appendfile();
  });

const appendfile = () =>
  fs.appendFile(
    "example.json",
    ',{"name": "Employee 2 Name", "salary": 1000}',
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("YENI VERI EKLENDI.");
      deletefile();
    }
  );

const deletefile = () =>
  fs.unlink("example.json", (err) => {
    if (err) console.log(err);
    console.log("DOSYA SILINDI.");
  });

writefile();
