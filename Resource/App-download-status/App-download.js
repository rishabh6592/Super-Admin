const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');

        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            content.classList.toggle('shift');
        });

// main content   

const tableData = [
  { sno: 1, state: "Andhra Pradesh", verified: 1, nonVerified: 13, downloads: 1 },
  { sno: 2, state: "Arunachal Pradesh", verified: 2, nonVerified: 12, downloads: 2 },
  { sno: 3, state: "Assam", verified: 3, nonVerified: 11, downloads: 3 },
  { sno: 4, state: "Bihar", verified: 4, nonVerified: 10, downloads: 4 },
  { sno: 5, state: "Chhattisgarh", verified: 5, nonVerified: 9, downloads: 5 },
  { sno: 6, state: "Goa", verified: 6, nonVerified: 8, downloads: 6 },
  { sno: 7, state: "Gujarat", verified: 7, nonVerified: 7, downloads: 7 },
  { sno: 8, state: "Haryana", verified: 8, nonVerified: 6, downloads: 8 },
  { sno: 9, state: "Himachal Pradesh", verified: 9, nonVerified: 5, downloads: 9 },
  { sno: 10, state: "Jharkhand", verified: 10, nonVerified: 4, downloads: 10 },
  { sno: 11, state: "Karnataka", verified: 11, nonVerified: 3, downloads: 11 },
  { sno: 12, state: "Kerala", verified: 12, nonVerified: 2, downloads: 12 },
  { sno: 13, state: "Madhya Pradesh", verified: 13, nonVerified: 1, downloads: 13 },
  { sno: 14, state: "Maharashtra", verified: 14, nonVerified: 0, downloads: 14 },
  { sno: 15, state: "Manipur", verified: 15, nonVerified: 0, downloads: 15 },
  { sno: 16, state: "Meghalaya", verified: 16, nonVerified: 0, downloads: 16 },
  { sno: 17, state: "Mizoram", verified: 17, nonVerified: 0, downloads: 17 },
  { sno: 18, state: "Nagaland", verified: 18, nonVerified: 0, downloads: 18 },
  { sno: 19, state: "Odisha", verified: 19, nonVerified: 0, downloads: 19 },
  { sno: 20, state: "Punjab", verified: 20, nonVerified: 0, downloads: 20 },
  { sno: 21, state: "Rajasthan", verified: 21, nonVerified: 0, downloads: 21 },
  { sno: 22, state: "Sikkim", verified: 22, nonVerified: 0, downloads: 22 },
  { sno: 23, state: "Tamil Nadu", verified: 23, nonVerified: 0, downloads: 23 },
  { sno: 24, state: "Telangana", verified: 24, nonVerified: 0, downloads: 24 },
  { sno: 25, state: "Tripura", verified: 25, nonVerified: 0, downloads: 25 },
  { sno: 26, state: "Uttar Pradesh", verified: 26, nonVerified: 0, downloads: 26 },
  { sno: 27, state: "Uttarakhand", verified: 27, nonVerified: 0, downloads: 27 },
  { sno: 28, state: "West Bengal", verified: 28, nonVerified: 0, downloads: 28 }
];

const tableBody = document.getElementById("table-body");

function loadTableData() {
  tableBody.innerHTML = "";
  tableData.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${row.sno}</td>
          <td>${row.state}</td>
          <td>${row.verified}</td>
          <td>${row.nonVerified}</td>
          <td>${row.downloads}</td>
          <td><button class="view-btn">View</button></td>
      `;
      tableBody.appendChild(tr);
  });
}

loadTableData();


