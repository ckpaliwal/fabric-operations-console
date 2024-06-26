/*
 * Copyright contributors to the Hyperledger Fabric Operations Console project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ChannelOrdererUrl = () => {
	return (
		<div className="ibp-channel-orderer-url-container">
			<h2>{this.props.t('orderer_url')}</h2>
			<p>Insert url here</p>
		</div>
	);
};

ChannelOrdererUrl.propTypes = {
	t: PropTypes.func, // Provided by withTranslation()
};

export default withTranslation()(ChannelOrdererUrl);
