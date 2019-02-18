"use strict";

global.$ = global.jQuery =
    typeof $ === `undefined` ? require(`jquery-browserify`) : $;

require(`./src/namespace`).populate();

require(`./src/ajax`).applyProtocolWorkaround();

// Create plugin manager
HHM.manager = new HHM.classes.PluginManager();

HHM.deferreds.managerStarted = new $.Deferred();
HHM.deferreds.roomLink = new $.Deferred();

// Provides the config, waits for captcha solution and starts the plugin
// manager
let room = HHM.manager.provideRoom();

HHM.manager.start(room);