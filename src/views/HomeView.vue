<script setup>
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'


// --- アイコン画像をインポート ---
import MainLogo from '@/assets/icons/icon_unaplanet.svg' // メインのロゴ
import PortfolioIcon from '@/assets/icons/portfolio.svg' // 実績ページのアイコン
import TwitterIcon from '@/assets/icons/twitter.svg' // Twitterのアイコン
import GithubIcon from '@/assets/icons/github.svg'   // GitHubのアイコン
import YoutubeIcon from '@/assets/icons/youtube.svg' // YouTubeのアイコン
// ... 他にも必要なアイコンがあればここに追加 ...

useHead({
  title: 'home - unaplanet',
})
</script>

<template>

  <div class="profile-container">
    <img :src="MainLogo" alt="una planet logo" class="main-logo" />

    <h1 class="profile-name">unaunaplanet</h1>

    <nav class="social-links">
      <ul>
        <li>
          <RouterLink to="/portfolio" title="ポートフォリオ">
            <img :src="PortfolioIcon" alt="ポートフォリオ" />
          </RouterLink>
        </li>
        <li>
          <a href="https://twitter.com/el_official_el" target="_blank" rel="noopener noreferrer" title="Twitter">
            <img :src="TwitterIcon" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://github.com/unaplanet" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img :src="GithubIcon" alt="GitHub" />
          </a>
        </li>
                <li>
          <a href="https://www.youtube.com/@EL_official_EL" target="_blank" rel="noopener noreferrer" title="youtube">
            <img :src="YoutubeIcon" alt="Youtube" />
          </a>
        </li>
        </ul>
    </nav>

    <div class="introduction-text">
      <p>
        こんにちは、うなです！<br />
        マルチにゆるっと活動しています。
      </p>
      <p>
        illustration / design / music etc...
      </p>
    </div>
  </div>
</template>

<style scoped>
/* --- ページ全体のコンテナ --- */
.profile-container {
  color: #2c2c2c;
  display: flex;            /* Flexboxを適用 */
  flex-direction: column;   /* 子要素を縦に並べる */
  align-items: center;      /* 子要素を水平方向の中央に揃える */
  padding: 40px 20px;       /* 上下の余白を多めに取る */
  text-align: center;       /* 中のテキストも中央揃えに */
}

/* --- 1. メインロゴ --- */
.main-logo {
  width: 400px;             /* ロゴのサイズを指定 */
  height: 400px;
  margin-bottom: 20px;      /* ロゴと名前の間の余白 */
}

/* --- 2. 名前 --- */
.profile-name {
  font-size: 2rem;          /* 文字を少し大きく */
  margin-bottom: 20px;      /* 名前とSNSリンクの間の余白 */
}

/* --- 3. SNSリンク --- */
.social-links ul {
  list-style: none;         /* リストの黒点を消す */
  padding: 0;
  margin: 0 0 40px 0;       /* 下に大きな余白を取る */
  display: flex;            /* アイコンを横並びにする */
  gap: 25px;                /* アイコン同士の隙間 */
}

.social-links img {
  width: 40px;              /* アイコンのサイズを統一 */
  height: 40px;
  transition: transform 0.2s ease; /* ホバー時のアニメーション */
}

.social-links a:hover img {
  transform: scale(1.15);   /* ホバー時に少し大きくする */
  opacity: 0.8;             /* 少し透明にする */
}

/* --- 4. 自己紹介文 --- */
.introduction-text {
  max-width: 600px;         /* 文章が長くなりすぎないように最大幅を指定 */
  text-align: center;         /* 中央揃え */
  line-height: 1.8;         /* 行間を少し広げて読みやすく */
  color: #333;
}
</style>