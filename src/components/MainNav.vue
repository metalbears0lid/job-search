<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 justify-between"
      >
        <div class="flex">
          <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
          <nav class="ml-12">
            <ul class="flex h-full list-none">
              <li
                v-for="menuItem in menuItems"
                :key="menuItem"
                class="flex ml-9 h-full items-center first:ml-0"
              >
                <a href="">{{ menuItem }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign In" @click="toggleLogin" />
          <h2 class="ml-8 flex h-full items-center">Developed by {{ author }}</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage
  },
  data() {
    return {
      company: 'Solid Jobs',
      author: 'metalbearsolid',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Solid Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn
    }
  }
}
</script>
