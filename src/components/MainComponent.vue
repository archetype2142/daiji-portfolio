<template>
  <div>
    <div class="top-header">
      <div class="container">
        <div class="columns">
          <div class="column flex-centered">
            <div class="flex-centered">
              <div class="head-text">
                <h3 class="small has-mt-24-mobile">Hello, I am </h3>
                <h1 class="is-size-1 is-size-2-mobile"><span class="firstname">Daiji</span> <span class="lastname">Kimura</span> </h1>
              </div>
              <div class="contact">
                <div class="columns is-mobile">
                  <div class="column">
                    <div class="content">
                      <ul class="list-titles" style="list-style-type:none;">
                        <li>Call</li>
                        <li>Email</li>
                        <li>Address</li>
                        <li>Web</li>
                      </ul>
                    </div>
                  </div>
                  <div class="column">
                    <div class="content">
                      <ul class="list-content" style="list-style-type:none;">
                        <li>+48 577-599-195</li>
                        <li>daijidaniel@gmail.com</li>
                        <li>Warszawa</li>
                        <li>daiwick.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="about-me">
                <p class="is-white"> Highly driven and results oriented </p>
              </div>
            </div>
          </div>
          <div class="column container">
            <div class="card has-mt-12" style="width: 550px;">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="../assets/daiji.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Daiji Kimura</p>
                    <p class="subtitle is-6">@djkimura</p>
                  </div>
                </div>

                <div class="content">
                  Business solutions expert <a href="https://daiwick.com">@daiwick</a>
                  <br/><a href="#">#business</a> <a href="#">#responsive</a> <a href="#">#negotiation</a> <a href="#">#sales</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainComponent"
}
</script>

<style lang="scss">
  .about-me {
    margin-top: 5%;
  }

  .small {
    color: map-get($daiji, 'purple-60');
  }

  .firstname {
    color: map-get($daiji, 'purple-60');;
    font-weight: 500 !important;
  }

  .lastname {
    color: map-get($daiji, 'purple-80');;
    font-weight: 900 !important;
  }

  .top-header {
    padding-bottom: 150px;
    background: #a2d9ff
  }

  .image {
    background: $daiji-white;
    height: 500px;
  }
  .list-titles li {
    font-weight: bold;
  }

  #image-main {
    background-color: #a2d9ff;
    width: 100%;
    height: 100%;
  }
</style>
