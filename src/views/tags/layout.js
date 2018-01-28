import { h } from 'preact';
import Header from './header';
import Card from './card';

export default function (props) {
  return (
    <div id="app">
			<main id="content">
        <Card>
				  { props.children }
        </Card>
			</main>
		</div>
	);
}
