<script setup>
// 1. vue-routerからRouterLinkとRouterViewをインポート
import { RouterLink, RouterView } from 'vue-router'
// 2. assetsフォルダからロゴ画像をインポート
import UnaLogo from '@/assets/icons/icon_unaplanet.svg'
</script>

<template>
  <header>
    <RouterLink to="/home">
      <img :src="UnaLogo" alt="サイトのロゴ" class="logo" />
    </RouterLink>

    <nav>
      <ul>
        <li>
          <RouterLink to="/home">home</RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio">about</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  
  <RouterView></RouterView>
</template>

<style scoped>
header {
  /* ▼ここが重要！ Flexboxを適用 */
  display: flex;                  /* 子要素を横並びにする ✨ */
  justify-content: space-between; /* 両端に寄せる ↔️ */
  align-items: center;            /* 上下中央揃えにする ↕️ */
  
  /* ヘッダーのデザイン */
  padding: 10px 20px;
  border-bottom: 1px solid #eee; /* 分かりやすいように線を追加 */
}

/* ロゴのサイズを調整 */
.logo {
  height: 60px; /* 高さを指定（ロゴのサイズに合わせて調整） */
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

nav a {
  color: #333; /* 色を黒っぽく変更 */
  text-decoration: none;
  font-size: 1rem;
}

nav a:hover {
  text-decoration: underline;
}
</style>