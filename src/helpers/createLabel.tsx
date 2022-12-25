import Link from 'next/link';

export const createLabel = (name: string, href: string): JSX.Element => {
	return (
		<Link href={href} key={href}>
			{name}
		</Link>
	);
};
