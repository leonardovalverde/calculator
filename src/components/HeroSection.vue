<template>
    <section :style="{ backgroundColor: bgColor, color: textColor }" class="hero-section">
      <div class="content">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
    props: {
      bgColor: {
        type: String,
        required: true,
      },
      textColor: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .hero-section {
    height: 100px;
    max-width: 100%;
    padding: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: start;
  }
  
  .content {
    width: 100%;
    max-width: 800px;
  }
  
  h2 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }
  
  @media (max-width: 500px) {
    .hero-section {
      padding: 88px 32px
    }
  }
  </style>
  