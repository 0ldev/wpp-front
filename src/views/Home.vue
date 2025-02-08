<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="home">
    <Navbar />
    <header class="hero">
      <div class="hero-content">
        <h1>WhatsApp Automation Made Easy</h1>
        <p>Powerful tools to enhance your WhatsApp experience</p>
      </div>
    </header>

    <section class="features">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Group Management</h3>
          <p>Extract phone numbers from groups and save them to TXT files</p>
        </div>
        <div class="feature-card">
          <h3>Custom Commands</h3>
          <p>Create custom /commands that trigger automatic responses</p>
        </div>
        <div class="feature-card">
          <h3>Message Scheduling</h3>
          <p>Schedule messages to be sent at specific times</p>
        </div>
        <div class="feature-card">
          <h3>Content Moderation</h3>
          <p>Moderate group content with word filters and message type restrictions</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  background: url('../assets/wpp_background.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2em;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: 3.5em;
  margin-bottom: 0.5em;
}

.features {
  padding: 4em 2em;
  background: white;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #f8f9fa;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5em;
  }
  
  .features {
    padding: 2em 1em;
  }
}
</style>
