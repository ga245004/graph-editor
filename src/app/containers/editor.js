import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {Controlled as CodeMirror} from 'react-codemirror2'
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux'
import SplitPane from 'react-split-pane';
import {updateCode} from '../redux/actions'

const Editor = ({code, updateCode}) => {
    return (
        <Paper
            elevation={1}
            style={{
            height: 500,
            position: 'relative'
        }}>
            <SplitPane
                split="horizontal"
                defaultSize={'50%'}
                style={{
                margin: 5
            }}>
                <ReactMarkdown source={code}/>
                <div>
                    <CodeMirror
                        value={code}
                        options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true
                    }}
                        onBeforeChange={(editor, data, value) => {
                        updateCode(value);
                    }}
                        onChange={(editor, data, value) => {}}/>
                </div>
            </SplitPane>
        </Paper>
    )
}

const mapStateToProps = ({updateCode}) => ({code: updateCode.code})

const mapDispatchToProps = dispatch => ({
    updateCode: code => dispatch(updateCode(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor);