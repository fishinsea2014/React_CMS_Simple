import React, {Component} from 'react';
import {Editor} from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Table} from 'antd';

class MyEditor extends Component{
    constructor(props){
        super(props);
        this.state={
            editorState:'',
            editorContent: ''
        }
    }

    onEditorStateChange = (editorState) =>{
        console.log(editorState);
        this.setState({
            editorState:editorState
        })
    }

    render(){
        const {editorState, editorContent} = this.state;
        return (
            <div>  This is Editor
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}

export default MyEditor;