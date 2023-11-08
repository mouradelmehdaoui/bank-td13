// validation.ts

export function userInfosCheck(firstName: string, lastName: string): boolean {
	const userRegex = /^[a-zA-Z ]+$/;
	return userRegex.test(firstName) && userRegex.test(lastName);
  }
  
  export function usernameCheck(username: string): boolean {
	const userRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return userRegex.test(username);
  }
  