import {h} from 'preact';

import {Render} from 'boxart-factory-preact';

export default <div class="slide rotate-br rotate-br-01">
  <Render
    rect={require('../templates/title')}
    insert={{title: 'and not Z'}}
    />
</div>;
