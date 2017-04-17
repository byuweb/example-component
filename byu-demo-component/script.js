/**
 *  @license
 *    Copyright 2016 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';

import * as template from './template.html';
import * as util from 'byu-web-component-utils';

class BYUDemoComponent extends HTMLElement {

    constructor() {
        super(); // always call super first
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const component = this;

        util.applyTemplate(this, 'byu-demo', template, () => {

        });
    }

}

window.customElements.define('byu-demo-component', BYUDemoComponent);
window.BYUDemoComponent = BYUDemoComponent;

