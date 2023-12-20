/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import {createServer} from '@oracle-cx-commerce/react-app/server';
import * as components from './plugins/components';
import * as endpoints from './plugins/endpoints';
import meta from './meta';

export default createServer({
  components,
  endpoints,
  meta
});
