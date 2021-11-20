const projects = [
  'order-summary-card',
  'stats-preview-card',
  'single-price-grid',
  'profile-card',
  '3-column-preview-card',
];

const list = document.getElementById('list');

projects.forEach((project, i) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `/${project}/index.html`;
  link.innerText = `${i + 1}. ${formatProjectName(project)}`;

  const img = document.createElement('img');
  img.src = `/${project}/design/desktop-design.jpg`;

  link.prepend(img);
  listItem.appendChild(link);
  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
