// Оновлений JavaScript
const videoData = [
    {
        title: 'Video 1',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        tags: ['tag1', 'tag2']
    },
    {
        title: 'Video 2',
        url: 'https://www.youtube.com/embed/VIDEO_ID_2',
        tags: ['tag2', 'tag3']
    },
    {
        title: 'Video 3',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        tags: ['tag1', 'tag2']
    },
    {
        title: 'Video 4',
        url: 'https://www.youtube.com/embed/VIDEO_ID_2',
        tags: ['tag2', 'tag3']
    },
    {
        title: 'Video 5',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        tags: ['tag1', 'tag2']
    },
    {
        title: 'Video 6',
        url: 'https://www.youtube.com/embed/VIDEO_ID_2',
        tags: ['tag2', 'tag3']
    },
    {
        title: 'Video 7',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        tags: ['tag1', 'tag2']
    },
    {
        title: 'Video 8',
        url: 'https://www.youtube.com/embed/VIDEO_ID_2',
        tags: ['tag2', 'tag3']
    },
    {
        title: 'Video 9',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        tags: ['tag1', 'tag2']
    },
    {
        title: 'Video 10',
        url: 'https://www.youtube.com/embed/VIDEO_ID_2',
        tags: ['tag2', 'tag3']
    },
    {
        title: 'Video 11',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        tags: ['tag1', 'tag2']
    },
    {
        title: 'Video 12',
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        tags: ['tag1', 'tag2']
    },
    
];

function displayVideos(videos) {
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = '';

    videos.forEach((video) => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.innerHTML = `
            <h2>${video.title}</h2>
            <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
            <div class="video-tags">${video.tags.join(', ')}</div>
        `;
        videoGrid.appendChild(videoCard);
    });
}

function displayTags(tags) {
    const tagsContainer = document.getElementById('tags');
    tagsContainer.innerHTML = '';

    tags.forEach((tag) => {
        const tagElement = document.createElement('button');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => filterVideosByTag(tag));
        tagsContainer.appendChild(tagElement);
    });
    
    // Додамо кнопку "Всі теги" та обробник події для неї
    const allTagsButton = document.createElement('button');
    allTagsButton.textContent = 'Всі теги';
    allTagsButton.addEventListener('click', () => displayVideos(videoData));
    tagsContainer.appendChild(allTagsButton);
}

function filterVideosByTag(tag) {
    const filteredVideos = videoData.filter((video) => video.tags.includes(tag));
    displayVideos(filteredVideos);
}

displayVideos(videoData);

const allTags = Array.from(new Set(videoData.flatMap((video) => video.tags)));
displayTags(allTags);
