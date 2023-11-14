import { Dispatch } from '@reduxjs/toolkit'
import { setUserInfos, editUser } from '../treatments/services/authentication.service'
import axios from 'axios'
import { profileURL } from '../environments/urls'

// Je crée un middleware qui va gérer les changements de nom et prenom et stopper le mode edition
export const editUserMiddleware = async (dispatch: Dispatch, firstName: string, lastName: string) => {
	const actualToken = localStorage.getItem('token')

	dispatch(
		setUserInfos({
			firstName: firstName,
			lastName: lastName,
		})
	)

	try {
		// Je mets à jour le nom et le prenom via un un axios PUT
		const editUserResponse = await axios.put(
			profileURL,
			{
				firstName: firstName,
				lastName: lastName,
			},
			{ headers: { Authorization: `Bearer ${actualToken}` } }
		)
		console.log('réponse API modif user:', editUserResponse)
		dispatch(editUser({ editionMode: false }))
	} catch (error) {
		console.log(error)
	}
}