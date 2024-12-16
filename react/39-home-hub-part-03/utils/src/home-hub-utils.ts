export type AuthInfo = {
	email: string;
	firstName?: string;
	lastName?: string;
};

export const loginFunction = (email: AuthInfo['email']) => {
	const authId = email.replace('@', '').replace('.', '').codePointAt(0);
	localStorage.setItem('auth', JSON.stringify({ email: email }));
	location.replace(`/dashboard/${authId}/`);
};

export const logoutFunction = () => {
	return location.replace('/');
};

export const checkIsAuthenticated = () => {
	const auth = localStorage.getItem('auth');
	if (!auth) {
		return { authInfo: undefined, isAuthenticated: false };
	}
	const authObj: AuthInfo = JSON.parse(auth);
	return { authInfo: authObj, isAuthenticated: true };
};