const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');
        
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            content.classList.toggle('shift');
        })


        