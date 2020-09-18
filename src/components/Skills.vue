<template>
  <section id="skills" style="position: relative"> 
    <div class="container">
      <h1 class="is-size-2 has-mt-48 has-mb-48 is-blue-60 has-text-centered is-underline">Skills and Personal</h1>
      <div class="columns">
        <div class="column">
          <div class="box" style="position: relative;">
            <span class="box-text">SKILLS</span>
            <h1 class="is-size-2 is-size-4-mobile sp-title has-text-centered"> SKILLS </h1>
            <div class="content">
              <ul>
                <li> Closing deals </li>
                <li> Software development knowledge </li>
                <li> Software implementation knowledge </li>
                <li> Devops knowledge </li>
                <li> Project management knowledge </li>
                <li> English Advanced </li>
                <li> Polish (Native) </li>
                <li> Japanese (Native) </li>
                <li> Strong in negotiation </li>
                <li> Persuasive sales and marketing techniques </li>
                <li> Sales funnel management (CRM, Excel Sheet) </li>
                <li> B2B, B2C and B2B2C experience </li>
                <li> 4 years of commercial experience </li>
                <li> MS office </li>
                <li> Storytelling </li>
                <li> High EQ </li>
                <li> Able to handle all types of clients' personas </li>
                <li> Knowledge of business psychology </li>
                <li> Basic knowledge of programming </li>
                <li> Ability to solve problems </li>
                <li> Owns business professionals network </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box" style="position: relative;">
            <span class="box-text">PERSONAL</span>
            <h1 class="is-size-2 is-size-4-mobile sp-title has-text-centered"> PERSONAL TRAITS </h1>
            <div class="content">
              <ul>
                <li>Highly motivated and money-driven </li>
                <li> extraverted </li>
                <li> Leadership </li>
                <li> Proactivity </li>
                <li> Team spirit </li>
                <li> Communicative </li>
                <li> Realistic </li>
                <li> Professional and representative appearance </li>
                <li> Perseverant in crisis moments </li>
                <li> High likeability </li>
                <li> Assertive </li>
                <li> Hard worker </li>
                <li> Opened for new, ambitious challenge </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute; bottom: 0; z-index: -10">
      <path fill="#a2d9ff" fill-opacity="1" d="M0,96L16,128C32,160,64,224,96,261.3C128,299,160,309,192,282.7C224,256,256,192,288,170.7C320,149,352,171,384,197.3C416,224,448,256,480,272C512,288,544,288,576,272C608,256,640,224,672,213.3C704,203,736,213,768,208C800,203,832,181,864,149.3C896,117,928,75,960,74.7C992,75,1024,117,1056,160C1088,203,1120,245,1152,261.3C1184,277,1216,267,1248,234.7C1280,203,1312,149,1344,149.3C1376,149,1408,203,1424,229.3L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
    </svg>
  </section>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style lang="scss">
.sp-title {
  text-transform: capitalize;
}

.box {
  height: 100%;
  background: linear-gradient(to bottom right, #56D0FD, #56FD7D);  
  box-shadow: 3px 15px 30px rgba(86, 247, 142, 0.75);
  overflow: hidden;
}

.box > *{
  color: white;
  font-weight: bold;
}

.box-text {
  position: absolute;
  right: 0;
  // z-index: -1;
  color: black;
  overflow: hidden;
  font-weight: 900;
  font-size: 90px;
  opacity: 0.3;
  writing-mode: vertical-lr;
  text-orientation:  use-glyph-orientation;
}
#work-history {
  background: map-get($daiji, 'purple-60');
}
</style>