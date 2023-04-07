function kun() {
  const a1 = Number(document.querySelector(".birinshiSan").value);
  const a2 = Number(document.querySelector(".ekinshiSan").value);
  const b = Number(document.querySelector(".aqirgiSan").value);
  if(a2<a1 || b<a2 || a1<0){
    alert("Qa'te mag'liwmat kiritildi !!!");
  }
  else{
    var S = ((b + a1) / 2) * (((b - a1) / (a2 - a1)) + 1);
    document.querySelector(".juwabi").innerText = S;
}}
