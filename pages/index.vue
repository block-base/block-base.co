<template>
  <div>
    <Hero />
    <Pricing />
    <Members />
    <Contact />
  </div>
</template>

<script>
import Contact from '~/components/Contact.vue'
import Hero from '~/components/Hero.vue'
import Pricing from '~/components/Pricing.vue'
import Members from '~/components/Members.vue'

export default {
  components: {
    Hero,
    Contact,
    Pricing,
    Members
  }
}
</script>
