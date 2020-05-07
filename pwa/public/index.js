   // console.log("navigator----------", navigator);
   async function getMovie() {
       const res = await fetch("/api/getMovie");
       const json = await res.json();
       //    console.log("res", json);
       //    document.write(json)
       document.getElementById("order").innerHTML = json
   }
   getMovie();