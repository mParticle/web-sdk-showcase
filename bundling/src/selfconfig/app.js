import mParticle from "@mparticle/web-sdk";
import mParticleConfig from "./mpconfig.prod.json";
import amplitude from "@mparticle/web-amplitude-kit";

amplitude.register(mParticleConfig);

// this is required to instruct the SDK that the configuration
// does not need to be refreshed by the SDK on init.
mParticleConfig.requestConfig = false;

mParticle.init("REPLACE-ME", mParticleConfig);
window.mParticle.ready(function () {
  mParticle.logEvent("Example event!");
  console.log("mParticle self-hosted config has loaded!");
});
