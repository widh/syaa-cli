import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['MARIE CURIE', 'MAE JEMISON'];
  }
});