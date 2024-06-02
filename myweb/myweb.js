document.addEventListener('DOMContentLoaded', function () {
    const addProjectButton = document.getElementById('add-project-button');
    const projectForm = document.getElementById('project-form');
    const saveProjectButton = document.getElementById('save-project-button');
    const projectList = document.getElementById('project-list');

    addProjectButton.addEventListener('click', function () {
        projectForm.style.display = 'block';
        console.log("block displayed");
    });

    saveProjectButton.addEventListener('click', function () {
        const projectTitle = document.getElementById('project-title').value;
        const projectDescription = document.getElementById('project-description').value;

        if (projectTitle && projectDescription) {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';

            const titleElement = document.createElement('h2');
            titleElement.textContent = projectTitle;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = projectDescription;

            projectDiv.appendChild(titleElement);
            projectDiv.appendChild(descriptionElement);

            projectList.appendChild(projectDiv);

            // Clear input fields and hide form
            document.getElementById('project-title').value = '';
            document.getElementById('project-description').value = '';
            projectForm.style.display = 'none';
        } else {
            alert('Please fill out both fields.');
        }
    });
});
