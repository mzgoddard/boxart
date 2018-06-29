import {h} from 'preact';

import {Render} from 'boxart-factory-preact';

export default <div class="slide rotate-br rotate-br-03">
  <Render
    rect={require('../templates/title')}
    insert={{title: 'BoxArt'}}
    />
</div>;
