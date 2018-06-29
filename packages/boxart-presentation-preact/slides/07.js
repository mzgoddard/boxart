import {h} from 'preact';

import {Render} from 'boxart-factory-preact';

export default <div class="slide slide-left slide-left-07">
  <Render
    rect={require('../templates/title')}
    insert={{title: 'The End'}}
    />
</div>;
