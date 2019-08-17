import React, { Component } from 'react';

export default class FeatureRow extends Component {
	render() {
		return (
			/*
			// FeatureCategory
			<fieldset className="feature" key={featureHash}>
					<legend className="feature__name">
						<h3>{feature}</h3>
					</legend>
					{options}
				</fieldset>
			*/

			<fieldset className="feature" key={this.props.featureHash}>
				<legend className="feature__name">
					<h3>{this.props.feature}</h3>
				</legend>
				{this.props.options}
			</fieldset>
		);
	}
}
