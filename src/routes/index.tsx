import React, { useContext } from 'react'

import { View, ActivityIndicator, ActivityIndicatorBase } from 'react-native'

import { ThemeContext } from 'styled-components/native'

import { Host } from 'react-native-portalize'

import { useAuth } from '../contexts/auth'

import SlideIntroduction from './slideIntroduction'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const routes: React.FC = () => {
	const theme = useContext(ThemeContext).colors

	const { signed, loading, firstTimeInTheAPP } = useAuth()

	console.log('===>>>', firstTimeInTheAPP)

	if (firstTimeInTheAPP) {

		return <View />
		// return <SlideIntroduction />
	}

	if (loading) {

		return (

			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.themeColors.background.normal }}>
				<ActivityIndicator
					size="large" 
					color={theme.themeColors.primary.normal}
				/>
			</View>
		)
	}

	return (
		<Host>
			{signed ? <AppRoutes /> : <AuthRoutes />}
		</Host>
	)
}



export default routes