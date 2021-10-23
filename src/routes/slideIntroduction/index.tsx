import React, { useContext, useCallback } from 'react'
import { ThemeContext } from 'styled-components/native'

import { useAuth } from '../../contexts/auth'

import Text from '../../components/Text'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Container, Column, ImageBackground, Icon, Button, ButtonIcon } from './styles'

interface Slide {
  key: number,
  title: string;
  text: string;
  image: string;
  backgroundColor: string;
}

const slides: Slide[] = [
	{
		key: 1,
		title: '01.',
		text: 'Lorem Ipsum',
		image: require('../../../assets/icon.png'),
		backgroundColor: '#5659EB'
	},
	{
		key: 2,
		title: '02.',
		text: 'Lorem Ipsum',
		image: require('../../../assets/icon.png'),
		backgroundColor: '#F25040'
	}
]

const slideIntroduction: React.FC = () => {
	const theme = useContext(ThemeContext).colors
	const { finishedTheIntro } = useAuth()

	const Controllers = useCallback(() => {
		return (
			<Button>
				{/* <ButtonIcon source={require('../../assets/images/icons/advance.png')} /> */}
			</Button>
		)
	},
	[])

	return (
		<AppIntroSlider
			data={slides}
			onDone={finishedTheIntro}
			renderDoneButton={Controllers}
			renderNextButton={Controllers}
			renderItem={(props: { item: Slide }) => {
				const item = props.item

				return (
					<Container>
						<Column bgColor={item.backgroundColor}>
							<ImageBackground
								resizeMode="center"
								source={require('../../../assets/splash.png')}
							> 
								<Icon source={item.image} /> 
							</ImageBackground>
						</Column>
						<Column>
							<Text
								size={40}
								color={theme.themeColors.text.normal}
								style={{ marginTop: 20 }}
							>{item.title}</Text>
							<Text
								size={20}
								color={theme.themeColors.text.normal}
								weight='bold'
								style={{ width: '80%', marginTop: 20 }}
							>{item.text}</Text>
						</Column>
					</Container>
				)
			}}

			activeDotStyle={{ backgroundColor: theme.themeColors.primary.normal }}
			dotStyle={{ backgroundColor: theme.themeColors.primary.lighter }}
		/>
	)
}

export default slideIntroduction
