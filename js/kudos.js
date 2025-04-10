function addKudos(project) {
  let count = localStorage.getItem(project) || 0;
  count++;
  localStorage.setItem(project, count);
  document.getElementById(`${project}-count`).innerText = count;
}

window.onload = function () {
  const projects = ['promise'];
  projects.forEach((p) => {
    const saved = localStorage.getItem(p) || 0;
    document.getElementById(`${p}-count`).innerText = saved;
  });
};
