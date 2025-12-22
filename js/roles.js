const searchInput = document.getElementById('searchInput');
const campFilter = document.getElementById('campFilter');
const rolesGrid = document.getElementById('rolesGrid');
const roleCards = Array.from(rolesGrid.getElementsByClassName('role-card'));

function filterRoles() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCamp = campFilter.value;

    roleCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const camp = card.dataset.camp;

        if ((name.includes(searchText)) && (selectedCamp === 'all' || camp === selectedCamp)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filterRoles);
campFilter.addEventListener('change', filterRoles);