import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class DCBIndexRoute extends Route {
  @service api

  model() {
    return this.modelFor('dcb')
  }

  setupController(controller, model) {
    controller.set('dcb', model.dcb)
    controller.set('contest', model.contest)
    controller.set('contents', model.contents)
    controller.set('top_content', model.dcb.get('top_content'))
  }
}
