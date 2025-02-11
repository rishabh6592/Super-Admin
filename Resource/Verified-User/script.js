document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("open");

        // Adjust content position based on sidebar state
        if (sidebar.classList.contains("open")) {
            content.style.marginLeft = "260px";
        } else {
            content.style.marginLeft = "2%";
        }
    });
});


const users = [];

for (let i = 1; i <= 100; i++) {
    users.push({
        name: `User ${i}`,
        email: `user${i}@mail.com`,
        phone: `91653${i.toString().padStart(5, "0")}`,
        whatsapp: `91653${i.toString().padStart(5, "0")}`,
        gender: i % 2 === 0 ? "Male" : "Female",
        degree: "Agricultural Science",
        birthplace: "Andhra Pradesh",
        collegename: "OISTd"
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadTableData();
});

function loadTableData() {
    const tableBody = document.getElementById("userTable");
    tableBody.innerHTML = users.map((user, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>--</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.whatsapp}</td>
            <td>${user.gender}</td>
            <td>${user.degree}</td>
            <td>${user.birthplace}</td>
            <td>${user.collegename}</td>
            <td>Andhra Pradesh</td>
            <td>202${index % 5}</td>
            <td>Jan 14, 2025 - 15:59</td>
            <td><button class="view-btn">View</button></td>
        </tr>
    `).join('');
    document.getElementById('passingYearIcon').addEventListener('click', function() {
        const dropdown = document.getElementById('passingYearDropdown');
        dropdown.classList.toggle('show');
      });
      
}
