/**
 * An array of status effect icons which can be applied to Tokens
 */
// Version before object conversion
if(typeof CONFIG.statusEffects[0] === "string") {
  CONFIG.statusEffects = [
    "modules/conditions5e/icons/dead.svg",
    "modules/conditions5e/icons/unconscious.svg",
    "modules/conditions5e/icons/stunned.svg",
    "modules/conditions5e/icons/exhaustion1.svg",
  
    "modules/conditions5e/icons/incapacitated.svg",
    "modules/conditions5e/icons/paralyzed.svg",
    "modules/conditions5e/icons/petrified.svg",
    "modules/conditions5e/icons/exhaustion2.svg",
  
    "modules/conditions5e/icons/grappled.svg",
    "modules/conditions5e/icons/restrained.svg",
    "modules/conditions5e/icons/prone.svg",
    "modules/conditions5e/icons/exhaustion3.svg",
  
    "modules/conditions5e/icons/charmed.svg",
    "modules/conditions5e/icons/frightened.svg",
    "modules/conditions5e/icons/poisoned.svg",
    "modules/conditions5e/icons/exhaustion4.svg",
  
    "modules/conditions5e/icons/blinded.svg",
    "modules/conditions5e/icons/deafened.svg",
    "modules/conditions5e/icons/diseased.svg",
    "modules/conditions5e/icons/exhaustion5.svg",

    "modules/conditions5e/icons/concentrating.png"
  ];
} else {
  CONFIG.statusEffects = [
    {
      id: "dead",
      label: "EFFECT.StatusDead",
      icon: "modules/conditions5e/icons/dead.svg"
    },
    {
      id: "unconscious",
      label: "EFFECT.StatusUnconscious",
      icon: "modules/conditions5e/icons/unconscious.svg"
    },
    {
      id: "stun",
      label: "EFFECT.StatusStunned",
      icon: "modules/conditions5e/icons/stunned.svg"
    },
    {
      id: "exhaustion1",
      label: "EFFECT.StatusExhausted1",
      icon: "modules/conditions5e/icons/exhaustion1.svg"
    },
    {
      id: "incapacitated",
      label: "EFFECT.Incapacitated",
      icon: "modules/conditions5e/icons/incapacitated.svg"
    },
    {
      id: "paralysis",
      label: "EFFECT.StatusParalysis",
      icon: "modules/conditions5e/icons/paralyzed.svg",
    },
    {
      id: "petrified",
      label: "EFFECT.StatusPetrified",
      icon: "modules/conditions5e/icons/petrified.svg",
    },
    {
      id: "exhaustion2",
      label: "EFFECT.StatusExhausted2",
      icon: "modules/conditions5e/icons/exhaustion2.svg"
    },
    {
      id: "grappled",
      label: "EFFECT.StatusGrappled",
      icon: "modules/conditions5e/icons/grappled.svg",
    },
    {
      id: "restrain",
      label: "EFFECT.StatusRestrained",
      icon: "modules/conditions5e/icons/restrained.svg",
    },
    {
      id: "prone",
      label: "EFFECT.StatusProne",
      icon: "modules/conditions5e/icons/prone.svg"
    },
    {
      id: "exhaustion3",
      label: "EFFECT.StatusExhausted3",
      icon: "modules/conditions5e/icons/exhaustion3.svg"
    },
    {
      id: "charmed",
      label: "EFFECT.StatusCharmed",
      icon: "modules/conditions5e/icons/charmed.svg"
    },
    {
      id: "fear",
      label: "EFFECT.StatusFear",
      icon: "modules/conditions5e/icons/frightened.svg"
    },
    {
      id: "poison",
      label: "EFFECT.StatusPoison",
      icon: "modules/conditions5e/icons/poisoned.svg"
    },
    {
      id: "exhaustion4",
      label: "EFFECT.StatusExhausted4",
      icon: "modules/conditions5e/icons/exhaustion4.svg"
    },
    {
      id: "blind",
      label: "EFFECT.StatusBlind",
      icon: "modules/conditions5e/icons/blinded.svg"
    },
    {
      id: "deaf",
      label: "EFFECT.StatusDeaf",
      icon: "modules/conditions5e/icons/deafened.svg"
    },
    {
      id: "disease",
      label: "EFFECT.StatusDisease",
      icon: "modules/conditions5e/icons/diseased.svg"
    },
    {
      id: "exhaustion5",
      label: "EFFECT.StatusExhausted5",
      icon: "modules/conditions5e/icons/exhaustion5.svg"
    },
    {
      id: "concentrating",
      label: "EFFECT.StatusConcentrating",
      icon: "modules/conditions5e/icons/concentrating.svg"
    },
    {
      id: "bless",
      label: "EFFECT.StatusBlessed",
      icon: "modules/conditions5e/icons/spells/1/bless.png"
    },
    {
      id: "faerie-fire",
      label: "EFFECT.StatusFaerieFire",
      icon: "modules/conditions5e/icons/spells/1/faerie-fire.png"
    },
    // {
    //   id: "burning",
    //   label: "EFFECT.StatusBurning",
    //   icon: "icons/svg/fire.svg"
    // },
  ];
}

// Condition Types
CONFIG.conditionTypes = {
  "blinded": "Blinded",
  "charmed": "Charmed",
  "dead": "Dead",
  "deafened": "Deafened",
  "diseased": "Diseased",
  "exhaustion": "Exhaustion",
  "exhaustion1": "Exhaustion Level 1",
  "exhaustion2": "Exhaustion Level 2",
  "exhaustion3": "Exhaustion Level 3",
  "exhaustion4": "Exhaustion Level 4",
  "exhaustion5": "Exhaustion Level 5",
  "frightened": "Frightened",
  "grappled": "Grappled",
  "incapacitated": "Inacapacitated",
  "invisible": "Invisible",
  "paralyzed": "Paralyzed",
  "petrified": "Petrified",
  "poisoned": "Poisoned",
  "prone": "Prone",
  "restrained": "Restrained",
  "stunned": "Stunned",
  "unconscious": "Unconscious",
  "wounded": "Wounded"
};

// Replace selected control icons
CONFIG.controlIcons.visibility = "modules/conditions5e/icons/invisible.svg";
CONFIG.controlIcons.defeated = "modules/conditions5e/icons/dead.svg";

// Patch CombatTracker to work with token HUD overlay
Hooks.once("ready", function() {
  let newClass = CombatTracker;
  newClass = trPatchLib.patchMethod(newClass, "_onCombatantControl", 21,
    `if ( isDefeated && !token.data.overlayEffect ) token.toggleOverlay(CONFIG.controlIcons.defeated);`,
    `if ( isDefeated && token.data.overlayEffect !== CONFIG.controlIcons.defeated ) token.toggleOverlay(CONFIG.controlIcons.defeated);`);
  if (!newClass) return;
  CombatTracker.prototype._onCombatantControl = newClass.prototype._onCombatantControl;
});

// Function to use token overlay to show status as wounded, unconscious, or dead
Token.prototype._updateHealthOverlay = function(tok) {
  let maxHP = tok.actor.data.data.attributes.hp.max;
  let curHP = tok.actor.data.data.attributes.hp.value;
  let priorHealth = tok.data.overlayEffect;
  let newHealth = null;
  if ( curHP <= 0 ) {
    if ( priorHealth === "modules/conditions5e/icons/dead.svg" ) newHealth = priorHealth;
    else newHealth = "modules/conditions5e/icons/almostdead.svg";
  }
  else if ( curHP / maxHP < 0.5 ) newHealth = "modules/conditions5e/icons/wounded.svg";
  if ( newHealth !== priorHealth ) {
    if ( newHealth === null ) tok.toggleOverlay(priorHealth);
    else tok.toggleOverlay(newHealth);
  }
};

// This hook is required for Tokens NOT linked to an Actor
Hooks.on("updateToken", (scene, sceneID, update, tokenData, userId) => {
  let token = canvas.tokens.get(update._id);
  if (token.owner) token._updateHealthOverlay(token);
});

// This hook is required for Tokens linked to an Actor
Hooks.on("updateActor", (entity, updated) => {
  if (entity.owner) entity.getActiveTokens(true).map(x => x._updateHealthOverlay(x));
});
