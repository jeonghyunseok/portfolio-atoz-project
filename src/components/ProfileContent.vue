<template>
  <body class="landing-page" style="background: #fff">
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">About Us</h2>
              <h5 class="description">
                Our team's name is Block on the Plan. We are a development study
                team located in Seoul. The goal is to write and publish
                development books. We pride ourselves on development and we
                strive for better development
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>book</md-icon>
                  </div>
                  <h4 class="info-title">Publish Book</h4>
                  <p>
                    We publish books to help non-majors develop easily. Our book
                    seeks to drive better development and contribute to a more
                    vibrant open source ecosystem.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Clean Code</h4>
                  <p>
                    We use open source to organize projects that anyone can
                    easily write with clean code.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon">
                    <md-icon>build</md-icon>
                  </div>
                  <h4 class="info-title">Toy Project</h4>
                  <p>
                    Toy project site for examples. <br />[1st project] Used
                    trading site clone coding made with open source vue &
                    typescirpt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="md-layout">
              <!-- hwang's profile -->
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div
                      @click="$router.push('/hwang')"
                      style="cursor: pointer"
                    >
                      <div class="md-layout-item md-size-50 mx-auto">
                        <img
                          :src="teamImg1"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <h4 class="card-title">
                        Hwang Sunjae
                        <br />
                        <small class="card-description text-muted"
                          >Backend-Developer</small
                        >
                      </h4>
                    </div>
                    <md-card-content>
                      <p class="card-description">
                        He is from Pohang and does backend Java and aws
                        development. He is getting married. He is a resident of
                        Paju.
                      </p>
                    </md-card-content>
                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <!--// hwang's profile -->
              <!-- jeong's profile -->
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div
                      @click="$router.push('/jeong')"
                      style="cursor: pointer"
                    >
                      <div class="md-layout-item md-size-50 mx-auto">
                        <img
                          :src="teamImg2"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <h4 class="card-title">
                        Jeong Hyunseok
                        <br />
                        <small class="card-description text-muted"
                          >Front-Developer</small
                        >
                      </h4>
                    </div>
                    <md-card-content>
                      <p class="card-description">
                        I am Hyeonseok Jeong, a developer who creates a better
                        future. Surest way to predict the future is to create
                        it.
                      </p>
                    </md-card-content>
                    <md-card-actions class="text-center">
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
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <!--// jeong's profile -->
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Work with us</h2>
              <h4 class="text-center description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. We will responde get back to you in a
                couple of hours.
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button @click="clickSendMessage" class="md-success"
                      >Send Message</md-button
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 이메일 확인 팝업 -->
    <modal v-if="classicModal" @close="classicModalHide">
      <template slot="header">
        <h2 v-if="!modalMessage" class="modal-title text-center title">
          Thank you
        </h2>
        <md-button
          class="md-simple md-just-icon md-round modal-default-button"
          @click="classicModalHide"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </template>
      <template v-if="!modalMessage" slot="body">
        <p>{{ `name: ${this.name}` }}</p>
        <p>{{ `email: ${this.email}` }}</p>
        <p>{{ `message:${this.message}` }}</p>
      </template>
      <template v-else slot="body">
        <h3 class="modal-title text-center title">{{ modalMessage }}</h3>
      </template>
      <template slot="footer">
        <!-- <md-button class="md-simple">Nice Button</md-button> -->
        <md-button class="md-danger md-simple" @click="classicModalHide"
          >Close</md-button
        >
      </template>
    </modal>
    <!--// 이메일 확인 팝업 -->
  </body>
</template>
<script>
import { Modal } from "@/components";
export default {
  components: {
    Modal,
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/sunjae.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/hyunseok.jpg"),
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      classicModal: false,
      modalMessage: "",
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    },
    clickSendMessage() {
      this.classicModal = true;
      let regEmail =
        /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/g;
      // 입력해 주세요
      if (!this.name) {
        this.modalMessage = "Please enter your name!";
      } else if (!this.email) {
        this.modalMessage = "Please enter your email!";
      } else if (!regEmail.test(this.email)) {
        this.modalMessage = "Please enter the correct email format!";
      } else if (!this.message) {
        this.modalMessage = "Please enter Message!";
      } else {
        this.modalMessage = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
