<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">ホーム</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">このサイトについて</RouterLink>
        </li>
        <li>
          <RouterLink to="/links">リンク集</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
header {
  background-color: #42b983;
  padding: 10px 20px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 40px;
  padding: 0;
  margin: 0;
}

nav li {
  display: inline;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

nav a:hover {
  text-decoration: underline;
}
</style>