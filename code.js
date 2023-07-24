// mukemmel sayı bulma 


function mukSayiBulma(sayi){
   let toplam = 0;

   for(let i = 2; i<=sayi/2; i++)
   {
    if(sayi%i == 0)
    {
        toplam+=i;
    }
   }
   toplam+= 1+sayi;

   if(toplam == sayi*2)
   {
    alert("Mukemmel sayı");
   }
   else
   {
    alert("mukemmel sayı değil");
   }

}