import { NextPageContext } from 'next';

const isMobile = (context: NextPageContext) => {
	let clientInfo = getClientInfo(context);
	if (!clientInfo) return false;

	return /iPhone|iPad|iPod|Android/i.test(clientInfo);
};

function getClientInfo(context: NextPageContext) {
	return context.req?.headers['user-agent'];
}

export default isMobile;
