/* Membuat tulisan terketik otomatis*/

  const textElement = document.querySelector(".greetings");
  const text = textElement.innerText;
  console.log(text);
  textElement.innerText = "";

  let i = 0;

  function typeText() {
    if (i < text.length) {
        if (i == 19) {
            textElement.innerHTML = textElement.innerHTML + "<br>";
        }

        else {
            textElement.innerHTML = textElement.innerHTML + text.charAt(i);
        }
      
      i++;
      setTimeout(typeText, 50); // Mengatur kecepatan ketikan
    }
  }

  // Mulai animasi ketik-terketik saat halaman dimuat
  window.addEventListener("load", typeText);


/* 
    Ini adalah bagian DOM. Disini saya menggunakan 
    querySelector dalam memilih elemen html yang 
    ingin saya manipulasi dengan javaScript
*/
let inputNama=document.querySelector("#name")
let inputEmail=document.querySelector("#email")
let inputSubject=document.querySelector("#subject")
let inputMessage=document.querySelector("#message")
let inputSubmit=document.querySelector(".send-message")


/* 
    menambahkan event listener di tombol submit.
    Dimana nanti ketika tombol submit ini ditekan
    maka akan membuka link untuk chat ke WA
    di tab baru. Sesuai dengan input yang
    dimasukkan oleh user nantinya.
*/
inputSubmit.addEventListener("click", ()=>{
    let nama = inputNama.value;
    let subject = inputSubject.value;
    let email = inputEmail.value;
    let message = inputMessage.value;
    let modal = document.querySelector(".modalkita")
    let textModal = document.querySelector(".text-modal")

    /* 
        pesan hanya` akan dikirim ke WA hanya ketika form
        yang diberikan diisi semua.
    */
    if (!(nama === "" || email === "" || message === "" || subject === "") && email.includes("@")) {
       
        pesanBaru = message.replace(/ /g, "%20");

        pesan = `Perkenalkan%20nama%20saya%20*${nama}*.%20Email%20saya%20${email}.%0A%0A*${subject}*%0A%0A${message}`;

        modal.classList.remove("d-none")
        modal.classList.add("bg-sukses")
        textModal.innerHTML = "Kamu akan diarahkan ke WhatsApp"

        setTimeout(() => {
            const newTab= window.open();
    
            newTab.location.href = "https://wa.me/6282164889948?text=" + pesan;
            modal.classList.add("d-none")
            modal.classList.remove("bg-sukses")
            textModal.innerHTML = ""

        }, 2000)
        
    }

    else if (!(nama === "" || email === "" || message === "" || subject === "") && !email.includes("@")) {
        modal.classList.remove("d-none")
        modal.classList.add("bg-gagal")
        textModal.innerHTML = "Pastikan email tepat"

        setTimeout(() => {
            modal.classList.add("d-none")
            modal.classList.remove("bg-sukses")
            textModal.innerHTML = ""

        }, 2000)
    }

    else {
        modal.classList.remove("d-none")
        modal.classList.add("bg-gagal")
        textModal.innerHTML = "Pastikan form tidak kosong"

        setTimeout(() => {
            modal.classList.add("d-none")
            modal.classList.remove("bg-sukses")
            textModal.innerHTML = ""

        }, 2000)
    }

    
})