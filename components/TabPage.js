/* import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function TabPage(route) {
    const { tabs } = route.params;

    return (
        <HTML source={tabs} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(72,191,250,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); */

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import itemId from './Home';

// ...
export default class TabPage extends Component {
    render() {
        return <WebView source={{ uri: `http://www.songsterr.com/a/wa/song?id=${itemId}` }} />;
    }
}