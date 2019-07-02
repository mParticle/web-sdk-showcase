import mParticle from '@mparticle/web-sdk';
import mParticleConfig from './mpconfig.prod.json';
import gaKit from '@mparticle/web-google-analytics-kit'

gaKit.register(mParticleConfig);

// this is required to instruct the SDK that the configuration 
// does not need to be refreshed by the SDK on init.
mParticleConfig.requestConfig = false;

mParticle.init('REPLACEME', mParticleConfig);  
window.mParticle.ready(
    function() { 
      window.performance.mark('mark_mparticle_fully_loaded');
      mParticle.logEvent("Example event!");
      console.log('mParticle self-hosted config has loaded!'); 
    }
);