<template>
  <v-app class="app">
    <v-container class="py-6 py-md-10" style="max-width: 600px">
      <v-row justify="center">
        <v-col class="d-flex justify-center">
          <div
            class="rounded-xl pa-5"
            style="width: 380px; background-color: rgba(255, 255, 255, 0.8)"
          >
            <div class="d-flex justify-center">
              <nuxt-img
                src="/img/me.jpg"
                height="220px"
                class="rounded-circle"
              />
            </div>
            <h1 class="text-center text-black">Niall Quirke</h1>
            <h3 class="text-center text-grey-darken-2">
              Sustainability Tech Software Engineer
            </h3>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          v-for="project in projects"
          class="d-flex justify-center"
        >
          <v-card
            :href="project.link"
            rounded="lg"
            class="w-100 pa-md-3"
            style="background-color: rgba(255, 255, 255, 0.8)"
          >
            <v-card-title>
              <p>{{ project.title }}</p>
            </v-card-title>
            <v-card-text>
              <p>{{ project.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "🪑 Head of Engineering at Refunk",
    description:
      "Platform for upcycled furniture incuding a socail e-commerce and gig economy marketplace",
    link: "https://refunkupcycling.com",
  },
  {
    title: "♻️ Product Design  at Vyra",
    description:
      "Platform for educating employee's on sustainability and creating a culture of sustainability within a company",
    link: "https://vyra.ie",
  },
  {
    title: "🧑🏻‍💻 Freelancing",
    description:
      "Freelancing as a fullstack software engineer on Upwork and through personal connection, mostly working with sustainability startups.",
    link: "https://www.upwork.com/freelancers/~01ba84bee6f41486d4",
  },
  {
    title: "👥 Microsoft Teams at Microsoft",
    description: "Full stack development on the web app.",
    link: "https://www.microsoft.com/microsoft-teams",
  },
  {
    title: "☁️ Cloud Services at Amazon",
    description: "DevOps and Tool Development",
    link: "https://aws.com",
  },
  {
    title: "🇮🇳 Board at Friends of Calcutta",
    description: "Public relations and fundraising",
    link: "https://www.friendsofcalcutta.org/",
  },
  {
    title: "👩🏼‍🏫 Web Dev at 10000Students.ie",
    description: "Helped STAND.ie out with a sustainability education campaign",
    link: "https://10000Students.ie",
  },
  {
    title: "🖥 Nifty Chrome Extension",
    description:
      "A chrome extension that lets you open links in new tabs by double-clicking on them.",
    link: "https://chrome.google.com/webstore/detail/doubleclicker/kdfhgamfoobfingdhklhmjpbgflibeng",
  },
  {
    title: "🍻 Cans.ie",
    description: "lol",
    link: "http://cans.ie",
  },
];
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
.app {
  background: url("img/forest.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>
