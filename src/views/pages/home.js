import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import Contact from './forms/contact'

const getForm = (name, props) => ({
	contact: <Contact {...props} />
}[name])

export default function (props) {
	return (
		<div className="page page__home">
			{getForm(props.form, props)}
		</div>
	);
}
