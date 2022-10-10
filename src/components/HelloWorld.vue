<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/296157301_1486813791731632_4314539626657822759_n.jpg" width="30" height="30"  class="d-inline-block align-top" alt="">

       Camelot Academy
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <RouterLink class="nav-link"  to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link"  to="/about">About</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Research</a>
              <a class="dropdown-item" href="#">Online Lessons</a>
              <a class="dropdown-item" href="#">Career Guidance</a>
              <a class="dropdown-item" href="#">Writing Assistance</a>      
              <a class="dropdown-item" href="#">Mentoring</a>
              <a class="dropdown-item" href="#">Academic Advising</a>
              <a class="dropdown-item" href="#">Mental Health</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Careers</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>

</style>
