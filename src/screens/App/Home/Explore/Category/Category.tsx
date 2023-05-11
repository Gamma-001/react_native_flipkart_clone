import { useState } from 'react';
import { View, Image, Text, Pressable, Dimensions, ImageSourcePropType } from 'react-native';

import { NAVIGATOR } from '../../../../../shared/constants';
import parentStyles from '../Explore.style';
import styles from './Category.style';
import { BasicScreenProps } from '../../../../../@types/commons';

type CategoryProp = BasicScreenProps & {
    source: ImageSourcePropType,
    name: string,
    tag: string
};
export default function Category({ source, name, tag, navigation }: CategoryProp): JSX.Element {
    const [image] = useState(Image.resolveAssetSource(source))
    const imageWidth = (Dimensions.get('window').width - (parentStyles.categoryContainer.padding || 0) * 2) / 4 - 2 * (styles.category.padding || 0);

    return (
        <Pressable 
            style = { styles.category }
            onPress = {() => {
                navigation?.navigate(NAVIGATOR.APP, {
                    screen: NAVIGATOR.HOME, params: {
                        screen: NAVIGATOR.PRODUCTS, params: {
                            tags: [ tag ]
                        }
                    }
                })
            }}
        >
            <View style = { styles.categoryImage }>
                <Image 
                    style = {{ width: imageWidth, height: imageWidth * image.height / image.width }}
                    source = { source }
                />
            </View>
            <View style = { styles.categoryTextOuter }>
                <Text style = {[ styles.categoryText, { maxWidth: imageWidth - (styles.category.padding || 0) * 2 } ]}>{ name }</Text>
            </View>
        </Pressable>
    );
}