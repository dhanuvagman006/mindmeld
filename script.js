function checkKey() {
            const correctKey = "keyboard mouse monitor screenshot software ram";
            const userKey = document.getElementById("keyInput").value.trim();

            const messageElement = document.getElementById("message");
            if (userKey === correctKey) {
                messageElement.textContent = "Congratulations! You found the correct key!";
                messageElement.className = "message success";
            } else {
                messageElement.textContent = "Oops! Try again.";
                messageElement.className = "message error";
            }
        }
