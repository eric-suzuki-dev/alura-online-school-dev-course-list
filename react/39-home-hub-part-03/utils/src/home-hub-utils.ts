type FormValues = {
	email: string;
	password: string;
};

export const loginFunction = (data: FormValues) => {
	const authId = data.email.replace('@', '').replace('.', '').codePointAt(0);
	localStorage.setItem('auth', JSON.stringify(data));
	location.replace(`/dashboard/${authId}/`);
};