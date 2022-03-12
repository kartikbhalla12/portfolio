import { FC } from 'react';

import styles from './withTooltip.module.scss';

function withToolTip<T>(Component: FC<T>, tooltipTitle: string): FC<T> {
	const NewComponent = (props: T) => (
		<div className={styles.withToolTip}>
			<div className={styles.toolTip}>{tooltipTitle}</div>
			<Component {...props} />
		</div>
	);

	return NewComponent;
}

export default withToolTip;
