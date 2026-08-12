// =========================================
// 功能：让文章卡片整张可点击（增强 Butterfly 交互体验）
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  // 1. 获取所有的文章卡片元素
  const postItems = document.querySelectorAll('.recent-post-item');

  if (postItems.length > 0) {
    postItems.forEach(card => {
      // 2. 鼠标移入时变成小手，移出时恢复默认，交互更自然
      card.style.cursor = 'pointer';

      // 3. 监听卡片的点击事件
      card.addEventListener('click', function (e) {
        // 4. 防冲突机制：如果点击的目标本身是链接、图片或按钮，则不干扰原本的行为
        const tagName = e.target.tagName.toLowerCase();
        if (tagName === 'a' || tagName === 'img' || tagName === 'button') {
          return;
        }

        // 5. 在卡片内部找到标题链接，并执行跳转
        const titleLink = this.querySelector('a.article-title');
        if (titleLink) {
          window.location.href = titleLink.href;
        }
      });
    });
  }
});