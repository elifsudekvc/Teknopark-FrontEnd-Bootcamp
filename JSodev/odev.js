//250 ye kadar olan sayıların toplamı nedir?
const ilkSoru = () => {
  let toplam = 0;
  for (i = 0; i <= 250; i++) {
    toplam = toplam + i;
  }
  console.log(`ilk soru 250 ye kadar olan sayıların toplamı: ${toplam}`);
};
ilkSoru();

//25 ile 125 arasındaki sayıların toplamı nedir?
const ikinciSoru = () => {
  let toplam = 0;
  for (i = 25; i <= 125; i++) {
    toplam = toplam + i;
  }
  console.log(`ikinci soru 25 ile 125 arasındaki sayıların toplamı: ${toplam}`);
};
ikinciSoru();

//1 ile 1000 Arasındaki Sayıların Toplamının ortalaması nedir?
const ucuncuSoru = () => {
  let toplam = 0;
  for (i = 1; i <= 1000; i++) {
    toplam = toplam + i;
  }
  let ortalama = toplam / i;
  console.log(
    `üçüncü soru 1 ile 1000 Arasındaki Sayıların Toplamının ortalaması: ${ortalama}`
  );
};
ucuncuSoru();

//Birden yüze kadarki sayılardan, 5’e bölünenleri ekrana yazdırın
const dorduncuSoru = () => {
  for (i = 1; i < 100; i++) {
    if (i % 5 == 0) {
      console.log(
        `üçüncü soru Birden yüze kadarki sayılardan, 5’e bölünenler: ${i}`
      );
    }
  }
};
dorduncuSoru();

//var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
//Dizinin en büyük sayısıı for döngüsü ile bul
//Dizinin en küçük sayısıı for döngüsü ile bul
const besinciSoru = () => {
  let numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11];
  let enBuyuk = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > enBuyuk) {
      enBuyuk = numbers[i];
    }
  }
  console.log(`besinci soru Dizinin en büyük sayısı: ${enBuyuk}`);

  let enKucuk = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < enKucuk) {
      enKucuk = numbers[i];
    }
  }
  console.log(`besinci soru Dizinin en büyük sayısı: ${enKucuk}`);
};
besinciSoru();

//“  Çağatay Yıldız” isimli metindeki boşlukları kaldır.    (REPLACE)
const altinciSoru = () => {
  let isim = "    Çağatay Yıldız";
  Bosluksuzİsim = isim.trim();
  console.log(`altinci soru: ${Bosluksuzİsim}`);
};
altinciSoru();

//“cagatay yildiz” kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)
const yedinciSoru = () => {
  let isim = "cagatay yildiz";
  Yildizsizİsim = isim.replaceAll(" ", "").toUpperCase();
  console.log(`yedinci soru: ${Yildizsizİsim}`);
};
yedinciSoru();

//“******Çağatay Yıldız” isimli metindeki yıldızları kaldır (REPLACE)
const sekizinciSoru = () => {
  let isim = "******Çağatay Yıldız";
  Yildizsizİsim = isim.replaceAll("*", "");
  console.log(`sekizinci soru: ${Yildizsizİsim}`);
};
sekizinciSoru();

//“Çağatay  Yıldız” metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
const dokuzuncuSoru = () => {
  let isim = "Çağatay  Yıldız";
  tekBosluk = isim.replace("  ", " ");
  console.log(`dokuzuncu soru: ${tekBosluk}`);
};
dokuzuncuSoru();

//“**Tech Career**” isimli metindeki yıldızları kaldır (REPLACE)
const onuncuSoru = () => {
  let isim = "**Tech Career**";
  Yildizsiz = isim.replaceAll("*", "");
  console.log(`onuncu soru: ${Yildizsiz}`);
};
onuncuSoru();

//“Tech Career” isimli metnin soluna ve sağına 3 yıldız koy. “***Tech Career***” ( Normal toplama operatörü)
const onbirinciSoru = () => {
  let isim = "Tech Career";
  Yildizli = `***${isim}***`;
  console.log(`onbirinci soru: ${Yildizli}`);
};
onbirinciSoru();

//“Tech Career Bilişim teknolojileri” metnindeki son kelimeyi büyült (SUBSTRING)
const onikinciSoru = () => {
  let isim = "Tech Career Bilişim teknolojileri";
  SonKelime = isim.substring(20, 33).toUpperCase();
  console.log(`onikinci soru: ${SonKelime}`);
};
onikinciSoru();

//“Tech Career” kelimelerin ilk harflerini büyült (Substring ve upper)
const onUcuncuSoru = () => {
  var isim = "tech career";
  const myArray = isim.split(" ");
  const newArr = myArray.map((item) => { 
    return item[0].toUpperCase() + item.substring(1) 
  });
let N=newArr.join(" ");
   console.log(`onücüncü soru: ${N}`)

};
onUcuncuSoru();
