const renderPage = (header, content) => {
  return `
    <div class="row">${header}</div>
    <div class="row">${content}</div>
  `;
};

export default renderPage;
