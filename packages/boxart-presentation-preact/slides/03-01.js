import {h} from 'preact';

import {Render} from 'boxart-factory-preact';

export default <div class="slide zoom zoom-03">
  <Render
    rect={require('../templates/center-box')}
    insert={{title: <img src={require('!file-loader!../assets/cat-mob.gif')} style={{width: '100%', height: '100%', objectFit: 'contain'}} />}}
    />
</div>;
