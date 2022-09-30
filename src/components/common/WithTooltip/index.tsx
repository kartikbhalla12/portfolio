import { FC } from 'react';

import styles from './withTooltip.module.scss';

type ComponentPropsType<T> = T & JSX.IntrinsicAttributes;
type ComponentType<T> = FC<ComponentPropsType<T>>;

function withToolTip<T>(
	Component: ComponentType<T>,
	tooltipTitle: string
): ComponentType<T> {
	const NewComponent = (props: ComponentPropsType<T>) => (
		<div className={styles.withToolTip}>
			<div className={styles.toolTip}>{tooltipTitle}</div>
			<Component {...props} />
		</div>
	);

	return NewComponent;
}

export default withToolTip;
