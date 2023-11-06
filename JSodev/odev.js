//250 ye kadar olan sayıların toplamı nedir?
const ilkSoru = () => {
  let toplam = 0;
  for (i = 0; i <= 250; i++) {
    toplam = toplam + i;
  }
  console.log(toplam);
};
ilkSoru();

//25 ile 125 arasındaki sayıların toplamı nedir?
const ikinciSoru = () => {
  let toplam = 0;
  for (i = 25; i <= 125; i++) {
    toplam = toplam + i;
  }
  console.log(toplam);
};
ikinciSoru();

//1 ile 1000 Arasındaki Sayıların Toplamının ortalaması nedir?
const ucuncuSoru = () => {
  let toplam = 0;
  for (i = 1; i <= 1000; i++) {
    toplam = toplam + i;
  }
  let ortalama = toplam / i;
  console.log(ortalama);
};
ucuncuSoru();

//Birden yüze kadarki sayılardan, 5’e bölünenleri ekrana yazdırın
const dorduncuSoru = () => {
  for (i = 1; i < 100; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
};
dorduncuSoru();

//var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
//Dizinin en büyük sayısıı for döngüsü ile bul
//Dizinin en küçük sayısıı for döngüsü ile bul
const besinciSoru = () => {
  var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11];
  var enBuyuk = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > enBuyuk) {
      enBuyuk = numbers[i];
    }
  }
  console.log(enBuyuk);

  var enKucuk = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < enKucuk) {
      enKucuk = numbers[i];
    }
  }
  console.log(enKucuk);
};
besinciSoru();
