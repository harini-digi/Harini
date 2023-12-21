/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */
 import * as resourceBundle from '@oracle-cx-commerce/resources';
 import {buildResources} from '@oracle-cx-commerce/resources/utils';
 import config from './config';
 
 const widgetResourceKeys = [
   'textExtraLinks1',
   'textExtraLinks2',
   'textExtraLinks3',
   'textExtraLinks4',
   'textExtraLinks5',
   'textExtraLinks6',
   'textExtraLinks7',
   'textExtraLinks8',
   'textExtraLinks9',
   'textExtraLinks10',
   'textHelp',
   'textCustomerServices',
   'textContactUs',
   'textShippingInformation',
   'textReturnsRefunds'
 ];
 
 export const customlinklist = {
   packageId: '@oracle-cx-commerce/react-widgets',
   resources: buildResources(resourceBundle, widgetResourceKeys),
   config
 };
 