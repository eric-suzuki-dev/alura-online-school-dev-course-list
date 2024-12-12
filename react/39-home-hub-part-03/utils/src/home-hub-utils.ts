export const loginFunction = (email: string) => {
	const authId = email.replace('@', '').replace('.', '').codePointAt(0);
	localStorage.setItem('auth', JSON.stringify({ email: email }));
	return location.replace(`/dashboard/${authId}/`);
};

export const checkIsAuthenticated = (): {
	isAuthenticated: boolean;
	authInfo: undefined | { email: string; firstName?: string; lastName?: string };
} => {
	const auth = localStorage.getItem('auth');
	if (!auth) {
		return { isAuthenticated: false, authInfo: undefined };
	}
	return { isAuthenticated: true, authInfo: JSON.parse(auth) };
};