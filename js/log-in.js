// Toggle show/hide password
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.textContent = "🙈";
    } else {
        passwordField.type = "password";
        this.textContent = "👁️";
    }
});

// Form validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // cegah reload halaman

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Reset pesan setiap submit
    errorMessage.textContent = "";
    errorMessage.style.color = "red";
    
    // Validasi sederhana
    if (email === "" || password === "") {
        errorMessage.textContent = "Email dan password wajib diisi!";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password minimal 6 karakter!";
        return;
    }

    // Simulasi login sukses
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login berhasil!";
});