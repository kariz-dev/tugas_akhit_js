function buat_login() {
    // menghapus element button dengan id="X"
    var elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);

    // membuat tulisan SILAHKAN MENDAFTAR
    var paragraf = document.createElement("p");
    paragraf.innerHTML = "silahkan mendaftar";
    paragraf.className = "tulisan_login";

    // mengisikan  element <div> dengan element <form> yang baru dibuat
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(paragraf);
    var form = document.createElement("form");
    element.appendChild(form);

    // membuat label Nama User
    var labelNama = document.createElement("label");
    labelNama.innerHTML = "Nama User";
    form.appendChild(labelNama);
    // membuat kolom input Nama User
    var inputNama = document.createElement("input");
    inputNama.type = "text";
    inputNama.className = "form_login";
    inputNama.placeholder = "Nama User.."
    form.appendChild(inputNama);

    // membuat label Nomor Handphone
    var labelNomor = document.createElement("label");
    labelNomor.innerHTML = "Nomor Handphone";
    form.appendChild(labelNomor);
    // membuat kolom input nomor hp
    var inputNomor = document.createElement("input");
    inputNomor.type = "number";
    inputNomor.className = "form_login";
    inputNomor.placeholder = "Nomor Handphone."
    form.appendChild(inputNomor);

    // membuat label Username
    var labelUser = document.createElement("label");
    labelUser.innerHTML = "Username";
    form.appendChild(labelUser);
    // membuat kolom input Username
    var inputUser = document.createElement("input");
    inputUser.type = "email";
    inputUser.className = "form_login";
    inputUser.placeholder = "Username atau Email .."
    form.appendChild(inputUser);

    // membuat label Password
    var labelPassword = document.createElement("label");
    labelPassword.innerHTML = "Password";
    form.appendChild(labelPassword);
    // membuat kolom input Password
    var inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "form_login";
    inputPassword.placeholder = "Password .."
    form.appendChild(inputPassword);

    // tombol submit
    var tombolDaftar = document.createElement("input");
    tombolDaftar.value = "DAFTAR SEKARANG";
    tombolDaftar.className = "tombol_login";
    tombolDaftar.type = "submit";
    form.appendChild(tombolDaftar);
}