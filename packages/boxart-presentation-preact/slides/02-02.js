import {h} from 'preact';

import {Render} from 'boxart-factory-preact';

export default <div class="slide rotate-br rotate-br-02">
  <Render
    rect={require('../templates/title')}
    insert={{title: 'talking about'}}
    />
</div>;
