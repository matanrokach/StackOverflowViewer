import React from "react"
import { UserDetails } from "../../../../components"

interface Props {
	details: Partial<IQuestionOwner> | Partial<IUser>;
}

export const Details = ({details}: Props) => {

	return (
		(Object.keys(details).length && (
			<UserDetails
				{...{
					displayName: details.display_name,
					profileImage: details.profile_image,
					acceptRate: details.accept_rate,
					reputation: details.reputation,
				}}
			/>
		)) ||
			null
	);
}