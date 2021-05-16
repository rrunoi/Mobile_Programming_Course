import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

function TabPage(props) {
    return (
        <View style={{ height: 525, width: 365 }}>
            <WebView source={{ uri: `http://www.songsterr.com/a/wa/song?id=${props.route.params}` }} />
        </View>
    );
};

export default TabPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(72,191,250,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});