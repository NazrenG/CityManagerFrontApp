CityManagerFrontApp yaradilir ,bu app-den sorgu atildiqda register olunur.Daha sonra login edildikde token qaytarir ve bu token local storage-e yazilir.
Postmanda header hissesinde key=>authentification,value=>bearer {token} yazilib sorgu gonderilir 
Backend kodu CityManagerApi-den gelir
