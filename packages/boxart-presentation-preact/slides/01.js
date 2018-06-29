import {h} from 'preact';

import {Render} from 'boxart-factory-preact';

export default <div class="slide slide-left">
  <Render
    rect={require('../templates/title')}
    insert={{title: 'Some performance stuff'}}
    />
</div>;
