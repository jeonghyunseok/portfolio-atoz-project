<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Jeong Hyunseok</h3>
                  <h6>Front-Developer</h6>
                  <md-button
                    href="https://github.com/jeonghyunseok"
                    class="md-just-icon md-simple md-github"
                    target="_blank"
                    ><i class="fab fa-github"></i
                  ></md-button>
                  <md-button
                    href="https://jeong92.tistory.com"
                    class="md-just-icon md-simple md-blogger"
                    target="_blank"
                    ><i class="fab fa-blogger"></i
                  ></md-button>
                  <v-popover offset="4" placement="bottom">
                    <md-button class="md-just-icon md-simple md-envelope"
                      ><i class="fa fa-envelope"></i
                    ></md-button>
                    <template slot="popover">
                      <h3 class="popover-header">Send Mail</h3>
                      <div class="popover-body">
                        <a href="mailto:jhs92043@gmail.com">
                          jhs92043@gmail.com
                        </a>
                      </div>
                    </template>
                  </v-popover>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              I am Hyeonseok Jeong, a developer who creates a better future.<br />
              Surest way to predict the future is to create it.<br />
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Skills', 'Career', 'Works']"
              :tab-icon="['camera', 'palette', 'work']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[0].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[0].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout-item text-center md-size-100 ml-auto">
                  <img :src="tabPane1[0].image" class="rounded" />
                  <img :src="tabPane1[1].image" class="rounded" />
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-40 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-40 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  components: {
    Tabs,
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") },
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") },
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") },
      ],
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg"),
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/hyunseok.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
