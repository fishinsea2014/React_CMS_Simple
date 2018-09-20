import React, {Component} from 'react';
import {Editor} from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import draftToMarkDown from 'draftjs-to-markdown';
import {Card} from 'antd';
import './index.scss';

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
        this.setState({ //This is default usage
            editorState:editorState
        })
    }

    onContentChange = (editorContent) =>{
        console.log("Change content");
        this.setState({
            editorContent:editorContent
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
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    onContentStateChange={this.onContentChange}
                />
                <Card title="Content To HTML" bordered={true}>
                    <pre>{draftToHtml(editorContent)}</pre>
                </Card>
                <Card title="Content To Markdown" bordered={true}>
                    <pre>{draftToMarkDown(editorContent)}</pre>
                </Card>

                <Card title="Content To JSON" bordered={true}>
                    <pre>{JSON.stringify(editorContent)}</pre>
                </Card>
            </div>
        );
    }
}

export default MyEditor;