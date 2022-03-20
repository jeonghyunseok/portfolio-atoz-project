<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Let's with Our Team</h1>
              <h3>Block on the Plan Portfolio Page</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <profile-content />
  </div>
</template>

<script>
import { ProfileContent } from "@/components";
export default {
  components: { ProfileContent },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg"),
    },
  },
  data() {
    return {};
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`,
      };
    },
  },
};
</script>
