// Login formunu işləyən event
document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("https://localhost:7227/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Token-i string kimi alırıq
      const token = await response.text();

      if (response.ok) {
        // Token-i localStorage-a yazmaq
        localStorage.setItem("token", token);
        alert("Login successful, token saved!");
      } else {
        alert("Login failed: " + token);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
