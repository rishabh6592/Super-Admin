document.addEventListener("DOMContentLoaded", function () {
    const otpInputs = document.querySelectorAll(".otp-box");
    const verifyButton = document.querySelector("button");
    const messageBox = document.createElement("p");
    messageBox.style.color = "red";
    messageBox.style.fontSize = "14px";
    messageBox.style.marginTop = "10px";
    verifyButton.parentNode.insertBefore(messageBox, verifyButton.nextSibling);

     const correctOTP = "123456"; //change according to the actual OTP

// Function to move to the next input field
    function moveNext(event, index) {
        if (event.key >= "0" && event.key <= "9") {
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        } else if (event.key === "Backspace" && index > 0) {
            otpInputs[index - 1].focus();
        } else {
            event.preventDefault(); // Prevent non-numeric input
        }
    }
    window.moveNext = moveNext;

 otpInputs.forEach((input, index) => {
        input.addEventListener("keyup", (event) => moveNext(event, index));
        input.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, ""); // Allow only numbers
        });
    });

     // Function to validate OTP
    function verifyOTP() {
        let enteredOTP = "";
        otpInputs.forEach((input) => {
            enteredOTP += input.value;
        });

        if (enteredOTP === correctOTP) {
            messageBox.style.color = "green";
            messageBox.textContent = "OTP Verified Successfully!";

             // Change OTP input boxes to green
    otpInputs.forEach((input) => {
        input.value = "";
        input.style.border = "2px solid green";
    });

    // Delay the redirection to show success message and styling
    setTimeout(() => {
        console.log("correct OTP");
        window.location.href = "./Dashboard/Dashboard.html"; // Redirect
    }, 900);
           
        } else {
            messageBox.style.color = "red";
            messageBox.textContent = "Incorrect OTP. Please try again!";

            otpInputs.forEach((input) => {
            input.value = ""; //clear the box
            input.style.border = "2px solid red";
        });
         otpInputs[0].focus();
      }
    }

    // Attach event to verify button
    verifyButton.addEventListener("click", verifyOTP);

    // Function to resend OTP (simulate)
    function resendOTP() {
        alert("A new OTP has been sent to your email!");
    }

    window.resendOTP = resendOTP; // Make it accessible in HTML
});