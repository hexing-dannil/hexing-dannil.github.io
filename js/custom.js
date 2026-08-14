document.addEventListener('DOMContentLoaded', function () {

  // =======================================================
  // 1. 首页文章卡片点击跳转
  // 鼠标移入卡片呈手型，点击卡片（除链接/图片/按钮外）跳转到对应文章
  // =======================================================
  const postItems = document.querySelectorAll('.recent-post-item');

  if (postItems.length > 0) {
    postItems.forEach(card => {
      card.style.cursor = 'pointer';

      card.addEventListener('click', function (e) {
        const tagName = e.target.tagName.toLowerCase();
        // 如果点击的是 a 标签、图片或按钮，不干扰它们原本的点击行为
        if (tagName === 'a' || tagName === 'img' || tagName === 'button') {
          return;
        }

        const titleLink = this.querySelector('a.article-title');
        if (titleLink) {
          window.location.href = titleLink.href;
        }
      });
    });
  }
});