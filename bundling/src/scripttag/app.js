window.mParticle.ready(function(){
    window.performance.mark('mark_mparticle_fully_loaded');
    mParticle.logEvent("Example event!"),
    console.log("mParticle has loaded!")
});