<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 justify-between"
      >
        <div class="flex">
          <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">{{
            company
          }}</router-link>
          <nav class="ml-12">
            <ul class="flex h-full list-none">
              <li
                v-for="menuItem in menuItems"
                :key="menuItem.text"
                class="flex ml-9 h-full items-center first:ml-0"
              >
                <router-link :to="menuItem.url">{{ menuItem.text }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign In" type="primary" @click="loginUser" />
          <h2 class="ml-8 flex h-full items-center">Developed by {{ author }}</h2>
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'

import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import SubNav from '@/components/Navigation/SubNav.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      company: 'Solid Jobs',
      author: 'metalbearsolid',
      menuItems: [
        { text: 'Teams', url: '/' },
        { text: 'Locations', url: '/' },
        { text: 'Life at Solid Corp', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' }
      ]
    }
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn']),
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['loginUser'])
  }
}
</script>
