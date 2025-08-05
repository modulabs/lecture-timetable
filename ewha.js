document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.session-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            const currentDetails = toggle.nextElementSibling;
            const currentToggle = toggle;

            toggles.forEach(otherToggle => {
                if (otherToggle !== currentToggle) {
                    otherToggle.classList.remove('is-active');
                    otherToggle.nextElementSibling.classList.remove('is-open');
                }
            });

            currentToggle.classList.toggle('is-active');
            currentDetails.classList.toggle('is-open');

            event.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        toggles.forEach(toggle => {
            toggle.classList.remove('is-active');
            toggle.nextElementSibling.classList.remove('is-open');
        });
    });
});
