const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');

        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            content.classList.toggle('shift');
        });
// main content   

const data = new Array(10).fill({
    name: "Yash Hello",
    email: "yash@mail.com",
    payment: "45,000",
    dateTime: "12/03/2025 & 03:46",
    waiting: "36:00 hr",
    remaining: "24:54:03",
    Action:"Edit"
   });

let currentPage = 1;
const rowsPerPage = 5;

function displayTable() {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    data.slice(start, end).forEach((item, index) => {
        tableBody.innerHTML += `<tr>
            <td>${start + index + 1}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.payment}</td>
            <td>${item.dateTime}</td>
            <td>${item.waiting}</td>
            <td>${item.remaining}</td>
            <td><button class="view-btn">Edit</button></td>
        </tr>`;
    });
    document.getElementById("pageNumber").innerText = currentPage;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayTable();
    }
}

function nextPage() {
    if (currentPage * rowsPerPage < data.length) {
        currentPage++;
        displayTable();
    }
}

function searchTable() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(searchValue) ||
        item.email.toLowerCase().includes(searchValue)
    );
    console.log("Filtered Data:", filteredData);
}

displayTable();

