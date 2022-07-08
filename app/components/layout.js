import Component from '@ember/component';
import { service } from '@ember/service';

export default class extends Component {
  @service router;

  init() {
    super.init(...arguments);
    if (window.location.pathname === '/') this.router.transitionTo('main');
  }
}
