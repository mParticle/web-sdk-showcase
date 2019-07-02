import mParticle from '@mparticle/web-sdk';
import gaKit from '@mparticle/web-google-analytics-kit'

var mParticleConfig = {
  isDevelopment: false
};

gaKit.register(mParticleConfig);

mParticle.init('REPLACEME', mParticleConfig);  

window.mParticle.ready(
    function() { 
      window.performance.mark('mark_mparticle_fully_loaded');
      mParticle.logEvent("Example event!");
      console.log('mParticle self-hosted has loaded!'); 
    }
);