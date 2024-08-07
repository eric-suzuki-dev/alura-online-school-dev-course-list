export async function resolvePromise<T>(promise: Promise<T>): Promise<T> {
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	return await promise;
}
