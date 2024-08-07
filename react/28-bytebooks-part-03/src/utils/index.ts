import { ErrorInfo } from 'react';

export async function resolvePromise<T>(promise: Promise<T>): Promise<T> {
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	return await promise;
}

type ErrorLogFunction = (error: Error, errorInfo?: ErrorInfo) => void;

export const errorLog: ErrorLogFunction = (error, errorInfo) => {
	console.error('Erro capturado: ', error);

	if (errorInfo) {
		console.error('Informações adicionais: ', errorInfo);
	}
};