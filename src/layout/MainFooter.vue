<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="'black'"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="javascript:void(0)"> Resume </a>
          </li>
          <li>
            <a href="https://jeong92.tistory.com" target="_blank"> Blog </a>
          </li>
          <li>
            <a href="https://github.com/sunup1992/a-to-z" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with Block on the Plan
        <md-icon>favorite</md-icon>
        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
