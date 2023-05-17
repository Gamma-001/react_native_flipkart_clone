import { useContext } from 'react';
import { View, Text } from 'react-native';

import { LanguageContext } from '../../../../contexts';
import { formatCurrency } from '../../../../utils';

import styles from './CartTotal.style';

interface CartTotalProps {
    items: number,
    price: {
        base: number,
        discount: number
    }
};
export default function CartTotal(props: CartTotalProps): JSX.Element {
    const LANG = useContext(LanguageContext);

    return (
    <View style = { styles.billContainer }>
        <Text style = { styles.priceDetailsText }>{ LANG.PRICE_DETAILS }</Text>
        <View style = { styles.billItem }>
            <Text style = { styles.billItemText }>{ `${LANG.PRICE} (${props.items} ${props.items == 1 ? LANG.ITEM.SINGULAR : LANG.ITEM.PLURAL})` }</Text>
            <Text style = { styles.billItemText }>{ formatCurrency(props.price.base) }</Text>
        </View>
        <View style = { styles.billItem }>
            <Text style = { styles.billItemText }>{ LANG.DISCOUNT }</Text>
            <Text style = {[ styles.billItemText, styles.highlightedText ]}>{ `${props.price.discount ? '-' : ''}${formatCurrency(props.price.discount)}` }</Text>
        </View>
        <View style = { styles.billItem }>
            <Text style = { styles.billItemText }>{ LANG.DELIVERY_CHARGES }</Text>
            <Text style = {[ styles.billItemText, styles.highlightedText ]}>{ LANG.FREE_DELIVERY }</Text>
        </View>
        <View style = { styles.totalAmount }>
            <Text style = { styles.totalAmountText }>{ LANG.TOTAL_AMOUNT }</Text>
            <Text style = { styles.billItemText }>{ formatCurrency(props.price.base - props.price.discount) }</Text>
        </View>
        <Text style = {[ styles.savingsText, styles.highlightedText ]}>{
            LANG.SAVE_AMOUNT(formatCurrency(props.price.discount)) 
        }</Text>
        <Text></Text>
    </View>
    );
}