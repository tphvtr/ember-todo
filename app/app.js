import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-todo/config/environment';
import { service } from '@ember/service';

export default class App extends Application {
  @service router;
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  init() {
    super.init(...arguments);
    if (window.location.pathname === '/') this.router.transitionTo('main');
  }
}

loadInitializers(App, config.modulePrefix);
