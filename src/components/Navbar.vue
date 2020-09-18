<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item>
        <img
          src="https://daiwick.com/assets/logo-49a831cb021bcc8f1e25cc0b89ec219d03e7f2ab7b827ee3a7b67367b0463299.svg"
          alt="Daiji Kimura"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-secondary">
            <strong>{{ $t('navbar.download') }}</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
  export default {
    name: "Navbars"
  }
</script>
