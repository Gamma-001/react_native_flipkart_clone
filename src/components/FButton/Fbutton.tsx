import { useState } from 'react';
import { Pressable } from 'react-native';

type FButtonProps = {
    style?: any
    onPress?: Function,
    children?: JSX.Element
};
export function FButtonOpacity({ style, onPress, children }: FButtonProps): JSX.Element {
    const [opacity, setOpacity] = useState(1);
    
    return (
        <Pressable
            style = {[ style, { opacity: opacity } ]}
            onPressIn = {() => setOpacity(0.7)}
            onPressOut = {() => {
                setOpacity(1);
                onPress && onPress();
            }}
        >
            { children }
        </Pressable>
    )
}

export function FButtonBGHighlight({ style, onPress, children, highlightColor }: FButtonProps & { highlightColor: string }): JSX.Element {
    const [bgColor, setBgColor] = useState(style?.backgroundColor);

    return (
        <Pressable
            style = {[ style, { backgroundColor: bgColor } ]}
            onPressIn = {() => setBgColor(highlightColor)}
            onPressOut = {() => {
                setBgColor(style?.backgroundColor);
                onPress && onPress();
            }}
        >
            { children }
        </Pressable>
    )
}